'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Search, Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('zeelin_token')
    if (token) setIsLoggedIn(true)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('zeelin_token')
    localStorage.removeItem('zeelin_user')
    setIsLoggedIn(false)
    router.push('/')
  }

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--bg-primary)] border-b border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Zeelin Academy"
              width={150}
              height={45}
              className="object-contain drop-shadow-sm transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`nav-link text-base font-medium ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/courses" className={`nav-link text-base font-medium ${isActive('/courses') ? 'active' : ''}`}>Courses</Link>
            <Link href="/#categories" className="nav-link text-base font-medium">Categories</Link>
            <Link href="/#instructors" className="nav-link text-base font-medium">Instructors</Link>
            <Link href="/#pricing" className="nav-link text-base font-medium">Pricing</Link>
            <Link href="/about" className={`nav-link text-base font-medium ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link href="/contact" className={`nav-link text-base font-medium ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            
            <button className="p-2 rounded-lg nav-link" aria-label="Search">
              <Search className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
            </button>

            <button onClick={toggle} className="p-2 rounded-lg nav-link" aria-label="Toggle theme">
              {theme === 'light' ? (
                <Moon className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
              )}
            </button>

            <div className="flex items-center gap-3 ml-2">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="px-5 py-2 text-sm font-medium border border-[color:var(--border)] rounded-lg hover:bg-[color:var(--bg-secondary)] transition-colors">
                    Dashboard
                  </Link>
                  <button onClick={handleSignOut} className="btn-gold px-6 py-2 text-sm shadow-md hover:shadow-lg transition-all border border-[rgba(0,0,0,0.1)]">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="px-5 py-2 text-sm font-medium border border-[color:var(--border)] rounded-lg hover:bg-[color:var(--bg-secondary)] transition-colors">
                    Login
                  </Link>
                  <Link href="/enroll" className="btn-gold px-6 py-2 text-sm shadow-md hover:shadow-lg transition-all border border-[rgba(0,0,0,0.1)]">
                    Enroll Now
                  </Link>
                </>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggle} className="p-2 rounded-lg nav-link" aria-label="Toggle theme">
              {theme === 'light' ? (
                <Moon className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
              )}
            </button>
            <button className="p-2 text-[color:var(--text-core)]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--text-core)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: 'var(--text-core)' }} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 border-t pt-4 border-[color:var(--border)]">
            <div className="flex flex-col gap-2">
              <Link href="/" className={`nav-link text-base font-medium py-2 px-2 ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/courses" className={`nav-link text-base font-medium py-2 px-2 ${isActive('/courses') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Courses</Link>
              <Link href="/#categories" className="nav-link text-base font-medium py-2 px-2" onClick={() => setMenuOpen(false)}>Categories</Link>
              <Link href="/#instructors" className="nav-link text-base font-medium py-2 px-2" onClick={() => setMenuOpen(false)}>Instructors</Link>
              <Link href="/#pricing" className="nav-link text-base font-medium py-2 px-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
              <Link href="/about" className={`nav-link text-base font-medium py-2 px-2 ${isActive('/about') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/contact" className={`nav-link text-base font-medium py-2 px-2 ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className={`nav-link text-base font-medium py-2 px-2 mt-2 ${isActive('/dashboard') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                  <button onClick={() => { handleSignOut(); setMenuOpen(false); }} className="btn-gold px-6 py-3 mt-2 text-base font-bold text-center shadow-md block">Sign Out</button>
                </>
              ) : (
                <>
                  <Link href="/login" className={`nav-link text-base font-medium py-2 px-2 mt-2 ${isActive('/login') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Login</Link>
                  <Link href="/enroll" className="btn-gold px-6 py-3 mt-2 text-base font-bold text-center shadow-md block" onClick={() => setMenuOpen(false)}>Enroll Now</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
