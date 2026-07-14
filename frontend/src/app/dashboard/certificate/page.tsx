'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserData } from '@/lib/auth'
import { ChevronLeft, Printer, Download, Share2, Award, Clock, CheckCircle, BookOpen, Linkedin, Twitter, Mail } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

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

        <div ref={certRef} className="relative p-12 sm:p-16 rounded-3xl border-4 text-center bg-white" style={{ borderColor: '#D4AF37' }}>
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4" style={{ borderColor: '#D4AF37', opacity: 0.4 }} />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4" style={{ borderColor: '#D4AF37', opacity: 0.4 }} />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4" style={{ borderColor: '#D4AF37', opacity: 0.4 }} />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4" style={{ borderColor: '#D4AF37', opacity: 0.4 }} />

          {/* Background watermark */}
          <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
            <svg className="w-3/4 h-3/4" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="40" />
              <circle cx="100" cy="100" r="20" />
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
            <p className="font-display text-2xl font-bold text-gray-900 mb-4">
              Professional Qualification in Business Analysis
            </p>
            <p className="text-xs text-gray-400 mb-8">
              Professional Diploma Pathway
            </p>

            <div className="w-32 h-1 gold-bg mx-auto mb-8 rounded-full" />

            <p className="text-sm text-gray-500 mb-1">
              Awarded on {date}
            </p>
            <p className="text-xs text-gray-400 mb-10">
              This diploma comprises 4 module certifications and a final oral examination
            </p>

            {/* Gold Seal */}
            <div className="w-20 h-20 rounded-full mx-auto mb-10 flex items-center justify-center" style={{ border: '0.1875rem solid #D4AF37', background: 'linear-gradient(135deg, #fff 0%, #fdf6e3 100%)' }}>
              <Award className="w-10 h-10" style={{ color: '#D4AF37' }} />
            </div>

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
          This certificate verifies that the recipient has completed the Professional Qualification in Business Analysis program at Zeelin Academy.
        </p>

        {/* Download & Share Actions */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button onClick={handlePrint} className="btn-gold px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
          <button className="btn-outline-gold px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Certificate
          </button>
        </div>

        {/* Course Completion Stats */}
        <AnimatedSection direction="up" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Course Duration', value: '12 weeks', icon: <Clock className="w-5 h-5" /> },
            { label: 'Modules Completed', value: '8', icon: <BookOpen className="w-5 h-5" /> },
            { label: 'Assessments Passed', value: '12', icon: <CheckCircle className="w-5 h-5" /> },
            { label: 'Final Grade', value: 'Distinction', icon: <Award className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="p-5 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center card-hover">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[rgba(223,186,107,0.08)]">
                <span className="text-[color:var(--brand-gold)]">{stat.icon}</span>
              </div>
              <p className="text-lg font-bold text-[color:var(--text-core)]">{stat.value}</p>
              <p className="text-xs text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        {/* Share Your Achievement */}
        <AnimatedSection direction="up" className="mt-16 p-8 rounded-2xl border text-center bg-[rgba(212,175,55,0.03)] border-[rgba(212,175,55,0.2)]">
          <h2 className="font-display text-2xl font-bold mb-3 text-[color:var(--text-core)]">
            Share Your <span className="gold">Achievement</span>
          </h2>
          <p className="text-sm text-secondary mb-6 max-w-lg mx-auto">
            Congratulations on your accomplishment! Share your certificate with your professional network.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl flex items-center justify-center border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-blue-600 transition-all hover:scale-110 text-secondary hover:text-blue-600" title="Share on LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl flex items-center justify-center border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-blue-400 transition-all hover:scale-110 text-secondary hover:text-blue-400" title="Share on Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:?subject=Zeelin Academy Certificate&body=I have successfully completed the Professional Qualification in Business Analysis at Zeelin Academy." className="w-12 h-12 rounded-xl flex items-center justify-center border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all hover:scale-110 text-secondary hover:text-[color:var(--brand-gold)]" title="Share via Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-muted mt-6">
            #ZeelinAcademy #BusinessAnalysis #BADiploma
          </p>
        </AnimatedSection>

      </div>
    </div>
  )
}
