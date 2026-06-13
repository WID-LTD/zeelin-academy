const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { pool } = require('../db')

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'zeelin-academy-jwt-secret-2026'

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

function verifyAdmin(req, res, next) {
  const token = req.cookies?.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null)
  if (!token) return res.status(401).json({ error: 'No token' })
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// GET /api/announcements - list published announcements
router.get('/', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM announcements WHERE is_published = true ORDER BY created_at DESC")
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch announcements' })
  }
})

// GET /api/announcements/all - list all (admin)
router.get('/all', verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM announcements ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch announcements' })
  }
})

// POST /api/announcements - create (admin)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { title, content, type } = req.body
    const result = await pool.query(
      'INSERT INTO announcements (title, content, type) VALUES ($1, $2, $3) RETURNING *',
      [title, content, type || 'general']
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to create announcement' })
  }
})

// PUT /api/announcements/:id - update (admin)
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const { title, content, type, is_published } = req.body
    const result = await pool.query(
      'UPDATE announcements SET title=$1, content=$2, type=$3, is_published=$4, updated_at=NOW() WHERE id=$5 RETURNING *',
      [title, content, type, is_published, req.params.id]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to update announcement' })
  }
})

// DELETE /api/announcements/:id (admin)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM announcements WHERE id = $1', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete announcement' })
  }
})

module.exports = router
