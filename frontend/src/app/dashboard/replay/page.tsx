'use client'
import { PlayCircle, ChevronRight, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ClassReplay() {
  const replays = [
    { title: 'Introduction to Business Analysis', date: '2026-06-10', duration: '45:00', instructor: 'Dr. Franklin Kalu' },
    { title: 'Understanding Stakeholder Analysis', date: '2026-06-08', duration: '50:00', instructor: 'Dr. Franklin Kalu' },
    { title: 'Process Modelling Techniques', date: '2026-06-05', duration: '55:00', instructor: 'Dr. Franklin Kalu' },
    { title: 'Requirements Engineering Basics', date: '2026-06-03', duration: '48:00', instructor: 'Dr. Franklin Kalu' },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><PlayCircle className="w-6 h-6 gold" /> Class Replay</h1>
      <p className="text-[color:var(--text-secondary)] mb-6">Watch recordings of past live classes. New replays are added within 24 hours of each session.</p>
      <div className="grid grid-cols-1 gap-4">
        {replays.map((r, i) => (
          <div key={i} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-14 h-14 rounded-xl gold-bg flex items-center justify-center flex-shrink-0"><PlayCircle className="w-7 h-7 text-black" /></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[color:var(--text-core)] truncate">{r.title}</h3>
              <div className="flex items-center gap-4 text-xs text-[color:var(--text-muted)] mt-1">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {r.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {r.duration}</span>
                <span>{r.instructor}</span>
              </div>
            </div>
            <button className="btn-gold px-4 py-2 text-xs font-bold whitespace-nowrap">Watch Now</button>
          </div>
        ))}
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
