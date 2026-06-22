'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--black)' }}>
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #B5952F, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[31.25rem] h-[31.25rem] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--brand-gold), transparent 70%)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <AnimatedSection delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: '#ffffff' }}>
            Ready to start your Business Analysis{' '}
            <span style={{ color: 'var(--brand-gold)' }}>Certification journey</span>?
          </h2>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={200}>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#9ca3af' }}>
            Whether you are new to Business Analysis or preparing for your first certification,
            Zeelin Academy will guide you step by step.
          </p>
        </AnimatedSection>

        {/* Buttons */}
        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enroll"
              className="btn-gold px-10 py-4 text-base font-bold inline-block hover:scale-105 transition-transform"
            >
              Enroll Now
            </Link>
            <Link
              href="/courses"
              className="border text-base font-bold px-10 py-4 rounded-lg inline-block transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--brand-gold)',
                color: 'var(--brand-gold)',
              }}
            >
              Explore Courses
            </Link>
          </div>
        </AnimatedSection>

        {/* Trust text */}
        <AnimatedSection delay={400}>
          <p className="text-sm mt-8" style={{ color: '#6b7280' }}>
            No commitment required. Start learning today.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
