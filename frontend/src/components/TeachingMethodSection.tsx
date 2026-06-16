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

export default function TeachingMethodSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
Unique{' '}
          <span style={{ color: 'var(--brand-gold)' }}>Teaching Method</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Our teaching method is built around Micro-Learning, Simple Explanations, Visual Examples, Live Training,
                Guided study, Mock Quiz, Zeelin Exam Readiness System and accountability.
                Instead of overwhelming learners with too much theory, we break complex Business Analysis topics into
                small, clear, practical lessons that can be studied during a lunch break, commute, or evening study session.
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

          {/* Right Column - Enhanced Visual */}
          <AnimatedSection direction="right" delay={150} duration={700} className="w-full">
            <div className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)' }}>
              {/* Gradient orbs behind */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-[0.08] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-[0.06] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }} />

              {/* Main image */}
              <SafeImage
                src="/learning_experience.png"
                alt="Students learning with Zeelin Academy"
                fill
                className="object-cover"
              />

              {/* Floating card - top right */}
              <div className="absolute top-4 right-4 z-10">
                <div className="backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderColor: 'rgba(223,186,107,0.25)',
                  }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(223,186,107,0.12)' }}>
                      <Zap className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>Micro-Lessons</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>10-15 min each</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card - bottom left */}
              <div className="absolute bottom-6 left-4 z-10">
                <div className="backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderColor: 'rgba(59,130,246,0.2)',
                  }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                      <Award className="w-4 h-4" style={{ color: '#3b82f6' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-core)' }}>Exam Ready</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>BCS Aligned</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative dot pattern */}
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
