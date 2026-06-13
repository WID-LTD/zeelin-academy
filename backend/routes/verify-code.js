const { pool } = require('../db')

module.exports = async (req, res) => {
  try {
    const { email, code } = req.body

    if (!email || !code) {
      return res.status(400).json({ error: 'Email and code are required' })
    }

    const stored = globalThis.__verificationStore?.[email]
    if (!stored) {
      return res.status(400).json({ error: 'No code found for this email. Please submit enrollment first.' })
    }

    if (stored.code !== code) {
      return res.status(400).json({ error: 'Invalid verification code' })
    }

    delete globalThis.__verificationStore[email]

    // Update enrollment status in DB
    const enrollmentId = stored.data?.enrollmentId
    if (enrollmentId) {
      try {
        await pool.query("UPDATE enrollments SET status = 'verified' WHERE id = $1", [enrollmentId])
        await pool.query(
          'INSERT INTO verified_enrollments (enrollment_id, email) VALUES ($1, $2)',
          [enrollmentId, email]
        )
      } catch (dbErr) {
        console.error('DB update error:', dbErr.message)
      }
    }

    // Send confirmation email with logo
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || ''
        },
        body: JSON.stringify({
          sender: { name: 'Zeelin Academy', email: process.env.BREVO_SENDER_EMAIL || 'noreply@zeelinacademy.com' },
          to: [{ email }],
          subject: 'Welcome to Zeelin Academy - Enrollment Confirmed!',
          htmlContent: `
            <div style="background:#080808;color:#fff;padding:40px;font-family:Arial,sans-serif;">
              <div style="max-width:500px;margin:0 auto;text-align:center;">
                <img src="https://zeelin-academy.vercel.app/logo.png" alt="Zeelin Academy" style="width:60px;height:60px;border-radius:50%;margin-bottom:15px;" />
                <h1 style="color:#DFBA6B;">Zeelin Academy</h1>
                <h2 style="color:#fff;">Enrollment Confirmed!</h2>
                <p style="color:rgba(255,255,255,0.5);">Welcome to the Zeelin Academy community. Your journey to becoming a certified Business Analyst starts now.</p>
                <p style="color:rgba(255,255,255,0.3);font-size:14px;">You will receive further instructions about your course access shortly.</p>
                <hr style="border-color:rgba(255,255,255,0.08);margin:20px 0;" />
                <p style="color:rgba(255,255,255,0.3);font-size:12px;">Zeelin Academy | Pioneered by Dr. Franklin Kalu</p>
              </div>
            </div>
          `
        })
      })
    } catch (e) {
      console.error('Confirmation email error:', e)
    }

    res.json({ success: true, message: 'Email verified successfully' })
  } catch (error) {
    console.error('Verify error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
