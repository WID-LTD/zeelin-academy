import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, TrendingUp, FolderKanban, MessageSquareText, Search, Users } from 'lucide-react'
import PackageCatalog from '@/components/PackageCatalog'
import { jobReadinessPackages, stockImages } from '@/lib/jobReadinessData'

export const metadata: Metadata = {
  title: 'Zeelin Academy | Training, Work Experience & Job Acquisition',
  description: 'Choose a career-category package and move through structured training, practical work experience, mentorship, assessment and job acquisition in one connected job-readiness system.',
}

const systemStages = [
  ['01','Training','Build the shared foundation across the roles in your category, then develop the differentiator skills for your target direction.',BookOpen],
  ['02','Practice','Use daily tasks, tools, check-ins and guided activities to turn theory into repeatable working habits.',TrendingUp],
  ['03','Work Experience','Complete one substantial project for your package and produce evidence you can explain and defend.',FolderKanban],
  ['04','Mentorship & Evaluation','Get review, feedback, accountability and readiness signals while improving the quality of your work.',Users],
  ['05','Job Acquisition','Move into role-specific job boards, applications, tracking and structured acquisition routines.',Search],
]

const packageRail=[...jobReadinessPackages,...jobReadinessPackages]

export default function Home(){
  const schema = {
    '@context':'https://schema.org',
    '@type':'EducationalOrganization',
    name:'Zeelin Academy',
    description:'A connected job-readiness system combining training, work experience, mentorship, evaluation and job acquisition.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zeelin-academy.vercel.app',
    sameAs:[
      'https://www.linkedin.com/company/zeelin-academy',
      'https://www.youtube.com/@zeelinacademy',
      'https://www.instagram.com/zeelinacademy'
    ],
  }

  return <div className="zr-site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />

    <section className="zr-hero">
      <div className="zr-hero-copy">
        <span>THE ZEELIN JOB READINESS SYSTEM</span>
        <h1>Learn the work.<br/>Build the experience.<br/><em>Win the opportunity.</em></h1>
        <p>Choose one career-category package and move through the whole pathway — training, project experience, mentorship, readiness assessment and job acquisition.</p>
        <div className="zr-hero-actions"><Link href="/pathway-finder" className="zr-btn-gold">Find my pathway <ArrowRight size={17}/></Link><Link href="/packages" className="zr-btn-white">Explore packages</Link></div>
      </div>
      <div className="zr-hero-image"><img src={stockImages.hero} alt="Professionals collaborating in a modern workplace"/></div>
    </section>

    <section className="zr-motion-strip" aria-label="Zeelin readiness journey">
      <div className="zr-motion-track">
        {['TRAINING','WORK EXPERIENCE','MENTORSHIP','PORTFOLIO EVIDENCE','ASSESSMENT','JOB ACQUISITION','TRAINING','WORK EXPERIENCE','MENTORSHIP','PORTFOLIO EVIDENCE','ASSESSMENT','JOB ACQUISITION'].map((item,i)=><span key={item+i}>{item}</span>)}
      </div>
    </section>

    <section className="zr-market-section zr-packages-intro">
      <div className="zr-section-head split">
        <div><span>7 CAREER-CATEGORY PACKAGES</span><h2>Your package is your complete pathway.</h2></div>
        <p>You are not buying disconnected modules. You choose a category of work, build the common foundation across the roles inside it, specialise through differentiators, complete one project and continue into job acquisition.</p>
      </div>
      <div className="zr-package-marquee" aria-label="Job readiness packages">
        <div className="zr-package-marquee-track">
          {packageRail.map((pkg,i)=><Link href={'/packages/'+pkg.slug} className="zr-marquee-card" key={pkg.slug+i} aria-hidden={i>=jobReadinessPackages.length}>
            <img src={pkg.image} alt={i<jobReadinessPackages.length?pkg.name:''}/>
            <div><span>{String((i%jobReadinessPackages.length)+1).padStart(2,'0')}</span><h3>{pkg.name}</h3><p>{pkg.roles.length} job roles</p><b>Explore pathway <ArrowRight size={15}/></b></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="zr-market-section zr-system">
      <div className="zr-section-head"><span>HOW ZEELIN WORKS</span><h2>One system. Five connected stages.</h2><p>Every stage is designed to prepare you for the next, so progress does not stop when the course content ends.</p></div>
      <div className="zr-stage-grid">{systemStages.map(([n,title,text,Icon]:any)=><article key={n}>
        <div className="zr-stage-top"><span>{n}</span><Icon size={28}/></div><h3>{title}</h3><p>{text}</p>
      </article>)}</div>
    </section>

    <section className="zr-editorial-grid">
      <article className="zr-editorial-main"><img src={stockImages.training} alt="Professional learning workshop"/><div><span>TRAINING THAT MAPS TO CAREERS</span><h2>Shared foundations first. Role differentiators next.</h2><p>The package model is built around what roles have in common and what makes them different. That means learners are not forced into a narrow title too early, while still developing the specialist capability needed for specific job directions.</p><Link href="/courses">See the curriculum model <ArrowRight size={15}/></Link></div></article>
      <article><img src={stockImages.project} alt="Modern project workspace"/><div><span>WORK EXPERIENCE</span><h3>Produce something worth showing.</h3><p>Complete one substantial package project with briefs, tools, deliverables, evidence and final assessment.</p><Link href="/about">Explore the system <ArrowRight size={15}/></Link></div></article>
      <article><img src={stockImages.acquisition} alt="Professionals preparing for career opportunities"/><div><span>JOB ACQUISITION</span><h3>Readiness turns into action.</h3><p>Role-specific boards, application tracking, accountability and acquisition support carry the journey into the market.</p><Link href="/packages">Choose a package <ArrowRight size={15}/></Link></div></article>
    </section>

    <section className="zr-package-catalog-section">
      <div className="zr-section-head split"><div><span>EXPLORE THE CATEGORIES</span><h2>Build toward the roles you actually want.</h2></div><Link href="/pathway-finder" className="zr-text-link">Not sure which category fits? Use Pathway Finder <ArrowRight size={15}/></Link></div>
      <PackageCatalog compact />
    </section>

    <section className="zr-why">
      <div className="zr-why-image"><img src={stockImages.mentor} alt="Professional mentor in a working session"/></div>
      <div className="zr-why-copy"><span>WHY ZEELIN</span><h2>Because learning alone does not create a convincing career story.</h2><p>Zeelin is designed around the gap between “I completed a course” and “I can demonstrate that I understand the work, have practised it, can explain my decisions and am actively pursuing the right opportunities.”</p>
        <div className="zr-why-list"><div><BriefcaseBusiness/><b>Career-category design</b><p>Packages are organised around related job families, not isolated lessons.</p></div><div><FolderKanban/><b>Evidence through projects</b><p>Practical deliverables give learners something concrete to discuss.</p></div><div><MessageSquareText/><b>Mentorship and review</b><p>Feedback and evaluation improve both work quality and confidence.</p></div><div><Search/><b>Acquisition built in</b><p>The pathway continues into actual job-search routines and application tracking.</p></div></div>
        <Link href="/about" className="zr-btn-dark">About Zeelin Academy <ArrowRight size={16}/></Link>
      </div>
    </section>

    <section className="zr-founder-teaser">
      <div><img src="/franklin.jpg" alt="Dr Franklin Kalu, Founder of Zeelin Academy"/></div>
      <div><span>FOUNDED WITH A PRACTICAL LEARNING PHILOSOPHY</span><h2>From structured Business Analysis learning to a complete job-readiness system.</h2><p>Zeelin Academy was founded by Dr Franklin Kalu, a Business Analysis professional, educator and transformation-focused leader. The academy began from a simple insight: people often struggle not because they lack ability, but because they lack structure, clarity, support and a practical path forward.</p><Link href="/about" className="zr-text-link">Read the founder story <ArrowRight size={15}/></Link></div>
    </section>

    <section className="zr-conversion">
      <div><span>READY TO START?</span><h2>Do not stop at learning. Build the experience and pursue the role.</h2><p>Find the career-category package that fits the work you want to do.</p></div>
      <div><Link href="/pathway-finder" className="zr-btn-gold">Find my pathway <ArrowRight size={16}/></Link><Link href="/contact" className="zr-btn-outline-light">Talk to Zeelin</Link></div>
    </section>
  </div>
}
