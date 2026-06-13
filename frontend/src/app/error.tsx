'use client'

export default function RootError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <h2 className="text-3xl font-bold text-[color:var(--text-core)] mb-4">Unexpected Error</h2>
        <p className="text-[color:var(--text-secondary)] mb-2">Something went wrong. Please try again.</p>
        <p className="text-sm text-[color:var(--text-muted)] mb-8">{error.message}</p>
        <button onClick={reset} className="btn-gold px-8 py-3 font-bold">Reload</button>
      </div>
    </div>
  )
}
