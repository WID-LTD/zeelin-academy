'use client'

import { useState } from 'react'
import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import { ChevronDown, Zap, BookOpen, Eye, Monitor, ClipboardList, FileQuestion, Award, RefreshCw } from 'lucide-react'

const methods = [
  { label: 'Micro-Learning', icon: Zap, description: 'Bite-sized 10-15 minute lessons designed to fit into your busy schedule. Learn during your commute, lunch break, or any spare moment without feeling overwhelmed.' },
  { label: 'Simple Explanations', icon: BookOpen, description: 'Complex Business Analysis concepts broken down into plain English. No jargon, no confusion — just clear, step-by-step explanations you can actually understand.' },
  { label: 'Visual Examples', icon: Eye, description: 'Diagrams, flowcharts, and real-world case studies that bring theory to life. See how each concept applies in actual business analysis scenarios.' },
  { label: 'Live Training', icon: Monitor, description: 'Weekly interactive sessions with experienced BCS-certified instructors. Get your questions answered in real-time and learn alongside fellow students.' },
  { label: 'Guided Study', icon: ClipboardList, description: 'A clear 6-week study plan that tells you exactly what to learn each week. No guesswork, no wasted time — just a direct path to certification.' },
  { label: 'Mock Quiz', icon: FileQuestion, description: 'BCS-style practice questions with detailed feedback and explanations. Track your progress and identify areas that need more focus before the real exam.' },
  { label: 'Zeelin Exam Readiness', icon: Award, description: '' },
  { label: 'Accountability', icon: RefreshCw, description: '' },
]

export default function TeachingMethodSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index)
  }

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleCard(index)
    }
  }

  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 pt-2">
                {methods.map((method, i) => {
                  const Icon = method.icon
                  const isExpanded = expandedIndex === i
                  return (
                    <AnimatedSection key={method.label} delay={300 + i * 60}>
                      <div
                        className="flex flex-col px-4 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer"
                            style={{ backgroundColor: 'rgba(223,186,107,0.12)' }}
                            onClick={() => toggleCard(i)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={handleKeyDown(i)}
                            aria-expanded={isExpanded}
                          >
                            <Icon className="w-4.5 h-4.5" style={{ color: 'var(--brand-gold)' }} />
                          </div>
                          <span className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-core)' }}>
                            {method.label}
                          </span>
                        </div>
                        {method.description && (
                          <div
                            className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                          >
                            <div className="pt-3 mt-3 border-t flex items-start gap-2" style={{ borderColor: 'var(--border)' }}>
                              <ChevronDown
                                className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                style={{ color: 'var(--brand-gold)' }}
                              />
                              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {method.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </AnimatedSection>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Enhanced Visual */}
          <AnimatedSection direction="right" delay={150} duration={700} className="w-full">
            <div className="relative h-[25rem] md:h-[32.5rem] rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)' }}>
              {/* Gradient orbs behind */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-[0.08] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-[0.06] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #B5952F, transparent 70%)' }} />

              {/* Main image */}
              <SafeImage
                src="/unique_teaching_method.png"
                alt="Unique teaching method at Zeelin Academy"
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
                      <div className="text-[0.625rem]" style={{ color: 'var(--text-muted)' }}>10-15 min each</div>
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
