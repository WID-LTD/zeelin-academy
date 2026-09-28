'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Linkedin, Youtube, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="jr-footer">
      <div className="jr-footer-cta">
        <div>
          <span>READY TO BECOME JOB-READY?</span>
          <h2>Choose one package. Follow the full journey.</h2>
          <p>Training, work experience, mentorship, assessment and job acquisition — connected in one system.</p>
        </div>
        <Link href="/pathway-finder" className="jr-btn-primary">Find my pathway <ArrowRight size={16} /></Link>
      </div>

      <div className="jr-footer-grid">
        <div className="jr-footer-brand">
          <Image src="/logo-light.png" alt="Zeelin Academy" width={170} height={60} />
          <h3>Zeelin Academy</h3>
          <p>A connected Job Readiness System designed to move learners from training to evidence, experience and job acquisition.</p>
          <div className="jr-socials">
            <a href="https://www.linkedin.com/company/zeelin-academy" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://www.youtube.com/@zeelinacademy" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17} /></a>
            <a href="https://www.instagram.com/zeelinacademy" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
          </div>
        </div>
        <div><h4>Platform</h4><Link href="/packages">Job Readiness Packages</Link><Link href="/pathway-finder">Pathway Finder</Link><Link href="/courses">Curriculum</Link><Link href="/community">Community</Link></div>
        <div><h4>Company</h4><Link href="/about">About Zeelin</Link><Link href="/resources">Resources</Link><Link href="/support">Support</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Account</h4><Link href="/login">Sign in</Link><Link href="/enroll">Enroll</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>

      <div className="jr-footer-bottom">
        <span>© {new Date().getFullYear()} Zeelin Academy. All rights reserved.</span>
        <span>From learning to work experience to job acquisition.</span>
      </div>
    </footer>
  )
}
