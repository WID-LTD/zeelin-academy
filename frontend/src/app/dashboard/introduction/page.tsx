'use client'
import { Compass, ChevronRight, CheckCircle, Target, BookOpen, FileText, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function IntroductionWalkthrough() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><Compass className="w-6 h-6 gold" /> Introduction & Walkthrough</h1>
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
          <h2 className="font-bold text-lg text-[color:var(--text-core)] mb-3">Welcome to Zeelin Academy</h2>
          <p className="text-[color:var(--text-secondary)] mb-4">This walkthrough will help you get started with your Business Analysis journey. Here is what you will find:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { icon: <Target className="w-5 h-5" />, title: 'Your Learning Path', desc: 'Structured roadmap from beginner to certified BA professional' },
              { icon: <BookOpen className="w-5 h-5" />, title: 'Course Materials', desc: 'Video lessons, PowerPoints, and reading resources' },
              { icon: <BarChart3 className="w-5 h-5" />, title: 'Progress Tracking', desc: 'Monitor your completion and performance metrics' },
              { icon: <FileText className="w-5 h-5" />, title: 'Exam Preparation', desc: 'Mock quizzes, daily tests, and final exam prep' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-primary)]">
                <div className="w-10 h-10 rounded-lg gold-bg flex items-center justify-center mb-3 text-black">{item.icon}</div>
                <h3 className="font-bold text-[color:var(--text-core)] mb-1">{item.title}</h3>
                <p className="text-sm text-[color:var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
          <h2 className="font-bold text-lg text-[color:var(--text-core)] mb-4">Quick Start Checklist</h2>
          {[
            'Complete your profile information',
            'Take the Diploma Pathway Finder quiz',
            'Enroll in your first course',
            'Watch the orientation video',
            'Join the community forum',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <CheckCircle className="w-5 h-5 gold" />
              <span className="text-[color:var(--text-core)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
