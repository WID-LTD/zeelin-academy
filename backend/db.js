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
        package_slug VARCHAR(100),
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
    await pool.query(`
      CREATE TABLE IF NOT EXISTS packages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        currency VARCHAR(3) DEFAULT 'GBP',
        description TEXT,
        features JSONB,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS package_enrollments (
        id SERIAL PRIMARY KEY,
        enrollment_id INTEGER REFERENCES enrollments(id),
        package_slug VARCHAR(100) NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        currency VARCHAR(3) DEFAULT 'GBP',
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id SERIAL PRIMARY KEY,
        enrollment_id INTEGER REFERENCES enrollments(id),
        package_enrollment_id INTEGER REFERENCES package_enrollments(id),
        amount DECIMAL(10,2) NOT NULL,
        currency VARCHAR(3) DEFAULT 'GBP',
        stripe_session_id VARCHAR(255),
        stripe_payment_intent VARCHAR(255),
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    await seedPackages()
    console.log('Database tables initialized')
  } catch (err) {
    console.error('DB init error:', err.message)
  }
}

async function seedPackages() {
  const existing = await pool.query('SELECT COUNT(*) FROM packages')
  if (parseInt(existing.rows[0].count) > 0) return

  await pool.query(`
    INSERT INTO packages (name, slug, price, description, features) VALUES
    ('Module-by-Module Exam Prep', 'single-module', 100.00, 'Focus on one BCS exam at a time with 6 weeks of guided preparation.',
     '["6 weeks duration","Focus on one exam","Personalized support","Mon-Fri live training","Saturday Success Lab","Mock quizzes","LMS access"]'),
    ('Complete Diploma Exam Prep Bundle', 'complete-bundle', 400.00, 'Full BCS International Diploma preparation with all modules, cohorts, and support.',
     '["24-week standard route","Starter & Hybrid cohorts","Complete diploma syllabus","Group mentorship","All single-module features","Oral exam support","Exam booking guidance"]'),
    ('Fast-Track Diploma Exam Prep', 'fast-track', 400.00, 'Intensive 6-week route for experienced learners covering the full diploma.',
     '["6-week intensive route","For experienced learners","Accelerated schedule","Mon-Fri live training","Saturday Success Lab","Exam readiness checks","Coaching call"]')
  `)
}

module.exports = { pool, initDB }
