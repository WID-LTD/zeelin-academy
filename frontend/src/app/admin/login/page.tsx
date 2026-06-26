'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (res.ok) {
        localStorage.setItem('admin-token', data.token)
        localStorage.setItem('admin-user', JSON.stringify(data.user))
        router.push('/admin')
      } else {
        setError(data.error || 'Invalid credentials')
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
          <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center font-bold text-2xl mx-auto mb-4" style={{ color: 'var(--text-core)' }}>ZA</div>
          <h1 className="font-display text-2xl font-bold" style={{ color: 'var(--text-core)' }}>Admin <span className="gold">Login</span></h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-secondary">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              className="w-full rounded-lg px-4 py-3 border focus:outline-none"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }} />
          </div>
          {error && <p role="alert" className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="btn-gold w-full py-3 font-semibold" style={{ color: 'var(--text-core)' }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}