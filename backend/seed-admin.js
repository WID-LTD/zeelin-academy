require('dotenv').config({ path: require('path').join(__dirname, '../.env.local') })
const { Pool } = require('pg')
const bcrypt = require('bcryptjs')

const url = process.env.DATABASE_URL
console.log('URL prefix:', url ? url.substring(0, 35) + '...' : 'MISSING')

const pool = new Pool({
  connectionString: url,
  ssl: false
})

;(async () => {
  try {
    await pool.query('SELECT 1')
    console.log('DB connected')
  } catch (e) {
    console.error('DB connect error message:', e.message)
    console.error('DB connect error code:', e.code)
    console.error('DB connect error stack first line:', (e.stack || '').split('\n')[1])
    await pool.end()
    process.exit(1)
  }
  try {
    const email = process.env.ADMIN_EMAIL || 'ikewisdom92@gmail.com'
    const password = process.env.ADMIN_PASSWORD || 'admin'
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (existing.rows.length === 0) {
      const hashed = await bcrypt.hash(password, 10)
      await pool.query('INSERT INTO users (email, password, full_name, phone, role) VALUES ($1, $2, $3, $4, $5)', [email, hashed, 'Admin', '', 'admin'])
      console.log('Admin user seeded successfully')
    } else {
      console.log('Admin user already exists')
    }
  } catch (e) {
    console.error('Seed error:', e.message)
  }
  await pool.end()
  process.exit(0)
})()
