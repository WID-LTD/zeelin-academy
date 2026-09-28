import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, Globe2, HeartHandshake, Layers3, Lightbulb, Search, Target, TrendingUp, UsersRound, Wrench } from 'lucide-react'
import { stockImages } from '@/lib/jobReadinessData'

export const metadata: Metadata = {
  title: 'About Zeelin Academy | Founder, Mission & Job Readiness System',
  description: 'Discover Zeelin Academy, founded by Dr Franklin Kalu, and the evolution from structured Business Analysis learning into a connected training, work experience and job acquisition system.',
}

const milestones=[
  ['2023','Academy Founded','Dr Franklin established Zeelin Academy with a vision to transform Business Analysis education for busy professionals.','/stack.jpg'],
  ['2024','First Official Cohort','Zeelin launched its first Business Analysis cohort and the original Academy recorded a 100% pass rate.','/classroom.jpg'],
  ['2025','Learners in Their Hundreds','The Academy welcomed learners in their hundreds, including career changers, parents of young children and Business Analysts developing their careers.','/group.png'],
  ['2026','The Job Readiness System','Zeelin expanded the original learning model into a connected pathway combining training, work experience, mentorship, assessment and job acquisition.','https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85'],
]

const values=[
  ['Clarity','Make complex ideas understandable and actionable.',Lightbulb],
  ['Structure','Give learners a visible path, sequence and next step.',Layers3],
  ['Support','Create access to guidance, mentorship and community.',HeartHandshake],
  ['Confidence','Help learners explain what they know and what they have done.',TrendingUp],
  ['Practical learning','Connect concepts to realistic work, tools and deliverables.',Wrench],
]

export default function AboutPage(){
  return <div className="zr-site">
    <section className="zr-about-hero2">
      <div><span>ABOUT ZEELIN ACADEMY</span><h1>Built for the gap between learning and getting hired.</h1><p>Zeelin Academy has evolved from structured Business Analysis education into a broader Job Readiness System: one connected experience for learning the work, practising the work, building evidence and pursuing relevant opportunities.</p><div className="zr-hero-actions"><Link href="/packages" className="zr-btn-gold">Explore packages <ArrowRight size={16}/></Link><Link href="/pathway-finder" className="zr-btn-white">Find my pathway</Link></div></div>
      <img src={stockImages.about} alt="Professional team collaborating"/>
    </section>

    <section className="zr-founder-section">
      <div className="zr-founder-photo"><img src="/franklin.jpg" alt="Dr Franklin Kalu, Founder of Zeelin Academy"/><div><b>Dr Franklin Kalu</b><span>Founder, Zeelin Academy</span></div></div>
      <div className="zr-founder-copy"><span>THE STORY BEHIND THE ACADEMY</span><h2>A practical response to a familiar learning problem.</h2><p>Zeelin Academy was founded by <strong>Dr Franklin Kalu</strong>, a Business Analysis professional, educator and transformation-focused leader who understands the pressure of learning while balancing work, family and personal responsibilities.</p><p>After using a structured micro-learning approach to successfully complete Business Analysis studies, Franklin recognised that many learners struggle not because they lack ability, but because they lack structure, support and clarity.</p><p>That insight became the starting point for Zeelin Academy: make learning easier to navigate, make progress visible, make support available and connect knowledge to practical application.</p><blockquote>“Success becomes achievable when learning is structured, practical, and designed for real life.”<cite>— Dr Franklin Kalu</cite></blockquote></div>
    </section>

    <section className="zr-about-evolution">
      <div className="zr-section-head split"><div><span>THE EVOLUTION</span><h2>What began as an academy now operates as a readiness system.</h2></div><p>The original focus on clarity, structure and guided learning remains. The difference is that Zeelin now continues beyond training into practical work experience, mentorship, assessment, evidence and job acquisition.</p></div>
      <div className="zr-evolution-grid">
        <article><BookOpen/><h3>Learn</h3><p>Shared foundation modules establish the capabilities common across roles in a career category.</p></article>
        <article><Layers3/><h3>Differentiate</h3><p>Role-specific modules deepen the skills, tools and context that make one pathway different from another.</p></article>
        <article><BriefcaseBusiness/><h3>Experience</h3><p>One substantial package project gives learners a practical environment to produce deliverables.</p></article>
        <article><UsersRound/><h3>Review</h3><p>Mentorship, accountability and evaluation improve the quality of the work and the learner’s explanation of it.</p></article>
        <article><Search/><h3>Acquire</h3><p>The Job Acquisition Portal turns readiness into sourcing, applications, tracking and structured action.</p></article>
      </div>
    </section>

    <section className="zr-mission-vision">
      <article><span>OUR MISSION</span><h2>Make career readiness structured, practical and achievable.</h2><p>Zeelin’s mission is to help learners from varied backgrounds build relevant capability, practise it in realistic work, produce credible evidence, receive useful feedback and pursue opportunities with a clear system rather than guesswork.</p></article>
      <article><span>OUR VISION</span><h2>Become a trusted bridge between education and employability.</h2><p>Our long-term vision is a platform where learning does not end with content completion: every learner can move from knowledge to practice, experience, evidence and job acquisition within one connected career pathway.</p></article>
    </section>

    <section className="zr-values">
      <div className="zr-section-head"><span>THE PRINCIPLES THAT HAVE NOT CHANGED</span><h2>Clarity. Structure. Support. Confidence. Practical learning.</h2></div>
      <div className="zr-values-grid">{values.map(([title,text,Icon]:any)=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="zr-timeline">
      <div className="zr-section-head split"><div><span>OUR JOURNEY</span><h2>From a learning idea to a connected career platform.</h2></div><p>The Academy’s development has followed the same principle it teaches: build the foundation, learn from evidence, then expand the system deliberately.</p></div>
      <div className="zr-timeline-grid">{milestones.map(([year,title,text,image])=><article key={year}><img src={image} alt=""/><div><span>{year}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="zr-audience">
      <div><span>WHO ZEELIN IS FOR</span><h2>People who want a career path, not just more content.</h2><p>Zeelin is designed for beginners, career changers, professionals moving into adjacent roles and working analysts who want to broaden or reposition their career direction.</p></div>
      <div className="zr-audience-grid"><article><Target/><h3>Career changers</h3><p>Build a structured bridge into a new category of work.</p></article><article><Globe2/><h3>Global job seekers</h3><p>Understand role families and build evidence that travels across markets.</p></article><article><TrendingUp/><h3>Early-career professionals</h3><p>Turn foundational knowledge into practical experience and a stronger career story.</p></article><article><UsersRound/><h3>Experienced professionals</h3><p>Develop adjacent capabilities, reposition existing experience and pursue new roles.</p></article></div>
    </section>

    <section className="zr-about-close">
      <img src="https://images.unsplash.com/photo-1497366811364-ccf3f98eb2fd?auto=format&fit=crop&w=1800&q=85" alt="Modern professional office"/>
      <div><span>THE BIG PICTURE</span><h2>One package. One project. One connected job-readiness journey.</h2><p>The package is the course, and the course is the package. The learner chooses a career category, develops the shared foundation and role differentiators, completes one substantial project, receives review and continues into job acquisition.</p><Link href="/pathway-finder" className="zr-btn-gold">Find my pathway <ArrowRight size={16}/></Link></div>
    </section>
  </div>
}
