'use client'
import { FileText, ChevronRight, Download, Eye } from 'lucide-react'
import Link from 'next/link'

export default function PowerPointTutorial() {
  const presentations = [
    { title: 'Introduction to Business Analysis', slides: 45, module: 'Foundations' },
    { title: 'Strategic Context & Analysis', slides: 38, module: 'Foundations' },
    { title: 'Stakeholder Management', slides: 32, module: 'Core' },
    { title: 'Process Modelling Techniques', slides: 40, module: 'Practice' },
    { title: 'Requirements Engineering', slides: 35, module: 'Core' },
    { title: 'Business Case Development', slides: 28, module: 'Practice' },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><FileText className="w-6 h-6 gold" /> Course PowerPoint Tutorial</h1>
      <p className="text-[color:var(--text-secondary)] mb-6">Download or view PowerPoint presentations for each module.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {presentations.map((p, i) => (
          <div key={i} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all">
            <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-3 text-black"><FileText className="w-6 h-6" /></div>
            <span className="text-xs font-bold gold uppercase mb-1 block">{p.module}</span>
            <h3 className="font-bold text-[color:var(--text-core)] mb-2">{p.title}</h3>
            <p className="text-xs text-[color:var(--text-muted)] mb-4">{p.slides} slides</p>
            <div className="flex gap-2">
              <button className="flex-1 btn-gold text-xs py-2 font-bold flex items-center justify-center gap-1"><Eye className="w-3 h-3" /> View</button>
              <button className="flex-1 border border-[color:var(--border)] text-xs py-2 font-bold rounded-lg text-[color:var(--text-secondary)] hover:border-[color:var(--brand-gold)] transition-all flex items-center justify-center gap-1"><Download className="w-3 h-3" /> Download</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
