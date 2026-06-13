module.exports = async (req, res) => {
  try {
    const { code } = req.body

    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      return res.status(500).json({ error: 'Twilio not configured' })
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64')

    const twilioRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`
      },
      body: new URLSearchParams({
        From: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM || '+14155238886'}`,
        To: `whatsapp:${process.env.ADMIN_WHATSAPP || '+2349028970609'}`,
        Body: `New verification code received: ${code}`
      }).toString()
    })

    const data = await twilioRes.json()

    if (!twilioRes.ok) {
      return res.status(twilioRes.status).json({ error: data.message || 'Twilio error' })
    }

    res.json({ success: true, message: 'WhatsApp notification sent' })
  } catch (error) {
    console.error('WhatsApp error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
