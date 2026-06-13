const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env.local') })
const express = require('express')
const cors = require('cors')
const { initDB } = require('./db')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = process.env.BACKEND_PORT || 3030

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3030',
  'https://zeelin-academy.onrender.com',
  'https://zeelin-academy.vercel.app'
]

app.use(cors({ origin: allowedOrigins, credentials: true }))
app.use(express.json())
app.use(cookieParser())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' }
})
app.use(limiter)
// In-memory store for verification codes
globalThis.__verificationStore = {}

// Routes
const authRoutes = require('./routes/auth')
const sendEmailRoutes = require('./routes/send-email')
const adminRoutes = require('./routes/admin')
const coursesRoutes = require('./routes/courses')
const announcementsRoutes = require('./routes/announcements')
const examsRoutes = require('./routes/exams')
const dashboardRoutes = require('./routes/dashboard')
const resourcesRoutes = require('./routes/resources')

app.use('/api/auth', authRoutes)
app.use('/api/send-email', sendEmailRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/courses', coursesRoutes)
app.use('/api/announcements', announcementsRoutes)
app.use('/api/exams', examsRoutes)
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/resources', resourcesRoutes)
app.post('/api/enroll', require('./routes/enroll'))
app.post('/api/verify-code', require('./routes/verify-code'))
app.post('/api/send-whatsapp', require('./routes/send-whatsapp'))
app.post('/api/checkin', require('./routes/checkin'))
app.post('/api/contact', require('./routes/contact'))
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({ error: 'Email required' })
    const { pool } = require('./db')
    await pool.query('CREATE TABLE IF NOT EXISTS newsletter_subscribers (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, created_at TIMESTAMP DEFAULT NOW())')
    await pool.query('INSERT INTO newsletter_subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING', [email])
    res.json({ success: true, message: 'Subscribed successfully' })
  } catch (e) {
    res.status(500).json({ error: 'Failed to subscribe' })
  }
})
app.use('/api/profile', require('./routes/profile'))
app.use('/api/progress', require('./routes/progress'))

// Init DB then seed admin, then start
initDB().then(() => {
  const seedAdmin = require('./routes/auth').seedAdmin
  if (seedAdmin) return seedAdmin()
}).then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on http://localhost:${PORT}`)
  })
})
