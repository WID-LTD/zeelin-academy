import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-display text-xl font-bold tracking-tight">
                <span style={{ color: 'var(--text-core)' }}>Zeelin</span>{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Academy</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md text-muted">
              Pioneered by Dr. Franklin Kalu, Zeelin Academy bridges the gap for aspiring Business Analysts
              through structured, practical education. Based in the United Kingdom.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-display" style={{ color: 'var(--text-core)' }}>Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm footer-link">Home</Link>
              <Link href="/courses" className="text-sm footer-link">Courses</Link>
              <Link href="/courses/modules" className="text-sm footer-link">Modules</Link>
              <Link href="/enroll" className="text-sm footer-link">Enroll</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-display" style={{ color: 'var(--text-core)' }}>Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <span>United Kingdom</span>
              <a href="mailto:info@zeelinacademy.com" className="footer-link">info@zeelinacademy.com</a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Zeelin Academy. All rights reserved.</p>
          <p className="text-xs text-muted">Pioneered by Dr. Franklin Kalu</p>
        </div>
      </div>
    </footer>
  )
}