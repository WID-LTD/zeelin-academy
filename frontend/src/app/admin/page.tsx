'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Stats {
  total: number; free: number; paid: number; verified: number
}

interface Enrollment {
  id: number; full_name: string; email: string; phone: string;
  selected_module: string; enrollment_type: string; status: string;
  created_at: string
}

interface PackageEnrollment {
  id: number; full_name: string; email: string; phone: string;
  package_slug: string; enrollment_status: string;
  amount: number; currency: string; payment_status: string;
  stripe_session_id: string; package_name: string; package_price: number;
  created_at: string
}

interface User {
  id: number; email: string; full_name: string; role: string; created_at: string
}

export default function AdminDashboard() {
  const [token, setToken] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [packageEnrollments, setPackageEnrollments] = useState<PackageEnrollment[]>([])
  const [packageStats, setPackageStats] = useState<{ total: number; revenue: number; paid: number; pending: number } | null>(null)
  const [packageFilter, setPackageFilter] = useState('all')
  const [paymentFilter, setPaymentFilter] = useState('all')
  const [users, setUsers] = useState<User[]>([])
  const [tab, setTab] = useState<'enrollments' | 'users' | 'credentials' | 'packages'>('enrollments')
  const [selectedEnrollment, setSelectedEnrollment] = useState<Enrollment | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [generatedCreds, setGeneratedCreds] = useState<{email: string; password: string} | null>(null)
  const router = useRouter()

  useEffect(() => {
    const t = localStorage.getItem('admin-token')
    const u = localStorage.getItem('admin-user')
    if (!t || !u) {
      router.push('/admin/login')
      return
    }
    setToken(t)
    setUser(JSON.parse(u))
    fetchData(t)
  }, [router])

  const api = (path: string, options?: RequestInit, overrideToken?: string) =>
    fetch(path, {
      ...options,
      headers: { ...options?.headers, 'Authorization': `Bearer ${overrideToken || token}` }
    })

  const fetchData = async (t: string) => {
    try {
      const [sRes, eRes, uRes, pRes] = await Promise.all([
        api('/api/auth/admin/stats', {}, t),
        api('/api/auth/admin/enrollments', {}, t),
        api('/api/auth/admin/users', {}, t),
        api('/api/auth/admin/package-enrollments', {}, t)
      ])
      if (sRes.ok) setStats(await sRes.json())
      if (eRes.ok) setEnrollments(await eRes.json())
      if (uRes.ok) setUsers(await uRes.json())
      if (pRes.ok) {
        const pData = await pRes.json()
        setPackageEnrollments(pData.enrollments || [])
        setPackageStats(pData.stats)
      }
    } catch {}
  }

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    localStorage.removeItem('admin-user')
    router.push('/admin/login')
  }

  const handleGenerateCredentials = async (enrollment: Enrollment) => {
    const res = await api('/api/auth/admin/generate-credentials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enrollment_id: enrollment.id, email: enrollment.email, full_name: enrollment.full_name })
    })
    const data = await res.json()
    if (res.ok) {
      setGeneratedCreds({ email: enrollment.email, password: data.generatedPassword || 'Existing account' })
      setSelectedEnrollment(enrollment)
    }
  }

  const handleChangePassword = async (userId: number) => {
    if (!newPassword) return
    const res = await api('/api/auth/admin/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, password: newPassword })
    })
    if (res.ok) alert('Password updated')
    setNewPassword('')
  }

  if (!user) return null

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-3xl font-bold" style={{ color: 'var(--text-core)' }}>Admin <span className="gold">Dashboard</span></h1>
            <p className="text-sm mt-1 text-muted">Welcome, {user.full_name}</p>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 rounded-lg border text-sm transition-colors" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Enrollments', value: stats?.total || 0 },
            { label: 'Free Access', value: stats?.free || 0 },
            { label: 'Full Program', value: stats?.paid || 0 },
            { label: 'Verified', value: stats?.verified || 0 }
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="font-display text-3xl font-bold gold">{stat.value}</div>
              <div className="text-sm mt-1 text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {[
            { key: 'enrollments', label: 'Enrollments' },
            { key: 'packages', label: 'Package Enrollments' },
            { key: 'users', label: 'Users' },
            { key: 'credentials', label: 'Credentials' }
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key as typeof tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === t.key ? 'btn-gold' : ''}`}
              style={tab !== t.key ? { backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border)' } : { color: 'var(--text-core)' }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Enrollments Tab */}
        {tab === 'enrollments' && (
          <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <h2 className="font-display text-lg font-bold" style={{ color: 'var(--text-core)' }}>All Enrollments</h2>
            </div>
            {enrollments.length === 0 ? (
              <div className="p-12 text-center text-muted">
                <p>No enrollments yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <th className="p-4 text-left text-muted">Name</th>
                      <th className="p-4 text-left text-muted">Email</th>
                      <th className="p-4 text-left text-muted">Module</th>
                      <th className="p-4 text-left text-muted">Type</th>
                      <th className="p-4 text-left text-muted">Status</th>
                      <th className="p-4 text-left text-muted">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrollments.map(e => (
                      <tr key={e.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="p-4" style={{ color: 'var(--text-core)' }}>{e.full_name}</td>
                        <td className="p-4 text-secondary">{e.email}</td>
                        <td className="p-4 text-secondary">{e.selected_module || '-'}</td>
                        <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${e.enrollment_type === 'free' ? 'gold' : 'gold'}`}>{e.enrollment_type}</span></td>
                        <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${e.status === 'verified' ? 'gold' : 'text-muted'}`}>{e.status}</span></td>
                        <td className="p-4 text-muted">{new Date(e.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Package Enrollments Tab */}
        {tab === 'packages' && (
          <div className="space-y-6">
            {/* Package Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Package Enrollments', value: packageStats?.total || 0 },
                { label: 'Paid', value: packageStats?.paid || 0 },
                { label: 'Pending Payment', value: packageStats?.pending || 0 },
                { label: 'Revenue', value: `£${packageStats?.revenue.toFixed(2) || '0.00'}` }
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="font-display text-3xl font-bold gold">{stat.value}</div>
                  <div className="text-sm mt-1 text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex gap-4 flex-wrap">
              <select value={packageFilter} onChange={e => setPackageFilter(e.target.value)}
                className="rounded-lg px-3 py-2 text-sm border"
                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
                <option value="all">All Packages</option>
                <option value="single-module">Module-by-Module</option>
                <option value="complete-bundle">Complete Bundle</option>
                <option value="fast-track">Fast-Track</option>
              </select>
              <select value={paymentFilter} onChange={e => setPaymentFilter(e.target.value)}
                className="rounded-lg px-3 py-2 text-sm border"
                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
                <option value="all">All Payment Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Package Enrollments Table */}
            <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <h2 className="font-display text-lg font-bold" style={{ color: 'var(--text-core)' }}>Package Enrollments</h2>
              </div>
              {packageEnrollments.length === 0 ? (
                <div className="p-12 text-center text-muted"><p>No package enrollments yet.</p></div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        <th className="p-4 text-left text-muted">Name</th>
                        <th className="p-4 text-left text-muted">Email</th>
                        <th className="p-4 text-left text-muted">Package</th>
                        <th className="p-4 text-left text-muted">Amount</th>
                        <th className="p-4 text-left text-muted">Payment</th>
                        <th className="p-4 text-left text-muted">Enrollment</th>
                        <th className="p-4 text-left text-muted">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packageEnrollments
                        .filter(e => packageFilter === 'all' || e.package_slug === packageFilter)
                        .filter(e => paymentFilter === 'all' || e.payment_status === paymentFilter || (paymentFilter === 'paid' && e.enrollment_status === 'paid') || (paymentFilter === 'pending' && e.enrollment_status === 'pending'))
                        .map(e => (
                        <tr key={e.id} style={{ borderBottom: '1px solid var(--border)' }}>
                          <td className="p-4" style={{ color: 'var(--text-core)' }}>{e.full_name}</td>
                          <td className="p-4 text-secondary">{e.email}</td>
                          <td className="p-4">
                            <span className="text-xs font-bold" style={{ color: 'var(--brand-gold)' }}>
                              {e.package_name || e.package_slug?.replace(/-/g, ' ')}
                            </span>
                          </td>
                          <td className="p-4 text-secondary">{e.amount ? `£${e.amount}` : '-'}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              e.payment_status === 'completed' || e.enrollment_status === 'paid'
                                ? 'gold' : 'text-muted'
                            }`}>
                              {e.payment_status === 'completed' || e.enrollment_status === 'paid' ? 'Paid' : 'Pending'}
                            </span>
                          </td>
                          <td className="p-4 text-secondary">{e.enrollment_status}</td>
                          <td className="p-4 text-muted">{new Date(e.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {tab === 'users' && (
          <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <h2 className="font-display text-lg font-bold" style={{ color: 'var(--text-core)' }}>All Users</h2>
            </div>
            {users.length === 0 ? (
              <div className="p-12 text-center text-muted"><p>No users yet.</p></div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <th className="p-4 text-left text-muted">Name</th>
                      <th className="p-4 text-left text-muted">Email</th>
                      <th className="p-4 text-left text-muted">Role</th>
                      <th className="p-4 text-left text-muted">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="p-4" style={{ color: 'var(--text-core)' }}>{u.full_name}</td>
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

        {/* Credentials Tab */}
        {tab === 'credentials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h2 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--text-core)' }}>Generate Credentials</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {enrollments.filter(e => e.status === 'verified').map(e => (
                  <div key={e.id} className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
                    <div>
                      <p className="text-sm" style={{ color: 'var(--text-core)' }}>{e.full_name}</p>
                      <p className="text-xs text-muted">{e.email}</p>
                    </div>
                    <button onClick={() => handleGenerateCredentials(e)}
                      className="btn-gold text-xs px-3 py-1.5" style={{ color: 'var(--text-core)' }}>
                      Generate
                    </button>
                  </div>
                ))}
                {enrollments.filter(e => e.status === 'verified').length === 0 && (
                  <p className="text-sm text-muted">No verified enrollments pending credential generation.</p>
                )}
              </div>
              {generatedCreds && (
                <div className="mt-4 p-4 rounded-lg border" style={{ borderColor: 'var(--brand-gold)' }}>
                  <p className="text-sm font-bold gold">Credentials Generated</p>
                  <p className="text-xs text-muted mt-1">Email: {generatedCreds.email}</p>
                  <p className="text-xs text-muted">Password: {generatedCreds.password}</p>
                </div>
              )}
            </div>

            <div className="rounded-xl border p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h2 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--text-core)' }}>Change User Password</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {users.filter(u => u.role === 'student').map(u => (
                  <div key={u.id} className="p-3 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-sm" style={{ color: 'var(--text-core)' }}>{u.full_name}</p>
                    <p className="text-xs text-muted mb-2">{u.email}</p>
                    <div className="flex gap-2">
                      <input type="text" placeholder="New password"
                        className="flex-1 rounded-lg px-3 py-1.5 text-sm border"
                        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
                        onChange={(e) => setNewPassword(e.target.value)} />
                      <button onClick={() => handleChangePassword(u.id)}
                        className="btn-gold text-xs px-3 py-1.5" style={{ color: 'var(--text-core)' }}>
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