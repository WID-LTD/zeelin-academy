'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'

const nav = [
  ['/packages', 'Packages'],
  ['/pathway-finder', 'Pathway Finder'],
  ['/courses', 'How It Works'],
  ['/about', 'About'],
  ['/resources', 'Resources'],
  ['/support', 'Support'],
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

  const active = (href: string) => pathname.startsWith(href)

  return (
    <>
      <div className="zr-topline">
        <div>Training → Work Experience → Mentorship → Job Acquisition</div>
        <div><Link href="/contact">Talk to Zeelin</Link><Link href="/login">Learner sign in</Link></div>
      </div>
      <header className="zr-header">
        <div className="zr-header-inner">
          <Link href="/" className="zr-logo" aria-label="Zeelin Academy home">
            <Image src="/logo-light.png" alt="Zeelin Academy" width={176} height={60} priority />
          </Link>

          <nav className="zr-nav" aria-label="Main navigation">
            {nav.map(([href,label]) => (
              <Link key={href} href={href} className={active(href) ? 'active' : ''}>{label}</Link>
            ))}
          </nav>

          <div className="zr-header-actions">
            <Link href="/pathway-finder" className="zr-cta">Find your pathway <ArrowRight size={15}/></Link>
            <button className="zr-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}>
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
        {open && <nav className="zr-mobile-nav" aria-label="Mobile navigation">
          {nav.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">Contact</Link>
          <Link href="/login">Learner sign in</Link>
          <Link href="/pathway-finder" className="zr-cta">Find your pathway <ArrowRight size={15}/></Link>
        </nav>}
      </header>
    </>
  )
}
