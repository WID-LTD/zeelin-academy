'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Globe, MapPin, Mail, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getUserToken } from '@/lib/auth'

export default function Footer() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const check = () => setShow(!getUserToken() && !localStorage.getItem('admin-token'))
    check()
    window.addEventListener('auth-changed', check)
    return () => window.removeEventListener('auth-changed', check)
  }, [])

  if (!show) return null

  return (
    <footer id="contact" className="bg-[color:var(--bg-primary)] border-t border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6 block w-fit hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="Zeelin Academy"
                width={140}
                height={42}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted mb-6">
              Pioneered by Dr. Franklin Kalu, Zeelin Academy bridges the gap for aspiring Business Analysts
              through structured, practical education based in the United Kingdom.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 hover:border-blue-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6 font-display text-lg text-[color:var(--text-core)]">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/courses" className="footer-link">Courses</Link>
              <Link href="/#instructors" className="footer-link">Instructors</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6 font-display text-lg text-[color:var(--text-core)]">Support & Legal</h3>
            <div className="flex flex-col gap-4">
              <Link href="/help" className="footer-link">Help Center</Link>
              <Link href="/community" className="footer-link">Community</Link>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-link">Terms of Service</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6 font-display text-lg text-[color:var(--text-core)]">Contact Info</h3>
            <div className="flex flex-col gap-4 text-sm text-muted">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                <span>London, United Kingdom</span>
              </p>
              <a href="mailto:contact@zeelinacademy.com" className="flex items-center gap-3 footer-link">
                <Mail className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                <span>contact@zeelinacademy.com</span>
              </a>
              <a href="tel:+441234567890" className="flex items-center gap-3 footer-link">
                <Phone className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                <span>+44 123 456 7890</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-[color:var(--border)]">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Zeelin Academy. All rights reserved.</p>
          <p className="text-sm text-muted">Pioneered by Dr. Franklin Kalu</p>
        </div>
      </div>
    </footer>
  )
}
