module.exports = async (req, res) => {
  try {
    const { apiKey } = req.body

    if (!apiKey) {
      return res.status(400).json({ error: 'API key required' })
    }

    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        sender: { name: 'Test', email: 'test@example.com' },
        to: [{ email: 'test@example.com' }],
        subject: 'Test',
        htmlContent: '<p>Test</p>'
      })
    })

    const data = await brevoRes.json()
    res.json({ success: brevoRes.ok, data })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' })
  }
}
