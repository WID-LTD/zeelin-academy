'use client'

import Link from 'next/link'
import { FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram, FaArrowRight } from 'react-icons/fa'

const whyZeelin = [
  'Industry-aligned curriculum',
  'Lifetime access to materials',
  'Personal success coach',
  'Flexible self-paced study',
  'Proven 95% pass rate',
  'Real-world BA skills',
]

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-display text-xl font-bold tracking-tight">
                <span style={{ color: 'var(--text-core)' }}>Zeelin</span>{' '}
                <span style={{ color: 'var(--text-core)' }}>Academy</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Pioneered by Dr. Franklin Kalu, Zeelin Academy bridges the gap for aspiring Business Analysts
              through structured, practical education. Based in the United Kingdom.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.linkedin.com/company/zeelin-academy" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/zeelinacademy" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@zeelinacademy" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                aria-label="Follow us on YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/zeelinacademy" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
            {/* Newsletter */}
            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: 'var(--text-core)' }}>Stay Updated</div>
              <p className="text-[0.625rem] mb-3" style={{ color: 'var(--text-muted)' }}>
                Get the latest BA tips and course updates
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address for newsletter"
                  className="flex-1 px-3 py-2 rounded-lg text-xs border focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)', color: 'var(--text-core)' }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-3 py-2 rounded-lg text-xs font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1"
                  style={{ backgroundColor: 'var(--brand-gold)', color: 'var(--btn-gold-text)' }}
                >
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Quick Links</h2>
            <div className="flex flex-col">
              <Link href="/" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Home</Link>
              <Link href="/about" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>About Zeelin Academy</Link>
              <Link href="/pathway-finder" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Diploma Pathway Finder</Link>
              <Link href="/courses" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Courses</Link>

              <Link href="/resources" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Resources</Link>
              <Link href="/contact" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Contact</Link>
            </div>
          </div>

          {/* Why Zeelin */}
          <div>
            <h2 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Why Zeelin</h2>
            <div className="flex flex-col">
              {whyZeelin.map((item) => (
                <span key={item} className="text-xs py-2 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brand-gold)' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h2 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Legal</h2>
            <div className="flex flex-col">
              <Link href="/privacy" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
              <Link href="/terms" className="text-xs py-2 transition-all duration-200 hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>Terms and Conditions</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-4 font-display text-sm" style={{ color: 'var(--text-core)' }}>Contact</h2>
            <div className="flex flex-col text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="py-2">London, United Kingdom</span>
              <a href="mailto:info@zeelinacademy.com" className="py-2 transition-all duration-200 hover:text-[var(--brand-gold)]">info@zeelinacademy.com</a>
              <span className="py-2">Mon–Fri, 9am–6pm GMT</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Zeelin Academy. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Pioneered by Dr. Franklin Kalu</p>
        </div>
      </div>
    </footer>
  )
}