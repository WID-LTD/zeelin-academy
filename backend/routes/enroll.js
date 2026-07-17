const { pool } = require('../db')

module.exports = async (req, res) => {
  try {
    const { fullName, email, phone, selectedModule, enrollmentType, experience, goals, packageSlug } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString()

    // Save to DB
    let enrollmentId = null
    try {
      const result = await pool.query(
        `INSERT INTO enrollments (full_name, email, phone, selected_module, enrollment_type, experience, goals, package_slug, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'pending') RETURNING id`,
        [fullName, email, phone, selectedModule, enrollmentType, experience, goals, packageSlug || null]
      )
      enrollmentId = result.rows[0].id
    } catch (dbErr) {
      console.error('DB insert error:', dbErr.message)
    }

    globalThis.__verificationStore[email] = { code, data: { fullName, email, phone, selectedModule, enrollmentType, experience, goals, packageSlug, enrollmentId } }

    // Send verification email via Brevo
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || ''
      },
      body: JSON.stringify({
        sender: { name: 'Zeelin Academy', email: process.env.BREVO_SENDER_EMAIL || 'noreply@zeelinacademy.com' },
        to: [{ email, name: fullName }],
        subject: 'Verify Your Zeelin Academy Enrollment',
        htmlContent: `
          <div style="background:#080808;color:#fff;padding:40px;font-family:Arial,sans-serif;">
            <div style="max-width:500px;margin:0 auto;text-align:center;">
              <img src="https://zeelin-academy.vercel.app/logo.png" alt="Zeelin Academy" style="width:60px;height:60px;border-radius:50%;margin-bottom:15px;" />
              <h1 style="color:#DFBA6B;">Zeelin Academy</h1>
              <h2 style="color:#fff;">Verify Your Enrollment</h2>
              <p style="color:rgba(255,255,255,0.5);font-size:16px;">Use the code below to verify your email address:</p>
              <div style="background:#111;border:2px solid #DFBA6B;border-radius:12px;padding:20px;margin:20px 0;">
                <span style="font-size:36px;font-weight:bold;color:#DFBA6B;letter-spacing:8px;">${code}</span>
              </div>
              <p style="color:rgba(255,255,255,0.3);font-size:14px;">This code expires in 10 minutes.</p>
              <hr style="border-color:rgba(255,255,255,0.08);margin:20px 0;" />
              <p style="color:rgba(255,255,255,0.3);font-size:12px;">
                <strong style="color:rgba(255,255,255,0.5);">Module:</strong> ${selectedModule || 'Not selected'}<br/>
                <strong style="color:rgba(255,255,255,0.5);">Type:</strong> ${enrollmentType}<br/>
              </p>
            </div>
          </div>
        `
      })
    })

    if (!emailRes.ok) {
      const errText = await emailRes.text()
      console.error('Brevo email error:', errText)
    }

    // Send WhatsApp notification to admin via Twilio
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID
      const authToken = process.env.TWILIO_AUTH_TOKEN
      if (accountSid && authToken) {
        const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64')
        await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${auth}`
          },
          body: new URLSearchParams({
            From: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM || '+14155238886'}`,
            To: `whatsapp:${process.env.ADMIN_WHATSAPP || '+2349028970609'}`,
            Body: `New enrollment at Zeelin Academy!\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nModule: ${selectedModule || 'N/A'}\nType: ${enrollmentType}\nCode: ${code}`
          }).toString()
        })
      }
    } catch (twilioErr) {
      console.error('Twilio error:', twilioErr)
    }

    res.json({ success: true, message: 'Verification code sent', enrollment_id: enrollmentId })
  } catch (error) {
    console.error('Enroll error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
