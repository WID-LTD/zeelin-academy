'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import {
  BookOpen, GraduationCap, Zap, Clock, Target, CheckCircle, Calendar,
  Users, Star, UserCheck, Route, FastForward, Info,
  School, FlaskConical, Sparkles, HelpCircle, Headphones, Award,
  Phone, Laptop, CreditCard, BookMarked, Mic, CalendarCheck, Flag,
  ListChecks, Lightbulb, TrendingUp, Layers, Rocket, Verified
} from 'lucide-react'

const learningFeatures = [
  {
    icon: School, accent: 'navy',
    title: 'Monday to Friday live /instructor led Training',
    desc: 'Daily one-hour interactive classes breaking down complex Diploma concepts. Led by expert instructors focusing on clarity, exam techniques, and practical application.',
  },
  {
    icon: FlaskConical, accent: 'gold',
    title: 'Saturday Success Lab',
    desc: '3-hour intensive session every Saturday for 6 weeks. Review weekly concepts, clarify doubts, and prepare with practice exam questions and feedback.',
    tagline: '"Close the week with clarity. Start the next week with confidence."',
  },
  {
    icon: Sparkles, accent: 'navy',
    title: 'Structured Visual summaries',
    desc: 'High-quality visual aids, mind maps, and summary charts that condense complex information into easy-to-digest formats for quick revision.',
    tagline: 'See the concept. Understand it faster. Remember it longer.',
  },
  {
    icon: HelpCircle, accent: 'gold',
    title: 'Interactive Mock quiz',
    desc: 'Daily bite-sized quizzes and full-length mock exams hosted on an interactive platform simulating the exam environment with instant feedback.',
    tagline: '"The goal is to make exam practice active, repetitive, and effective."',
  },
  {
    icon: Headphones, accent: 'navy',
    title: 'Zeelin Guided success support',
    desc: 'Through dedicated support channels including Slack and coaching calls, learners receive personalized guidance and mentoring throughout their preparation journey.',
  },
  {
    icon: CheckCircle, accent: 'gold',
    title: 'Automatic Exam readiness check',
    desc: 'System evaluates learner performance across quizzes and workshops to provide an Exam Readiness Score, ensuring learners sit exams when statistically likely to pass.',
  },
  {
    icon: Phone, accent: 'navy',
    title: 'Pass-Ready Coaching Call',
    desc: 'For learners who reach a high score on their readiness check, a final 1-on-1 coaching session to fine-tune strategy and boost confidence for exam day.',
  },
  {
    icon: Laptop, accent: 'gold',
    title: 'Zeelin Learning Management System',
    desc: 'State-of-the-art LMS hosting the Microlearning Ecosystem with 10-minute video capsules, downloadable resources, and tracking tools accessible 24/7 on any device.',
  },
  {
    icon: CreditCard, accent: 'navy',
    title: 'Bonus - Zeelin Professional Membership Tour',
    desc: 'Guided tour and walkthough on how to maximize professional membership benefits.',
    disclaimer: 'This is a walkthrough of how to use your professional society membership. It is not an offer of free membership.',
  },
  {
    icon: BookMarked, accent: 'gold',
    title: 'Bonus \u2013 Access to Zeelin Exam Focus Companion Guide',
    desc: 'Exclusive PDF guide that is a distilled version of the syllabus, highlighting exact areas frequently tested in the exams, saving hours of unnecessary reading.',
  },
  {
    icon: Mic, accent: 'navy',
    title: 'Oral Exam readiness support',
    desc: 'Mock oral interviews, critique sessions, and articulation workshops to help demonstrate practitioner-level knowledge to the examiners.',
    tagline: 'Know it. Explain it. Defend it with confidence.',
  },
  {
    icon: CalendarCheck, accent: 'gold',
    title: 'Exam booking Guidance',
    desc: 'Step-by-step guidance on how to book exams, choose the right dates, and manage the portal requirements.',
    tagline: '"Your focus should be on passing, not paperwork."',
  },
]

