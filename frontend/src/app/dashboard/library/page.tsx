'use client'
import { useEffect, useState } from 'react'
import { getUserToken } from '@/lib/auth'
import { BookOpen, ChevronRight, FileText, Video, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ResourceLibrary() {
  const [resources, setResources] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/resources', { headers: { 'Authorization': `Bearer ${getUserToken() || ''}` } })
      .then(r => r.json()).then(d => { setResources(Array.isArray(d) ? d : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 gold" /> Resource Library</h1>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => <div key={i} className="p-6 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] animate-pulse"><div className="h-4 bg-[color:var(--border)] rounded w-3/4 mb-3" /><div className="h-3 bg-[color:var(--border)] rounded w-full mb-2" /><div className="h-3 bg-[color:var(--border)] rounded w-1/2" /></div>)}
        </div>
      ) : resources.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="w-16 h-16 mx-auto mb-4 gold opacity-50" />
          <p className="text-[color:var(--text-secondary)]">No resources available yet. Check back soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r: any) => (
            <div key={r.id} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all">
              <div className="flex items-center gap-2 mb-2">
                {r.type === 'video' ? <Video className="w-4 h-4 gold" /> : <FileText className="w-4 h-4 gold" />}
                <span className="text-xs font-bold gold uppercase">{r.type}</span>
              </div>
              <h3 className="font-bold text-[color:var(--text-core)] mb-1">{r.title}</h3>
              <p className="text-sm text-[color:var(--text-secondary)] mb-3 line-clamp-2">{r.description}</p>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm gold font-semibold flex items-center gap-1 hover:underline">Open <ExternalLink className="w-3 h-3" /></a>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
