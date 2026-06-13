'use client'
import { CalendarDays, ChevronRight, CheckCircle2, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CourseCalendar() {
  const weeks = [
    { week: 1, topic: 'Understanding Business Analysis', tasks: ['Read module introduction', 'Watch lecture video', 'Complete quiz'], deadline: 'Week 1' },
    { week: 2, topic: 'Strategy and Business Context', tasks: ['SWOT analysis exercise', 'Case study review', 'Group discussion'], deadline: 'Week 2' },
    { week: 3, topic: 'Stakeholders and Investigation', tasks: ['Stakeholder mapping', 'Interview techniques practice', 'Workshop prep'], deadline: 'Week 3' },
    { week: 4, topic: 'Modelling and Requirements', tasks: ['Process modelling exercise', 'Requirements documentation', 'Peer review'], deadline: 'Week 4' },
    { week: 5, topic: 'Business Case and Change', tasks: ['Business case draft', 'Cost-benefit analysis', 'Presentation prep'], deadline: 'Week 5' },
    { week: 6, topic: 'Revision and Exam Readiness', tasks: ['Mock exam', 'Weak area review', 'Final preparation'], deadline: 'Week 6' },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><CalendarDays className="w-6 h-6 gold" /> Course Calendar</h1>
      <div className="space-y-4">
        {weeks.map(w => (
          <div key={w.week} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-[color:var(--text-core)]">Week {w.week}: {w.topic}</h3>
              <span className="text-xs gold font-bold">{w.deadline}</span>
            </div>
            <div className="space-y-2">
              {w.tasks.map((task, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[color:var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 gold" /> {task}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-[color:var(--text-muted)]"><Clock className="w-3 h-3" /> Due by end of {w.deadline}</div>
          </div>
        ))}
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
