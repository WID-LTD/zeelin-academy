'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, MapPin, Mail, Phone, FileText, ChevronDown, MessageCircle, Send, Loader2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(null)
    setTouched({ ...touched, [e.target.name]: true })
  }

  const isFloating = (field: string) => focusedField === field || form[field as keyof typeof form] !== ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!form.name || !form.email || !form.message) return
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

  const inputClass = (field: string) => `
    w-full rounded-lg border bg-[color:var(--bg-primary)] text-[color:var(--text-core)]
    transition-all duration-200 ease-out
    focus:outline-none
    ${touched[field] && !form[field as keyof typeof form]
      ? 'border-red-400 focus:border-red-500'
      : 'border-[color:var(--border)] focus:border-[#D4A02A]'}
    ${field === 'message' ? 'pt-6 pb-3 px-4' : 'pt-6 pb-2 px-4'}
  `

  const inputStyle = (field: string) => ({
    boxShadow: focusedField === field && !(touched[field] && !form[field as keyof typeof form])
      ? '0 0 0 3px rgba(212,160,42,0.15)'
      : 'none',
  })

  const labelClass = (field: string) => `
    absolute left-4 transition-all duration-200 ease-out pointer-events-none
    ${isFloating(field)
      ? 'top-2 text-[0.7rem]'
      : 'top-1/2 -translate-y-1/2 text-sm'}
    ${touched[field] && !form[field as keyof typeof form]
      ? 'text-red-400'
      : isFloating(field)
        ? 'text-[color:var(--text-core)]'
        : 'text-[color:var(--text-muted)]'}
  `

  if (done) {
    return (
      <div className="min-h-screen py-20 relative">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <AnimatedSection delay={0} direction="scale">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pop-in"
                style={{ backgroundColor: 'rgba(212,160,42,0.12)' }}>
                <Check className="w-10 h-10" style={{ color: 'var(--brand-gold)' }} />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
                Message <span style={{ color: 'var(--brand-gold)' }}>Sent!</span>
              </h1>
              <p className="text-base font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
                You will receive a confirmation at <strong style={{ color: 'var(--text-core)' }}>{form.email}</strong>
              </p>
              <Link href="/" className="inline-block px-8 py-3.5 btn-gold text-sm transition-all duration-300 hover:scale-105">
                Back to Home
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
        {/* Decorative background SVGs */}
        <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
          <svg className="absolute top-0 right-0 w-32 lg:w-48 opacity-[0.04]"
            viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="0" r="100" fill="#D4A02A" />
            <path d="M60 0 L100 40" stroke="#D4A02A" strokeWidth="0.5" fill="none" />
            <path d="M30 0 L100 70" stroke="#D4A02A" strokeWidth="0.3" fill="none" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-28 lg:w-40 opacity-[0.03]"
            viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 L100 100 L100 0 Z" fill="none" stroke="#D4A02A" strokeWidth="1" />
            <circle cx="20" cy="80" r="3" fill="#D4A02A" />
            <circle cx="80" cy="20" r="3" fill="#D4A02A" />
          </svg>
        </div>
        <div className="relative z-10">
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: 'var(--brand-gold)' }} />
              <span className="text-xs font-bold tracking-[0.125rem]" style={{ color: 'var(--brand-gold)' }}>GET IN TOUCH</span>
              <div className="h-px w-10" style={{ backgroundColor: 'var(--brand-gold)' }} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
              Contact <span style={{ color: 'var(--brand-gold)' }}>Us</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
              Have a question about our programs, enrollment, or partnership opportunities? We would love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Form Column */}
          <div>
            <AnimatedSection delay={100} direction="up">
              <div className="flex gap-3 mb-8">
                <a href="https://wa.me/441234567890" target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center gap-2.5 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <MessageCircle className="w-5 h-5" style={{ color: '#25D366' }} />
                  <div>
                <p className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>WhatsApp</p>
                <p className="text-[0.65rem]" style={{ color: 'var(--text-muted)' }}>Chat with us</p>
                  </div>
                </a>
                <a href="mailto:contact@zeelinacademy.com"
                  className="flex-1 flex items-center gap-2.5 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <Mail className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>Email</p>
                    <p className="text-[0.65rem]" style={{ color: 'var(--text-muted)' }}>Send a message</p>
                  </div>
                </a>
                <a href="tel:+441234567890"
                  className="flex-1 flex items-center gap-2.5 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <Phone className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>Phone</p>
                    <p className="text-[0.65rem]" style={{ color: 'var(--text-muted)' }}>Call us</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} direction="up">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border space-y-5"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                {error && (
                  <div className="p-3 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626' }}>
                    {error}
                  </div>
                )}

                <div className="relative">
                  <input
                    type="text" name="name" id="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocusedField('name')} onBlur={handleBlur}
                    className={inputClass('name')} style={inputStyle('name')}
                    placeholder=" " required
                  />
                  <label htmlFor="name" className={labelClass('name')}>Full Name</label>
                  {touched.name && form.name && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#22c55e' }} />
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email" name="email" id="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocusedField('email')} onBlur={handleBlur}
                    className={inputClass('email')} style={inputStyle('email')}
                    placeholder=" " required
                  />
                  <label htmlFor="email" className={labelClass('email')}>Email Address</label>
                  {touched.email && form.email && /\S+@\S+\.\S+/.test(form.email) && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#22c55e' }} />
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text" name="subject" id="subject" value={form.subject} onChange={handleChange}
                    onFocus={() => setFocusedField('subject')} onBlur={handleBlur}
                    className={inputClass('subject')} style={inputStyle('subject')}
                    placeholder=" "
                  />
                  <label htmlFor="subject" className={labelClass('subject')}>Subject (optional)</label>
                </div>

                <div className="relative">
                  <textarea
                    name="message" id="message" value={form.message} onChange={handleChange}
                    onFocus={() => setFocusedField('message')} onBlur={handleBlur}
                    className={inputClass('message')} style={inputStyle('message')}
                    placeholder=" " required rows={5}
                  />
                  <label htmlFor="message" className={labelClass('message')}>Your Message</label>
                  {touched.message && form.message && (
                    <Check className="absolute right-3 top-3 w-4 h-4" style={{ color: '#22c55e' }} />
                  )}
                </div>

                <button
                  type="submit" disabled={submitting}
                  className="w-full py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  style={{ backgroundColor: '#D4A02A', color: '#fff' }}
                >
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>

                <p className="text-[0.65rem] text-center" style={{ color: '#6e6e6e' }}>
                  We typically respond within 24 hours on business days.
                </p>
              </form>
            </AnimatedSection>
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            <AnimatedSection delay={100} direction="up">
              <div className="p-6 sm:p-8 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: '#0c1e36' }}>
                  Contact <span style={{ color: '#D4A02A' }}>Information</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,160,42,0.1)' }}>
                      <MapPin className="w-5 h-5" style={{ color: '#D4A02A' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: '#0c1e36' }}>Address</h3>
                      <p className="text-sm mt-1" style={{ color: '#6e6e6e' }}>London, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,160,42,0.1)' }}>
                      <Mail className="w-5 h-5" style={{ color: '#D4A02A' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: '#0c1e36' }}>Email</h3>
                      <a href="mailto:contact@zeelinacademy.com" className="text-sm mt-1 block transition-colors hover:text-[#D4A02A]" style={{ color: '#6e6e6e' }}>contact@zeelinacademy.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,160,42,0.1)' }}>
                      <Phone className="w-5 h-5" style={{ color: '#D4A02A' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: '#0c1e36' }}>Phone</h3>
                      <a href="tel:+441234567890" className="text-sm mt-1 block transition-colors hover:text-[#D4A02A]" style={{ color: '#6e6e6e' }}>+44 123 456 7890</a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} direction="up">
              <div className="p-6 sm:p-8 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0c1e36' }}>
                  Office <span style={{ color: '#D4A02A' }}>Hours</span>
                </h2>
                <div className="space-y-3 text-sm" style={{ color: '#6e6e6e' }}>
                  <div className="flex justify-between"><span>Monday - Friday</span><span className="font-medium" style={{ color: '#0c1e36' }}>9:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium" style={{ color: '#0c1e36' }}>10:00 AM - 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-medium" style={{ color: '#0c1e36' }}>Closed</span></div>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#D4A02A' }}>
                    <MessageCircle className="w-3.5 h-3.5" />
                    Response time: Within 24 hours on business days
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} direction="up">
              <div className="p-6 sm:p-8 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0c1e36' }}>
                  Legal <span style={{ color: '#D4A02A' }}>Information</span>
                </h2>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6e6e6e' }}>
                  By using our services, you agree to our Terms &amp; Conditions and Privacy Policy.
                  Please review them carefully before enrolling in any program.
                </p>
                <Link href="/terms" className="text-sm font-bold inline-flex items-center gap-2 transition-colors hover:underline" style={{ color: '#D4A02A' }}>
                  <FileText className="w-4 h-4" /> Read Full Terms &amp; Conditions
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* FAQ Accordion */}
        <AnimatedSection direction="up" className="max-w-3xl mx-auto mt-20">
          <div style={{ borderTop: '1px solid var(--border)' }}>
          <div className="pt-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: '#0c1e36' }}>
              Frequently Asked <span style={{ color: '#D4A02A' }}>Questions</span>
            </h2>
            <div className="space-y-3">
              {[
                { q: "How long does it take to get a response?", a: "We aim to respond to all inquiries within 24 hours on business days. Live chat and phone support are available during business hours for urgent matters." },
                { q: "Can I speak directly with an instructor?", a: "Yes! We offer free strategy calls with our lead instructor, Dr. Franklin Kalu. Book a call through our contact form or during enrollment." },
                { q: "Do you offer support outside the UK?", a: "Absolutely. Our programs are fully online and we support students worldwide. We accommodate different time zones for mentoring sessions." },
                { q: "How do I enroll in a course?", a: "You can enroll directly through our website by selecting your preferred module and completing the enrollment form. You will receive instant access upon verification." },
                { q: "What payment methods do you accept?", a: "We accept major credit/debit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. Payment plans are available for selected programs." },
                { q: "Can I get a refund if I am not satisfied?", a: "Yes, we offer a 7-day satisfaction guarantee. If you are not happy with the course within the first 7 days, you can request a full refund. See our terms for details." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border overflow-hidden transition-all duration-300" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-bold text-sm" style={{ color: '#0c1e36' }}>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: '#D4A02A' }} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: '#6e6e6e' }}>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </AnimatedSection>

        {/* Follow Us */}
        <AnimatedSection direction="up" className="max-w-5xl mx-auto mt-20">
          <div style={{ borderTop: '1px solid var(--border)' }}>
          <div className="pt-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: '#D4A02A' }} />
              <span className="text-xs font-bold tracking-[0.125rem]" style={{ color: '#D4A02A' }}>STAY CONNECTED</span>
              <div className="h-px w-10" style={{ backgroundColor: '#D4A02A' }} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#0c1e36' }}>
              Follow <span style={{ color: '#D4A02A' }}>Us</span>
            </h2>
            <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: '#6e6e6e' }}>Stay connected with Zeelin Academy on social media for updates, tips, and community discussions.</p>
            <div className="flex justify-center gap-3">
              {[
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, label: 'X', href: '#' },
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: 'LinkedIn', href: '#' },
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, label: 'YouTube', href: '#' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:contact@zeelinacademy.com' },
              ].map((s, i) => (
                <a
                  key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: '#6e6e6e' }}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        </AnimatedSection>
        </div>
        </div>
      </div>
    </div>
  )
}
