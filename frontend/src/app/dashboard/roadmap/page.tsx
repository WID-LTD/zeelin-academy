'use client'
import { Map, ChevronRight, CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BARoadmap() {
  const stages = [
    { name: 'Foundation', status: 'completed', items: ['Business Analysis Fundamentals', 'BCS Foundation Certificate'], progress: 100 },
    { name: 'Core Modules', status: 'in-progress', items: ['Business Analysis Practice', 'Requirements Engineering'], progress: 45 },
    { name: 'Knowledge Specialist', status: 'pending', items: ['Choose your specialist module'], progress: 0 },
    { name: 'Practitioner Specialist', status: 'pending', items: ['Choose your practitioner module'], progress: 0 },
    { name: 'Oral Examination', status: 'pending', items: ['Prepare for oral exam', 'Book exam date'], progress: 0 },
    { name: 'Diploma Awarded', status: 'pending', items: ['BCS International Diploma in Business Analysis'], progress: 0 },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><Map className="w-6 h-6 gold" /> BA Foundation Roadmap</h1>
      <p className="text-[color:var(--text-secondary)] mb-8">Your structured path to achieving the BCS International Diploma in Business Analysis.</p>
      <div className="relative">
        {stages.map((stage, i) => (
          <div key={i} className="relative pl-8 pb-8 border-l-2 border-[color:var(--border)] last:border-l-0 last:pb-0">
            <div className="absolute -left-3 top-0">
              {stage.status === 'completed' ? <CheckCircle2 className="w-6 h-6 gold" /> : stage.status === 'in-progress' ? <ArrowRight className="w-6 h-6 gold" /> : <Circle className="w-6 h-6 text-[color:var(--text-muted)]" />}
            </div>
            <div className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-[color:var(--text-core)]">{stage.name}</h3>
                <span className={`text-xs font-bold ${stage.status === 'completed' ? 'gold' : stage.status === 'in-progress' ? 'gold' : 'text-[color:var(--text-muted)]'}`}>{stage.status === 'completed' ? 'Completed' : stage.status === 'in-progress' ? 'In Progress' : 'Pending'}</span>
              </div>
              <div className="space-y-1 mb-3">{stage.items.map((item, j) => <p key={j} className="text-sm text-[color:var(--text-secondary)]">- {item}</p>)}</div>
              <div className="h-2 w-full bg-[color:var(--border)] rounded-full overflow-hidden"><div className="h-full gold-bg rounded-full transition-all" style={{ width: `${stage.progress}%` }}></div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
