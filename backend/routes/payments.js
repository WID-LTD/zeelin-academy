const { pool } = require('../db')
const express = require('express')
const router = express.Router()

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const isStripeConfigured = stripeSecretKey && !stripeSecretKey.startsWith('sk_test_placeholder')

let stripe = null
if (isStripeConfigured) {
  stripe = require('stripe')(stripeSecretKey)
}

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

// Create a Stripe Checkout Session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { enrollmentId, packageSlug, amount, email, fullName } = req.body

    if (!enrollmentId || !packageSlug || !amount) {
      return res.status(400).json({ error: 'enrollmentId, packageSlug, and amount are required' })
    }

    if (!isStripeConfigured) {
      // Mock mode for development
      const mockUrl = `${FRONTEND_URL}/checkout/success?session_id=mock_${enrollmentId}&enrollment_id=${enrollmentId}`
      return res.json({ url: mockUrl })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: {
            name: `Zeelin Academy - ${packageSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      }],
      success_url: `${FRONTEND_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}&enrollment_id=${enrollmentId}`,
      cancel_url: `${FRONTEND_URL}/checkout/cancel?enrollment_id=${enrollmentId}`,
      metadata: { enrollment_id: enrollmentId.toString(), package_slug: packageSlug },
    })

    // Record the payment intent
    try {
      await pool.query(
        `INSERT INTO payments (enrollment_id, amount, currency, stripe_session_id, status)
         VALUES ($1, $2, 'GBP', $3, 'pending')`,
        [enrollmentId, amount, session.id]
      )
    } catch (dbErr) {
      console.error('Failed to record payment:', dbErr.message)
    }

    res.json({ url: session.url })
  } catch (error) {
    console.error('Stripe session error:', error)
    res.status(500).json({ error: 'Failed to create checkout session' })
  }
})

// Stripe webhook to handle completed payments
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
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
        // Update enrollment status
        await pool.query('UPDATE enrollments SET status = $1 WHERE id = $2', ['paid', enrollmentId])

        // Record in package_enrollments
        await pool.query(
          `INSERT INTO package_enrollments (enrollment_id, package_slug, amount, currency, status)
           VALUES ($1, $2, $3, 'GBP', 'paid')
           ON CONFLICT DO NOTHING`,
          [enrollmentId, packageSlug || '', session.amount_total ? session.amount_total / 100 : 0]
        )

        // Update payment record
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
