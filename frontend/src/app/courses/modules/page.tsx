'use client'

import Link from 'next/link'
import { useState } from 'react'

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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
            Course <span style={{ color: 'var(--brand-gold)' }}>Modules</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-secondary">
            Start free, unlock the full program when ready. Each module includes hands-on video walkthroughs.
          </p>
        </div>

        {/* Free Modules */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-8 text-center gold">Free Access</h2>
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

        {/* Paid Modules */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-8 text-center gold">Full Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
            {paidModules.map((mod) => (
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
        </div>
      </div>
    </div>
  )
}