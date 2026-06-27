'use client'

import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import { Zap, BookOpen, Eye, Monitor, ClipboardList, FileQuestion, Award, RefreshCw } from 'lucide-react'

const methods = [
  { label: 'Micro-Learning', icon: Zap },
  { label: 'Simple Explanations', icon: BookOpen },
  { label: 'Visual Examples', icon: Eye },
  { label: 'Live Training', icon: Monitor },
  { label: 'Guided Study', icon: ClipboardList },
  { label: 'Mock Quiz', icon: FileQuestion },
  { label: 'Zeelin Exam Readiness', icon: Award },
  { label: 'Accountability', icon: RefreshCw },
]

export default function DeliveryStructureSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 3xl:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 3xl:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-3xl md:text-4xl 3xl:text-5xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
                Course{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Delivery Structure</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-base md:text-lg 3xl:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We break complex Business Analysis topics into small, clear, practical lessons that can be studied during a lunch break, commute, or evening study session. At Zeelin Academy our courses are delivered through structured Cohort and guided self-pace route. Our teaching method is built around the following:
              </p>
            </AnimatedSection>

            {/* Method Cards */}
            <AnimatedSection delay={300}>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {methods.map((method, i) => {
                  const Icon = method.icon
                  return (
                    <AnimatedSection key={method.label} delay={300 + i * 60}>
                      <div
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'rgba(223,186,107,0.12)' }}>
                          <Icon className="w-4.5 h-4.5" style={{ color: 'var(--brand-gold)' }} />
                        </div>
                        <span className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-core)' }}>
                          {method.label}
                        </span>
                      </div>
                    </AnimatedSection>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Visual */}
          <AnimatedSection direction="right" delay={150} duration={700} className="w-full">
            <div className="relative h-[25rem] md:h-[32.5rem] rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)' }}>
              {/* Gradient orbs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-[0.08] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-[0.06] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #B5952F, transparent 70%)' }} />

              <SafeImage
                src="/unique_teaching_method.png"
                alt="Course delivery at Zeelin Academy"
                fill
                className="object-cover"
              />

              {/* Floating card - top right */}
              <div className="absolute top-4 right-4 z-10">
                <div className="backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'rgba(223,186,107,0.25)',
                  }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(223,186,107,0.12)' }}>
                      <Zap className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>Micro-Lessons</div>
                      <div className="text-[0.625rem]" style={{ color: 'var(--text-muted)' }}>10-15 min each</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card - bottom left */}
              <div className="absolute bottom-6 left-4 z-10">
                <div className="backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'rgba(223,186,107,0.25)',
                  }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(223,186,107,0.12)' }}>
                      <Award className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>Exam Ready</div>
                      <div className="text-[0.625rem]" style={{ color: 'var(--text-muted)' }}>BCS Aligned</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-20 right-8 z-0 flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full opacity-[0.15]"
                    style={{ backgroundColor: 'var(--brand-gold)' }} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
