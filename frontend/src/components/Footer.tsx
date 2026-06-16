import Link from 'next/link'


export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-display text-xl font-bold tracking-tight">
                <span style={{ color: 'var(--text-core)' }}>Zeelin</span>{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Academy</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted mb-4">
              Pioneered by Dr. Franklin Kalu, Zeelin Academy bridges the gap for aspiring Business Analysts
              through structured, practical education. Based in the United Kingdom.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/zeelin-academy" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] hover:text-[color:var(--brand-gold)] transition-colors text-muted"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Quick Links</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-xs footer-link">Home</Link>
              <Link href="/about" className="text-xs footer-link">About Zeelin Academy</Link>
              <Link href="/pathway-finder" className="text-xs footer-link">Diploma Pathway Finder</Link>
              <Link href="/courses" className="text-xs footer-link">Courses</Link>
              <Link href="/bcs-exam-prep" className="text-xs footer-link">BCS BA Exam Prep</Link>
              <Link href="/resources" className="text-xs footer-link">Resources</Link>
              <Link href="/contact" className="text-xs footer-link">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Legal</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/privacy" className="text-xs footer-link">Privacy Policy</Link>
              <Link href="/terms" className="text-xs footer-link">Terms and Conditions</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Contact</h3>
            <div className="flex flex-col gap-2.5 text-xs text-muted">
              <span>London, United Kingdom</span>
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