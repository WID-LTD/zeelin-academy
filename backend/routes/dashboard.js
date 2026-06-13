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

// GET /api/dashboard - user dashboard data
router.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id

    // Courses in progress
    const inProgress = await pool.query(
      "SELECT COUNT(*) FROM student_courses WHERE user_id = $1 AND status = 'enrolled'",
      [userId]
    )

    // Completed courses
    const completed = await pool.query(
      "SELECT COUNT(*) FROM student_courses WHERE user_id = $1 AND status = 'completed'",
      [userId]
    )

    // Certificates earned
    const certs = await pool.query(
      'SELECT COUNT(*) FROM certificates WHERE user_id = $1',
      [userId]
    )

    // Enrolled courses with progress
    const enrolledCourses = await pool.query(`
      SELECT sc.*, c.title, c.description, c.image_url, c.instructor, c.duration, c.level
      FROM student_courses sc
      JOIN courses c ON sc.course_id = c.id
      WHERE sc.user_id = $1
      ORDER BY sc.enrolled_at DESC
    `, [userId])

    // Learning activity (mock data based on progress updates)
    const activity = await pool.query(`
      SELECT DATE(updated_at) as date, COUNT(*) as count
      FROM lesson_progress
      WHERE user_id = $1 AND updated_at > NOW() - INTERVAL '7 days'
      GROUP BY DATE(updated_at)
      ORDER BY date
    `, [userId])

    // Upcoming events (from announcements)
    const announcements = await pool.query(
      "SELECT * FROM announcements WHERE is_published = true ORDER BY created_at DESC LIMIT 5"
    )

    // Recommended courses (not enrolled)
    const enrolledIds = enrolledCourses.rows.map(c => c.course_id)
    let recommended = []
    if (enrolledIds.length > 0) {
      const placeholders = enrolledIds.map((_, i) => '$' + (i + 2)).join(',')
      recommended = (await pool.query(
        'SELECT * FROM courses WHERE is_published = true AND id NOT IN (' + placeholders + ') LIMIT 4',
        [userId, ...enrolledIds]
      )).rows
    } else {
      recommended = (await pool.query(
        "SELECT * FROM courses WHERE is_published = true LIMIT 4"
      )).rows
    }

    res.json({
      courses_in_progress: parseInt(inProgress.rows[0].count),
      courses_completed: parseInt(completed.rows[0].count),
      certificates: parseInt(certs.rows[0].count),
      enrolled_courses: enrolledCourses.rows,
      learning_activity: activity.rows,
      announcements: announcements.rows,
      recommended_courses: recommended
    })
  } catch (err) {
    console.error('Dashboard error:', err)
    res.status(500).json({ error: 'Failed to load dashboard' })
  }
})

// GET /api/dashboard/progress/:courseId - progress for a specific course
router.get('/progress/:courseId', verifyToken, async (req, res) => {
  try {
    const progress = await pool.query(`
      SELECT lp.*, l.title as lesson_title
      FROM lesson_progress lp
      JOIN lessons l ON lp.lesson_id = l.id::text
      WHERE lp.user_id = $1 AND lp.module_id = $2
      ORDER BY l.order_index
    `, [req.user.id, req.params.courseId])
    res.json(progress.rows)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

module.exports = router
