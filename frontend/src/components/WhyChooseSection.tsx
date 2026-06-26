'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { GraduationCap, Calendar, Award, HeartHandshake, TrendingUp, Target, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: GraduationCap,
    title: 'Expert Trainers',
    description: 'Learn from seasoned Business Analysis professionals with years of industry and examination experience.',
    stats: [
      '92% pass rate on first attempt',
      '15+ years average trainer experience',
      'BCS certified instructors',
    ],
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Study around your full-time job with our structured 6-week roadmap and on-demand resources.',
    stats: [
      '6-week structured programme',
      'Study 5–7 hours per week',
      'Lifetime access to materials',
    ],
  },
  {
    icon: Award,
    title: 'BCS-Aligned Curriculum',
    description: 'Every course maps directly to BCS certification requirements so you are always exam-ready.',
    stats: [
      '100% syllabus coverage',
      'Official BCS reference materials',
      'Regularly updated for 2025 standards',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Personal Support',
    description: 'You never study alone. Weekly check-ins, coaching calls, and a supportive community keep you on track.',
    stats: [
      'Dedicated success coach assigned',
      'Average response time under 2 hours',
      'Private cohort community access',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Hundreds of graduates have passed their BCS exams and advanced their Business Analysis careers.',
    stats: [
      '500+ successful graduates',
      'Average salary increase £15,000',
      '95% course completion rate',
    ],
  },
  {
    icon: Target,
    title: 'Career Growth',
    description: 'Beyond certification, we help you build practical BA confidence for long-term career success.',
    stats: [
      'CV and interview preparation included',
      'LinkedIn profile optimisation guidance',
      'Ongoing alumni career support',
    ],
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]"
          style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.02]"
          style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.015] rounded-full border"
          style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.015] rounded-full border"
          style={{ borderColor: 'rgba(212,175,55,0.1)' }} />
        {/* Dot pattern */}
        <svg className="absolute top-10 right-10 w-24 h-24 opacity-[0.04]">
          <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#D4AF37" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-32 h-32 opacity-[0.03]">
          <pattern id="dots2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#D4AF37" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots2)" />
        </svg>
      </div>

      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              Why Choose{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Zeelin Academy</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              We are built differently — designed for real people with real responsibilities
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1152px] mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <AnimatedSection key={benefit.title} delay={100 + idx * 80} duration={600}>
                <div
                  className="p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--text-core)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {benefit.description}
                  </p>
                  {benefit.stats && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {benefit.stats.map((stat) => (
                        <span
                          key={stat}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:shadow-sm"
                          style={{
                            backgroundColor: 'rgba(212,175,55,0.08)',
                            borderColor: 'rgba(212,175,55,0.2)',
                            color: 'var(--brand-gold)',
                          }}
                        >
                          <CheckCircle className="w-3 h-3" />
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
