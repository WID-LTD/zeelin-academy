'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import { publicApi } from '@/lib/api'
import type { LoginResponse } from '@/lib/types'
import { AlertCircle, Loader2, ArrowLeft } from 'lucide-react'

interface LoginFormProps {
  title: string
  subtitle?: string
  tokenKey: string
  userKey: string
  redirectTo: string
  showForgotPassword?: boolean
  storageSetter?: (token: string, user: unknown) => void
}

export default function LoginForm({
  title,
  subtitle,
  tokenKey,
  userKey,
  redirectTo,
  showForgotPassword,
  storageSetter,
}: LoginFormProps) {
  const { theme } = useTheme()
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
      const data = await publicApi.post<LoginResponse>('/api/auth/login', { email, password })
      localStorage.setItem(tokenKey, data.token)
      localStorage.setItem(userKey, JSON.stringify(data.user))
      storageSetter?.(data.token, data.user)
      router.push(redirectTo)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[color:var(--bg-secondary)] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-[color:var(--bg-primary)] rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.3)] flex overflow-hidden">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-[50%] p-8 md:p-14 lg:p-16 flex flex-col justify-center relative">
          
          <div className="mb-10">
            <Link href="/">
              <Image
                src={theme === 'dark' ? '/logo.png' : '/logo-light.png'}
                alt="Zeelin Academy"
                width={150}
                height={54}
                className="w-auto h-[3rem] object-contain mb-10 drop-shadow-sm"
                priority
              />
            </Link>
            <h1 className="text-3xl font-bold text-[color:var(--text-core)] mb-3">Welcome Back</h1>
            {subtitle ? (
              <p className="text-[color:var(--text-muted)] text-sm">{subtitle}</p>
            ) : (
              <p className="text-[color:var(--text-muted)] text-sm">Please enter your details to sign in.</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full border-b-2 border-[color:var(--border)] focus:border-[color:var(--brand-gold)] py-2 bg-transparent text-[color:var(--text-core)] outline-none transition-colors placeholder-[color:var(--text-muted)] opacity-80 focus:opacity-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full border-b-2 border-[color:var(--border)] focus:border-[color:var(--brand-gold)] py-2 bg-transparent text-[color:var(--text-core)] outline-none transition-colors placeholder-[color:var(--text-muted)] opacity-80 focus:opacity-100"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-sm text-[color:var(--text-muted)] cursor-pointer hover:text-[color:var(--text-core)] transition-colors">
                <input type="checkbox" className="rounded w-4 h-4 border-[color:var(--border)] text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)] bg-transparent" /> 
                Remember me
              </label>
              {showForgotPassword && (
                <Link href="/dashboard/forgot-password" className="text-sm font-medium text-[color:var(--brand-gold)] hover:underline transition-all">
                  Forgot password?
                </Link>
              )}
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111827] dark:bg-white text-white dark:text-black font-semibold py-3.5 rounded-xl mt-4 hover:opacity-90 transition-all flex justify-center items-center shadow-md active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
             <Link href="/" className="text-sm font-medium text-[color:var(--text-muted)] hover:text-[color:var(--brand-gold)] transition-colors inline-flex items-center gap-1.5">
               <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block w-[50%] p-3">
          <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
            <img
              src="/login_hero.png"
              alt="Professional Business Academy"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
