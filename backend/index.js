require('dotenv').config({ path: './zeelin-academy.env' })
const express = require('express')
const cors = require('cors')
const { initDB } = require('./db')

const app = express()
const PORT = process.env.BACKEND_PORT || 3031

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3030',
  'http://localhost:3031',
  'https://zeelin-academy.onrender.com',
  'https://zeelin-academy.vercel.app'
]

app.use(cors({ origin: allowedOrigins, credentials: true }))

// Stripe webhook needs raw body — mount before express.json()
app.use(require('./routes/stripe-webhook'))

app.use(express.json())

// In-memory store for verification codes
globalThis.__verificationStore = {}

// Health check / wakeup
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: Date.now() }))

// Routes
app.post('/api/enroll', require('./routes/enroll'))
app.post('/api/verify-code', require('./routes/verify-code'))
app.post('/api/send-email', require('./routes/send-email'))
app.post('/api/send-whatsapp', require('./routes/send-whatsapp'))
app.post('/api/pathway-finder', require('./routes/pathway-finder'))
app.post('/api/contact', require('./routes/contact'))
app.post('/api/checkin', require('./routes/checkin'))
app.get('/api/packages', require('./routes/packages'))
app.use('/api/payments', require('./routes/payments'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/progress', require('./routes/progress'))
app.use('/api/admin', require('./routes/admin'))

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