const specialistModules = [
  ['Business Analysis Foundation', 'Knowledge-based'],
  ['Business Change', 'Knowledge-based'],
  ['Organisational Behaviour', 'Knowledge-based'],
  ['IS Project Management', 'Knowledge-based'],
  ['Modelling Business Processes', 'Practitioner'],
  ['Benefits Management and Business Acceptance', 'Practitioner'],
  ['Systems Modelling Techniques', 'Practitioner'],
  ['Systems Development Essentials', 'Practitioner'],
  ['Data Management Essentials', 'Practitioner'],
]

interface Package {
  id: number
  name: string
  slug: string
  price: number
  currency: string
  description: string
  features: string[]
  is_active: boolean
}

export default function PackagesPageContent() {
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const getPrice = (slug: string) => {
    const pkg = packages.find(p => p.slug === slug)
    return pkg ? `£${pkg.price}` : slug.includes('bundle') || slug.includes('fast') ? '£400' : '£100'
  }

  const getHref = (slug: string) => {
    const typeMap: Record<string, string> = {
      'single-module': 'paid',
      'complete-bundle': 'bundle',
      'fast-track': 'fast-track',
    }
    const type = typeMap[slug] || 'paid'
    return `/enroll?type=${type}&package=${slug}`
  }

  const defaultPkg = (slug: string, label: string) => {
    const pkg = packages.find(p => p.slug === slug)
    return {
      title: pkg?.name || label,
      price: pkg ? `£${pkg.price}` : (slug === 'single-module' ? '£100' : '£400'),
      unit: slug === 'single-module' ? 'per module' : (slug === 'complete-bundle' ? 'full bundle' : 'intensive'),
      tag: slug === 'single-module' ? 'FOUNDATIONAL' : (slug === 'complete-bundle' ? 'MOST POPULAR' : 'FAST-TRACK ROUTE'),
      icon: slug === 'single-module' ? BookOpen : (slug === 'complete-bundle' ? GraduationCap : Zap),
      features: pkg?.features ? (
        slug === 'single-module'
          ? pkg.features
          : slug === 'complete-bundle'
            ? pkg.features
            : pkg.features
      ) : [
        slug === 'single-module' ? '6 Weeks Duration' : (slug === 'complete-bundle' ? '24-Week Standard Route' : '6-Week Intensive Route'),
        slug === 'single-module' ? 'Focus on one exam' : (slug === 'complete-bundle' ? 'Cohorts: Starter & Hybrid' : 'For experienced learners'),
        slug === 'single-module' ? 'Personalized support' : (slug === 'complete-bundle' ? 'Complete diploma syllabus' : 'Accelerated study schedule'),
      ],
      featured: slug === 'complete-bundle',
      btnLabel: slug === 'single-module' ? 'SELECT MODULE' : (slug === 'complete-bundle' ? 'ENROLL IN BUNDLE' : 'START FAST-TRACK'),
      href: getHref(slug),
    }
  }

  const cards = ['single-module', 'complete-bundle', 'fast-track'].map(s => defaultPkg(s, ''))

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <AnimatedSection delay={0}>
        <section className="relative py-16 lg:py-24 px-[5%] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <svg fill="none" height="100%" viewBox="0 0 400 800" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 0L0 400L400 800V0Z" fill="#D4AF37" />
            </svg>
          </div>
          <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto text-center relative z-10">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
              style={{ color: 'var(--text-core)' }}>
              What Zeelin Academy{' '}
              <span style={{ color: 'var(--brand-gold)' }}>offers</span>
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl font-semibold max-w-[800px] 3xl:max-w-[1200px] mx-auto"
              style={{ color: 'var(--text-secondary)' }}>
              Prepare for the Professional Diploma in Business Analysis with Zeelin Academy&rsquo;s structured,
              expert-led exam preparation support.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== PRICING & PACKAGES GRID ===== */}
      <AnimatedSection delay={100}>
        <section className="py-16 lg:py-24 px-[5%] max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
          <h2 className="sr-only">Pricing Packages</h2>
          {loading ? (
            <div className="text-center py-12 text-lg" style={{ color: 'var(--text-secondary)' }}>Loading packages...</div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {cards.map((card, idx) => {
              const Icon = card.icon
              return card.featured ? (
                <div key={card.title}
                  className="relative flex flex-col rounded-2xl p-8 lg:p-12 xl:p-14 lg:scale-105 z-20 border-t-8 shadow-xl"
                  style={{ backgroundColor: '#0D1B2A', color: '#ffffff', borderTopColor: 'var(--brand-gold)' }}>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: 'var(--brand-gold)', color: '#0D1B2A' }}>
                    STANDARD ROUTE
                  </div>
                  <div className="flex justify-between items-start mt-2 mb-4">
                    <div className="p-3 lg:p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-white">{card.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--brand-gold)' }}>{card.price}</span>
                    <span className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>{card.unit}</span>
                  </div>
                  <div className="space-y-2 lg:space-y-3 mb-6 flex-grow">
                    {card.features.map((f: string) => (
                      <div key={f} className="flex items-center gap-2 lg:gap-3">
                        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: 'var(--brand-gold)' }} />
                        <span className="text-sm md:text-base lg:text-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={card.href}
                    className="block w-full text-center py-4 lg:py-5 rounded-lg font-bold text-sm md:text-base uppercase tracking-wider shadow-xl active:scale-95 hover:scale-[1.02] transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)',
                      color: '#0D1B2A',
                    }}>
                    {card.btnLabel}
                  </Link>
                </div>
              ) : (
                <div key={card.title}
                  className="flex flex-col rounded-2xl p-8 lg:p-12 border transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 lg:p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: 'var(--text-core)' }} />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--text-core)' }}>{card.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ color: 'var(--text-core)' }}>{card.price}</span>
                    <span className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>{card.unit}</span>
                  </div>
                  <div className="space-y-2 lg:space-y-3 mb-6 flex-grow">
                    {card.features.map((f: string) => (
                      <div key={f} className="flex items-center gap-2 lg:gap-3">
                        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: 'var(--brand-gold)' }} />
                        <span className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-core)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={card.href}
                    className="block w-full text-center py-4 lg:py-5 rounded-lg border-2 font-bold text-sm md:text-base uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95"
                    style={{
                      borderColor: '#0D1B2A',
                      color: '#0D1B2A',
                      backgroundColor: 'transparent',
                    }}>
                    {card.btnLabel}
                  </Link>
                </div>
              )
            })}
          </div>
          )}
        </section>
      </AnimatedSection>

      {/* ===== ROUTE COMPARISON & DISCLAIMER ===== */}
      <AnimatedSection delay={200}>
        <section className="py-16 lg:py-24 px-[5%]"
          style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6" style={{ color: 'var(--text-core)' }}>
                  Exam Preparation Route
                </h2>
                <div className="space-y-4 lg:space-y-6">
                  <div className="p-6 lg:p-8 rounded-xl shadow-md flex gap-4 lg:gap-6"
                    style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid #0D1B2A' }}>
                    <div className="flex-shrink-0">
                      <Route className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: '#0D1B2A' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs md:text-sm uppercase tracking-widest mb-1" style={{ color: '#0D1B2A' }}>
                        STANDARD ROUTE (24 WEEKS)
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                        Our standard Business analysis Diploma preparation route gives learners approximately six weeks per module.
                        This is suitable for busy professionals, parents, career changers, and learners who want steady progress
                        without rushing.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 rounded-xl shadow-md flex gap-4 lg:gap-6"
                    style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--brand-gold)' }}>
                    <div className="flex-shrink-0">
                      <FastForward className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs md:text-sm uppercase tracking-widest mb-1" style={{ color: 'var(--brand-gold)' }}>
                        FAST-TRACK ROUTE (6 WEEKS)
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                        Our fast-track route is an intensive preparation option for experienced or highly committed learners who
                        want to cover the full Diploma preparation structure in a shorter period.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px] lg:h-[550px]"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.2) 50%, transparent 100%)',
                  }}>
                  <div className="p-6 lg:p-8 rounded-xl shadow-xl backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      borderTop: '3px solid var(--brand-gold)',
                    }}>
                    <div className="flex gap-3 items-start">
                      <Info className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                      <div className="space-y-3 lg:space-y-4">
                        <div>
                          <h3 className="font-bold text-xs md:text-sm uppercase tracking-widest mb-1" style={{ color: '#0D1B2A' }}>
                            Exam Fees
                          </h3>
                          <p className="text-xs md:text-sm lg:text-base leading-relaxed" style={{ color: 'var(--text-core)' }}>
                            Zeelin Academy&rsquo;s fees cover training and exam preparation support only.
                            Official exam fees are not included. Learners are responsible for booking
                            and paying for their official exams separately.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xs md:text-sm uppercase tracking-widest mb-1" style={{ color: '#0D1B2A' }}>
                            Exam Booking Guidance
                          </h4>
                          <p className="text-xs md:text-sm lg:text-base leading-relaxed" style={{ color: 'var(--text-core)' }}>
                            Learners will also receive a guided exam-booking walkthrough.
                          </p>
                        </div>
                        <div className="p-3 lg:p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                          <h4 className="font-bold text-xs md:text-sm uppercase tracking-widest mb-1" style={{ color: '#ba1a1a' }}>
                            Disclaimer
                          </h4>
                          <p className="text-xs md:text-sm lg:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Zeelin Academy is an independent training provider.
