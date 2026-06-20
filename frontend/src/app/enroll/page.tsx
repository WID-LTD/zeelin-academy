'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import Link from 'next/link'

const moduleNames: Record<string, string> = {
  'ba-foundations': 'Business Analysis Foundations',
  'elicitation': 'Elicitation & Collaboration Techniques',
  'requirements-mgmt': 'Requirements Life Cycle Management',
  'strategy-analysis': 'Strategy Analysis',
  'requirements-design': 'Requirements Analysis & Design Definition',
  'solution-evaluation': 'Solution Evaluation',
  'agile-ba': 'Agile Business Analysis',
  'capstone': 'Capstone Project & Certification Prep'
}

function EnrollForm() {
  const searchParams = useSearchParams()
  const preselectedModule = searchParams.get('module') || ''
  const preselectedType = searchParams.get('type') || 'paid'

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedModule: preselectedModule,
    enrollmentType: preselectedType,
    experience: '',
    goals: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [codeSent, setCodeSent] = useState(false)
  const [verified, setVerified] = useState(false)
  const [code, setCode] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setCodeSent(true)
      } else {
        const data = await res.json()
        alert(data.error || 'Something went wrong')
      }
    } catch {
      alert('Failed to submit enrollment')
    }
    setSubmitting(false)
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email, code })
    })
    if (res.ok) {
      setVerified(true)
    } else {
      const data = await res.json()
      alert(data.error || 'Invalid code')
    }
  }

  if (verified) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(56,189,248,0.1)' }}>
          <svg className="w-10 h-10 gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display text-3xl font-bold mb-4">Enrollment <span className="gold">Confirmed!</span></h2>
        <p style={{ color: 'var(--text-muted)' }} className="mb-8">
          Your enrollment has been verified. Welcome to Zeelin Academy! Check your email for further instructions.
        </p>
        <Link href="/" className="btn-blue px-8 py-3 inline-block">Back to Home</Link>
      </div>
    )
  }

  if (codeSent) {
    return (
      <div className="max-w-xl mx-auto py-20">
        <h2 className="font-display text-2xl font-bold text-center mb-8">Verify Your <span className="gold">Email</span></h2>
        <p style={{ color: 'var(--text-muted)' }} className="text-center mb-8">
          We&apos;ve sent a verification code to <strong style={{ color: 'var(--text-core)' }}>{form.email}</strong>.
        </p>
        <form onSubmit={handleVerify} className="p-8 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Verification Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-lg px-4 py-3 text-center text-2xl tracking-[0.5em] border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
              placeholder="000000"
              maxLength={6}
              required
            />
          </div>
          <button type="submit" className="btn-blue w-full py-3 text-lg font-semibold">Verify & Confirm</button>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-20">
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4">
          Enroll in <span className="gold">Zeelin Academy</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Fill out the form below to begin your Business Analysis journey.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 rounded-xl border space-y-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Full Name</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
              placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
              placeholder="john@example.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
              placeholder="+234 900 000 0000" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Type</label>
            <select name="enrollmentType" value={form.enrollmentType} onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
              <option value="free">Free - Basic Access</option>
              <option value="paid">Paid - Full Program</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Module</label>
          <select name="selectedModule" value={form.selectedModule} onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 border focus:outline-none"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
            <option value="">-- Select a module --</option>
            {Object.entries(moduleNames).map(([id, name]) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Experience</label>
          <select name="experience" value={form.experience} onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 border focus:outline-none"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
            <option value="">-- Select --</option>
            <option value="0-1">Less than 1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Goals</label>
          <textarea name="goals" value={form.goals} onChange={handleChange} rows={4}
            className="w-full rounded-lg px-4 py-3 border focus:outline-none"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
            placeholder="Tell us about your career goals..." />
        </div>
        <button type="submit" disabled={submitting}
          className="btn-blue w-full py-4 text-lg font-semibold disabled:opacity-50">
          {submitting ? 'Submitting...' : 'Submit Enrollment'}
        </button>
      </form>
    </div>
  )
}

export default function EnrollPage() {
  return (
    <Suspense fallback={<div className="text-center py-20" style={{ color: 'var(--text-muted)' }}>Loading...</div>}>
      <div className="min-h-screen">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <EnrollForm />
        </div>
      </div>
    </Suspense>
  )
}
