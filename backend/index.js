require('dotenv').config({ path: '../.env.local' })
const express = require('express')
const cors = require('cors')
const { initDB } = require('./db')

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

// In-memory store for verification codes
globalThis.__verificationStore = {}

// Routes
app.post('/api/enroll', require('./routes/enroll'))
app.post('/api/verify-code', require('./routes/verify-code'))
app.post('/api/send-email', require('./routes/send-email'))
app.post('/api/send-whatsapp', require('./routes/send-whatsapp'))

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
