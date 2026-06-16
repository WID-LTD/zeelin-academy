const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255),
        full_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        role VARCHAR(20) DEFAULT 'student',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        selected_module VARCHAR(100),
        enrollment_type VARCHAR(20),
        experience VARCHAR(20),
        goals TEXT,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS verified_enrollments (
        id SERIAL PRIMARY KEY,
        enrollment_id INTEGER REFERENCES enrollments(id),
        user_id INTEGER REFERENCES users(id),
        email VARCHAR(255) NOT NULL,
        verified_at TIMESTAMP DEFAULT NOW()
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pathway_finder (
        id SERIAL PRIMARY KEY,
        name TEXT, email TEXT, phone TEXT, role TEXT, enrolled TEXT,
        q1 TEXT, q2 TEXT, q3 TEXT, q4 TEXT,
        q5 TEXT, q6 TEXT, q7 TEXT, q8 TEXT, q9 TEXT,
        pathway_result TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('Database tables initialized')
  } catch (err) {
    console.error('DB init error:', err.message)
  }
}

module.exports = { pool, initDB }
