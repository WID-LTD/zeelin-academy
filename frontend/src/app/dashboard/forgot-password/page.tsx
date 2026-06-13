'use client'

import { useState } from 'react'
import Link from 'next/link'
import { publicApi } from '@/lib/api'

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
      await publicApi.post('/api/auth/forgot-password', { email })
      setMessage('Password reset link has been sent to your email.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--bg-primary)]">
      <div className="p-8 rounded-xl border w-full max-w-md bg-[color:var(--bg-card)] border-[color:var(--border)]">
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold text-[color:var(--text-core)]">
            Forgot <span className="gold">Password</span>
          </h1>
          <p className="text-sm mt-2 text-secondary">Enter your email to receive a reset link</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="gold text-sm">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full py-3 font-semibold text-[color:var(--text-core)]"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/dashboard/login" className="text-sm footer-link">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
