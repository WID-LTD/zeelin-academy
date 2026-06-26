'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Layers, CheckCircle, BarChart3, Filter, ChevronRight, ArrowRight, BookOpen, Monitor, Clock, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const videoMap: Record<string, string> = {
  'ba-foundations': '/VID-20260605-WA0123.mp4',
  'elicitation': '/VID-20260605-WA0128.mp4',
  'requirements-mgmt': '/VID-20260605-WA0151.mp4',
  'strategy-analysis': '/VID-20260606-WA0000.mp4',
  'requirements-design': '/activities/Requirements-Analysis-Design-Definition.mp4',
  'solution-evaluation': '/activities/Solution-Evaluation.mp4'
}

const modules = [
  { id: 'ba-foundations', title: 'Business Analysis Foundations', type: 'free', desc: 'Introduction to BA, BACCM™ Model, stakeholder identification, and the role of a Business Analyst.', lessons: 6, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', biWeek: 'Weeks 1-2' },
  { id: 'elicitation', title: 'Elicitation & Collaboration', type: 'free', desc: 'Master interviews, workshops, focus groups, and survey techniques.', lessons: 8, icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', biWeek: 'Weeks 1-2' },
  { id: 'requirements-mgmt', title: 'Requirements Life Cycle Mgmt', type: 'paid', desc: 'Traceability matrices, prioritization frameworks, change management.', lessons: 10, icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', biWeek: 'Weeks 3-4' },
  { id: 'strategy-analysis', title: 'Strategy Analysis', type: 'paid', desc: 'SWOT analysis, root cause analysis, business case development.', lessons: 10, icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', biWeek: 'Weeks 3-4' },
  { id: 'requirements-design', title: 'Requirements Analysis & Design', type: 'paid', desc: 'Process modeling (BPMN), data modeling, use cases, wireframing.', lessons: 12, icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z', biWeek: 'Weeks 5-6' },
  { id: 'solution-evaluation', title: 'Solution Evaluation', type: 'paid', desc: 'Performance metrics, solution assessment, enterprise limitations.', lessons: 8, icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', biWeek: 'Weeks 5-6' },
  { id: 'agile-ba', title: 'Agile Business Analysis', type: 'paid', desc: 'Agile methodologies, Scrum, Kanban, and the BA role in agile.', lessons: 8, icon: 'M13 10V3L4 14h7v7l9-11h-7z', biWeek: 'Weeks 5-6' },
  { id: 'capstone', title: 'Capstone & Certification Prep', type: 'paid', desc: 'Real-world project, mock exams, certification prep, career guidance.', lessons: 12, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', biWeek: 'Weeks 5-6' }
]

const freeModules = modules.filter(m => m.type === 'free')
const paidModules = modules.filter(m => m.type === 'paid')

export default function ModulesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredPaid = filter === 'all' ? paidModules : paidModules.filter(m => {
    if (filter === 'analysis') return ['strategy-analysis', 'requirements-design', 'solution-evaluation'].includes(m.id)
    if (filter === 'management') return ['requirements-mgmt', 'elicitation'].includes(m.id)
    if (filter === 'agile') return ['agile-ba'].includes(m.id)
    if (filter === 'capstone') return ['capstone'].includes(m.id)
    return true
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
              Course <span style={{ color: 'var(--brand-gold)' }}>Modules</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Start free, unlock the full program when ready. Each module includes hands-on video walkthroughs.
            </p>
          </div>
        </AnimatedSection>

        {/* How It Works */}
        <section className="mb-20">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold mb-12 text-center" style={{ color: 'var(--text-core)' }}>
              How It <span style={{ color: 'var(--brand-gold)' }}>Works</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, step: '01', title: 'Start Free', desc: 'Begin with two free modules to build your foundation before committing to the full program.' },
              { icon: Monitor, step: '02', title: 'Learn by Doing', desc: 'Watch video walkthroughs, complete exercises, and apply concepts through real-world scenarios.' },
              { icon: Award, step: '03', title: 'Track Progress', desc: 'Monitor your completion rate, revisit lessons, and measure your understanding with quizzes.' },
              { icon: Clock, step: '04', title: 'Get Certified', desc: 'Complete all modules, pass the assessments, and earn your certificate of completion.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                    <item.icon className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div className="text-xs font-bold mb-2" style={{ color: 'var(--brand-gold)' }}>Step {item.step}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-core)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Progress Preview */}
        <section className="mb-20 p-8 rounded-2xl border max-w-3xl mx-auto" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />
              <div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-core)' }}>Your Learning Progress</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Track your module completion at a glance.</p>
              </div>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { label: 'Free Modules', pct: 0 },
              { label: 'Full Program', pct: 0 },
            ].map((prog, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: 'var(--text-core)' }}>{prog.label}</span>
                  <span style={{ color: 'var(--brand-gold)' }}>{prog.pct}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${prog.pct}%`, backgroundColor: 'var(--brand-gold)' }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: 'var(--text-secondary)' }}>
            Start a free module to begin tracking your progress.
          </p>
        </section>

        {/* Free Modules */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: 'var(--brand-gold)' }}>Free Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {freeModules.map((mod) => (
              <div
                key={mod.id}
                className="card-free"
                onMouseEnter={() => setHoveredId(mod.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {mod.id === 'ba-foundations' || mod.id === 'elicitation' ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4" style={{ backgroundColor: 'var(--bg-card)' }}>
                    <video
                      src={videoMap[mod.id]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--free-cta-text)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mod.icon} />
                  </svg>
                  <div>
                    <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text-core)' }}>{mod.title}</h3>
                    <p className="text-xs mt-1" style={{ color: 'var(--free-cta-text)' }}>{mod.biWeek}</p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--free-cta-text)' }}>{mod.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--free-cta-text)' }}>{mod.lessons} lessons</span>
                  <Link
                    href={`/enroll?module=${mod.id}&type=free`}
                    className="btn-free-cta text-xs px-4 py-2 w-auto"
                  >
                    Start Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'analysis', label: 'Analysis & Design' },
              { id: 'management', label: 'Requirements Mgmt' },
              { id: 'agile', label: 'Agile' },
              { id: 'capstone', label: 'Capstone' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  backgroundColor: filter === cat.id ? 'var(--brand-gold)' : 'var(--bg-card)',
                  color: filter === cat.id ? '#0f1115' : 'var(--text-secondary)',
                  border: filter === cat.id ? 'none' : '1px solid var(--border)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Paid Modules */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: 'var(--brand-gold)' }}>Full Program</h2>
          {filteredPaid.length === 0 ? (
            <p className="text-center py-12" style={{ color: 'var(--text-secondary)' }}>No modules match this category.</p>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[2560px] mx-auto">
            {filteredPaid.map((mod) => (
              <div
                key={mod.id}
                className="card-premium"
                onMouseEnter={() => setHoveredId(mod.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {videoMap[mod.id] ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                    <video
                      src={videoMap[mod.id]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`w-full h-full ${mod.id === 'strategy-analysis' ? 'object-contain bg-black' : 'object-cover'}`}
                    />
                  </div>
                ) : null}
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--brand-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mod.icon} />
                  </svg>
                  <div>
                    <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text-core)' }}>{mod.title}</h3>
                    <p className="text-xs mt-1 text-muted">{mod.biWeek}</p>
                  </div>
                </div>
                <p className="text-sm mb-4 text-secondary">{mod.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{mod.lessons} lessons</span>
                  <Link
                    href={`/enroll?module=${mod.id}&type=paid`}
                    className="btn-premium-cta text-xs px-4 py-2 w-auto"
                  >
                    Unlock Module
                  </Link>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  )
}