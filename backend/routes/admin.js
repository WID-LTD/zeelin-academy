const express = require('express')
const router = express.Router()
const upload = require('../upload')
const jwt = require('jsonwebtoken')
const { pool } = require('../db')

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

// Middleware to verify admin token
function verifyAdmin(req, res, next) {
  const token = req.cookies?.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null)
  if (!token) return res.status(401).json({ error: 'No token provided' })
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: Admin access required' })
    }
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Upload file to Cloudflare R2 (S3)
router.post('/upload', verifyAdmin, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }
  
  const fileUrl = req.file.location
  res.json({ message: 'File uploaded successfully', url: fileUrl })
})

// Store a content link (e.g. course video link, document) into the DB
router.post('/content', verifyAdmin, async (req, res) => {
  const { title, description, url, category, content_type } = req.body
  try {
    const query = `
      INSERT INTO content (title, description, url, category, content_type, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *
    `
    const result = await pool.query(query, [title, description, url, category, content_type])
    res.json(result.rows[0])
  } catch (err) {
    console.error('Failed to insert content:', err)
    res.status(500).json({ error: 'Failed to add content to database' })
  }
})

// Get all content
router.get('/content', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM content ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch content' })
  }
})

module.exports = router
