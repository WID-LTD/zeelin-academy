'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="Zeelin Academy - Go to homepage">
            <Image
              src={theme === 'dark' ? '/logo.png' : '/logo-light.png'}
              alt="Zeelin Academy Logo"
              width={166}
              height={60}
              className="w-auto h-[3rem] md:h-[3.375rem] object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-5">
            <Link href="/" className={`nav-link text-[0.8125rem] font-medium ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-link text-[0.8125rem] font-medium ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link href="/pathway-finder" className={`nav-link text-[0.8125rem] font-medium ${isActive('/pathway-finder') ? 'active' : ''}`}>Pathway Finder</Link>
            <Link href="/courses" className={`nav-link text-[0.8125rem] font-medium ${isActive('/courses') ? 'active' : ''}`}>Courses</Link>
            <Link href="/bcs-exam-prep" className={`nav-link text-[0.8125rem] font-medium ${isActive('/bcs-exam-prep') ? 'active' : ''}`}>Exam Prep</Link>
            <Link href="/resources" className={`nav-link text-[0.8125rem] font-medium ${isActive('/resources') ? 'active' : ''}`}>Resources</Link>
            <Link href="/contact" className={`nav-link text-[0.8125rem] font-medium ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>

            <button onClick={toggle} className="p-2 rounded-lg nav-link" aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <Link href="/enroll" className="btn-gold px-4 py-2 text-xs">
              Enroll Now
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggle} className="p-2 rounded-lg nav-link" aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-core)' }}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col gap-4">
              <Link href="/" className={`nav-link text-sm font-medium ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className={`nav-link text-sm font-medium ${isActive('/about') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/pathway-finder" className={`nav-link text-sm font-medium ${isActive('/pathway-finder') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Pathway Finder</Link>
              <Link href="/courses" className={`nav-link text-sm font-medium ${isActive('/courses') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Courses</Link>
              <Link href="/bcs-exam-prep" className={`nav-link text-sm font-medium ${isActive('/bcs-exam-prep') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Exam Prep</Link>
              <Link href="/resources" className={`nav-link text-sm font-medium ${isActive('/resources') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Resources</Link>
              <Link href="/contact" className={`nav-link text-sm font-medium ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link href="/enroll" className="btn-gold px-5 py-2.5 text-sm text-center" onClick={() => setMenuOpen(false)}>Enroll Now</Link>
              <Link href="/dashboard/login" className="nav-link text-sm font-medium" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link href="/admin/login" className="nav-link text-sm font-medium" onClick={() => setMenuOpen(false)}>Admin</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}