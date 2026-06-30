'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { publicApi } from '@/lib/api'
import { dispatchAuthEvent } from '@/lib/auth'
import { AlertCircle, Loader2, ArrowLeft } from 'lucide-react'

export default function LoginPage() {
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
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.message || data.error || 'Login failed')
        return
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      dispatchAuthEvent()

      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[color:var(--bg-secondary)] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-[color:var(--bg-primary)] rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] flex overflow-hidden">
        <div className="w-full md:w-[50%] p-8 md:p-14 lg:p-16 flex flex-col justify-center relative">
          <div className="mb-10">
            <Link href="/">
              <Image src="/logo-light.png" alt="Zeelin Academy" width={150} height={54} className="w-auto h-[3rem] object-contain mb-10 drop-shadow-sm" priority />
            </Link>
            <h1 className="text-3xl font-bold text-[color:var(--text-core)] mb-3">Welcome Back</h1>
            <p className="text-[color:var(--text-muted)] text-sm">Sign in to your account to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"
                className="w-full border-b-2 border-[color:var(--border)] focus:border-[color:var(--brand-gold)] py-2 bg-transparent text-[color:var(--text-core)] outline-none transition-colors placeholder-[color:var(--text-muted)]" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••"
                className="w-full border-b-2 border-[color:var(--border)] focus:border-[color:var(--brand-gold)] py-2 bg-transparent text-[color:var(--text-core)] outline-none transition-colors placeholder-[color:var(--text-muted)]" />
            </div>

            {error && (
              <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" /> {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-[#111827] text-white font-semibold py-3.5 rounded-xl mt-4 hover:opacity-90 transition-all flex justify-center items-center shadow-md active:scale-[0.98]">
              {loading ? <><Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" /> Signing in...</> : 'Sign in'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm font-medium text-[color:var(--text-muted)] hover:text-[color:var(--brand-gold)] transition-colors inline-flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-[50%] p-3">
          <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
            <img src="/login_hero.png" alt="Professional Business Academy" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
