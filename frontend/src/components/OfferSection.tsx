'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { BookOpen, Package, Zap, Compass } from 'lucide-react'

const routes = [
  {
    title: 'Module-by-Module Exam Prep',
    duration: '6 weeks',
    note: 'Exam fee excluded',
    description:
      'Focus on one module at a time and build your Diploma pathway gradually.',
    icon: BookOpen,
    href: '/courses/modules',
    btnLabel: 'Choose Module-by-Module',
  },
  {
    title: 'Complete Diploma Exam Prep Bundle',
    duration: '24-week standard route',
    note: 'Exam fee excluded',
    description:
      'Follow a structured full Diploma preparation route without rushing.',
    icon: Package,
    href: '/enroll?type=bundle',
    btnLabel: 'Choose Complete Bundle',
  },
  {
    title: 'Fast-Track Diploma Exam Prep',
    duration: '6-week intensive route',
    note: 'Exam fee excluded',
    description:
      'Move faster with an intensive preparation route for experienced or highly committed learners.',
    icon: Zap,
    href: '/enroll?type=fast-track',
    btnLabel: 'Choose Fast-Track',
  },
]

export default function OfferSection() {
  return (
    <section className="relative overflow-hidden pb-16 md:pb-28 pt-0 3xl:pb-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #B5952F, transparent 70%)' }} />
      </div>

      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black leading-tight mb-4"
              style={{ color: 'var(--text-core)' }}>
              What Zeelin Academy{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Offers</span>
            </h2>
            <p className="text-lg md:text-xl 3xl:text-2xl mb-6" style={{ color: 'var(--text-secondary)' }}>
              Prepare for the BCS International Diploma in Business Analysis with structured teaching, guided study, mock quizzes, visual summaries, and exam-readiness support.
            </p>
            <p className="text-base md:text-lg 3xl:text-xl font-semibold" style={{ color: 'var(--text-core)' }}>
              Choose the route that fits your goal:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-10">
          {routes.map((route, idx) => {
            const Icon = route.icon
            return (
              <AnimatedSection key={route.title} delay={100 + idx * 120} duration={600}>
                <div
                  className="p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col hover:border-[rgba(212,175,55,0.3)] group"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                      <Icon className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <h3 className="font-display text-lg 3xl:text-xl font-black leading-snug" style={{ color: 'var(--text-core)' }}>
                      {route.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{ color: 'var(--brand-gold)', borderColor: 'rgba(212,175,55,0.3)', backgroundColor: 'rgba(212,175,55,0.08)' }}>
                      {route.duration}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {route.note}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {route.description}
                  </p>

                  <Link
                    href={route.href}
                    className="btn-gold px-6 py-3 text-sm font-bold text-center inline-block hover:scale-105 transition-transform"
                  >
                    {route.btnLabel}
                  </Link>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={400}>
          <div className="relative mt-16 rounded-2xl overflow-hidden text-center p-6 sm:p-10 md:p-14 border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(223,186,107,0.06), transparent 70%)',
              }} />

            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                  <Compass className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl 3xl:text-4xl font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                Not sure which route is right for you?
              </h3>

              <p className="text-base md:text-lg 3xl:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}>
                Use our Diploma Pathway Finder to choose with clarity.
              </p>

              <Link href="/pathway-finder" className="btn-gold px-8 sm:px-12 py-4 text-base font-bold inline-block hover:scale-105 transition-transform">
                Find My Diploma Pathway
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
