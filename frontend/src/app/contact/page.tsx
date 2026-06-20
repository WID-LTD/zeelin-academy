'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, MapPin, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setDone(true)
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch {
      setError('Failed to send message. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-[color:var(--text-core)]">
            Get in <span className="gold">Touch</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Have a question about our programs, enrollment, or partnership opportunities? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            {done ? (
              <div className="p-12 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center">
                <div className="w-20 h-20 rounded-full gold-bg flex items-center justify-center mx-auto mb-6">
                  <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)]">Message Sent!</h2>
                <p className="text-muted mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <Link href="/" className="btn-gold px-8 py-3 inline-block">Back to Home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] space-y-6">
                {error && (
                  <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm">{error}</div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" placeholder="Tell us more about your inquiry..." />
                </div>
                <button type="submit" disabled={submitting}
                  className="btn-gold w-full py-4 text-lg font-bold disabled:opacity-50">
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">Contact <span className="gold">Information</span></h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--text-core)]">Address</h3>
                    <p className="text-muted mt-1">London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--text-core)]">Email</h3>
                    <a href="mailto:contact@zeelinacademy.com" className="text-muted mt-1 block hover:gold transition-colors">contact@zeelinacademy.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--text-core)]">Phone</h3>
                    <a href="tel:+441234567890" className="text-muted mt-1 block hover:gold transition-colors">+44 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <h2 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)]">Office <span className="gold">Hours</span></h2>
              <div className="space-y-3 text-muted">
                <div className="flex justify-between"><span>Monday - Friday</span><span className="font-medium text-[color:var(--text-core)]">9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-[color:var(--text-core)]">10:00 AM - 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-[color:var(--text-core)]">Closed</span></div>
              </div>
              <p className="text-sm text-muted mt-6">Response time: Within 24 hours on business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