We provide exam preparation support for learners preparing for professional certifications.
Learners are responsible for checking current certification requirements,
                            booking their official exams, and paying exam fees separately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== DELIVERY STRUCTURE HERO ===== */}
      <AnimatedSection delay={300}>
        <section className="relative py-16 lg:py-24 px-[5%] overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 50%)' }} />
          <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                style={{ color: 'var(--text-core)' }}>
                Delivery Structure
              </h2>
              <p className="text-lg md:text-xl xl:text-2xl font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                At Zeelin Academy, our Diploma preparation is delivered through structured cohorts and /or guided self-paced
                route. This helps learners stay organised, receive consistent support, and prepare without confusion. Learners
                may join the Zeelin Starter Diploma bundle cohort, Zeelin Hybrid Diploma Bundle Cohort, Single module Diploma
                Cohort or the Fast-Track Diploma bundle cohort.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-4"
                style={{ borderColor: 'rgba(212,160,42,0.1)' }}>
                <img
                  src="/international-business-analysis.jpg"
                  alt="Corporate Learning Environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block p-4 lg:p-6 rounded-lg shadow-xl border-l-4"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderLeftColor: 'var(--brand-gold)',
                }}>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)',
                      color: '#0D1B2A',
                    }}>
                    <Verified className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div>
                    <div className="font-bold text-xs lg:text-sm uppercase tracking-widest" style={{ color: '#0D1B2A' }}>
                      Professional Pathway
                    </div>
                    <div className="text-xs lg:text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Guaranteed Syllabus Alignment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== COHORT COMPARISON ===== */}
      <AnimatedSection delay={400}>
        <section className="py-16 lg:py-24 px-[5%] max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2" style={{ color: 'var(--text-core)' }}>
              How our Diploma Cohorts Work
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold max-w-[800px] 3xl:max-w-[1200px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Choose the learning rhythm that matches your career pace and professional commitments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            <div className="p-8 lg:p-12 xl:p-14 rounded-2xl shadow-lg transition-all group hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderTop: '4px solid var(--border)',
              }}>
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="font-display text-2xl lg:text-3xl font-bold" style={{ color: 'var(--text-core)' }}>
                  Starter Cohort
                </h3>
                <Rocket className="w-9 h-9 lg:w-10 lg:h-10" style={{ color: 'var(--text-muted)' }} />
              </div>
              <div className="space-y-4 lg:space-y-6 mb-4 lg:mb-6">
                <p className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                  The Complete Diploma Exam Prep Bundle - Zeelin Starter Diploma bundle cohort include the following Modules:
                </p>
                <ul className="space-y-1 ml-4">
                  {['Business Analysis Practice', 'Requirements Engineering', 'Business Analysis Foundation', 'Modelling Business Processes', 'Oral Exam Preparation'].map((item) => (
                    <li key={item} className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>&bull; {item}</li>
                  ))}
                </ul>
                <div>
                  <p className="text-sm md:text-base lg:text-lg font-bold" style={{ color: 'var(--text-core)' }}>Why this module?</p>
                  <p className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                    Because it is broad, and beginner friendly. NB - All the courses in this Cohort are taught by instructor
                    in a live session.
                  </p>
                </div>
              </div>
              <div className="text-xs md:text-sm italic pl-3 lg:pl-4 border-l-2"
                style={{ color: 'var(--text-muted)', borderLeftColor: 'rgba(212,160,42,0.3)' }}>
                Best for: Independent learners needing structured materials.
              </div>
            </div>

            <div className="relative p-8 lg:p-12 xl:p-14 rounded-2xl shadow-xl transition-all overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '4px solid var(--brand-gold)',
              }}>
              <div className="absolute top-0 right-0 px-4 lg:px-6 py-1 lg:py-2 font-bold text-[10px] lg:text-xs uppercase"
                style={{ backgroundColor: 'var(--brand-gold)', color: '#0D1B2A' }}>
                POPULAR
              </div>
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="font-display text-2xl lg:text-3xl font-bold" style={{ color: 'var(--text-core)' }}>
                  Zeelin Hybrid Diploma Bundle Cohort
                </h3>
                <Layers className="w-9 h-9 lg:w-10 lg:h-10" style={{ color: 'var(--brand-gold)' }} />
              </div>
              <div className="space-y-4 lg:space-y-6">
                <p className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                  The Complete Diploma Exam Prep Bundle - Zeelin Hybrid Diploma Bundle Cohort include 2 core modules which
                  are taught by instructor in a live session and 2 Specialist Modules including (One knowledge-base and One
                  Practitioner) Module.
                </p>
                <div>
                  <p className="text-sm md:text-base lg:text-lg font-bold" style={{ color: 'var(--text-core)' }}>The Core modules include:</p>
                  <ul className="space-y-1 lg:space-y-2 ml-4 mt-2">
                    {['Business Analysis Practice', 'Requirements Engineering'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: 'var(--brand-gold)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== 6-WEEK STRUCTURED READING ROADMAP ===== */}
      <AnimatedSection delay={500}>
        <section className="relative py-16 lg:py-24 px-[5%] overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
          }}>
          <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-4"
                style={{ color: 'var(--brand-gold)' }}>
                6-week structured reading roadmap
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold italic mb-6 lg:mb-8" style={{ color: 'var(--text-core)' }}>
                Know what to read. Know when to read it. Know how it helps you pass.
              </p>
              <div className="max-w-[800px] 3xl:max-w-[1200px] mx-auto">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  The 6-Week Structured Reading Roadmap is Zeelin Academy&rsquo;s guided study plan that helps learners know
                  exactly what to read, when to read it, and how each reading task connects to exam preparation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-16 lg:mb-20">
              <div className="space-y-6 lg:space-y-8">
                {[
                  { icon: BookOpen, text: 'Instead of leaving learners to face large textbooks, syllabuses, and study materials on their own, Zeelin Academy breaks the reading journey into manageable weekly and daily tasks.' },
                  { icon: Users, text: 'This helps busy professionals, career changers, parents, and working learners study with clarity, consistency, and confidence.' },
                  { icon: ListChecks, text: 'Each week, learners are guided through the key topics for their chosen module, supported with simple explanations, focused reading instructions, revision tasks, practice questions, and exam-readiness checks.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 lg:gap-6 items-start">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-gold)' }}>
                      <item.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <p className="text-base md:text-lg lg:text-xl font-semibold" style={{ color: 'var(--text-core)' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-6 lg:p-8 xl:p-10 rounded-2xl shadow-lg"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                  <Flag className="w-9 h-9 lg:w-10 lg:h-10" style={{ color: 'var(--brand-gold)' }} />
                  <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl" style={{ color: 'var(--brand-gold)' }}>
                    The Goal is Simple
                  </h3>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: 'var(--text-core)' }}>
                  To help learners move from confusion to structure, from scattered reading to focused preparation, and from
                  overwhelm to exam confidence.
                </p>
                <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 flex justify-between items-center"
                  style={{ borderTop: '1px solid var(--border)' }}>
                  {[
                    { value: '6', label: 'Weeks' },
                    { value: 'Daily', label: 'Tasks' },
                    { value: '100%', label: 'Clarity' },
                  ].map((item, i) => (
                    <React.Fragment key={item.label}>
                      {i > 0 && <div className="h-8 w-px" style={{ backgroundColor: 'var(--border)' }} />}
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold" style={{ color: 'var(--brand-gold)' }}>{item.value}</div>
                        <div className="text-[10px] lg:text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== LEARNING & SUPPORT ECOSYSTEM ===== */}
      <AnimatedSection delay={600}>
        <section className="py-16 lg:py-24 px-[5%]">
          <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <span className="font-bold text-xs lg:text-sm uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
                Unmatched Learning Experience
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-2" style={{ color: 'var(--text-core)' }}>
                Learning &amp; Support Ecosystem
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold max-w-[800px] 3xl:max-w-[1200px] mx-auto mt-4 lg:mt-6" style={{ color: 'var(--text-secondary)' }}>
                Every element of our program is designed to guide you seamlessly through your Diploma journey with expert
                coaching and modern learning tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
              {learningFeatures.map((feature, idx) => {
                const FIcon = feature.icon
                const isGold = feature.accent === 'gold'
                return (
                  <div key={feature.title}
                    className="p-6 lg:p-8 xl:p-10 rounded-xl shadow-md transition-all hover:-translate-y-1 flex flex-col h-full"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderTop: `4px solid ${isGold ? 'var(--brand-gold)' : '#0D1B2A'}`,
                    }}>
                    <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center shadow-md"
                        style={{
                          background: isGold
                            ? 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)'
                            : '#0D1B2A',
                          color: isGold ? '#0D1B2A' : 'var(--brand-gold)',
                        }}>
                        <FIcon className="w-6 h-6 lg:w-7 lg:h-7" />
                      </div>
                      <h3 className="font-display text-lg lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg flex-grow" style={{ color: 'var(--text-secondary)' }}>
                      {feature.desc}
                    </p>
                    {'tagline' in feature && feature.tagline && (
                      <p className="mt-3 lg:mt-4 text-xs lg:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>
                        {feature.tagline}
                      </p>
                    )}
                    {'disclaimer' in feature && feature.disclaimer && (
                      <p className="mt-3 lg:mt-4 text-[10px] lg:text-xs leading-tight pt-2 lg:pt-3" style={{ color: 'var(--text-muted)' }}>
                        {feature.disclaimer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== DIPLOMA COHORT PATHWAYS ===== */}
      <AnimatedSection delay={700}>
        <section className="py-16 lg:py-24 px-[5%]"
          style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <span className="font-bold text-xs lg:text-sm uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
                Curriculum Details
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-2" style={{ color: 'var(--text-core)' }}>
                Diploma Cohort Pathways
              </h2>
            </div>
            <div className="space-y-8 lg:space-y-12">
              <div className="p-8 lg:p-12 xl:p-14 rounded-2xl shadow-lg border-l-4"
                style={{ backgroundColor: 'var(--bg-card)', borderLeftColor: 'var(--brand-gold)' }}>
                <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6" style={{ color: 'var(--text-core)' }}>
                  Zeelin Hybrid Diploma Bundle Cohort
                </h3>
                <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-8" style={{ color: 'var(--text-secondary)' }}>
                  The Complete Diploma Exam Prep Bundle - Zeelin Hybrid Diploma Bundle Cohort include 2 core modules which
                  are taught by instructor in a live session and 2 Specialist Modules including (One knowledge-base and One
                  Practitioner) Module.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="font-bold text-sm lg:text-base" style={{ color: 'var(--text-core)' }}>The Core modules include:</h4>
                    {['Business Analysis Practice', 'Requirements Engineering'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm md:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: 'var(--brand-gold)' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="font-bold text-sm lg:text-base" style={{ color: 'var(--text-core)' }}>What are Specialist modules?</h4>
                    <p className="text-xs md:text-sm lg:text-base" style={{ color: 'var(--text-secondary)' }}>
                      These are the optional/specialist choices learners may select.
                    </p>
                    <div className="overflow-hidden rounded border text-xs lg:text-sm"
                      style={{ borderColor: 'var(--border)' }}>
                      <table className="w-full text-left">
                        <thead>
                          <tr className="font-bold text-xs lg:text-sm" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-core)' }}>
                            <th className="p-2 lg:p-3 border-b" style={{ borderColor: 'var(--border)' }}>Specialist module</th>
                            <th className="p-2 lg:p-3 border-b" style={{ borderColor: 'var(--border)' }}>Type</th>
                          </tr>
                        </thead>
                        <tbody style={{ color: 'var(--text-secondary)' }}>
                          {specialistModules.map((row, i) => (
                            <tr key={row[0]} className={i < specialistModules.length - 1 ? 'border-b' : ''}
                              style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                              <td className="p-2 lg:p-3">{row[0]}</td>
                              <td className="p-2 lg:p-3">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="mt-6 lg:mt-8 p-4 lg:p-6 rounded text-xs lg:text-sm italic"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <strong style={{ color: 'var(--text-core)' }}>NB - Specialist Modules Delivery Requirement:</strong>
                  {' '}A Specialist module becomes a live cohort when at least 5 learners enrol. If fewer than 5 learners
                  enrol, they can choose to Join the Guided Self-Paced Route including (1 or 2 live session + everything in
                  the Zeelin Starter Diploma bundle cohort) or join the nearest related Module-by-Module cohort if suitable.
                </div>
                <div className="mt-4 lg:mt-6 text-xl lg:text-2xl xl:text-3xl font-bold" style={{ color: 'var(--brand-gold)' }}>
                  Price - {getPrice('single-module')} per Module
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
                <div className="p-8 lg:p-12 xl:p-14 rounded-2xl shadow-lg"
                  style={{ backgroundColor: 'var(--bg-card)', borderTop: '4px solid #0D1B2A' }}>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 lg:mb-6" style={{ color: 'var(--text-core)' }}>
                    Single module Diploma Cohort
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg mb-3" style={{ color: 'var(--text-secondary)' }}>
                    This option is ideal for learners who want to focus on one exam, study at a manageable pace, or
                    build their Diploma pathway gradually.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg mb-3" style={{ color: 'var(--text-secondary)' }}>
                    Candidates can prepare for one module at a time with Zeelin Academy&rsquo;s six-week exam preparation
                    structure.
                  </p>
                  <p className="text-xs md:text-sm lg:text-base mb-6 lg:mb-8" style={{ color: 'var(--text-secondary)' }}>
                    Each module is delivered as a Live Cohort (5+ learners). If fewer than five learners enrol, the course
                    is delivered through a Guided Self-Paced Route including (1 or 2 live session + everything in the
                    Zeelin Starter Diploma bundle cohort).
                  </p>
                  <div className="flex justify-between items-center pt-4 lg:pt-6 font-bold text-sm md:text-base lg:text-lg"
                    style={{ borderTop: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-core)' }}>Price: {getPrice('single-module')} / module</span>
                    <span style={{ color: 'var(--text-core)' }}>Duration: 6 Weeks</span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 xl:p-14 rounded-2xl shadow-xl"
                  style={{ backgroundColor: 'var(--bg-card)' }}>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 lg:mb-6" style={{ color: 'var(--brand-gold)' }}>
                    The Fast-Track Diploma bundle cohort
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg mb-4 lg:mb-6" style={{ color: 'var(--text-secondary)' }}>
                    An intensive preparation route for learners who want to cover the full Diploma preparation structure
                    in a shorter period. Best for experienced learners or current BAs.
                  </p>
                  <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                    <h4 className="text-xs lg:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>
                      Includes full support ecosystem:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-1 lg:gap-y-2 text-xs md:text-sm lg:text-base"
                      style={{ color: 'var(--text-core)' }}>
                      {['6-week reading roadmap', 'Mon-Fri Live Training', 'Saturday Success Lab', 'Visual summaries', 'Mock quizzes', 'Guided success support', 'Readiness checks', 'Coaching Call', 'LMS Access', 'Oral Exam support'].map((item) => (
                        <li key={item}>&bull; {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 lg:pt-6 font-bold text-sm md:text-base lg:text-lg"
                    style={{ borderTop: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--brand-gold)' }}>Price: {getPrice('fast-track')}</span>
                    <span style={{ color: 'var(--brand-gold)' }}>Duration: 6 Weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== FINAL CTA ===== */}
      <AnimatedSection delay={800}>
        <section className="py-16 lg:py-24 px-[5%]">
          <div className="mx-auto max-w-[1280px] 3xl:max-w-[2240px] rounded-2xl text-center shadow-xl relative overflow-hidden py-12 lg:py-16 xl:py-20 px-8 lg:px-12 xl:px-16"
            style={{
              backgroundColor: 'var(--brand-gold)',
              color: '#0D1B2A',
            }}>
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 pointer-events-none"
              style={{ backgroundColor: 'var(--brand-gold)' }} />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 pointer-events-none"
              style={{ backgroundColor: 'var(--brand-gold)' }} />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 lg:mb-12 text-center">
                C. Why choose Zeelin Academy?
              </h2>
              <div className="max-w-[800px] 3xl:max-w-[1200px] mx-auto space-y-6 lg:space-y-8">
                <div className="p-4 lg:p-6 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderTop: '4px solid #0D1B2A' }}>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold" style={{ color: '#0D1B2A' }}>
                    Preparing for Business Analysis exams can feel overwhelming, especially when you are working full-time,
                    changing careers, raising a family, or trying to study after a long day. Zeelin Academy was created for
                    busy learners who need more than just study materials.
                  </p>
                </div>
                <div className="p-6 lg:p-8 xl:p-10 rounded-2xl shadow-lg"
                  style={{ backgroundColor: 'var(--bg-card)', borderTop: '4px solid var(--brand-gold)' }}>
                  <h3 className="font-display text-xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6 flex items-center gap-2 lg:gap-3" style={{ color: 'var(--text-core)' }}>
                    <Lightbulb className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: 'var(--brand-gold)' }} /> Our approach is simple
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg mb-4 lg:mb-6" style={{ color: 'var(--text-secondary)' }}>
                    We break difficult topics into manageable steps, explain concepts in plain language, and provide visual
                    summaries. We guide learners through weekly reading tasks, support them with mock quizzes, and help them
                    track their exam readiness before booking the exam.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-4 lg:pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-2 lg:gap-3 text-sm md:text-base lg:text-lg font-bold" style={{ color: 'var(--text-core)' }}>
                      <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: 'var(--brand-gold)' }} /> Structure &amp; Guidance
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 text-sm md:text-base lg:text-lg font-bold" style={{ color: 'var(--text-core)' }}>
                      <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: 'var(--brand-gold)' }} /> Accountability Support
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:p-6 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderTop: '4px solid #0D1B2A' }}>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold" style={{ color: '#0D1B2A' }}>
                    Whether you are preparing for one module or working towards the full Professional Diploma in
                    Business Analysis, Zeelin Academy helps you study with direction, stay consistent, and move towards
                    exam readiness with confidence.
                  </p>
                </div>
                <div className="pt-4 lg:pt-6">
                  <Link href="/enroll"
                    className="inline-block px-10 lg:px-14 xl:px-16 py-4 lg:py-5 xl:py-6 rounded-lg font-bold text-base lg:text-lg xl:text-xl uppercase tracking-wider shadow-xl hover:scale-105 transition-transform active:scale-95"
                    style={{ backgroundColor: '#0D1B2A', color: '#ffffff' }}>
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
