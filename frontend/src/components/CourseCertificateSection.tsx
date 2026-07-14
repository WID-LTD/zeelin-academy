'use client'

import { Users, FileText, Building } from 'lucide-react'
import type { CertificateData } from '@/lib/certificateData'

export default function CourseCertificateSection({ data }: { data: CertificateData }) {
  return (
    <div
      className="w-full mx-auto rounded-3xl relative overflow-hidden"
      style={{
        maxWidth: 'min(92vw, 2200px)',
        backgroundColor: 'rgba(255,253,245,0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(184,151,83,0.15)',
        padding: 'clamp(1.5rem, 1rem + 3vw, 5rem)',
      }}
    >
      {/* Header */}
      <header className="text-center mb-10 lg:mb-14 xl:mb-16">
        <h2
          className="font-display font-bold leading-tight mb-5"
          style={{
            color: 'var(--navy-dark)',
            fontSize: 'clamp(1.5rem, 1rem + 2.5vw, 3.5rem)',
          }}
        >
          {data.title}
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-12 lg:w-16 xl:w-20" style={{ backgroundColor: 'var(--brand-gold)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--brand-gold)' }} />
          <div className="h-px w-12 lg:w-16 xl:w-20" style={{ backgroundColor: 'var(--brand-gold)' }} />
        </div>
      </header>

      {/* Info Box */}
      <section
        className="relative mb-10 lg:mb-14 xl:mb-16 rounded-2xl"
        style={{
          border: '1px solid rgba(184,151,83,0.15)',
          padding: 'clamp(1.25rem, 1rem + 2vw, 3rem)',
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Who it's for */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div
                className="w-11 h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center"
                style={{ border: '1px solid rgba(184,151,83,0.25)', color: 'var(--brand-gold)' }}
              >
                <Users className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-serif font-bold mb-4 lg:mb-5" style={{ color: 'var(--navy-dark)', fontSize: 'clamp(1.125rem, 1rem + 0.5vw, 1.625rem)' }}>
                Who it&apos;s for:
              </h3>
              <ul className="space-y-2 lg:space-y-2.5">
                {data.whoItsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brand-gold)' }} />
                    <span className="text-sm lg:text-base xl:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Format */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div
                className="w-11 h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center"
                style={{ border: '1px solid rgba(184,151,83,0.25)', color: 'var(--brand-gold)' }}
              >
                <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-serif font-bold mb-4 lg:mb-5" style={{ color: 'var(--navy-dark)', fontSize: 'clamp(1.125rem, 1rem + 0.5vw, 1.625rem)' }}>
                Format:
              </h3>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                {data.format.map((p, i) => (
                  <p key={i} className="text-sm lg:text-base xl:text-lg leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Vertical Divider (Desktop Only) */}
        <div
          className="hidden md:block absolute top-8 bottom-8 left-1/2 w-px"
          style={{ backgroundColor: 'rgba(184,151,83,0.15)', transform: 'translateX(-50%)' }}
        />
      </section>

      {/* Learning Header */}
      <div className="flex items-center justify-center mb-8 lg:mb-10 xl:mb-12 gap-4 lg:gap-5">
        <div className="h-px flex-grow max-w-[100px] sm:max-w-[140px] lg:max-w-[200px] xl:max-w-[280px]" style={{ backgroundColor: 'var(--brand-gold)' }} />
        <div className="flex items-center gap-2.5 lg:gap-3" style={{ color: 'var(--navy-dark)' }}>
          <Building className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: 'var(--brand-gold)' }} />
          <span
            className="font-serif font-bold whitespace-nowrap"
            style={{ fontSize: 'clamp(1.25rem, 1rem + 1vw, 2.25rem)' }}
          >
            What you would learn
          </span>
        </div>
        <div className="h-px flex-grow max-w-[100px] sm:max-w-[140px] lg:max-w-[200px] xl:max-w-[280px]" style={{ backgroundColor: 'var(--brand-gold)' }} />
      </div>

      {/* Learning Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
        {data.weeks.map((week, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl transition-all duration-300 hover:shadow-md"
            style={{
              border: '1px solid rgba(184,151,83,0.1)',
              backgroundColor: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: 'clamp(0.875rem, 0.75rem + 0.5vw, 2rem)',
            }}
          >
            <div className="flex items-start mb-3 lg:mb-4 gap-2.5 lg:gap-3">
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center font-bold"
                style={{
                  width: 'clamp(2rem, 1.75rem + 0.5vw, 2.75rem)',
                  height: 'clamp(2rem, 1.75rem + 0.5vw, 2.75rem)',
                  fontSize: 'clamp(0.75rem, 0.625rem + 0.25vw, 1rem)',
                  backgroundColor: 'var(--navy-dark)',
                  color: '#ffffff',
                }}
              >
                {i + 1}
              </div>
              <h4 className="font-serif font-bold leading-tight pt-0.5" style={{ color: 'var(--navy-dark)', fontSize: 'clamp(0.875rem, 0.75rem + 0.3vw, 1.375rem)' }}>
                {week.title}
              </h4>
            </div>
            <div className="h-px w-full mb-3 lg:mb-4" style={{ backgroundColor: 'var(--brand-gold)' }} />
            <p className="font-medium leading-snug" style={{ color: 'var(--navy-dark)', fontSize: 'clamp(0.6875rem, 0.625rem + 0.15vw, 0.9375rem)' }}>
              {week.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
