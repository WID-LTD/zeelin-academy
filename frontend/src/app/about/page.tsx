import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Compass, Layers3, ShieldCheck, Target } from 'lucide-react'
import { stockImages } from '@/lib/jobReadinessData'

export const metadata: Metadata = {
  title: 'About Zeelin | Job Readiness System',
  description: 'Learn why Zeelin connects training, work experience, mentorship, readiness assessment and job acquisition in one career system.',
}

export default function AboutPage(){
  return <div className="jr-site">
    <section className="jr-about-hero"><div><span>ABOUT ZEELIN ACADEMY</span><h1>We are building the bridge between learning and employability.</h1><p>Zeelin exists because completing a course and becoming job-ready are not the same thing. Our system connects knowledge, practice, work experience, professional review and job acquisition.</p><Link href="/packages" className="jr-btn-primary">Explore packages <ArrowRight size={16}/></Link></div><img src={stockImages.about} alt="Professional team collaborating"/></section>
    <section className="jr-section"><div className="jr-section-heading"><span>OUR OPERATING IDEA</span><h2>Career readiness is a system, not a single certificate.</h2><p>Every part of Zeelin is designed to answer a different question an employer could ask.</p></div><div className="jr-about-principles">
      <article><Compass/><h3>Do you know the work?</h3><p>Training builds the shared foundation and role-specific knowledge.</p></article>
      <article><Layers3/><h3>Can you do the work?</h3><p>Projects turn concepts into deliverables, tools and evidence.</p></article>
      <article><ShieldCheck/><h3>Can you prove the work?</h3><p>Mentorship, evaluations and evidence improve credibility.</p></article>
      <article><Target/><h3>Can you pursue the opportunity?</h3><p>Job Acquisition adds sourcing, applications, accountability and support.</p></article>
    </div></section>
    <section className="jr-about-story"><img src={stockImages.mentor} alt="Mentorship conversation"/><div><span>WHY THE SYSTEM IS DIFFERENT</span><h2>One learner. One package. One connected journey.</h2><p>Instead of selling disconnected exam modules, Zeelin organises readiness around career categories. The learner selects a package, completes the common foundation for that category, develops differentiator skills for target roles, completes a substantial project, receives review and then enters job acquisition.</p><div className="jr-check-list"><span><CheckCircle2/> Career-category curriculum</span><span><CheckCircle2/> Practical work experience</span><span><CheckCircle2/> Mentorship and evaluation</span><span><CheckCircle2/> Portfolio evidence</span><span><CheckCircle2/> Job acquisition support</span></div></div></section>
    <section className="jr-final-cta"><span>OUR MISSION</span><h2>Help people become demonstrably ready for the work they want.</h2><p>Not just informed. Not just certified. Ready to show evidence, speak about their experience and pursue relevant roles with structure.</p><div><Link href="/pathway-finder" className="jr-btn-primary">Find my pathway</Link><Link href="/contact" className="jr-btn-light">Talk to Zeelin</Link></div></section>
  </div>
}
