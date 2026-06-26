'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, MapPin, Mail, Phone, FileText, ChevronDown, MessageCircle, Clock, Globe, Twitter, Linkedin, Youtube } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
    <div className="min-h-screen py-20 relative">
      {/* Contact backdrop */}
      <div className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'url("/consultation.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.06,
        }} />
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
            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <a href="https://wa.me/441234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-green-500/50 transition-all group">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-core)]">WhatsApp</p>
                  <p className="text-xs text-muted">Chat with us</p>
                </div>
              </a>
              <a href="mailto:contact@zeelinacademy.com" className="flex items-center gap-3 p-4 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50 transition-all group">
                <Mail className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-core)]">Email</p>
                  <p className="text-xs text-muted">contact@zeelinacademy.com</p>
                </div>
              </a>
              <a href="tel:+441234567890" className="flex items-center gap-3 p-4 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50 transition-all group">
                <Phone className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-core)]">Phone</p>
                  <p className="text-xs text-muted">+44 123 456 7890</p>
                </div>
              </a>
            </div>

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
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}>
                    <MapPin className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-core)' }}>Address</h3>
                    <p className="mt-1.5" style={{ color: 'var(--text-muted)' }}>London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}>
                    <Mail className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-core)' }}>Email</h3>
                    <a href="mailto:contact@zeelinacademy.com" className="mt-1.5 block transition-colors" style={{ color: 'var(--text-muted)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--brand-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>contact@zeelinacademy.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}>
                    <Phone className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-core)' }}>Phone</h3>
                    <a href="tel:+441234567890" className="mt-1.5 block transition-colors" style={{ color: 'var(--text-muted)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--brand-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>+44 123 456 7890</a>
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

            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <h2 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)]">Legal <span className="gold">Information</span></h2>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                By using our services, you agree to our Terms &amp; Conditions and Privacy Policy. 
                Please review them carefully before enrolling in any program.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/terms" className="text-sm font-semibold transition-colors inline-flex items-center gap-2" style={{ color: 'var(--brand-gold)' }} onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}>
                  <FileText className="w-4 h-4" /> Read Full Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <AnimatedSection direction="up" className="max-w-5xl mx-auto mt-20 border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Response <span className="gold">Times</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center card-hover">
              <Mail className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--brand-gold)' }} />
              <h3 className="font-bold text-lg text-[color:var(--text-core)] mb-2">Email Support</h3>
              <p className="text-sm text-muted mb-1">Within 24 hours</p>
              <p className="text-xs text-secondary">Monday - Friday</p>
            </div>
            <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center card-hover">
              <Phone className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--brand-gold)' }} />
              <h3 className="font-bold text-lg text-[color:var(--text-core)] mb-2">Phone Support</h3>
              <p className="text-sm text-muted mb-1">Mon-Fri 9am-6pm</p>
              <p className="text-xs text-secondary">+44 123 456 7890</p>
            </div>
            <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center card-hover">
              <MessageCircle className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--brand-gold)' }} />
              <h3 className="font-bold text-lg text-[color:var(--text-core)] mb-2">Live Chat</h3>
              <p className="text-sm text-muted mb-1">Instant response</p>
              <p className="text-xs text-secondary">During business hours</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Office Locations */}
        <AnimatedSection direction="up" className="max-w-5xl mx-auto mt-20 border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Our <span className="gold">Locations</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] card-hover">
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-[color:var(--bg-secondary)] flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted" />
              </div>
              <h3 className="font-bold text-lg text-[color:var(--text-core)] mb-1">London Campus</h3>
              <p className="text-sm text-secondary">Zeelin Academy Headquarters, London, United Kingdom</p>
            </div>
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] card-hover">
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-[color:var(--bg-secondary)] flex items-center justify-center">
                <Globe className="w-12 h-12 text-muted" />
              </div>
              <h3 className="font-bold text-lg text-[color:var(--text-core)] mb-1">Remote Learning</h3>
              <p className="text-sm text-secondary">Fully online platform with global access and support</p>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection direction="up" className="max-w-3xl mx-auto mt-20 border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Frequently Asked <span className="gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to get a response?", a: "We aim to respond to all inquiries within 24 hours on business days. Live chat and phone support are available during business hours for urgent matters." },
              { q: "Can I speak directly with an instructor?", a: "Yes! We offer free strategy calls with our lead instructor, Dr. Franklin Kalu. Book a call through our contact form or during enrollment." },
              { q: "Do you offer support outside the UK?", a: "Absolutely. Our programs are fully online and we support students worldwide. We accommodate different time zones for mentoring sessions." },
              { q: "How do I enroll in a course?", a: "You can enroll directly through our website by selecting your preferred module and completing the enrollment form. You will receive instant access upon verification." },
              { q: "What payment methods do you accept?", a: "We accept major credit/debit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. Payment plans are available for selected programs." },
              { q: "Can I get a refund if I am not satisfied?", a: "Yes, we offer a 7-day satisfaction guarantee. If you are not happy with the course within the first 7 days, you can request a full refund. See our terms for details." },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[color:var(--text-core)]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 animate-in fade-in duration-300">
                    <p className="text-sm text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Follow Us */}
        <AnimatedSection direction="up" className="max-w-5xl mx-auto mt-20 border-t border-[color:var(--border)] pt-16 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--text-core)]">
            Follow <span className="gold">Us</span>
          </h2>
          <p className="text-secondary mb-8 max-w-xl mx-auto">Stay connected with Zeelin Academy on social media for updates, tips, and community discussions.</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', href: '#' },
              { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: '#' },
              { icon: <Youtube className="w-6 h-6" />, label: 'YouTube', href: '#' },
              { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:contact@zeelinacademy.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all hover:scale-110 text-secondary hover:text-[color:var(--brand-gold)]"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
