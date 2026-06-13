'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { adminApi } from '@/lib/api'
import { clearAdminAuth, getAdminToken, getAdminUser } from '@/lib/auth'
import type { Stats, Enrollment, User } from '@/lib/types'

function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-[color:var(--border)] rounded ${className}`} />
}

function StatCard({ label, value }: { label: string; value: number | undefined | null }) {
  return (
    <div className="p-6 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
      <div className="font-display text-3xl font-bold gold">
        {value !== undefined && value !== null ? value : <Skeleton className="w-16 h-9" />}
      </div>
      <div className="text-sm mt-1 text-muted">{label}</div>
    </div>
  )
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [tab, setTab] = useState<'enrollments' | 'users' | 'credentials'>('enrollments')
  const [selectedEnrollment, setSelectedEnrollment] = useState<Enrollment | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [generatedCreds, setGeneratedCreds] = useState<{ email: string; password: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchData = useCallback(async () => {
    try {
      const [statsData, enrollmentsData, usersData] = await Promise.all([
        adminApi.get<Stats>('/api/auth/admin/stats'),
        adminApi.get<Enrollment[]>('/api/auth/admin/enrollments'),
        adminApi.get<User[]>('/api/auth/admin/users'),
      ])
      setStats(statsData)
      setEnrollments(enrollmentsData)
      setUsers(usersData)
    } catch {
      clearAdminAuth()
      router.push('/admin/login')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    const t = getAdminToken()
    const u = getAdminUser()
    if (!t || !u) {
      router.push('/admin/login')
      return
    }
    setUser(JSON.parse(u))
    fetchData()
  }, [router, fetchData])

  const handleLogout = () => {
    clearAdminAuth()
    router.push('/admin/login')
  }

  const handleGenerateCredentials = async (enrollment: Enrollment) => {
    const data = await adminApi.post<{ generatedPassword?: string }>('/api/auth/admin/generate-credentials', {
      enrollment_id: enrollment.id,
      email: enrollment.email,
      full_name: enrollment.full_name,
    })
    setGeneratedCreds({ email: enrollment.email, password: data.generatedPassword || 'Existing account' })
    setSelectedEnrollment(enrollment)
  }

  const handleChangePassword = async (userId: number) => {
    if (!newPassword) return
    await adminApi.post('/api/auth/admin/change-password', {
      user_id: userId,
      password: newPassword,
    })
    alert('Password updated')
    setNewPassword('')
  }

  if (!user) return null

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-3xl font-bold text-[color:var(--text-core)]">
              Admin <span className="gold">Dashboard</span>
            </h1>
            <p className="text-sm mt-1 text-muted">Welcome, {user.full_name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border text-sm transition-colors border-[color:var(--border)] text-[color:var(--text-secondary)]"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
                <Skeleton className="w-16 h-9 mb-2" />
                <Skeleton className="w-24 h-4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <StatCard label="Total Enrollments" value={stats?.total} />
            <StatCard label="Free Access" value={stats?.free} />
            <StatCard label="Full Program" value={stats?.paid} />
            <StatCard label="Verified" value={stats?.verified} />
          </div>
        )}

        <div className="flex gap-4 mb-6">
          {[
            { key: 'enrollments' as const, label: 'Enrollments' },
            { key: 'users' as const, label: 'Users' },
            { key: 'credentials' as const, label: 'Credentials' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === t.key ? 'btn-gold text-[color:var(--text-core)]' : 'bg-[color:var(--bg-card)] text-[color:var(--text-secondary)] border border-[color:var(--border)]'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'enrollments' && (
          <div className="rounded-xl border overflow-hidden bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)]">
              <h2 className="font-display text-lg font-bold text-[color:var(--text-core)]">All Enrollments</h2>
            </div>
            {enrollments.length === 0 ? (
              <div className="p-12 text-center text-muted">
                <p>No enrollments yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--border)]">
                      <th className="p-4 text-left text-muted">Name</th>
                      <th className="p-4 text-left text-muted">Email</th>
                      <th className="p-4 text-left text-muted">Module</th>
                      <th className="p-4 text-left text-muted">Type</th>
                      <th className="p-4 text-left text-muted">Status</th>
                      <th className="p-4 text-left text-muted">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrollments.map((e) => (
                      <tr key={e.id} className="border-b border-[color:var(--border)]">
                        <td className="p-4 text-[color:var(--text-core)]">{e.full_name}</td>
                        <td className="p-4 text-secondary">{e.email}</td>
                        <td className="p-4 text-secondary">{e.selected_module || '-'}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 rounded-full text-xs font-bold gold">
                            {e.enrollment_type}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${e.status === 'verified' ? 'gold' : 'text-muted'}`}>
                            {e.status}
                          </span>
                        </td>
                        <td className="p-4 text-muted">{new Date(e.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === 'users' && (
          <div className="rounded-xl border overflow-hidden bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)]">
              <h2 className="font-display text-lg font-bold text-[color:var(--text-core)]">All Users</h2>
            </div>
            {users.length === 0 ? (
              <div className="p-12 text-center text-muted"><p>No users yet.</p></div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--border)]">
                      <th className="p-4 text-left text-muted">Name</th>
                      <th className="p-4 text-left text-muted">Email</th>
                      <th className="p-4 text-left text-muted">Role</th>
                      <th className="p-4 text-left text-muted">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id} className="border-b border-[color:var(--border)]">
                        <td className="p-4 text-[color:var(--text-core)]">{u.full_name}</td>
                        <td className="p-4 text-secondary">{u.email}</td>
                        <td className="p-4"><span className="gold">{u.role}</span></td>
                        <td className="p-4 text-muted">{new Date(u.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === 'credentials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6 bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <h2 className="font-display text-lg font-bold mb-4 text-[color:var(--text-core)]">Generate Credentials</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {enrollments.filter((e) => e.status === 'verified').map((e) => (
                  <div key={e.id} className="flex items-center justify-between p-3 rounded-lg border border-[color:var(--border)]">
                    <div>
                      <p className="text-sm text-[color:var(--text-core)]">{e.full_name}</p>
                      <p className="text-xs text-muted">{e.email}</p>
                    </div>
                    <button
                      onClick={() => handleGenerateCredentials(e)}
                      className="btn-gold text-xs px-3 py-1.5 text-[color:var(--text-core)]"
                    >
                      Generate
                    </button>
                  </div>
                ))}
                {enrollments.filter((e) => e.status === 'verified').length === 0 && (
                  <p className="text-sm text-muted">No verified enrollments pending credential generation.</p>
                )}
              </div>
              {generatedCreds && (
                <div className="mt-4 p-4 rounded-lg border border-[color:var(--brand-gold)]">
                  <p className="text-sm font-bold gold">Credentials Generated</p>
                  <p className="text-xs text-muted mt-1">Email: {generatedCreds.email}</p>
                  <p className="text-xs text-muted">Password: {generatedCreds.password}</p>
                </div>
              )}
            </div>

            <div className="rounded-xl border p-6 bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <h2 className="font-display text-lg font-bold mb-4 text-[color:var(--text-core)]">Change User Password</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {users.filter((u) => u.role === 'student').map((u) => (
                  <div key={u.id} className="p-3 rounded-lg border border-[color:var(--border)]">
                    <p className="text-sm text-[color:var(--text-core)]">{u.full_name}</p>
                    <p className="text-xs text-muted mb-2">{u.email}</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="New password"
                        className="flex-1 rounded-lg px-3 py-1.5 text-sm border bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <button
                        onClick={() => handleChangePassword(u.id)}
                        className="btn-gold text-xs px-3 py-1.5 text-[color:var(--text-core)]"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Link href="/" className="text-sm footer-link">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
