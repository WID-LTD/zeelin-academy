'use client'

import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import { Check, Star, ArrowRight } from 'lucide-react'

const features = [
  'Beginner Friendly',
  'Self-Paced Learning',
  'Certification Focused',
  'Expert-Led Training',
]

export default function ConversionSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      </div>

      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <AnimatedSection delay={100}>
              <h2 className="font-display text-[2.375rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight"
                style={{ color: 'var(--text-core)' }}>
                Business Analysis Training Made Simple for{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Busy Learners</span>
              </h2>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={200}>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Learn Business Analysis step by step, even if you work full-time, have a family, or feel overwhelmed by
                exams. Our structured learning path helps you build confidence, gain practical skills, and prepare for
                certification success at your own pace.
              </p>
            </AnimatedSection>

            {/* Buttons */}
            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="btn-gold px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 text-center"
                >
                  View Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/bcs-exam-prep"
                  className="btn-outline-gold px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 text-center"
                >
                  Start with BCS Foundation
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust indicator */}
            <AnimatedSection delay={400}>
              <div className="pt-2">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-gold)' }} />
                  ))}
                  <span className="text-sm font-medium ml-2" style={{ color: 'var(--text-core)' }}>
                    Trusted by Future Business Analysts
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span>Flexible Learning</span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                  <span>Expert Support</span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                  <span>Certification Preparation</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Feature badges */}
            <AnimatedSection delay={500}>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {features.map((feature, i) => (
                  <AnimatedSection key={feature} delay={500 + i * 80}>
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(223,186,107,0.15)' }}>
                        <Check className="w-3.5 h-3.5" style={{ color: 'var(--brand-gold)' }} />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-core)' }}>
                        {feature}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Composite Illustration */}
          <div className="relative h-[26.25rem] sm:h-[31.25rem] md:h-[36.25rem] w-full hidden md:block">
            {/* Background gradient orbs */}
            <div className="absolute top-8 right-8 w-72 h-72 rounded-full opacity-[0.07] pointer-events-none"
              style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
            <div className="absolute bottom-12 left-4 w-56 h-56 rounded-full opacity-[0.05] pointer-events-none"
              style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }} />

            {/* Floating badge - top right */}
            <AnimatedSection direction="right" delay={200} duration={700}>
              <div className="absolute top-0 right-4 z-30">
                <div className="backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    borderColor: 'rgba(223,186,107,0.3)',
                  }}>
                  <span className="text-xs font-bold" style={{ color: 'var(--brand-gold)' }}>
                    ★ 6-Week Program
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Book 3 - furthest back */}
            <AnimatedSection delay={300} duration={800}>
              <div className="absolute bottom-6 right-2 w-[7.5rem] md:w-[8.75rem] h-[10rem] md:h-[11.5625rem] rotate-[16deg] z-[1] transition-all duration-500 hover:-translate-y-2 hover:rotate-[12deg]">
                <div className="w-full h-full relative rounded-lg overflow-hidden shadow-xl"
                  style={{ backgroundColor: 'var(--bg-card)' }}>
                  <SafeImage src="/book3.png" alt="Business Analysis Book" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>

            {/* Book 2 - middle back */}
            <AnimatedSection delay={200} duration={800}>
              <div className="absolute bottom-12 right-[8.125rem] md:right-[10rem] w-[8.4375rem] md:w-[9.375rem] h-[11.25rem] md:h-[12.5rem] rotate-[8deg] z-[2] transition-all duration-500 hover:-translate-y-2 hover:rotate-[5deg]">
                <div className="w-full h-full relative rounded-lg overflow-hidden shadow-xl"
                  style={{ backgroundColor: 'var(--bg-card)' }}>
                  <SafeImage src="/book2.png" alt="Business Analysis Book" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>

            {/* Book 1 - middle front */}
            <AnimatedSection delay={100} duration={800}>
              <div className="absolute bottom-16 right-[5rem] md:right-[6.25rem] w-[8.75rem] md:w-[10rem] h-[11.5625rem] md:h-[13.125rem] rotate-[3deg] z-[3] transition-all duration-500 hover:-translate-y-2 hover:rotate-[1deg]">
                <div className="w-full h-full relative rounded-lg overflow-hidden shadow-xl"
                  style={{ backgroundColor: 'var(--bg-card)' }}>
                  <SafeImage src="/book1.png" alt="Business Analysis Book" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>

            {/* Laptop/tablet mockup */}
            <AnimatedSection direction="right" delay={0} duration={700}>
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[16.875rem] md:w-[20.625rem] z-[4]">
                <div className="transition-all duration-500 hover:-translate-y-2">
                  <div className="rounded-xl overflow-hidden shadow-2xl border"
                    style={{ borderColor: 'var(--border)' }}>
                    {/* Screen top bar (camera notch) */}
                    <div className="h-2 flex items-center justify-center"
                      style={{ backgroundColor: 'var(--black-light)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    </div>
                    {/* Screen content */}
                    <div className="aspect-video relative overflow-hidden"
                      style={{ backgroundColor: 'var(--black)' }}>
                      <SafeImage
                        src="/dashboard_mockup.png"
                        alt="Zeelin Academy Learning Platform"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Device base */}
                    <div className="h-3 flex items-center justify-center"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <div className="w-8 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Main book - front and center */}
            <AnimatedSection delay={50} duration={600}>
              <div className="absolute -bottom-1 right-6 md:right-10 w-[10.9375rem] md:w-[12.5rem] h-[14.375rem] md:h-[16.5625rem] rotate-[-5deg] z-[5] transition-all duration-500 hover:-translate-y-3 hover:rotate-[-3deg]">
                <div className="w-full h-full relative rounded-lg overflow-hidden shadow-2xl"
                  style={{ backgroundColor: 'var(--bg-card)' }}>
                  <SafeImage src="/book-main.png" alt="BCS Foundation Course" fill className="object-cover" />
                  {/* BCS badge on book */}
                  <div className="absolute top-2 right-2 text-[0.625rem] font-bold px-2 py-0.5 rounded shadow-lg"
                    style={{ backgroundColor: 'var(--brand-gold)', color: '#0f1115' }}>
                    BCS
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Decorative certification seal */}
            <AnimatedSection direction="right" delay={400} duration={700}>
              <div className="absolute top-32 -left-2 z-[6]">
                <div className="backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    borderColor: 'rgba(59,130,246,0.2)',
                  }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                      <svg className="w-4 h-4" fill="none" stroke="#3b82f6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.625rem] font-bold" style={{ color: 'var(--text-core)' }}>Certification</div>
                      <div className="text-[0.5625rem]" style={{ color: 'var(--text-muted)' }}>BCS Accredited</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
