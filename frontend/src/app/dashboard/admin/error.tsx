'use client'

export default function AdminError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-4">Admin Error</h2>
        <p className="text-[color:var(--text-secondary)] mb-6">{error.message || 'Failed to load admin panel'}</p>
        <button onClick={reset} className="btn-gold px-6 py-2.5 text-sm font-bold">Try Again</button>
      </div>
    </div>
  )
}
