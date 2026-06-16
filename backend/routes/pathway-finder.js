const { pool } = require('../db')

module.exports = async (req, res) => {
  try {
    const { name, email, phone, role, enrolled, q1, q2, q3, q4, q5, q6, q7, q8, q9 } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    // Scoring algorithm
    const scores = { N: 0, P: 0, C: 0, IT: 0, S: 0, D: 0, PB: 0 }

    // Q1 — Current situation
    if (q1 === 'A' || q1 === 'B') scores.N += 1
    if (q1 === 'C') { scores.IT += 1; scores.S += 1 }
    if (q1 === 'D') scores.P += 1
    if (q1 === 'E') scores.D += 1
    if (q1 === 'F') { scores.C += 1; scores.PB += 1 }

    // Q2 — Work enjoyment
    if (q2 === 'A') scores.N += 1
    if (q2 === 'B') scores.P += 1
    if (q2 === 'C') scores.C += 1
    if (q2 === 'D') { scores.IT += 1; scores.S += 1 }
    if (q2 === 'E') scores.D += 1
    if (q2 === 'F') scores.PB += 1

    // Q3 — Career direction
    if (q3 === 'A') scores.N += 1
    if (q3 === 'B') scores.C += 1
    if (q3 === 'C') scores.P += 1
    if (q3 === 'D') scores.S += 1
    if (q3 === 'E') scores.IT += 1
    if (q3 === 'F') scores.D += 1
    if (q3 === 'G') scores.PB += 1
    if (q3 === 'H') scores.N += 1

    // Q4 — Job titles (checkbox, can have multiple)
    if (q4 && Array.isArray(q4)) {
      q4.forEach((id) => {
        if (id === 'A' || id === 'B') scores.N += 1
        if (id === 'C') scores.C += 1
        if (id === 'D') scores.P += 1
        if (id === 'E') scores.S += 1
        if (id === 'F') scores.IT += 1
        if (id === 'G') scores.D += 1
        if (id === 'H') scores.PB += 1
        if (id === 'I') scores.IT += 1
      })
    }

    // Q5 — Pathway goal
    if (q5 === 'A') scores.N += 1
    if (q5 === 'B') scores.P += 1
    if (q5 === 'C') scores.IT += 1
    if (q5 === 'D') scores.S += 1
    if (q5 === 'E') scores.D += 1
    if (q5 === 'F') scores.C += 1
    if (q5 === 'G') scores.PB += 1

    // Q6 — Technical preference
    if (q6 === 'A') scores.N += 1
    if (q6 === 'B') scores.IT += 1
    if (q6 === 'C') { scores.S += 1; scores.D += 1 }
    if (q6 === 'D') scores.N += 1

    // Q7 — Personal statement
    if (q7 === 'A') scores.N += 1
    if (q7 === 'B') scores.C += 1
    if (q7 === 'C') scores.IT += 1
    if (q7 === 'D') scores.S += 1
    if (q7 === 'E') scores.D += 1
    if (q7 === 'F') scores.PB += 1
    if (q7 === 'G') scores.P += 1

    // Find highest score
    let highestScore = -1
    let winner = 'N'
    for (const [key, value] of Object.entries(scores)) {
      if (value > highestScore) {
        highestScore = value
        winner = key
      }
    }

    // Result mapping
    const pathways = {
      N: {
        path: 'Neutral BA Pathway',
        recommend: 'Business Analysis Foundation + Modelling Business Processes',
        msg: 'This route is best if you are new to Business Analysis, unsure of your specialism, or want a safe and flexible route.'
      },
      P: {
        path: 'Process Improvement BA Pathway',
        recommend: 'Business Analysis Foundation or Business Change + Modelling Business Processes',
        msg: 'This route is best if you want to understand business processes, identify pain points, improve workflows, and support operational improvement.'
      },
      C: {
        path: 'Business Change BA Pathway',
        recommend: 'Business Change + Benefits Management and Business Acceptance',
        msg: 'This route is best if you want to work in transformation, change adoption, benefits realisation, and business improvement.'
      },
      IT: {
        path: 'IT Delivery BA Pathway',
        recommend: 'IS Project Management + Systems Development Essentials',
        msg: 'This route is best if you want to work with IT projects, implementation teams, delivery teams, and digital change.'
      },
      S: {
        path: 'Systems Analyst Pathway',
        recommend: 'IS Project Management + Systems Modelling Techniques',
        msg: 'This route is best if you want to become more technical, work with solution teams, and understand how systems are modelled.'
      },
      D: {
        path: 'Data-Aware BA Pathway',
        recommend: 'Business Analysis Foundation or IS Project Management + Data Management Essentials',
        msg: 'This route is best if you want to work with data quality, reporting, data migration, governance, or data-led business change.'
      },
      PB: {
        path: 'People & Benefits BA Pathway',
        recommend: 'Organisational Behaviour + Benefits Management and Business Acceptance',
        msg: 'This route is best if you are interested in people, teams, culture, business acceptance, benefits, and change adoption.'
      }
    }

    const result = pathways[winner]

    // Save to DB
    try {
      await pool.query(
        `INSERT INTO pathway_finder (name, email, phone, role, enrolled, q1, q2, q3, q4, q5, q6, q7, q8, q9, pathway_result)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
        [
          name, email, phone, role, enrolled,
          q1, q2, q3, Array.isArray(q4) ? q4.join(',') : q4,
          q5, q6, q7, q8, q9,
          result.path
        ]
      )
    } catch (dbErr) {
      console.error('DB insert error:', dbErr.message)
    }

    // Send Brevo email notification to admin
    try {
      const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || ''
        },
        body: JSON.stringify({
          sender: { name: 'Zeelin Academy', email: process.env.BREVO_SENDER_EMAIL || 'noreply@zeelinacademy.com' },
          to: [{ email: process.env.BREVO_SENDER_EMAIL || 'noreply@zeelinacademy.com' }],
          subject: 'New Pathway Finder Submission — Zeelin Academy',
          htmlContent: `
            <div style="background:#080808;color:#fff;padding:40px;font-family:Arial,sans-serif;">
              <div style="max-width:500px;margin:0 auto;">
                <h1 style="color:#DFBA6B;">New Pathway Finder Submission</h1>
                <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Name</td><td style="padding:8px;border:1px solid #333;color:#fff;">${name || 'N/A'}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Email</td><td style="padding:8px;border:1px solid #333;color:#fff;">${email}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Phone</td><td style="padding:8px;border:1px solid #333;color:#fff;">${phone || 'N/A'}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Current Role</td><td style="padding:8px;border:1px solid #333;color:#fff;">${role || 'N/A'}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Enrolled</td><td style="padding:8px;border:1px solid #333;color:#fff;">${enrolled || 'N/A'}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Recommended Pathway</td><td style="padding:8px;border:1px solid #333;color:#DFBA6B;font-weight:bold;">${result.path}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Modules</td><td style="padding:8px;border:1px solid #333;color:#fff;">${result.recommend}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #333;color:rgba(255,255,255,0.5);">Career Goal</td><td style="padding:8px;border:1px solid #333;color:#fff;">${q9 || 'N/A'}</td></tr>
                </table>
              </div>
            </div>
          `
        })
      })
      if (!brevoRes.ok) {
        const errText = await brevoRes.text()
        console.error('Brevo email error:', errText)
      }
    } catch (emailErr) {
      console.error('Email send error:', emailErr.message)
    }

    res.json({ success: true, result })
  } catch (error) {
    console.error('Pathway finder error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
