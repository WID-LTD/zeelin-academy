'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer(){
  return <footer className="zr-footer">
    <section className="zr-footer-conversion">
      <div>
        <span>START WITH THE CAREER CATEGORY</span>
        <h2>Choose your package. Follow the entire readiness journey.</h2>
        <p>Training, practical work experience, mentorship, evidence, assessment and job acquisition — designed to operate as one connected system.</p>
      </div>
      <div className="zr-footer-actions"><Link href="/pathway-finder" className="zr-btn-gold">Find my pathway <ArrowRight size={16}/></Link><Link href="/packages" className="zr-btn-outline">Explore packages</Link></div>
    </section>

    <div className="zr-footer-grid">
      <div className="zr-footer-brand">
        <Image src="/logo-light.png" width={180} height={64} alt="Zeelin Academy"/>
        <p>Zeelin Academy is a job-readiness platform that connects learning, project experience and job acquisition around career-category packages.</p>
        <div className="zr-social">
          <a href="https://www.linkedin.com/company/zeelin-academy" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
          <a href="https://www.youtube.com/@zeelinacademy" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17}/></a>
          <a href="https://www.instagram.com/zeelinacademy" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a>
        </div>
      </div>
      <div><h3>Explore</h3><Link href="/packages">Job Readiness Packages</Link><Link href="/pathway-finder">Pathway Finder</Link><Link href="/courses">How the system works</Link><Link href="/resources">Resources</Link></div>
      <div><h3>Zeelin</h3><Link href="/about">About Zeelin Academy</Link><Link href="/community">Community</Link><Link href="/support">Support Center</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Account</h3><Link href="/login">Learner sign in</Link><Link href="/enroll">Enrollment</Link><Link href="/help">Help Center</Link><Link href="/sitemap">Sitemap</Link></div>
      <div><h3>Legal</h3><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div>
    </div>

    <div className="zr-footer-base"><span>© {new Date().getFullYear()} Zeelin Academy. All rights reserved.</span><span>Learn. Build experience. Get job-ready.</span></div>
  </footer>
}
