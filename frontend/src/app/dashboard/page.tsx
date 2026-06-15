'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  }
}

export default function UserDashboard() {
  const [user, setUser] = useState<{email: string; full_name: string} | null>(null)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const router = useRouter()

  useEffect(() => {
    const u = localStorage.getItem('user-data')
    const t = localStorage.getItem('user-token')
    if (!u || !t) {
      router.push('/dashboard/login')
      return
    }
    setUser(JSON.parse(u))
  }, [router])

  useEffect(() => {
    const target = new Date('2026-09-07T00:00:00')
    const tick = () => setTimeLeft(getTimeLeft(target))
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-data')
    router.push('/dashboard/login')
  }

  if (!user) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold mb-2" style={{ color: 'var(--text-core)' }}>
          Welcome, <span className="gold">{user.full_name}</span>
        </h1>
        <p className="text-secondary">Your dashboard</p>
      </div>

      <div className="p-12 rounded-2xl border text-center max-w-lg w-full mx-4" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--premium-border)', boxShadow: 'var(--premium-shadow)' }}>
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full gold-bg flex items-center justify-center mx-auto mb-4" style={{ color: 'var(--text-core)' }}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold gold mb-2">Countdown to D-Day</h2>
          <p className="text-sm text-secondary">September 7, 2026</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="font-display text-3xl sm:text-4xl font-bold gold">{String(item.value).padStart(2, '0')}</div>
              <div className="text-xs mt-1 text-muted">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-muted">Current Date & Time</p>
          <p className="text-sm gold font-medium">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button onClick={handleLogout} className="px-6 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          Logout
        </button>
        <Link href="/" className="px-6 py-3 rounded-lg border text-sm footer-link" style={{ borderColor: 'var(--border)' }}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}