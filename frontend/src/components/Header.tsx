'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on Escape, lock body scroll when open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="Zeelin Academy - Go to homepage">
            <Image
              src="/logo-light.png"
              alt="Zeelin Academy Logo"
              width={166}
              height={60}
              className="w-auto h-[3rem] md:h-[3.375rem] object-contain"
              priority
            />
          </Link>

          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-5">
            <Link href="/" className={`nav-link text-[0.8125rem] font-medium ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-link text-[0.8125rem] font-medium ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link href="/pathway-finder" className={`nav-link text-[0.8125rem] font-medium ${isActive('/pathway-finder') ? 'active' : ''}`}>Pathway Finder</Link>
            <Link href="/courses" className={`nav-link text-[0.8125rem] font-medium ${isActive('/courses') ? 'active' : ''}`}>Courses</Link>
            <Link href="/bcs-exam-prep" className={`nav-link text-[0.8125rem] font-medium ${isActive('/bcs-exam-prep') ? 'active' : ''}`}>Exam Prep</Link>
            <Link href="/resources" className={`nav-link text-[0.8125rem] font-medium ${isActive('/resources') ? 'active' : ''}`}>Resources</Link>
            <Link href="/contact" className={`nav-link text-[0.8125rem] font-medium ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>

            <Link href="/enroll" className="btn-gold px-4 py-2 text-xs">
              Enroll Now
            </Link>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <button className="p-3 flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle menu" style={{ minWidth: '44px', minHeight: '44px' }}>
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
          <div id="mobile-menu" className="md:hidden pb-6 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col">
              <Link href="/" className={`nav-link py-3 text-sm font-medium ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className={`nav-link py-3 text-sm font-medium ${isActive('/about') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/pathway-finder" className={`nav-link py-3 text-sm font-medium ${isActive('/pathway-finder') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Pathway Finder</Link>
              <Link href="/courses" className={`nav-link py-3 text-sm font-medium ${isActive('/courses') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Courses</Link>
              <Link href="/bcs-exam-prep" className={`nav-link py-3 text-sm font-medium ${isActive('/bcs-exam-prep') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Exam Prep</Link>
              <Link href="/resources" className={`nav-link py-3 text-sm font-medium ${isActive('/resources') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Resources</Link>
              <Link href="/contact" className={`nav-link py-3 text-sm font-medium ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link href="/enroll" className="btn-gold w-full py-4 text-sm text-center mt-2" onClick={() => setMenuOpen(false)}>Enroll Now</Link>
              <Link href="/dashboard/login" className="nav-link py-3 text-sm font-medium" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link href="/admin/login" className="nav-link py-3 text-sm font-medium" onClick={() => setMenuOpen(false)}>Admin</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
