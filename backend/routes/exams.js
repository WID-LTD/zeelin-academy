const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { pool } = require('../db')

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'zeelin-academy-jwt-secret-2026'

function verifyToken(req, res, next) {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ error: 'No token' })
  try {
    const decoded = jwt.verify(header.split(' ')[1], JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

function verifyAdmin(req, res, next) {
  const token = req.cookies?.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null)
  if (!token) return res.status(401).json({ error: 'No token' })
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// GET /api/exams/questions - get questions for a module/exam_type
router.get('/questions', async (req, res) => {
  try {
    const { module_id, exam_type } = req.query
    let query = 'SELECT id, module_id, question, options, explanation, exam_type FROM exam_questions'
    const conditions = []
    const params = []
    if (module_id) { conditions.push('module_id = $' + (params.length + 1)); params.push(module_id) }
    if (exam_type) { conditions.push('exam_type = $' + (params.length + 1)); params.push(exam_type) }
    if (conditions.length > 0) query += ' WHERE ' + conditions.join(' AND ')
    query += ' ORDER BY id'
    const result = await pool.query(query, params)
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' })
  }
})

// POST /api/exams/questions - create question (admin)
router.post('/questions', verifyAdmin, async (req, res) => {
  try {
    const { module_id, question, options, correct_answer, explanation, exam_type } = req.body
    const result = await pool.query(
      'INSERT INTO exam_questions (module_id, question, options, correct_answer, explanation, exam_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [module_id, question, JSON.stringify(options), correct_answer, explanation, exam_type || 'daily']
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to create question' })
  }
})

// PUT /api/exams/questions/:id - update question (admin)
router.put('/questions/:id', verifyAdmin, async (req, res) => {
  try {
    const { module_id, question, options, correct_answer, explanation, exam_type } = req.body
    const result = await pool.query(
      'UPDATE exam_questions SET module_id = $1, question = $2, options = $3, correct_answer = $4, explanation = $5, exam_type = $6 WHERE id = $7 RETURNING *',
      [module_id, question, JSON.stringify(options), correct_answer, explanation, exam_type || 'daily', req.params.id]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Failed to update question' })
  }
})

// DELETE /api/exams/questions/:id (admin)
router.delete('/questions/:id', verifyAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM exam_questions WHERE id = $1', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete question' })
  }
})

// POST /api/exams/submit - submit exam answers
router.post('/submit', verifyToken, async (req, res) => {
  try {
    const { module_id, exam_type, answers } = req.body
    const questions = await pool.query(
      'SELECT id, correct_answer FROM exam_questions WHERE module_id = $1 AND exam_type = $2',
      [module_id, exam_type]
    )
    let score = 0
    const total = questions.rows.length
    const results = questions.rows.map(q => {
      const isCorrect = answers[q.id] === q.correct_answer
      if (isCorrect) score++
      return { question_id: q.id, correct: isCorrect }
    })
    const passed = score / total >= 0.6
    await pool.query(
      'INSERT INTO exam_results (user_id, module_id, exam_type, score, total, answers, passed) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [req.user.id, module_id, exam_type, score, total, JSON.stringify(results), passed]
    )
    res.json({ score, total, passed, results })
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit exam' })
  }
})

// GET /api/exams/results - get user's exam results
router.get('/results', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM exam_results WHERE user_id = $1 ORDER BY completed_at DESC',
      [req.user.id]
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch results' })
  }
})

module.exports = router
