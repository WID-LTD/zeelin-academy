const { Router } = require('express')
const { pool } = require('../db')

const router = Router()

// GET /api/resources - list published resources
router.get('/', async (req, res) => {
  try {
    const { category, type } = req.query
    let query = "SELECT * FROM resources WHERE is_published = true"
    const params = []
    if (category) { query += ' AND category = $' + (params.length + 1); params.push(category) }
    if (type) { query += ' AND type = $' + (params.length + 1); params.push(type) }
    query += ' ORDER BY created_at DESC'
    const result = await pool.query(query, params)
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resources' })
  }
})

// POST /api/resources - add resource (admin)
router.post('/', async (req, res) => {
  try {
    const { title, description, url, type, category } = req.body
    const result = await pool.query(
      'INSERT INTO resources (title, description, url, type, category) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, url, type || 'pdf', category]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to add resource' })
  }
})

// DELETE /api/resources/:id (admin)
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM resources WHERE id = $1', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete resource' })
  }
})

module.exports = router
