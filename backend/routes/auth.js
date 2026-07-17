const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { pool } = require('../db')

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'zeelin-academy-jwt-secret-2026'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'ikewisdom92@gmail.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'

// Seed admin on first run
async function seedAdmin() {
  try {
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [ADMIN_EMAIL])
    if (existing.rows.length === 0) {
      const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10)
      await pool.query(
        'INSERT INTO users (email, password, full_name, phone, role) VALUES ($1, $2, $3, $4, $5)',
        [ADMIN_EMAIL, hashed, 'Admin', '', 'admin']
      )
      console.log('Admin user seeded')
    }
  } catch (err) {
    console.error('Seed admin error:', err.message)
  }
}
// Admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    const user = result.rows[0]
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role } })
  } catch (err) {
    res.status(500).json({ error: 'Login failed' })
  }
})

// User registration (for student accounts)
router.post('/register', async (req, res) => {
  try {
    const { email, password, full_name, phone } = req.body
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (existing.rows.length > 0) return res.status(400).json({ error: 'User already exists' })

    const hashed = await bcrypt.hash(password, 10)
    const result = await pool.query(
      'INSERT INTO users (email, password, full_name, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, full_name, role',
      [email, hashed, full_name, phone, 'student']
    )
    res.json({ user: result.rows[0] })
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' })
  }
})

// Forgot password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (result.rows.length === 0) return res.status(404).json({ error: 'Email not found' })

    // Generate reset token
    const resetToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' })
    res.json({ message: 'Reset link sent', resetToken })
  } catch (err) {
    res.status(500).json({ error: 'Failed' })
  }
})

// Verify token middleware
function verifyToken(req, res, next) {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ error: 'No token' })
  try {
    const decoded = jwt.verify(header.split(' ')[1], JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Get admin dashboard stats
router.get('/admin/stats', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  try {
    const total = await pool.query('SELECT COUNT(*) FROM enrollments')
    const free = await pool.query("SELECT COUNT(*) FROM enrollments WHERE enrollment_type = 'free'")
    const paid = await pool.query("SELECT COUNT(*) FROM enrollments WHERE enrollment_type = 'paid'")
    const verified = await pool.query('SELECT COUNT(*) FROM verified_enrollments')
    res.json({
      total: parseInt(total.rows[0].count),
      free: parseInt(free.rows[0].count),
      paid: parseInt(paid.rows[0].count),
      verified: parseInt(verified.rows[0].count)
    })
  } catch (err) {
    res.status(500).json({ error: 'Failed' })
  }
})

// Get all enrollments (admin)
router.get('/admin/enrollments', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  try {
    const result = await pool.query('SELECT * FROM enrollments ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed' })
  }
})

// Get all users (admin)
router.get('/admin/users', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  try {
    const result = await pool.query('SELECT id, email, full_name, phone, role, created_at FROM users ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed' })
  }
})

// Change user password (admin)
router.post('/admin/change-password', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  try {
    const { user_id, password } = req.body
    const hashed = await bcrypt.hash(password, 10)
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, user_id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed' })
  }
})

// Get package enrollments + payment stats (admin)
router.get('/admin/package-enrollments', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  try {
    const result = await pool.query(`
      SELECT e.id, e.full_name, e.email, e.phone, e.package_slug, e.status as enrollment_status,
             e.created_at, p.amount, p.currency, p.status as payment_status, p.stripe_session_id,
             pk.name as package_name, pk.price as package_price
      FROM enrollments e
      LEFT JOIN payments p ON p.enrollment_id = e.id
      LEFT JOIN packages pk ON pk.slug = e.package_slug
      WHERE e.package_slug IS NOT NULL
      ORDER BY e.created_at DESC
    `)
    const stats = await pool.query(`
      SELECT
        COUNT(DISTINCT e.id) as total,
        COALESCE(SUM(p.amount) FILTER (WHERE p.status = 'completed'), 0) as revenue,
        COUNT(DISTINCT e.id) FILTER (WHERE e.status = 'paid') as paid_count,
        COUNT(DISTINCT e.id) FILTER (WHERE e.status = 'pending') as pending_count
      FROM enrollments e
      LEFT JOIN payments p ON p.enrollment_id = e.id
      WHERE e.package_slug IS NOT NULL
    `)
    res.json({
      enrollments: result.rows,
      stats: {
        total: parseInt(stats.rows[0].total),
        revenue: parseFloat(stats.rows[0].revenue),
        paid: parseInt(stats.rows[0].paid_count),
        pending: parseInt(stats.rows[0].pending_count),
      }
    })
  } catch (err) {
    console.error('Package enrollments error:', err)
    res.status(500).json({ error: 'Failed' })
  }
})

// Generate credentials for a verified enrollment (admin)
router.post('/admin/generate-credentials', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  try {
    const { enrollment_id, email, full_name } = req.body
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (existing.rows.length > 0) return res.json({ message: 'User already has credentials', user: existing.rows[0] })

    const genPassword = Math.random().toString(36).slice(-8)
    const hashed = await bcrypt.hash(genPassword, 10)
    const result = await pool.query(
      'INSERT INTO users (email, password, full_name, role) VALUES ($1, $2, $3, $4) RETURNING id, email, full_name',
      [email, hashed, full_name, 'student']
    )
    res.json({ user: result.rows[0], generatedPassword: genPassword })
  } catch (err) {
    res.status(500).json({ error: 'Failed' })
  }
})

module.exports = router
module.exports.seedAdmin = seedAdmin
