'use client'

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 text-center">
      <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-4">Something went wrong</h2>
      <p className="text-[color:var(--text-secondary)] mb-6">{error.message || 'Failed to load dashboard data'}</p>
      <button onClick={reset} className="btn-gold px-6 py-2.5 text-sm font-bold">Try Again</button>
    </div>
  )
}
