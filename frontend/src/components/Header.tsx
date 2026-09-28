'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'

const nav = [
  ['/', 'Home'],
  ['/packages', 'Packages'],
  ['/pathway-finder', 'Pathway Finder'],
  ['/about', 'About'],
  ['/resources', 'Resources'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="jr-header">
      <div className="jr-header-inner">
        <Link href="/" className="jr-brand" aria-label="Zeelin Academy home">
          <Image src="/logo-light.png" alt="Zeelin Academy" width={170} height={60} priority />
          <span><b>ZEELIN ACADEMY</b><small>Job Readiness System</small></span>
        </Link>

        <nav className="jr-desktop-nav" aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className={active(href) ? 'active' : ''}>{label}</Link>
          ))}
        </nav>

        <div className="jr-header-actions">
          <Link href="/login" className="jr-signin">Sign in</Link>
          <Link href="/packages" className="jr-btn-primary">Find your package <ArrowRight size={15} /></Link>
          <button className="jr-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="jr-mobile-nav">
          {nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/login">Sign in</Link>
          <Link href="/packages" className="jr-btn-primary">Find your package <ArrowRight size={15} /></Link>
        </div>
      )}
    </header>
  )
}
