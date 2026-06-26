'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (res.ok) {
        setMessage('Password reset link has been sent to your email.')
      } else {
        setError(data.error || 'Email not found')
      }
    } catch {
      setError('Connection failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="p-8 rounded-xl border w-full max-w-md" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold" style={{ color: 'var(--text-core)' }}>Forgot <span className="gold">Password</span></h1>
          <p className="text-sm mt-2 text-secondary">Enter your email to receive a reset link</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }} />
          </div>
          {error && <p role="alert" className="text-red-500 text-sm">{error}</p>}
          {message && <p role="alert" className="gold text-sm">{message}</p>}
          <button type="submit" disabled={loading}
            className="btn-gold w-full py-3 font-semibold" style={{ color: 'var(--text-core)' }}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/dashboard/login" className="text-sm footer-link">Back to Login</Link>
        </div>
      </div>
    </div>
  )
}