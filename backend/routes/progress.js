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

// Save lesson progress
router.post('/', verifyToken, async (req, res) => {
  try {
    const { module_id, lesson_id, completed, progress } = req.body

    if (!module_id || !lesson_id) {
      return res.status(400).json({ error: 'module_id and lesson_id are required' })
    }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS lesson_progress (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        module_id VARCHAR(100) NOT NULL,
        lesson_id VARCHAR(100) NOT NULL,
        completed BOOLEAN DEFAULT false,
        progress INTEGER DEFAULT 0,
        updated_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id, module_id, lesson_id)
      )
    `)

    await pool.query(
      `INSERT INTO lesson_progress (user_id, module_id, lesson_id, completed, progress)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, module_id, lesson_id)
       DO UPDATE SET completed = COALESCE($4, lesson_progress.completed),
                     progress = COALESCE($5, lesson_progress.progress),
                     updated_at = NOW()`,
      [req.user.id, module_id, lesson_id, completed ?? false, progress ?? 0]
    )

    res.json({ success: true })
  } catch (err) {
    console.error('Progress save error:', err)
    res.status(500).json({ error: 'Failed to save progress' })
  }
})

// Get progress for a module
router.get('/:moduleId', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT module_id, lesson_id, completed, progress, updated_at
       FROM lesson_progress
       WHERE user_id = $1 AND module_id = $2`,
      [req.user.id, req.params.moduleId]
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

// Get all progress for user
router.get('/', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT module_id, COUNT(*) FILTER (WHERE completed = true) as completed_lessons,
              COUNT(*) as total_lessons
       FROM lesson_progress
       WHERE user_id = $1
       GROUP BY module_id`,
      [req.user.id]
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

module.exports = router
