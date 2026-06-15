'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserData, getUserToken } from '@/lib/auth'
import { ChevronLeft, Bell, Moon, Globe, Shield } from 'lucide-react'

export default function SettingsPage() {
  const [user, setUser] = useState<{ email: string; full_name: string } | null>(null)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const router = useRouter()

  useEffect(() => {
    const u = getUserData<{ email: string; full_name: string }>()
    if (!u) { router.push('/login'); return }
    setUser(u)
  }, [router])

  if (!user) return null

  return (
    <div className="min-h-screen py-24 bg-[color:var(--bg-primary)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/dashboard" className="text-sm text-muted hover:gold transition-colors inline-flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-[color:var(--text-core)]">
          Account <span className="gold">Settings</span>
        </h1>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Bell className="w-5 h-5 gold" />
                <div>
                  <h3 className="font-bold text-[color:var(--text-core)]">Email Notifications</h3>
                  <p className="text-sm text-muted">Receive updates about courses and announcements</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={notifications} onChange={() => setNotifications(!notifications)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[color:var(--brand-gold)]"></div>
              </label>
            </div>
          </div>

          {/* Dark Mode */}
          <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Moon className="w-5 h-5 gold" />
                <div>
                  <h3 className="font-bold text-[color:var(--text-core)]">Dark Mode</h3>
                  <p className="text-sm text-muted">Toggle dark theme appearance</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[color:var(--brand-gold)]"></div>
              </label>
            </div>
          </div>

          {/* Language */}
          <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 gold" />
                <div>
                  <h3 className="font-bold text-[color:var(--text-core)]">Language</h3>
                  <p className="text-sm text-muted">Choose your preferred language</p>
                </div>
              </div>
              <select value={language} onChange={e => setLanguage(e.target.value)} className="rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm bg-[color:var(--bg-primary)] text-[color:var(--text-core)]">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>

          {/* Account */}
          <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Shield className="w-5 h-5 gold" />
                <div>
                  <h3 className="font-bold text-[color:var(--text-core)]">Account Security</h3>
                  <p className="text-sm text-muted">Manage password and security settings</p>
                </div>
              </div>
              <Link href="/dashboard/profile" className="text-sm gold font-medium">Manage &rarr;</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] text-center">
          <p className="text-xs text-muted">Logged in as <span className="font-medium text-[color:var(--text-core)]">{user.email}</span></p>
        </div>
      </div>
    </div>
  )
}
