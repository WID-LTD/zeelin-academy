const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const isStripeConfigured = stripeSecretKey && !stripeSecretKey.startsWith('sk_test_placeholder')

let stripe = null
if (isStripeConfigured) {
  stripe = require('stripe')(stripeSecretKey)
}

router.post('/api/payments/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!isStripeConfigured) {
    return res.json({ received: true })
  }

  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const enrollmentId = parseInt(session.metadata?.enrollment_id)
    const packageSlug = session.metadata?.package_slug

    if (enrollmentId) {
      try {
        await pool.query("UPDATE enrollments SET status = $1 WHERE id = $2", ['paid', enrollmentId])
        await pool.query(
          `INSERT INTO package_enrollments (enrollment_id, package_slug, amount, currency, status)
           VALUES ($1, $2, $3, 'GBP', 'paid')
           ON CONFLICT DO NOTHING`,
          [enrollmentId, packageSlug || '', session.amount_total ? session.amount_total / 100 : 0]
        )
        await pool.query(
          `UPDATE payments SET status = 'completed', stripe_payment_intent = $1
           WHERE stripe_session_id = $2`,
          [session.payment_intent, session.id]
        )
      } catch (dbErr) {
        console.error('Webhook DB update error:', dbErr.message)
      }
    }
  }

  res.json({ received: true })
})

module.exports = router
