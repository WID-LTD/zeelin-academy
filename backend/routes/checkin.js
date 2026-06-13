const { pool } = require('../db')

module.exports = async (req, res) => {
  try {
    const { email, moduleId, feedback } = req.body

    if (!email || !moduleId) {
      return res.status(400).json({ error: 'Email and module ID are required' })
    }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS checkins (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        module_id VARCHAR(100) NOT NULL,
        feedback TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)

    await pool.query(
      `INSERT INTO checkins (email, module_id, feedback) VALUES ($1, $2, $3)`,
      [email, moduleId, feedback || null]
    )

    res.json({ success: true, message: 'Check-in recorded successfully' })
  } catch (error) {
    console.error('Check-in error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
