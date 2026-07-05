'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { User, CheckCircle, Briefcase, HeartHandshake, HeadphonesIcon } from 'lucide-react'

const instructor = {
  name: 'Dr. Franklin Kalu',
  title: 'Founder & Lead Instructor, Certified Business Analysis Professional',
  bio: 'With over 15 years of experience in Business Analysis and enterprise transformation, Dr. Kalu has helped hundreds of professionals achieve professional certification. His teaching philosophy centres on breaking down complex concepts into digestible, real-world applications that students can immediately put into practice.',
  specializations: [
    'Diploma Preparation',
    'Requirements Engineering',
    'Stakeholder Management',
    'Agile & Waterfall Methodologies',
  ],
}

const philosophyCards = [
  {
    icon: Briefcase,
    title: 'Practical Experience',
    description: 'Every lesson is grounded in real-world scenarios drawn from years of industry experience. You will not just learn theory — you will know how to apply it on day one.',
  },
  {
    icon: HeartHandshake,
    title: 'Student-Centred Approach',
    description: 'We adapt to your learning style, pace, and goals. Personalised guidance ensures no one is left behind, whether you are new to BA or advancing your career.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Continuous Support',
    description: 'Learning does not end when the class does. Get ongoing mentorship, Q&A access, and community support throughout your certification journey and beyond.',
  },
]

export default function InstructorSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-[0.03]"
          style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.02]"
          style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] opacity-[0.015] rounded-full border"
          style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] opacity-[0.015] rounded-full border"
          style={{ borderColor: 'rgba(212,175,55,0.1)' }} />
        <svg className="absolute top-10 left-10 w-24 h-24 opacity-[0.04]">
          <pattern id="inst-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#D4AF37" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#inst-dots)" />
        </svg>
      </div>

      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              Learn from <span className='gold'>Expert Instructors</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              All courses are taught by certified professionals with real industry experience,
              ensuring you receive practical, high-quality training that prepares you for certification and beyond.
            </p>
          </div>
        </AnimatedSection>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1152px] mx-auto">
          <AnimatedSection delay={200} className="md:col-span-2 lg:col-span-1">
            <div
              className="p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar Placeholder */}
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center mb-6 border-4 transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(212,175,55,0.1)',
                    borderColor: 'rgba(212,175,55,0.3)',
                  }}
                >
                  <User className="w-16 h-16" style={{ color: 'var(--brand-gold)' }} />
                </div>

                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                  {instructor.name}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--brand-gold)' }}>
                  {instructor.title}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {instructor.bio}
                </p>

                {/* Specializations */}
                <div className="w-full">
                  <h4 className="text-sm font-semibold mb-3 text-left" style={{ color: 'var(--text-core)' }}>
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:shadow-sm"
                        style={{
                          backgroundColor: 'rgba(212,175,55,0.08)',
                          borderColor: 'rgba(212,175,55,0.2)',
                          color: 'var(--brand-gold)',
                        }}
                      >
                        <CheckCircle className="w-3 h-3" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Placeholder slots for future instructors */}
          <AnimatedSection delay={300}>
            <div
              className="p-8 rounded-2xl border border-dashed transition-all duration-300 h-full flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(212,175,55,0.05)' }}
              >
                <User className="w-10 h-10" style={{ color: 'var(--text-muted)' }} />
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                More instructors coming soon
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Teaching Philosophy */}
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mt-20 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              Our <span style={{ color: 'var(--brand-gold)' }}>Teaching Philosophy</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Three pillars that guide everything we do
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1152px] mx-auto">
          {philosophyCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <AnimatedSection key={card.title} delay={200 + idx * 100}>
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
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.description}
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
