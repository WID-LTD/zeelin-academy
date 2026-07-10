'use client'

import { Users, FileText, Building } from 'lucide-react'
import type { CertificateData } from '@/lib/certificateData'

export default function CourseCertificateSection({ data }: { data: CertificateData }) {
  return (
    <div className="max-w-[800px] mx-auto" style={{ backgroundColor: '#FFFDF5', border: '2px solid var(--border)', borderRadius: '1.5rem', padding: '3.75rem 2.5rem', position: 'relative' }}>
      {/* Header */}
      <header className="text-center mb-16">
        <h2 className="font-display text-[clamp(1.5rem,1rem+2vw,2.75rem)] font-bold leading-tight mb-4" style={{ color: 'var(--navy-dark)' }}>
          {data.title}
        </h2>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="h-px w-12" style={{ backgroundColor: 'var(--brand-gold)' }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-gold)' }} />
          <div className="h-px w-12" style={{ backgroundColor: 'var(--brand-gold)' }} />
        </div>
      </header>

      {/* InfoBox */}
      <section className="relative mb-16 p-10" style={{ border: '2px solid var(--border)', borderRadius: '1.5rem' }}>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Who it's for */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid var(--border)', color: 'var(--brand-gold)' }}>
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: 'var(--navy-dark)' }}>Who it&apos;s for:</h3>
              <ul className="space-y-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', listStyle: 'none', paddingLeft: '1.25rem' }}>
                {data.whoItsFor.map((item, i) => (
                  <li key={i} className="relative" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: '-1rem', color: 'var(--brand-gold)', fontWeight: 'bold' }}>&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Format */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid var(--border)', color: 'var(--brand-gold)' }}>
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: 'var(--navy-dark)' }}>Format:</h3>
              <div className="text-sm leading-relaxed space-y-4" style={{ color: 'var(--text-secondary)' }}>
                {data.format.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Center Vertical Divider (Desktop Only) */}
        <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px" style={{ backgroundColor: 'var(--border)', transform: 'translateX(-50%)' }} />
      </section>

      {/* Learning Header */}
      <div className="flex items-center justify-center mb-12 space-x-4">
        <div className="h-px flex-grow max-w-[200px]" style={{ backgroundColor: 'var(--brand-gold)' }} />
        <div className="flex items-center space-x-2" style={{ color: 'var(--navy-dark)' }}>
          <Building className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
          <span className="font-serif text-2xl md:text-3xl font-bold">What you would learn</span>
        </div>
        <div className="h-px flex-grow max-w-[200px]" style={{ backgroundColor: 'var(--brand-gold)' }} />
      </div>

      {/* Learning Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.weeks.map((week, i) => (
          <div key={i} className="flex flex-col p-6 rounded-xl" style={{ border: '1px solid var(--border)', backgroundColor: '#ffffff' }}>
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 mr-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: 'var(--navy-dark)', color: '#ffffff' }}>
                {i + 1}
              </div>
              <h4 className="font-serif text-xl font-bold leading-tight" style={{ color: 'var(--navy-dark)' }}>{week.title}</h4>
            </div>
            <div className="h-px w-full mb-4" style={{ backgroundColor: 'var(--brand-gold)' }} />
            <p className="text-xs md:text-[13px] font-bold leading-snug" style={{ color: 'var(--navy-dark)' }}>
              {week.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
