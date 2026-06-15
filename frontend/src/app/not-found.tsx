
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[color:var(--text-core)] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[color:var(--text-secondary)] mb-8">Page Not Found</h2>
      <p className="text-lg text-[color:var(--text-muted)] max-w-lg mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn-gold px-8 py-3 rounded-xl font-bold">Return to Home</Link>
    </div>
  )
}
