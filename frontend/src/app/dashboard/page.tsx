'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserData, clearUserAuth, getUserToken } from '@/lib/auth'
import { PlayCircle, CheckCircle2, Briefcase, BookOpen, Star, ArrowRight, Bell, Calendar, ChevronRight } from 'lucide-react'

interface DashboardData {
  courses_in_progress: number
  courses_completed: number
  certificates: number
  enrolled_courses: any[]
  learning_activity: { date: string; count: number }[]
  announcements: any[]
  recommended_courses: any[]
}

export default function UserDashboard() {
  const [user, setUser] = useState<{ email: string; full_name: string } | null>(null)
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const u = getUserData<{ email: string; full_name: string }>()
    if (!u) { router.push('/login'); return }
    setUser(u)
    const token = getUserToken()
    if (token) {
      fetch('/api/dashboard', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(r => r.json())
        .then(d => { setData(d); setLoading(false) })
        .catch(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => { clearUserAuth(); router.push('/login') }

  if (!user) return null

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const activityMap: Record<string, number> = {}
  if (data?.learning_activity) {
    data.learning_activity.forEach((a: any) => {
      const day = new Date(a.date).getDay()
      const idx = day === 0 ? 6 : day - 1
      activityMap[idx] = a.count
    })
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[color:var(--text-core)] mb-1">
            Welcome back, <span className="gold">{user.full_name}</span>
          </h1>
          <p className="text-[color:var(--text-secondary)]">Ready to continue your learning journey?</p>
        </div>
        <button onClick={handleLogout} className="px-5 py-2 rounded-lg border border-[color:var(--border)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] transition-colors text-sm font-medium">Sign Out</button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[1,2,3].map(i => <div key={i} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] animate-pulse"><div className="w-12 h-12 rounded-xl bg-[color:var(--border)] mb-4" /><div className="h-4 bg-[color:var(--border)] rounded w-24 mb-2" /><div className="h-8 bg-[color:var(--border)] rounded w-12" /></div>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
            <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-4"><PlayCircle className="w-6 h-6 text-black" /></div>
            <p className="text-sm text-[color:var(--text-secondary)] font-medium">Courses in Progress</p>
            <h3 className="text-3xl font-bold text-[color:var(--text-core)] mt-1">{data?.courses_in_progress ?? 0}</h3>
          </div>
          <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
            <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-4"><CheckCircle2 className="w-6 h-6 text-black" /></div>
            <p className="text-sm text-[color:var(--text-secondary)] font-medium">Completed Courses</p>
            <h3 className="text-3xl font-bold text-[color:var(--text-core)] mt-1">{data?.courses_completed ?? 0}</h3>
          </div>
          <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
            <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-4"><Briefcase className="w-6 h-6 text-black" /></div>
            <p className="text-sm text-[color:var(--text-secondary)] font-medium">Certificates Earned</p>
            <h3 className="text-3xl font-bold text-[color:var(--text-core)] mt-1">{data?.certificates ?? 0}</h3>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[color:var(--text-core)] mb-4 flex items-center gap-2"><PlayCircle className="w-5 h-5 gold" /> Continue Learning</h2>
            {data?.enrolled_courses && data.enrolled_courses.length > 0 ? data.enrolled_courses.slice(0, 1).map((course: any) => (
              <div key={course.id} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden relative flex-shrink-0 bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
                  <BookOpen className="w-10 h-10 gold opacity-50" />
                </div>
                <div className="flex-1 w-full">
                  <div className="text-xs font-bold gold mb-2 tracking-wider uppercase">{course.title}</div>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-4">{course.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-[color:var(--text-core)]">Progress</span>
                      <span className="gold">{course.progress || 0}%</span>
                    </div>
                    <div className="h-2 w-full bg-[color:var(--border)] rounded-full overflow-hidden">
                      <div className="h-full gold-bg rounded-full" style={{ width: `${course.progress || 0}%` }}></div>
                    </div>
                  </div>
                  <Link href={`/learn/${course.course_id}`} className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg gold-bg text-black hover:opacity-90 transition-colors text-sm font-bold w-full sm:w-auto">Resume <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </div>
              </div>
            )) : (
              <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] text-center">
                <p className="text-[color:var(--text-secondary)] mb-4">No courses in progress</p>
                <Link href="/courses" className="btn-gold px-6 py-2.5 text-sm font-bold">Browse Courses</Link>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--text-core)] mb-4 flex items-center gap-2"><Star className="w-5 h-5 gold" /> Recommended for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data?.recommended_courses && data.recommended_courses.length > 0 ? data.recommended_courses.slice(0, 4).map((course: any) => (
                <Link key={course.id} href={`/courses/${course.id}`} className="p-5 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-lg gold-bg flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform">{<BookOpen className="w-5 h-5" />}</div>
                  <div className="text-xs font-medium text-[color:var(--text-secondary)] mb-1">{course.category}</div>
                  <h3 className="font-bold text-[color:var(--text-core)] mb-2 line-clamp-1">{course.title}</h3>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs text-[color:var(--text-muted)]">{course.duration}</span>
                    <span className="text-xs gold">&middot;</span>
                    <span className="text-xs text-[color:var(--text-muted)]">{course.level}</span>
                  </div>
                </Link>
              )) : (
                <div className="col-span-2 p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] text-center">
                  <p className="text-[color:var(--text-secondary)]">Enroll in courses to get recommendations</p>
                </div>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--text-core)] mb-4 flex items-center gap-2"><Bell className="w-5 h-5 gold" /> Announcements</h2>
            <div className="space-y-4">
              {data?.announcements && data.announcements.length > 0 ? data.announcements.slice(0, 3).map((ann: any) => (
                <div key={ann.id} className="p-4 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold gold uppercase">{ann.type}</span>
                    <span className="text-xs text-[color:var(--text-muted)]">{new Date(ann.created_at).toLocaleDateString()}</span>
                  </div>
                  <h4 className="font-bold text-[color:var(--text-core)]">{ann.title}</h4>
                  <p className="text-sm text-[color:var(--text-secondary)] mt-1">{ann.content}</p>
                </div>
              )) : <p className="text-[color:var(--text-secondary)] text-sm">No announcements</p>}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
            <h3 className="font-bold text-[color:var(--text-core)] mb-4">Learning Activity</h3>
            <div className="h-40 flex items-end gap-2 justify-between">
              {weekDays.map((day, i) => {
                const height = activityMap[i] ? Math.min(activityMap[i] * 10, 100) : Math.random() * 30 + 10
                return (
                  <div key={day} className="w-full relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[color:var(--text-core)] text-[color:var(--bg-primary)] text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">{Math.round(height / 10)} activities</div>
                    <div className="w-full h-full flex items-end">
                      <div className="w-full gold-bg rounded-t-sm transition-all duration-300" style={{ height: `${height}%`, opacity: 0.5 + (height / 200) }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between text-xs text-[color:var(--text-secondary)] mt-3">{weekDays.map(d => <span key={d}>{d}</span>)}</div>
          </div>

          <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
            <h3 className="font-bold text-[color:var(--text-core)] mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 gold" /> Quick Links</h3>
            <div className="space-y-3">
              <Link href="/dashboard/library" className="flex items-center gap-3 p-3 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all text-sm"><BookOpen className="w-4 h-4 gold" /> Resource Library</Link>
              <Link href="/dashboard/calendar" className="flex items-center gap-3 p-3 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all text-sm"><Calendar className="w-4 h-4 gold" /> Course Calendar</Link>
              <Link href="/dashboard/exam" className="flex items-center gap-3 p-3 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all text-sm"><CheckCircle2 className="w-4 h-4 gold" /> Take a Quiz</Link>
              <Link href="/dashboard/certificate" className="flex items-center gap-3 p-3 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all text-sm"><Briefcase className="w-4 h-4 gold" /> View Certificate</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
