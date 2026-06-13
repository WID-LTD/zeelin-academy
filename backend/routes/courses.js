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

// GET /api/courses - list all published courses (public)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' })
  }
})

// GET /api/courses/:id - get single course with lessons
router.get('/:id', async (req, res) => {
  try {
    const course = await pool.query('SELECT * FROM courses WHERE id = $1', [req.params.id])
    if (course.rows.length === 0) return res.status(404).json({ error: 'Course not found' })
    const lessons = await pool.query('SELECT * FROM lessons WHERE course_id = $1 ORDER BY order_index', [req.params.id])
    res.json({ ...course.rows[0], lessons: lessons.rows })
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course' })
  }
})

// POST /api/courses - create course (admin)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { title, description, category, duration, level, instructor, image_url, price } = req.body
    const result = await pool.query(
      'INSERT INTO courses (title, description, category, duration, level, instructor, image_url, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, description, category, duration, level, instructor, image_url, price || 0]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to create course' })
  }
})

// PUT /api/courses/:id - update course (admin)
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const { title, description, category, duration, level, instructor, image_url, price, is_published } = req.body
    const result = await pool.query(
      'UPDATE courses SET title=$1, description=$2, category=$3, duration=$4, level=$5, instructor=$6, image_url=$7, price=$8, is_published=$9, updated_at=NOW() WHERE id=$10 RETURNING *',
      [title, description, category, duration, level, instructor, image_url, price, is_published, req.params.id]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to update course' })
  }
})

// DELETE /api/courses/:id - delete course (admin)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM courses WHERE id = $1', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete course' })
  }
})

// POST /api/courses/:id/lessons - add lesson to course (admin)
router.post('/:id/lessons', verifyAdmin, async (req, res) => {
  try {
    const { title, description, video_url, duration, order_index, content_type, is_free } = req.body
    const result = await pool.query(
      'INSERT INTO lessons (course_id, title, description, video_url, duration, order_index, content_type, is_free) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [req.params.id, title, description, video_url, duration, order_index, content_type, is_free || false]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to create lesson' })
  }
})

// PUT /api/courses/lessons/:id - update lesson (admin)
router.put('/lessons/:id', verifyAdmin, async (req, res) => {
  try {
    const { title, description, video_url, duration, order_index, content_type, is_free } = req.body
    const result = await pool.query(
      'UPDATE lessons SET title=$1, description=$2, video_url=$3, duration=$4, order_index=$5, content_type=$6, is_free=$7 WHERE id=$8 RETURNING *',
      [title, description, video_url, duration, order_index, content_type, is_free, req.params.id]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to update lesson' })
  }
})

// DELETE /api/courses/lessons/:id - delete lesson (admin)
router.delete('/lessons/:id', verifyAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM lessons WHERE id = $1', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete lesson' })
  }
})

module.exports = router
