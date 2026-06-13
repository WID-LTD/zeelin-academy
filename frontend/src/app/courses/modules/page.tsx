'use client'

import Link from 'next/link'
import { BookOpen, Zap, Users, Globe, PlayCircle, Monitor, Award, ShieldCheck, Lightbulb, BarChart3, Image, GraduationCap } from 'lucide-react'

const videoMap: Record<string, string> = {
  'ba-foundations': '/VID-20260605-WA0123.mp4',
  'elicitation': '/VID-20260605-WA0128.mp4',
  'requirements-mgmt': '/VID-20260605-WA0151.mp4',
  'strategy-analysis': '/VID-20260606-WA0000.mp4',
  'requirements-design': '/activities/Requirements-Analysis-Design-Definition.mp4',
  'solution-evaluation': '/activities/Solution-Evaluation.mp4',
}

const modules = [
  { id: 'ba-foundations', title: 'Business Analysis Foundations', type: 'free', desc: 'Introduction to BA, BACCM™ Model, stakeholder identification, and the role of a Business Analyst.', lessons: 6, icon: <BookOpen className="w-8 h-8" style={{ color: 'var(--free-cta-text)' }} />, biWeek: 'Weeks 1-2' },
  { id: 'elicitation', title: 'Elicitation & Collaboration', type: 'free', desc: 'Master interviews, workshops, focus groups, and survey techniques.', lessons: 8, icon: <Zap className="w-8 h-8" style={{ color: 'var(--free-cta-text)' }} />, biWeek: 'Weeks 1-2' },
  { id: 'requirements-mgmt', title: 'Requirements Life Cycle Mgmt', type: 'paid', desc: 'Traceability matrices, prioritization frameworks, change management.', lessons: 10, icon: <Users className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />, biWeek: 'Weeks 3-4' },
  { id: 'strategy-analysis', title: 'Strategy Analysis', type: 'paid', desc: 'SWOT analysis, root cause analysis, business case development.', lessons: 10, icon: <Globe className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />, biWeek: 'Weeks 3-4' },
  { id: 'requirements-design', title: 'Requirements Analysis & Design', type: 'paid', desc: 'Process modeling (BPMN), data modeling, use cases, wireframing.', lessons: 12, icon: <PlayCircle className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />, biWeek: 'Weeks 5-6' },
  { id: 'solution-evaluation', title: 'Solution Evaluation', type: 'paid', desc: 'Performance metrics, solution assessment, enterprise limitations.', lessons: 8, icon: <Monitor className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />, biWeek: 'Weeks 5-6' },
  { id: 'agile-ba', title: 'Agile Business Analysis', type: 'paid', desc: 'Agile methodologies, Scrum, Kanban, and the BA role in agile.', lessons: 8, icon: <Award className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />, biWeek: 'Weeks 5-6' },
  { id: 'capstone', title: 'Capstone & Certification Prep', type: 'paid', desc: 'Real-world project, mock exams, certification prep, career guidance.', lessons: 12, icon: <GraduationCap className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />, biWeek: 'Weeks 5-6' },
]

const freeModules = modules.filter((m) => m.type === 'free')
const paidModules = modules.filter((m) => m.type === 'paid')

export default function ModulesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-[color:var(--text-core)]">
            Course <span className="gold">Modules</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-secondary">
            Start free, unlock the full program when ready. Each module includes hands-on video walkthroughs.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-8 text-center gold">Free Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {freeModules.map((mod) => (
              <div key={mod.id} className="card-free">
                {videoMap[mod.id] && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-[color:var(--bg-card)]">
                    <video
                      src={videoMap[mod.id]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3 mb-3">
{mod.icon}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[color:var(--text-core)]">{mod.title}</h3>
                    <p className="text-xs mt-1" style={{ color: 'var(--free-cta-text)' }}>{mod.biWeek}</p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--free-cta-text)' }}>{mod.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--free-cta-text)' }}>{mod.lessons} lessons</span>
                  <div className="flex gap-3">
                    <Link
                      href={`/courses/modules/${mod.id}`}
                      className="btn-outline-blue px-5 py-2.5 w-auto text-sm font-bold transition-all"
                    >
                      View Module
                    </Link>
                    <Link
                      href={`/enroll?module=${mod.id}&type=free`}
                      className="btn-gold px-5 py-2.5 w-auto text-sm font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      Start Learning
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold mb-8 text-center gold">Full Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paidModules.map((mod) => (
              <div key={mod.id} className="card-premium">
                {videoMap[mod.id] && (
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
                )}
                <div className="flex items-start gap-3 mb-3">
{mod.icon}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[color:var(--text-core)]">{mod.title}</h3>
                    <p className="text-xs mt-1 text-muted">{mod.biWeek}</p>
                  </div>
                </div>
                <p className="text-sm mb-4 text-secondary">{mod.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{mod.lessons} lessons</span>
                  <div className="flex gap-3">
                    <Link
                      href={`/courses/modules/${mod.id}`}
                      className="btn-outline-gold px-5 py-2.5 w-auto text-sm font-bold transition-all bg-white dark:bg-[#242830]"
                    >
                      View Module
                    </Link>
                    <Link
                      href={`/enroll?module=${mod.id}&type=paid`}
                      className="btn-gold px-5 py-2.5 w-auto text-sm font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
