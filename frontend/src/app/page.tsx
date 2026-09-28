import Link from 'next/link'
import { ArrowRight, CheckCircle2, FolderKanban, GraduationCap, SearchCheck, Sparkles, UsersRound } from 'lucide-react'
import PackageCatalog from '@/components/PackageCatalog'
import { readinessJourney, stockImages } from '@/lib/jobReadinessData'

export default function Home() {
  return (
    <div className="jr-site">
      <section className="jr-home-hero">
        <div className="jr-home-hero-copy">
          <span className="jr-eyebrow">THE ZEELIN JOB READINESS SYSTEM</span>
          <h1>Build the skills.<br />Prove the experience.<br /><em>Get job-ready.</em></h1>
          <p>Zeelin connects the entire career journey — structured training, practical work experience, mentorship, readiness assessment and job acquisition — inside one system.</p>
          <div className="jr-hero-actions">
            <Link href="/pathway-finder" className="jr-btn-primary">Find my pathway <ArrowRight size={17} /></Link>
            <Link href="/packages" className="jr-btn-light">Explore all packages</Link>
          </div>
          <div className="jr-hero-trust">
            <span><CheckCircle2 size={16}/> One category = one package</span>
            <span><CheckCircle2 size={16}/> One package = one complete journey</span>
          </div>
        </div>
        <div className="jr-home-hero-media">
          <img src={stockImages.hero} alt="Professionals collaborating around a table" />
          <div className="jr-floating-card one"><b>7</b><span>Career categories</span></div>
          <div className="jr-floating-card two"><b>Train → Project → Jobs</b><span>One connected pathway</span></div>
        </div>
      </section>

      <section className="jr-proof-strip">
        <div><GraduationCap/><span><b>Structured Training</b><small>Shared foundation + role differentiators</small></span></div>
        <div><FolderKanban/><span><b>Work Experience</b><small>One substantial project per package</small></span></div>
        <div><UsersRound/><span><b>Mentorship & Review</b><small>Feedback, evidence and readiness</small></span></div>
        <div><SearchCheck/><span><b>Job Acquisition</b><small>Role-specific boards and application workflow</small></span></div>
      </section>

      <section className="jr-section jr-intro">
        <div className="jr-section-heading">
          <span>THE BIG PICTURE</span>
          <h2>This is not just a course platform.</h2>
          <p>It is a job-readiness operating system designed around the careers people actually want to enter.</p>
        </div>
        <div className="jr-intro-grid">
          <div className="jr-intro-image"><img src={stockImages.training} alt="Professional training workshop" /></div>
          <div className="jr-intro-copy">
            <span className="jr-eyebrow dark">ONE PACKAGE. ONE CAREER CATEGORY.</span>
            <h3>Learn what is common. Specialise in what makes each role different.</h3>
            <p>Every package begins with foundation modules built around the shared capabilities across the roles in that category. Learners then move into role-specific differentiator modules, complete one practical project, receive review and mentorship, and enter job acquisition for the roles covered by the package.</p>
            <div className="jr-check-list">
              <span><CheckCircle2/> Shared foundation modules</span>
              <span><CheckCircle2/> Role-specific differentiator modules</span>
              <span><CheckCircle2/> One work-experience project</span>
              <span><CheckCircle2/> Mentorship and evaluation</span>
              <span><CheckCircle2/> Job acquisition workflow</span>
            </div>
          </div>
        </div>
      </section>

      <section className="jr-section jr-package-section">
        <div className="jr-section-heading left">
          <span>7 JOB-READINESS CATEGORIES</span>
          <h2>Choose the package that matches where you want to work.</h2>
          <p>Each package is the course. Each course is the package. Your purchase unlocks the full pathway for that career category.</p>
        </div>
        <PackageCatalog compact />
      </section>

      <section className="jr-journey-section">
        <div className="jr-section-heading light">
          <span>YOUR COMPLETE PATHWAY</span>
          <h2>From learning to job acquisition, without breaking the journey.</h2>
          <p>The platform is designed so every stage prepares you for the next.</p>
        </div>
        <div className="jr-journey-grid">
          {readinessJourney.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="jr-section jr-product-showcase">
        <div className="jr-section-heading">
          <span>ONE CONNECTED SYSTEM</span>
          <h2>Three portals. One career outcome.</h2>
          <p>Training builds capability. Work experience proves it. Job acquisition turns readiness into action.</p>
        </div>
        <div className="jr-product-grid">
          <article><img src={stockImages.training} alt="" /><div><span>01</span><h3>Job Training Portal</h3><p>Daily learning, modules, check-ins, study structure and role-specific curriculum.</p></div></article>
          <article><img src={stockImages.project} alt="" /><div><span>02</span><h3>Work Experience System</h3><p>Project briefs, tools, deliverables, evidence, community, mentorship and final assessment.</p></div></article>
          <article><img src={stockImages.acquisition} alt="" /><div><span>03</span><h3>Job Acquisition Portal</h3><p>Role-specific job boards, applications, accountability, tracking and premium support.</p></div></article>
        </div>
      </section>

      <section className="jr-mentor-story">
        <img src={stockImages.mentor} alt="Professional mentorship meeting" />
        <div>
          <span className="jr-eyebrow">MENTORSHIP + ACCOUNTABILITY</span>
          <h2>You should not have to figure out career readiness alone.</h2>
          <p>Zeelin combines guided learning with accountability, mentor review, progress evidence and practical feedback. The goal is not to keep you consuming content — it is to move you toward demonstrable readiness.</p>
          <Link href="/about" className="jr-btn-light">Why Zeelin works <ArrowRight size={16}/></Link>
        </div>
      </section>

      <section className="jr-final-cta">
        <Sparkles />
        <span>YOUR CAREER SHOULD NOT STOP AT LEARNING</span>
        <h2>Choose a package and follow the full job-readiness journey.</h2>
        <p>Build skills, create experience, prove readiness and pursue opportunities — inside one connected system.</p>
        <div><Link href="/pathway-finder" className="jr-btn-primary">Find my package</Link><Link href="/packages" className="jr-btn-light">View all packages</Link></div>
      </section>
    </div>
  )
}
