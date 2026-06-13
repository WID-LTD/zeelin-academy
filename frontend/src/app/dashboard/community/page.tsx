'use client'
import { useState } from 'react'
import { MessageSquare, Send, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CommunityForum() {
  const [posts] = useState<any[]>([
    { id: 1, author: 'Dr. Franklin Kalu', title: 'Welcome to the Zeelin Community!', content: 'Introduce yourself and let us know your BA goals. We are here to support each other!', replies: 12, date: '2026-06-10', tag: 'Announcement' },
    { id: 2, author: 'Sarah M.', title: 'Tips for BCS Foundation Exam', content: 'Here are my top study tips after passing the Foundation exam...', replies: 8, date: '2026-06-08', tag: 'Study Tips' },
    { id: 3, author: 'James D.', title: 'Business Analysis Practice - Study Group', content: 'Looking for study partners for the BA Practice module. Anyone interested?', replies: 5, date: '2026-06-05', tag: 'Study Group' },
  ])

  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><MessageSquare className="w-6 h-6 gold" /> Community Forum</h1>
      <div className="space-y-4">
        {posts.map(p => (
          <div key={p.id} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold gold uppercase">{p.tag}</span>
              <span className="text-xs text-[color:var(--text-muted)]">{p.date}</span>
            </div>
            <h3 className="font-bold text-[color:var(--text-core)] mb-1">{p.title}</h3>
            <p className="text-sm text-[color:var(--text-secondary)] mb-3">{p.content}</p>
            <div className="flex items-center justify-between text-xs text-[color:var(--text-muted)]">
              <span>By {p.author}</span>
              <span>{p.replies} replies</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="btn-gold px-6 py-2.5 text-sm font-bold flex items-center gap-2"><Send className="w-4 h-4" /> Start a Discussion</button>
      </div>
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
