'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserData, getUserToken, clearUserAuth } from '@/lib/auth'
import { ChevronLeft } from 'lucide-react'

export default function ProfilePage() {
  const [user, setUser] = useState<{ email: string; full_name: string; phone: string } | null>(null)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [changingPw, setChangingPw] = useState(false)
  const [pwMsg, setPwMsg] = useState('')
  const router = useRouter()

  useEffect(() => {
    const u = getUserData<{ email: string; full_name: string; phone?: string }>()
    if (!u) { router.push('/dashboard/login'); return }
    setUser(u as typeof user)
    setFullName(u.full_name || '')
    setPhone(u.phone || '')
  }, [router])

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSaveMsg('')
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getUserToken()}` },
        body: JSON.stringify({ full_name: fullName, phone }),
      })
      const data = await res.json()
      if (data.id) {
        setSaveMsg('Profile updated successfully!')
        localStorage.setItem('user-data', JSON.stringify(data))
        setTimeout(() => setSaveMsg(''), 3000)
      } else {
        setSaveMsg(data.error || 'Failed to update')
      }
    } catch {
      setSaveMsg('An error occurred')
    }
    setSaving(false)
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword.length < 6) { setPwMsg('Password must be at least 6 characters'); return }
    setChangingPw(true)
    setPwMsg('')
    try {
      const res = await fetch('/api/profile/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getUserToken()}` },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      const data = await res.json()
      if (data.success) {
        setPwMsg('Password changed successfully!')
        setCurrentPassword('')
        setNewPassword('')
        setTimeout(() => setPwMsg(''), 3000)
      } else {
        setPwMsg(data.error || 'Failed to change password')
      }
    } catch {
      setPwMsg('An error occurred')
    }
    setChangingPw(false)
  }

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
          Profile <span className="gold">Settings</span>
        </h1>

        {/* Profile Info */}
        <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] mb-8">
          <h2 className="font-display text-xl font-bold mb-6 text-[color:var(--text-core)]">Personal Information</h2>
          {saveMsg && (
            <div className={`p-3 rounded-lg text-sm mb-6 ${saveMsg.includes('success') ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'}`}>
              {saveMsg}
            </div>
          )}
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Full Name</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required
                  className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
                <input type="email" value={user.email} disabled
                  className="w-full rounded-lg px-4 py-3 border bg-gray-100 dark:bg-gray-800 text-muted border-[color:var(--border)] cursor-not-allowed" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary">Phone</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" placeholder="+44 123 456 7890" />
            </div>
            <button type="submit" disabled={saving} className="btn-gold px-8 py-3 text-sm font-bold disabled:opacity-50">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
          <h2 className="font-display text-xl font-bold mb-6 text-[color:var(--text-core)]">Change <span className="gold">Password</span></h2>
          {pwMsg && (
            <div className={`p-3 rounded-lg text-sm mb-6 ${pwMsg.includes('success') ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'}`}>
              {pwMsg}
            </div>
          )}
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary">Current Password</label>
              <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required
                className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary">New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required minLength={6}
                className="w-full rounded-lg px-4 py-3 border focus:outline-none bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" />
              <p className="text-xs text-muted mt-1">At least 6 characters</p>
            </div>
            <button type="submit" disabled={changingPw} className="btn-blue px-8 py-3 text-sm font-bold disabled:opacity-50">
              {changingPw ? 'Changing...' : 'Change Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
