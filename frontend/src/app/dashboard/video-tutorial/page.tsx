'use client'
import { Video, ChevronRight, PlayCircle, Clock, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function VideoTutorial() {
  const modules = [
    { id: 1, title: 'Business Analysis Foundations', lessons: 12, duration: '4h 30m', progress: 100 },
    { id: 2, title: 'BCS Foundation Certificate Prep', lessons: 10, duration: '3h 45m', progress: 68 },
    { id: 3, title: 'Business Analysis Practice', lessons: 8, duration: '3h 00m', progress: 30 },
    { id: 4, title: 'Requirements Engineering', lessons: 6, duration: '2h 15m', progress: 0 },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><Video className="w-6 h-6 gold" /> Course Video Tutorial</h1>
      <p className="text-[color:var(--text-secondary)] mb-6">Access video tutorials for all modules. Track your viewing progress.</p>
      <div className="grid grid-cols-1 gap-4">
        {modules.map(m => (
          <div key={m.id} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-14 h-14 rounded-xl gold-bg flex items-center justify-center flex-shrink-0"><PlayCircle className="w-7 h-7 text-black" /></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[color:var(--text-core)]">{m.title}</h3>
                <div className="flex items-center gap-4 text-xs text-[color:var(--text-muted)] mt-1">
                  <span>{m.lessons} lessons</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {m.duration}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-[color:var(--border)] rounded-full overflow-hidden"><div className="h-full gold-bg rounded-full" style={{ width: `${m.progress}%` }}></div></div>
                  <span className="text-xs font-bold gold">{m.progress}%</span>
                </div>
              </div>
              <Link href={`/learn/${m.id}`} className="btn-gold px-4 py-2 text-xs font-bold whitespace-nowrap">{m.progress > 0 ? 'Continue' : 'Start'}</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
