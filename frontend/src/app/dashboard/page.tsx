'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getUserData, clearUserAuth } from '@/lib/auth'
import { MODULE_NAMES } from '@/lib/constants'
import { LayoutDashboard, BookOpen, Award, MessageSquare, Settings, PlayCircle, CheckCircle2, Briefcase, Code, Zap, Star } from 'lucide-react'

export default function UserDashboard() {
  const [user, setUser] = useState<{ email: string; full_name: string } | null>(null)
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const u = getUserData<{ email: string; full_name: string }>()
    if (!u) {
      router.push('/login')
      return
    }
    setUser(u)
  }, [router])

  const handleLogout = () => {
    clearUserAuth()
    router.push('/login')
  }

  if (!user) return null

  return (
    <div className="max-w-5xl mx-auto">
          {/* Welcome Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-core)] mb-1">
                Welcome back, <span className="text-blue-600 dark:text-blue-400">{user.full_name}</span>
              </h1>
              <p className="text-[color:var(--text-secondary)]">Ready to continue your learning journey?</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-lg border border-[color:var(--border)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] transition-colors text-sm font-medium"
            >
              Sign Out
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center mb-4">
                <PlayCircle className="w-6 h-6" />
              </div>
              <p className="text-sm text-[color:var(--text-secondary)] font-medium">Courses in Progress</p>
              <h3 className="text-3xl font-bold text-[color:var(--text-core)] mt-1">2</h3>
            </div>
            <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-sm text-[color:var(--text-secondary)] font-medium">Completed Courses</p>
              <h3 className="text-3xl font-bold text-[color:var(--text-core)] mt-1">4</h3>
            </div>
            <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <p className="text-sm text-[color:var(--text-secondary)] font-medium">Certificates Earned</p>
              <h3 className="text-3xl font-bold text-[color:var(--text-core)] mt-1">3</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Continue Learning */}
              <section>
                <h2 className="text-xl font-bold text-[color:var(--text-core)] mb-4">Continue Learning</h2>
                <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                  <div className="w-full sm:w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative flex-shrink-0">
                    {/* Placeholder image representation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                      <Code className="w-10 h-10 text-blue-500 opacity-50" />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-wider uppercase">Module 4</div>
                    <h3 className="text-lg font-bold text-[color:var(--text-core)] mb-2">Full-Stack Web Development</h3>
                    <p className="text-sm text-[color:var(--text-secondary)] mb-4">Advanced React Patterns and State Management</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-[color:var(--text-core)]">Progress</span>
                        <span className="text-[color:var(--text-secondary)]">68%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    <Link href="/courses/1" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium w-full sm:w-auto shadow-sm shadow-blue-500/20">
                      Resume Course
                    </Link>
                  </div>
                </div>
              </section>

              {/* Recommended Courses */}
              <section>
                <h2 className="text-xl font-bold text-[color:var(--text-core)] mb-4">Recommended for You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Mastering Next.js 14', category: 'Web Development', rating: 4.9, icon: <Zap className="w-5 h-5" /> },
                    { title: 'UI/UX Design Principles', category: 'Design', rating: 4.8, icon: <Code className="w-5 h-5" /> }
                  ].map((course, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer group">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {course.icon}
                      </div>
                      <div className="text-xs font-medium text-[color:var(--text-secondary)] mb-1">{course.category}</div>
                      <h3 className="font-bold text-[color:var(--text-core)] mb-2 line-clamp-1">{course.title}</h3>
                      <div className="flex items-center gap-1 mt-auto">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm font-medium text-[color:var(--text-core)]">{course.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              
              {/* Activity Chart Placeholder */}
              <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
                <h3 className="font-bold text-[color:var(--text-core)] mb-4">Learning Activity</h3>
                <div className="h-40 flex items-end gap-2 justify-between">
                  {[40, 70, 45, 90, 65, 30, 80].map((height, i) => (
                    <div key={i} className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-sm hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {height / 10}h
                      </div>
                      <div className="bg-blue-500 w-full rounded-t-sm" style={{ height: `${height}%` }}></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[color:var(--text-secondary)] mt-3">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Upcoming Deadlines / Events */}
              <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
                <h3 className="font-bold text-[color:var(--text-core)] mb-4">Upcoming</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold uppercase leading-none mb-1">Oct</span>
                      <span className="text-lg font-bold leading-none">12</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[color:var(--text-core)]">Project Submission</h4>
                      <p className="text-xs text-[color:var(--text-secondary)] mt-1">Advanced React Patterns</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold uppercase leading-none mb-1">Oct</span>
                      <span className="text-lg font-bold leading-none">15</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[color:var(--text-core)]">Live Mentorship</h4>
                      <p className="text-xs text-[color:var(--text-secondary)] mt-1">1:1 Session with Instructor</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
    </div>
  )
}
