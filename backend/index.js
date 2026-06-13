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

app.use('/api/auth', authRoutes)
app.use('/api/send-email', sendEmailRoutes)
app.use('/api/admin', adminRoutes)
app.post('/api/enroll', require('./routes/enroll'))
app.post('/api/verify-code', require('./routes/verify-code'))
app.post('/api/send-whatsapp', require('./routes/send-whatsapp'))
app.post('/api/checkin', require('./routes/checkin'))
app.post('/api/contact', require('./routes/contact'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/progress', require('./routes/progress'))

// Init DB then seed admin, then start
initDB().then(() => {
  const seedAdmin = require('./routes/auth').seedAdmin
  if (seedAdmin) return seedAdmin()
}).then(() => {
  app.use('/api/auth', require('./routes/auth'))
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`)
  })
})
