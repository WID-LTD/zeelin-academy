const { pool } = require('../db')

module.exports = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, slug, price, currency, description, features, is_active, created_at FROM packages WHERE is_active = true ORDER BY price ASC'
    )
    res.json(result.rows)
  } catch (error) {
    console.error('Packages fetch error:', error)
    res.status(500).json({ error: 'Failed to fetch packages' })
  }
}
