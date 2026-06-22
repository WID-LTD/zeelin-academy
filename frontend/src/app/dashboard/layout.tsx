'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Folder, FolderOpen, ChevronRight, FileText, LayoutDashboard, ChevronDown, Menu, X } from 'lucide-react'
import { getUserData } from '@/lib/auth'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string; full_name: string } | null>(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    main: true,
    courses: true,
  })

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [pathname])

  // Close mobile sidebar on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileSidebarOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const u = getUserData<{ email: string; full_name: string }>()
    if (!u) {
      router.push('/login')
    } else {
      setUser(u)
    }
  }, [router])

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }))
  }

  const breadcrumbs = pathname.split('/').filter(Boolean).map(p => p.replace(/-/g, ' '))

  if (!user) return null

  // Admin route uses its own layout
  if (pathname.startsWith('/dashboard/admin')) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] flex pt-20">
      {/* File Explorer Sidebar */}
      <aside className="w-64 fixed h-[calc(100vh-80px)] border-r border-[color:var(--border)] bg-[color:var(--bg-primary)] overflow-y-auto hidden md:block">
        <div className="p-4">
          <h2 className="text-sm font-bold text-[color:var(--text-muted)] mb-4 uppercase tracking-wider">Explorer</h2>
          
          <nav className="space-y-1">
            <Link href="/dashboard" className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${pathname === '/dashboard' ? 'bg-[rgba(212,175,55,0.1)] text-[color:var(--brand-gold)]' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </Link>

            {/* Main Section */}
            <div>
              <button onClick={() => toggleFolder('main')} className="w-full flex items-center gap-1 px-2 py-1.5 text-sm text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] rounded-md transition-colors">
                {expandedFolders['main'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                {expandedFolders['main'] ? <FolderOpen className="w-4 h-4 text-yellow-500" /> : <Folder className="w-4 h-4 text-yellow-500" />}
                <span className="font-semibold text-[color:var(--text-core)]">Main Categories</span>
              </button>
              
              {expandedFolders['main'] && (
                <div className="ml-6 border-l border-[color:var(--border)] pl-2 space-y-1 mt-1">
                  {[
                    { path: '/dashboard/introduction', label: 'Introduction & Walkthrough' },
                    { path: '/dashboard/community', label: 'Community Forum' },
                    { path: '/dashboard/library', label: 'Resource Library' },
                    { path: '/dashboard/calendar', label: 'Course Calendar' },
                    { path: '/dashboard/replay', label: 'Class Replay' },
                  ].map(item => (
                    <Link key={item.path} href={item.path} className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm ${pathname === item.path ? 'bg-[rgba(212,175,55,0.1)] text-[color:var(--brand-gold)]' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Courses Section */}
            <div className="mt-2">
              <button onClick={() => toggleFolder('courses')} className="w-full flex items-center gap-1 px-2 py-1.5 text-sm text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] rounded-md transition-colors">
                {expandedFolders['courses'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                {expandedFolders['courses'] ? <FolderOpen className="w-4 h-4 text-blue-500" /> : <Folder className="w-4 h-4 text-blue-500" />}
                <span className="font-semibold text-[color:var(--text-core)]">Course Materials</span>
              </button>
              
              {expandedFolders['courses'] && (
                <div className="ml-6 border-l border-[color:var(--border)] pl-2 space-y-1 mt-1">
                  {[
                    { path: '/dashboard/roadmap', label: 'BA Foundation Roadmap' },
                    { path: '/dashboard/video-tutorial', label: 'Course Video Tutorial' },
                    { path: '/dashboard/powerpoint', label: 'Course Powerpoint Tutorial' },
                    { path: '/dashboard/exam', label: 'Exam' },
                  ].map(item => (
                    <Link key={item.path} href={item.path} className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm ${pathname === item.path ? 'bg-[rgba(212,175,55,0.1)] text-[color:var(--brand-gold)]' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileSidebarOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <aside className="absolute left-0 top-0 h-full w-72 border-r border-[color:var(--border)] bg-[color:var(--bg-primary)] overflow-y-auto pt-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="px-4 pb-4 border-b border-[color:var(--border)] flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold text-[color:var(--text-muted)] uppercase tracking-wider">Explorer</h2>
              <button onClick={() => setMobileSidebarOpen(false)} className="p-2 rounded-lg hover:bg-[color:var(--bg-secondary)]" aria-label="Close navigation">
                <X className="w-5 h-5" style={{ color: 'var(--text-core)' }} />
              </button>
            </div>
            <div className="px-3">
              <nav className="space-y-1">
                <Link href="/dashboard" className={`flex items-center gap-2 px-2 py-2.5 rounded-md text-sm ${pathname === '/dashboard' ? 'bg-[rgba(212,175,55,0.1)] text-[color:var(--brand-gold)]' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
                  <LayoutDashboard className="w-4 h-4" />
                  Overview
                </Link>
                <div>
                  <button onClick={() => toggleFolder('main')} className="w-full flex items-center gap-1 px-2 py-2.5 text-sm text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] rounded-md transition-colors">
                    {expandedFolders['main'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    {expandedFolders['main'] ? <FolderOpen className="w-4 h-4 text-yellow-500" /> : <Folder className="w-4 h-4 text-yellow-500" />}
                    <span className="font-semibold text-[color:var(--text-core)]">Main Categories</span>
                  </button>
                  {expandedFolders['main'] && (
                    <div className="ml-6 border-l border-[color:var(--border)] pl-2 space-y-1 mt-1">
                      {[
                        { path: '/dashboard/introduction', label: 'Introduction & Walkthrough' },
                        { path: '/dashboard/community', label: 'Community Forum' },
                        { path: '/dashboard/library', label: 'Resource Library' },
                        { path: '/dashboard/calendar', label: 'Course Calendar' },
                        { path: '/dashboard/replay', label: 'Class Replay' },
                      ].map(item => (
                        <Link key={item.path} href={item.path} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${pathname === item.path ? 'bg-[rgba(212,175,55,0.1)] text-[color:var(--brand-gold)]' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
                          <FileText className="w-3.5 h-3.5" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <button onClick={() => toggleFolder('courses')} className="w-full flex items-center gap-1 px-2 py-2.5 text-sm text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] rounded-md transition-colors">
                    {expandedFolders['courses'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    {expandedFolders['courses'] ? <FolderOpen className="w-4 h-4 text-blue-500" /> : <Folder className="w-4 h-4 text-blue-500" />}
                    <span className="font-semibold text-[color:var(--text-core)]">Course Materials</span>
                  </button>
                  {expandedFolders['courses'] && (
                    <div className="ml-6 border-l border-[color:var(--border)] pl-2 space-y-1 mt-1">
                      {[
                        { path: '/dashboard/roadmap', label: 'BA Foundation Roadmap' },
                        { path: '/dashboard/video-tutorial', label: 'Course Video Tutorial' },
                        { path: '/dashboard/powerpoint', label: 'Course Powerpoint Tutorial' },
                        { path: '/dashboard/exam', label: 'Exam' },
                      ].map(item => (
                        <Link key={item.path} href={item.path} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${pathname === item.path ? 'bg-[rgba(212,175,55,0.1)] text-[color:var(--brand-gold)]' : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)]'}`}>
                          <FileText className="w-3.5 h-3.5" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-[calc(100vh-80px)]">
        {/* Breadcrumb Trail */}
        <div className="h-10 border-b border-[color:var(--border)] flex items-center gap-2 px-4 md:px-6 bg-[color:var(--bg-primary)]">
          <button onClick={() => setMobileSidebarOpen(true)} className="md:hidden p-1.5 rounded-lg hover:bg-[color:var(--bg-secondary)]" aria-label="Open navigation">
            <Menu className="w-4 h-4" style={{ color: 'var(--text-core)' }} />
          </button>
          <div className="flex items-center text-sm text-[color:var(--text-muted)] overflow-x-auto">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center capitalize">
                {index > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
                <span className={index === breadcrumbs.length - 1 ? 'text-[color:var(--text-core)] font-medium' : ''}>
                  {crumb}
                </span>
              </span>
            ))}
          </div>
        </div>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  )
}
