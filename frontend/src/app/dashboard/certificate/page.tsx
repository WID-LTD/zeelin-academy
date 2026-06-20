'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserData } from '@/lib/auth'
import { ChevronLeft, Printer } from 'lucide-react'

export default function CertificatePage() {
  const [user, setUser] = useState<{ email: string; full_name: string } | null>(null)
  const [date, setDate] = useState('')
  const certRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const u = getUserData<{ email: string; full_name: string }>()
    if (!u) { router.push('/dashboard/login'); return }
    setUser(u)
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
  }, [router])

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    if (!printWindow || !certRef.current) return
    const styles = Array.from(document.styleSheets).map(s => {
      try { return Array.from(s.cssRules || []).map(r => r.cssText).join('') } catch { return '' }
    }).join('')
    printWindow.document.write(`
      <html>
        <head><title>Certificate - Zeelin Academy</title><style>${styles}</style></head>
        <body>${certRef.current.innerHTML}</body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => printWindow.print(), 500)
  }

  if (!user) return null

  return (
    <div className="min-h-screen py-24 bg-[color:var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <Link href="/dashboard" className="text-sm text-muted hover:gold transition-colors inline-flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <button onClick={handlePrint} className="btn-gold px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
            <Printer className="w-5 h-5 mr-2" />
            Print Certificate
          </button>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-center text-[color:var(--text-core)]">
          Your <span className="gold">Certificate</span>
        </h1>

        <div ref={certRef} className="relative p-16 rounded-3xl border-4 text-center bg-white" style={{ borderColor: '#D4AF37' }}>
          {/* Background watermark */}
          <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
            <svg className="w-3/4 h-3/4" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="40" />
            </svg>
          </div>

          <div className="relative">
            {/* Gold top border */}
            <div className="w-24 h-1 gold-bg mx-auto mb-8 rounded-full" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="Zeelin Academy" className="h-12 mx-auto mb-6" />

            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Certificate of Completion</p>

            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              {user.full_name}
            </h2>

            <p className="text-gray-600 mb-2">Has successfully completed the</p>
            <p className="font-display text-2xl font-bold text-gray-900 mb-8">
              Diploma in Business Analysis
            </p>

            <div className="w-32 h-1 gold-bg mx-auto mb-8 rounded-full" />

            <p className="text-sm text-gray-500 mb-12">
              Awarded on {date}
            </p>

            {/* Signatures */}
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Dr. Franklin Kalu</p>
                <p className="text-[0.625rem] text-gray-400">Founder, Zeelin Academy</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Certificate ID</p>
                <p className="text-[0.625rem] text-gray-400">ZEL-{date.replace(/\//g, '')}-{user.full_name.substring(0, 3).toUpperCase()}</p>
              </div>
            </div>

            {/* Gold bottom border */}
            <div className="w-24 h-1 gold-bg mx-auto mt-8 rounded-full" />
          </div>
        </div>

        <p className="text-center text-sm text-muted mt-8">
          This certificate verifies that the recipient has completed the Diploma in Business Analysis program at Zeelin Academy.
        </p>
      </div>
    </div>
  )
}
