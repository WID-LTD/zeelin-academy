'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserToken, getUserData, clearUserAuth, dispatchAuthEvent } from '@/lib/auth'
import type { Stats, Enrollment, User } from '@/lib/types'
import { BookOpen, FileText, Megaphone, CheckCircle2, Plus, Trash2, Save, X, Loader2, Users, ShieldCheck, HelpCircle, Upload, RefreshCw, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'

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

type Tab = 'enrollments' | 'users' | 'credentials' | 'courses' | 'content' | 'announcements' | 'exams'

interface ExamQuestion {
  id: number
  question: string
  options: string[]
  correct_answer: string
  explanation: string
  exam_type: string
}

export default function AdminDashboard() {
  const [user, setUser] = useState<{ email: string; full_name: string } | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [tab, setTab] = useState<Tab>('enrollments')
  const [newPassword, setNewPassword] = useState('')
  const [generatedCreds, setGeneratedCreds] = useState<{ email: string; password: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [authed, setAuthed] = useState(false)
  const router = useRouter()

  // Courses state
  const [courses, setCourses] = useState<any[]>([])
  const [showCourseForm, setShowCourseForm] = useState(false)
  const [courseForm, setCourseForm] = useState({ title: '', description: '', category: '', duration: '', level: '', instructor: '', price: 0 })
  const [editingCourse, setEditingCourse] = useState<any>(null)

  // Content state
  const [contentItems, setContentItems] = useState<any[]>([])
  const [showContentForm, setShowContentForm] = useState(false)
  const [contentForm, setContentForm] = useState({ title: '', description: '', url: '', category: '', content_type: '' })
  const [uploading, setUploading] = useState(false)

  // Announcements state
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [showAnnForm, setShowAnnForm] = useState(false)
  const [annForm, setAnnForm] = useState({ title: '', content: '', type: 'general' })

  // Exams state
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([])
  const [showExamForm, setShowExamForm] = useState(false)
  const [examForm, setExamForm] = useState({ question: '', options: ['', '', '', ''], correct_answer: '', explanation: '', exam_type: 'daily' })
  const [editingExam, setEditingExam] = useState<ExamQuestion | null>(null)

  // Pagination state
  const [enrollPage, setEnrollPage] = useState(1)
  const [userPage, setUserPage] = useState(1)
  const perPage = 10

  const token = typeof window !== 'undefined' ? getUserToken() : null
  const pollRef = useRef<ReturnType<typeof setInterval>>()

  const fetchData = useCallback(async () => {
    if (!token) return
    try {
      const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      const [statsRes, enrollmentsRes, usersRes] = await Promise.all([
        fetch('/api/auth/admin/stats', { headers }),
        fetch('/api/auth/admin/enrollments', { headers }),
        fetch('/api/auth/admin/users', { headers }),
      ])
      setStats(await statsRes.json())
      setEnrollments(await enrollmentsRes.json())
      setUsers(await usersRes.json())
    } catch {
      if (pollRef.current) clearInterval(pollRef.current)
      clearUserAuth()
      dispatchAuthEvent()
      router.push('/login')
    }
  }, [router, token])

  useEffect(() => {
    const t = getUserToken()
    const u = getUserData<{ email: string; full_name: string; role: string }>()
    if (!t || !u) { router.push('/login'); return }
    if (u.role !== 'admin') { router.push('/'); return }
    setUser(u)
    setAuthed(true)
    fetchData().then(() => setLoading(false))

    pollRef.current = setInterval(() => { fetchData() }, 30000)
    return () => { if (pollRef.current) clearInterval(pollRef.current) }
  }, [router, fetchData])

  const handleLogout = () => {
    if (pollRef.current) clearInterval(pollRef.current)
    clearUserAuth()
    dispatchAuthEvent()
    router.push('/')
  }

  const makeAuthdFetch = (url: string, options?: RequestInit) => {
    if (!token) return Promise.reject('No token')
    return fetch(url, { ...options, headers: { ...options?.headers, 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
  }

  const handleGenerateCredentials = async (enrollment: Enrollment) => {
    const res = await makeAuthdFetch('/api/auth/admin/generate-credentials', {
      method: 'POST', body: JSON.stringify({ enrollment_id: enrollment.id, email: enrollment.email, full_name: enrollment.full_name })
    })
    const data = await res.json()
    setGeneratedCreds({ email: enrollment.email, password: data.generatedPassword || 'Existing account' })
  }

  const handleChangePassword = async (userId: number) => {
    if (!newPassword) return
    await makeAuthdFetch('/api/auth/admin/change-password', { method: 'POST', body: JSON.stringify({ user_id: userId, password: newPassword }) })
    alert('Password updated'); setNewPassword('')
  }

  const fetchCourses = async () => {
    if (!token) return
    const res = await fetch('/api/courses', { headers: { 'Authorization': `Bearer ${token}` } })
    const data = await res.json()
    setCourses(Array.isArray(data) ? data : [])
  }

  const saveCourse = async () => {
    if (!token) return
    const url = editingCourse ? `/api/courses/${editingCourse.id}` : '/api/courses'
    const method = editingCourse ? 'PUT' : 'POST'
    await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(courseForm) })
    setShowCourseForm(false); setEditingCourse(null); setCourseForm({ title: '', description: '', category: '', duration: '', level: '', instructor: '', price: 0 })
    fetchCourses()
  }

  const deleteCourse = async (id: number) => {
    if (!confirm('Delete this course?')) return
    if (!token) return
    await fetch(`/api/courses/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    fetchCourses()
  }

  const fetchContent = async () => {
    if (!token) return
    const res = await fetch('/api/admin/content', { headers: { 'Authorization': `Bearer ${token}` } })
    const data = await res.json()
    setContentItems(Array.isArray(data) ? data : [])
  }

  const saveContent = async () => {
    if (!token) return
    await fetch('/api/admin/content', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(contentForm) })
    setShowContentForm(false); setContentForm({ title: '', description: '', url: '', category: '', content_type: '' })
    fetchContent()
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !token) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', headers: { 'Authorization': `Bearer ${token}` }, body: formData })
    const data = await res.json()
    if (data.url) setContentForm(p => ({ ...p, url: data.url }))
    setUploading(false)
  }

  const fetchAnnouncements = async () => {
    if (!token) return
    const res = await fetch('/api/announcements/all', { headers: { 'Authorization': `Bearer ${token}` } })
    const data = await res.json()
    setAnnouncements(Array.isArray(data) ? data : [])
  }

  const saveAnnouncement = async () => {
    if (!token) return
    await fetch('/api/announcements', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(annForm) })
    setShowAnnForm(false); setAnnForm({ title: '', content: '', type: 'general' })
    fetchAnnouncements()
  }

  const deleteAnnouncement = async (id: number) => {
    if (!confirm('Delete this announcement?')) return
    if (!token) return
    await fetch(`/api/announcements/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    fetchAnnouncements()
  }

  const fetchExamQuestions = async () => {
    if (!token) return
    const res = await fetch('/api/exams/questions', { headers: { 'Authorization': `Bearer ${token}` } })
    const data = await res.json()
    setExamQuestions(Array.isArray(data.value) ? data.value : [])
  }

  const saveExamQuestion = async () => {
    if (!token) return
    const url = editingExam ? `/api/exams/questions/${editingExam.id}` : '/api/exams/questions'
    const method = editingExam ? 'PUT' : 'POST'
    const payload = { ...examForm, options: JSON.stringify(examForm.options) }
    await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(payload) })
    setShowExamForm(false); setEditingExam(null); setExamForm({ question: '', options: ['', '', '', ''], correct_answer: '', explanation: '', exam_type: 'daily' })
    fetchExamQuestions()
  }

  const deleteExamQuestion = async (id: number) => {
    if (!confirm('Delete this question?')) return
    if (!token) return
    await fetch(`/api/exams/questions/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    fetchExamQuestions()
  }

  if (!authed || !user) return null

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: 'enrollments', label: 'Enrollments', icon: <CheckCircle2 className="w-4 h-4" /> },
    { key: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
    { key: 'credentials', label: 'Credentials', icon: <ShieldCheck className="w-4 h-4" /> },
    { key: 'courses', label: 'Courses', icon: <BookOpen className="w-4 h-4" /> },
    { key: 'content', label: 'Content', icon: <FileText className="w-4 h-4" /> },
    { key: 'announcements', label: 'Announcements', icon: <Megaphone className="w-4 h-4" /> },
    { key: 'exams', label: 'Exam Questions', icon: <HelpCircle className="w-4 h-4" /> },
  ]

  const enrolledPaginated = enrollments.slice(0, enrollPage * perPage)
  const usersPaginated = users.slice(0, userPage * perPage)
  const hasMoreEnroll = enrollPage * perPage < enrollments.length
  const hasMoreUsers = userPage * perPage < users.length

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-[color:var(--border)] bg-[color:var(--bg-card)] hidden lg:flex flex-col min-h-screen">
        <div className="p-6 border-b border-[color:var(--border)]">
          <h2 className="font-display text-lg font-bold text-[color:var(--text-core)]">Admin <span className="gold">CP</span></h2>
          <p className="text-xs text-muted mt-1 truncate">{user.full_name}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabs.map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); if (t.key === 'courses') fetchCourses(); if (t.key === 'content') fetchContent(); if (t.key === 'announcements') fetchAnnouncements(); if (t.key === 'exams') fetchExamQuestions(); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${tab === t.key ? 'gold-bg text-black' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
              {t.icon}{t.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-[color:var(--border)]">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 min-w-0 overflow-y-auto">
        {/* Mobile tabs */}
        <div className="lg:hidden flex gap-2 mb-6 flex-wrap">
          {tabs.map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); if (t.key === 'courses') fetchCourses(); if (t.key === 'content') fetchContent(); if (t.key === 'announcements') fetchAnnouncements(); if (t.key === 'exams') fetchExamQuestions(); }} className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1 ${tab === t.key ? 'btn-gold text-[color:var(--text-core)]' : 'bg-[color:var(--bg-card)] text-[color:var(--text-secondary)] border border-[color:var(--border)]'}`}>
              {t.icon}{t.label}
            </button>
          ))}
          <button onClick={handleLogout} className="px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1 text-red-500 bg-[color:var(--bg-card)] border border-red-200">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Header bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[color:var(--text-core)]"><span className="gold">Control Center</span></h1>
            <p className="text-sm text-muted mt-1">Welcome, {user.full_name}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => fetchData()} className="p-2 rounded-lg border border-[color:var(--border)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]" title="Refresh"><RefreshCw className="w-4 h-4" /></button>
            <Link href="/dashboard" className="text-sm text-muted hover:gold">&larr; Dashboard</Link>
          </div>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">{[1,2,3,4].map(i => <div key={i} className="p-6 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]"><Skeleton className="w-16 h-9 mb-2" /><Skeleton className="w-24 h-4" /></div>)}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <StatCard label="Total Enrollments" value={stats?.total} />
            <StatCard label="Free Access" value={stats?.free} />
            <StatCard label="Full Program" value={stats?.paid} />
            <StatCard label="Verified" value={stats?.verified} />
          </div>
        )}

        {/* Enrollments */}
        {tab === 'enrollments' && (
          <div className="rounded-xl border overflow-hidden bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)]"><h2 className="font-bold text-[color:var(--text-core)]">All Enrollments ({enrollments.length})</h2></div>
            {enrollments.length === 0 ? <div className="p-12 text-center text-muted"><p>No enrollments yet.</p></div> : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[color:var(--border)]"><th className="p-4 text-left text-muted">Name</th><th className="p-4 text-left text-muted">Email</th><th className="p-4 text-left text-muted">Module</th><th className="p-4 text-left text-muted">Type</th><th className="p-4 text-left text-muted">Status</th><th className="p-4 text-left text-muted">Date</th></tr></thead>
                  <tbody>{enrolledPaginated.map(e => (
                    <tr key={e.id} className="border-b border-[color:var(--border)]">
                      <td className="p-4 text-[color:var(--text-core)]">{e.full_name}</td>
                      <td className="p-4 text-secondary">{e.email}</td>
                      <td className="p-4 text-secondary">{e.selected_module || '-'}</td>
                      <td className="p-4"><span className="px-2 py-1 rounded-full text-xs font-bold gold">{e.enrollment_type}</span></td>
                      <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${e.status === 'verified' ? 'gold' : 'text-muted'}`}>{e.status}</span></td>
                      <td className="p-4 text-muted whitespace-nowrap">{new Date(e.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            )}
            {enrollments.length > perPage && (
              <div className="p-4 border-t border-[color:var(--border)] flex justify-center">
                <button onClick={() => setEnrollPage(p => hasMoreEnroll ? p + 1 : 1)} className="flex items-center gap-1 text-sm gold font-medium">
                  {hasMoreEnroll ? <>Show More <ChevronRight className="w-4 h-4" /></> : <>Show Less <ChevronLeft className="w-4 h-4" /></>}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Users */}
        {tab === 'users' && (
          <div className="rounded-xl border overflow-hidden bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)]"><h2 className="font-bold text-[color:var(--text-core)]">All Users ({users.length})</h2></div>
            {users.length === 0 ? <div className="p-12 text-center text-muted"><p>No users yet.</p></div> : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[color:var(--border)]"><th className="p-4 text-left text-muted">Name</th><th className="p-4 text-left text-muted">Email</th><th className="p-4 text-left text-muted">Role</th><th className="p-4 text-left text-muted">Joined</th></tr></thead>
                  <tbody>{usersPaginated.map(u => (
                    <tr key={u.id} className="border-b border-[color:var(--border)]">
                      <td className="p-4 text-[color:var(--text-core)]">{u.full_name}</td>
                      <td className="p-4 text-secondary">{u.email}</td>
                      <td className="p-4"><span className="gold">{u.role}</span></td>
                      <td className="p-4 text-muted whitespace-nowrap">{new Date(u.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            )}
            {users.length > perPage && (
              <div className="p-4 border-t border-[color:var(--border)] flex justify-center">
                <button onClick={() => setUserPage(p => hasMoreUsers ? p + 1 : 1)} className="flex items-center gap-1 text-sm gold font-medium">
                  {hasMoreUsers ? <>Show More <ChevronRight className="w-4 h-4" /></> : <>Show Less <ChevronLeft className="w-4 h-4" /></>}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Credentials */}
        {tab === 'credentials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6 bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <h2 className="font-bold mb-4 text-[color:var(--text-core)]">Generate Credentials</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {enrollments.filter(e => e.status === 'verified').map(e => (
                  <div key={e.id} className="flex items-center justify-between p-3 rounded-lg border border-[color:var(--border)]">
                    <div><p className="text-sm text-[color:var(--text-core)]">{e.full_name}</p><p className="text-xs text-muted">{e.email}</p></div>
                    <button onClick={() => handleGenerateCredentials(e)} className="btn-gold text-xs px-3 py-1.5 text-[color:var(--text-core)]">Generate</button>
                  </div>
                ))}
                {enrollments.filter(e => e.status === 'verified').length === 0 && <p className="text-sm text-muted">No verified enrollments pending.</p>}
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
              <h2 className="font-bold mb-4 text-[color:var(--text-core)]">Change User Password</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {users.filter(u => u.role === 'student').map(u => (
                  <div key={u.id} className="p-3 rounded-lg border border-[color:var(--border)]">
                    <p className="text-sm text-[color:var(--text-core)]">{u.full_name}</p>
                    <p className="text-xs text-muted mb-2">{u.email}</p>
                    <div className="flex gap-2">
                      <input type="text" placeholder="New password" className="flex-1 rounded-lg px-3 py-1.5 text-sm border bg-[color:var(--bg-primary)] text-[color:var(--text-core)] border-[color:var(--border)]" onChange={e => setNewPassword(e.target.value)} />
                      <button onClick={() => handleChangePassword(u.id)} className="btn-gold text-xs px-3 py-1.5 text-[color:var(--text-core)]">Update</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Courses Management */}
        {tab === 'courses' && (
          <div className="rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)] flex items-center justify-between flex-wrap gap-2">
              <h2 className="font-bold text-[color:var(--text-core)]">Course Management</h2>
              <button onClick={() => { setShowCourseForm(true); setEditingCourse(null); setCourseForm({ title: '', description: '', category: '', duration: '', level: '', instructor: '', price: 0 }) }} className="btn-gold px-4 py-2 text-xs font-bold flex items-center gap-1"><Plus className="w-4 h-4" /> Add Course</button>
            </div>
            <div className="p-6">
              {courses.length === 0 ? (
                <p className="text-center text-muted py-8">No courses. Click &quot;Add Course&quot; to create one.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courses.map(c => (
                    <div key={c.id} className="flex items-center justify-between p-4 rounded-lg border border-[color:var(--border)]">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[color:var(--text-core)] truncate">{c.title}</h3>
                        <p className="text-xs text-muted truncate">{c.category} &middot; {c.level} &middot; {c.duration} &middot; ${c.price}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => { setEditingCourse(c); setCourseForm({ title: c.title, description: c.description, category: c.category, duration: c.duration, level: c.level, instructor: c.instructor, price: parseFloat(c.price) }); setShowCourseForm(true) }} className="text-xs px-3 py-1.5 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)] hover:border-[color:var(--brand-gold)]"><Save className="w-3 h-3 inline mr-1" />Edit</button>
                        <button onClick={() => deleteCourse(c.id)} className="text-xs px-3 py-1.5 border border-red-200 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3 h-3 inline mr-1" />Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {showCourseForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCourseForm(false)}>
                <div className="bg-[color:var(--bg-primary)] rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-xl text-[color:var(--text-core)]">{editingCourse ? 'Edit Course' : 'Add Course'}</h3>
                    <button onClick={() => setShowCourseForm(false)}><X className="w-5 h-5 text-[color:var(--text-muted)]" /></button>
                  </div>
                  <div className="space-y-4">
                    {['title', 'description', 'category', 'duration', 'level', 'instructor'].map(field => (
                      <div key={field}><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1 capitalize">{field}</label>
                        {field === 'description' ? <textarea className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" rows={3} value={courseForm[field as keyof typeof courseForm]} onChange={e => setCourseForm(p => ({ ...p, [field]: e.target.value }))} /> :
                        <input className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={courseForm[field as keyof typeof courseForm]} onChange={e => setCourseForm(p => ({ ...p, [field]: e.target.value }))} />}
                      </div>
                    ))}
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Price ($)</label><input type="number" className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={courseForm.price} onChange={e => setCourseForm(p => ({ ...p, price: parseFloat(e.target.value) || 0 }))} /></div>
                    <button onClick={saveCourse} className="btn-gold w-full py-3 font-bold">{editingCourse ? 'Update' : 'Create'} Course</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content Management */}
        {tab === 'content' && (
          <div className="rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)] flex items-center justify-between flex-wrap gap-2">
              <h2 className="font-bold text-[color:var(--text-core)]">Content Library</h2>
              <button onClick={() => setShowContentForm(true)} className="btn-gold px-4 py-2 text-xs font-bold flex items-center gap-1"><Plus className="w-4 h-4" /> Add Content</button>
            </div>
            <div className="p-6">
              {contentItems.length === 0 ? <p className="text-center text-muted py-8">No content items.</p> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {contentItems.map(c => (
                    <div key={c.id} className="p-4 rounded-lg border border-[color:var(--border)]">
                      <h3 className="font-bold text-[color:var(--text-core)] text-sm">{c.title}</h3>
                      <p className="text-xs text-muted mt-1">{c.category} &middot; {c.content_type}</p>
                      <p className="text-xs text-muted mt-1 truncate">{c.url}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {showContentForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowContentForm(false)}>
                <div className="bg-[color:var(--bg-primary)] rounded-2xl p-8 max-w-lg w-full" onClick={e => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6"><h3 className="font-bold text-xl text-[color:var(--text-core)]">Add Content</h3><button onClick={() => setShowContentForm(false)}><X className="w-5 h-5 text-[color:var(--text-muted)]" /></button></div>
                  <div className="space-y-4">
                    {['title', 'description', 'category', 'content_type'].map(field => (
                      <div key={field}><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1 capitalize">{field.replace('_', ' ')}</label>
                        <input className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={contentForm[field as keyof typeof contentForm]} onChange={e => setContentForm(p => ({ ...p, [field]: e.target.value }))} />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">File URL</label>
                      <div className="flex gap-2">
                        <input className="flex-1 rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={contentForm.url} onChange={e => setContentForm(p => ({ ...p, url: e.target.value }))} />
                      </div>
                      <div className="mt-2">
                        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[color:var(--border)] text-sm text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]">
                          <Upload className="w-4 h-4" /> {uploading ? 'Uploading...' : 'Upload File'}
                          <input type="file" className="hidden" onChange={handleFileUpload} disabled={uploading} />
                        </label>
                      </div>
                    </div>
                    <button onClick={saveContent} className="btn-gold w-full py-3 font-bold">Add Content</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Announcements */}
        {tab === 'announcements' && (
          <div className="rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)] flex items-center justify-between flex-wrap gap-2">
              <h2 className="font-bold text-[color:var(--text-core)]">Announcements</h2>
              <button onClick={() => setShowAnnForm(true)} className="btn-gold px-4 py-2 text-xs font-bold flex items-center gap-1"><Plus className="w-4 h-4" /> New Announcement</button>
            </div>
            <div className="p-6 space-y-3">
              {announcements.length === 0 ? <p className="text-center text-muted py-8">No announcements.</p> : announcements.map(a => (
                <div key={a.id} className="p-4 rounded-lg border border-[color:var(--border)] flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2"><span className="text-xs font-bold gold uppercase">{a.type}</span><span className="text-xs text-muted">{new Date(a.created_at).toLocaleDateString()}</span></div>
                    <h3 className="font-bold text-[color:var(--text-core)]">{a.title}</h3>
                    <p className="text-sm text-muted mt-1">{a.content}</p>
                  </div>
                  <button onClick={() => deleteAnnouncement(a.id)} className="text-red-500 hover:bg-red-50 p-1 rounded shrink-0"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
            {showAnnForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowAnnForm(false)}>
                <div className="bg-[color:var(--bg-primary)] rounded-2xl p-8 max-w-lg w-full" onClick={e => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6"><h3 className="font-bold text-xl text-[color:var(--text-core)]">New Announcement</h3><button onClick={() => setShowAnnForm(false)}><X className="w-5 h-5 text-[color:var(--text-muted)]" /></button></div>
                  <div className="space-y-4">
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Title</label><input className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={annForm.title} onChange={e => setAnnForm(p => ({ ...p, title: e.target.value }))} /></div>
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Content</label><textarea className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" rows={3} value={annForm.content} onChange={e => setAnnForm(p => ({ ...p, content: e.target.value }))} /></div>
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Type</label>
                      <select className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={annForm.type} onChange={e => setAnnForm(p => ({ ...p, type: e.target.value }))}>
                        <option value="general">General</option><option value="welcome">Welcome</option><option value="update">Update</option><option value="exam">Exam</option>
                      </select>
                    </div>
                    <button onClick={saveAnnouncement} className="btn-gold w-full py-3 font-bold">Post Announcement</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Exam Questions Management */}
        {tab === 'exams' && (
          <div className="rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <div className="p-6 border-b border-[color:var(--border)] flex items-center justify-between flex-wrap gap-2">
              <h2 className="font-bold text-[color:var(--text-core)]">Exam Question Bank ({examQuestions.length})</h2>
              <button onClick={() => { setShowExamForm(true); setEditingExam(null); setExamForm({ question: '', options: ['', '', '', ''], correct_answer: '', explanation: '', exam_type: 'daily' }) }} className="btn-gold px-4 py-2 text-xs font-bold flex items-center gap-1"><Plus className="w-4 h-4" /> Add Question</button>
            </div>
            <div className="p-6 space-y-4">
              {examQuestions.length === 0 ? (
                <p className="text-center text-muted py-8">No exam questions. Click &quot;Add Question&quot; to create one.</p>
              ) : examQuestions.map(q => (
                <div key={q.id} className="p-4 rounded-lg border border-[color:var(--border)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1"><span className="text-xs font-bold gold uppercase">{q.exam_type}</span></div>
                      <p className="font-bold text-[color:var(--text-core)] text-sm">{q.question}</p>
                      <ul className="mt-2 space-y-1">
                        {(typeof q.options === 'string' ? JSON.parse(q.options) : q.options).map((opt: string, i: number) => (
                          <li key={i} className={`text-xs ${opt === q.correct_answer ? 'gold font-semibold' : 'text-muted'}`}>{opt === q.correct_answer ? '✓ ' : ''}{opt}</li>
                        ))}
                      </ul>
                      {q.explanation && <p className="text-xs text-muted mt-2 italic">{q.explanation}</p>}
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => { setEditingExam(q); setExamForm({ question: q.question, options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options, correct_answer: q.correct_answer, explanation: q.explanation || '', exam_type: q.exam_type }); setShowExamForm(true) }} className="text-xs px-3 py-1.5 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)]"><Save className="w-3 h-3 inline mr-1" />Edit</button>
                      <button onClick={() => deleteExamQuestion(q.id)} className="text-xs px-3 py-1.5 border border-red-200 rounded-lg text-red-500"><Trash2 className="w-3 h-3 inline mr-1" />Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showExamForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowExamForm(false)}>
                <div className="bg-[color:var(--bg-primary)] rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6"><h3 className="font-bold text-xl text-[color:var(--text-core)]">{editingExam ? 'Edit Question' : 'Add Question'}</h3><button onClick={() => setShowExamForm(false)}><X className="w-5 h-5 text-[color:var(--text-muted)]" /></button></div>
                  <div className="space-y-4">
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Question</label><textarea className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" rows={3} value={examForm.question} onChange={e => setExamForm(p => ({ ...p, question: e.target.value }))} /></div>
                    {examForm.options.map((opt, i) => (
                      <div key={i}><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Option {i + 1}</label>
                        <input className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={opt} onChange={e => { const opts = [...examForm.options]; opts[i] = e.target.value; setExamForm(p => ({ ...p, options: opts })) }} />
                      </div>
                    ))}
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Correct Answer</label>
                      <select className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={examForm.correct_answer} onChange={e => setExamForm(p => ({ ...p, correct_answer: e.target.value }))}>
                        <option value="">Select correct answer</option>
                        {examForm.options.map((opt, i) => opt ? <option key={i} value={opt}>{opt}</option> : null)}
                      </select>
                    </div>
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Explanation</label><textarea className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" rows={2} value={examForm.explanation} onChange={e => setExamForm(p => ({ ...p, explanation: e.target.value }))} /></div>
                    <div><label className="block text-sm font-semibold text-[color:var(--text-core)] mb-1">Exam Type</label>
                      <select className="w-full rounded-lg border border-[color:var(--border)] p-2.5 text-sm bg-[color:var(--bg-card)] text-[color:var(--text-core)]" value={examForm.exam_type} onChange={e => setExamForm(p => ({ ...p, exam_type: e.target.value }))}>
                        <option value="daily">Daily</option><option value="mock">Mock</option><option value="final">Final</option>
                      </select>
                    </div>
                    <button onClick={saveExamQuestion} className="btn-gold w-full py-3 font-bold">{editingExam ? 'Update' : 'Add'} Question</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
