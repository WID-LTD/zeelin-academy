'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { GraduationCap, Calendar, Award, HeartHandshake, TrendingUp, Target } from 'lucide-react'

const benefits = [
  {
    icon: GraduationCap,
    title: 'Expert Trainers',
    description: 'Learn from seasoned Business Analysis professionals with years of industry and examination experience.',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Study around your full-time job with our structured 6-week roadmap and on-demand resources.',
  },
  {
    icon: Award,
    title: 'BCS-Aligned Curriculum',
    description: 'Every course maps directly to BCS certification requirements so you are always exam-ready.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Support',
    description: 'You never study alone. Weekly check-ins, coaching calls, and a supportive community keep you on track.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Hundreds of graduates have passed their BCS exams and advanced their Business Analysis careers.',
  },
  {
    icon: Target,
    title: 'Career Growth',
    description: 'Beyond certification, we help you build practical BA confidence for long-term career success.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
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
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
