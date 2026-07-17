import Link from 'next/link'
import {
  BookOpen, GraduationCap, Zap, Clock, Target, CheckCircle, Calendar,
  Users, Star, UserCheck, Route, FastForward, Info,
  School, FlaskConical, Sparkles, HelpCircle, Headphones, Award,
  Phone, Laptop, CreditCard, BookMarked, Mic, CalendarCheck, Flag,
  ListChecks, Lightbulb, TrendingUp, Layers, Rocket, Verified, ArrowRight
} from 'lucide-react'

const pricingCards = [
  {
    title: 'Zeelin Module-by-Module Exam Prep',
    price: '£100',
    unit: 'per module',
    tag: 'FOUNDATIONAL',
    icon: BookOpen,
    features: [
      { icon: Clock, text: '6 Weeks Duration' },
      { icon: Target, text: 'Focus on one exam' },
      { icon: CheckCircle, text: 'Personalized support' },
    ],
    featured: false,
    btnLabel: 'SELECT MODULE',
    btnPrimary: false,
  },
  {
    title: 'Zeelin Complete Diploma Exam Prep Bundle',
    price: '£400',
    unit: 'full bundle',
    tag: 'MOST POPULAR',
    icon: GraduationCap,
    features: [
      { icon: Calendar, text: '24-Week Standard Route' },
      { icon: Users, text: 'Cohorts: Starter & Hybrid' },
      { icon: Star, text: 'Complete diploma syllabus' },
      { icon: UserCheck, text: 'Group Mentorship sessions' },
    ],
    featured: true,
    btnLabel: 'ENROLL IN BUNDLE',
    btnPrimary: true,
  },
  {
    title: 'Zeelin Fast-Track Diploma Exam Prep',
    price: '£400',
    unit: 'intensive',
    tag: 'FAST-TRACK ROUTE',
    icon: Zap,
    features: [
      { icon: Rocket, text: '6-Week Intensive Route' },
      { icon: Award, text: 'For experienced learners' },
      { icon: TrendingUp, text: 'Accelerated study schedule' },
    ],
    featured: false,
    btnLabel: 'START FAST-TRACK',
    btnPrimary: false,
  },
]

const learningFeatures = [
  { icon: School, title: 'Monday to Friday live /instructor led Training',
    desc: 'Daily one-hour interactive classes breaking down complex BCS Diploma concepts. Led by expert instructors focusing on clarity, exam techniques, and practical application.',
    accent: 'navy' },
  { icon: FlaskConical, title: 'Saturday Success Lab',
    desc: '3-hour intensive session every Saturday for 6 weeks. Review weekly concepts, clarify doubts, and prepare with practice exam questions and feedback.',
    accent: 'gold',
    tagline: '"Close the week with clarity. Start the next week with confidence."' },
  { icon: Sparkles, title: 'Structured Visual summaries',
    desc: 'High-quality visual aids, mind maps, and summary charts that condense complex information into easy-to-digest formats for quick revision.',
    accent: 'navy',
    tagline: 'See the concept. Understand it faster. Remember it longer.' },
  { icon: HelpCircle, title: 'Interactive Mock quiz',
    desc: 'Daily bite-sized quizzes and full-length mock exams hosted on an interactive platform simulating the exam environment with instant feedback.',
    accent: 'gold',
    tagline: '"The goal is to make exam practice active, repetitive, and effective."' },
  { icon: Headphones, title: 'Zeelin Guided success support',
    desc: 'Through dedicated support channels including Slack and coaching calls, learners receive personalized guidance and mentoring throughout their preparation journey.',
    accent: 'navy' },
  { icon: CheckCircle, title: 'Automatic Exam readiness check',
    desc: 'System evaluates learner performance across quizzes and workshops to provide an Exam Readiness Score, ensuring learners sit exams when statistically likely to pass.',
    accent: 'gold' },
  { icon: Phone, title: 'Pass-Ready Coaching Call',
    desc: 'For learners who reach a high score on their readiness check, a final 1-on-1 coaching session to fine-tune strategy and boost confidence for exam day.',
    accent: 'navy' },
  { icon: Laptop, title: 'Zeelin Learning Management System',
    desc: 'State-of-the-art LMS hosting the Microlearning Ecosystem with 10-minute video capsules, downloadable resources, and tracking tools accessible 24/7 on any device.',
    accent: 'gold' },
  { icon: CreditCard, title: 'Bonus - Zeelin BCS membership Tour',
    desc: 'Guided tour and walkthrough on how to maximize BCS membership benefits, access BCS resources, and utilize their library effectively.',
    accent: 'navy',
    disclaimer: 'This is a walkthrough of how to use your BCS membership. It is not an offer of free BCS membership.' },
  { icon: BookMarked, title: 'Bonus – Access to Zeelin Exam Focus Companion Guide',
    desc: 'Exclusive PDF guide that is a distilled version of the syllabus, highlighting exact areas frequently tested in the exams, saving hours of unnecessary reading.',
    accent: 'gold' },
  { icon: Mic, title: 'Oral Exam readiness support',
    desc: 'Mock oral interviews, critique sessions, and articulation workshops to help demonstrate practitioner-level knowledge to the examiners.',
    accent: 'navy',
    tagline: 'Know it. Explain it. Defend it with confidence.' },
  { icon: CalendarCheck, title: 'Exam booking Guidance',
    desc: 'Step-by-step guidance on how to book exams, choose the right dates, and manage the BCS portal requirements.',
    accent: 'gold',
    tagline: '"Your focus should be on passing, not paperwork."' },
]

export default function PackagesPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg fill="none" height="100%" viewBox="0 0 400 800" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 0L0 400L400 800V0Z" fill="#D4AF37" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
            style={{ color: 'var(--text-core)' }}>
            What Zeelin Academy{' '}
            <span style={{ color: 'var(--brand-gold)' }}>offers</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}>
            Prepare for the BCS International Diploma in Business Analysis with Zeelin Academy&rsquo;s structured,
            expert-led exam preparation support.
          </p>
        </div>
      </section>

      {/* ===== PRICING & PACKAGES GRID ===== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingCards.map((card) => {
            const Icon = card.icon
            return card.featured ? (
              <div key={card.title}
                className="relative flex flex-col rounded-2xl p-8 lg:scale-105 z-20 border-t-8 shadow-xl"
                style={{ backgroundColor: '#0D1B2A', color: '#ffffff', borderTopColor: 'var(--brand-gold)' }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: 'var(--brand-gold)', color: '#0D1B2A' }}>
                  STANDARD ROUTE
                </div>
                <div className="flex justify-between items-start mt-2 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <Icon className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{card.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold" style={{ color: 'var(--brand-gold)' }}>{card.price}</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{card.unit}</span>
                </div>
                <div className="space-y-2 mb-6 flex-grow">
                  {card.features.map((f) => {
                    const FIcon = f.icon
                    return (
                      <div key={f.text} className="flex items-center gap-2">
                        <FIcon className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>{f.text}</span>
                      </div>
                    )
                  })}
                </div>
                <button className="w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wider shadow-xl active:scale-95 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)',
                    color: '#0D1B2A',
                  }}>
                  {card.btnLabel}
                </button>
              </div>
            ) : (
              <div key={card.title}
                className="flex flex-col rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <Icon className="w-7 h-7" style={{ color: 'var(--text-core)' }} />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-core)' }}>{card.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold" style={{ color: 'var(--text-core)' }}>{card.price}</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{card.unit}</span>
                </div>
                <div className="space-y-2 mb-6 flex-grow">
                  {card.features.map((f) => {
                    const FIcon = f.icon
                    return (
                      <div key={f.text} className="flex items-center gap-2">
                        <FIcon className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-core)' }}>{f.text}</span>
                      </div>
                    )
                  })}
                </div>
                <button
                  className="w-full py-4 rounded-lg border-2 font-bold text-sm uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95"
                  style={{
                    borderColor: '#0D1B2A',
                    color: '#0D1B2A',
                    backgroundColor: 'transparent',
                  }}>
                  {card.btnLabel}
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== ROUTE COMPARISON & DISCLAIMER ===== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
                Exam Preparation Route
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl shadow-md flex gap-4"
                  style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid #0D1B2A' }}>
                  <div className="flex-shrink-0">
                    <Route className="w-8 h-8" style={{ color: '#0D1B2A' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: '#0D1B2A' }}>
                      STANDARD ROUTE (24 WEEKS)
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Our standard Business analysis Diploma preparation route gives learners approximately six weeks per module.
                      This is suitable for busy professionals, parents, career changers, and learners who want steady progress
                      without rushing.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl shadow-md flex gap-4"
                  style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--brand-gold)' }}>
                  <div className="flex-shrink-0">
                    <FastForward className="w-8 h-8" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--brand-gold)' }}>
                      FAST-TRACK ROUTE (6 WEEKS)
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Our fast-track route is an intensive preparation option for experienced or highly committed learners who
                      want to cover the full Diploma preparation structure in a shorter period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]"
              style={{ backgroundColor: 'var(--bg-card)' }}>
              <div className="absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.2) 50%, transparent 100%)',
                }}>
                <div className="p-4 rounded-xl shadow-xl backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    borderTop: '3px solid var(--brand-gold)',
                  }}>
                  <div className="flex gap-2 items-start">
                    <Info className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: '#0D1B2A' }}>
                          Exam Fees
                        </h5>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-core)' }}>
                          Zeelin Academy&rsquo;s fees cover training and exam preparation support only.
                          Official exam fees are not included. Learners are responsible for booking
                          and paying for their official exams separately.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: '#0D1B2A' }}>
                          Exam Booking Guidance
                        </h6>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-core)' }}>
                          Learners will also receive a guided exam-booking walkthrough.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h6 className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: '#ba1a1a' }}>
                          Disclaimer
                        </h6>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          Zeelin Academy is an independent training provider and is not BCS, The Chartered Institute for IT.
                          We provide exam preparation support for learners preparing for BCS Business Analysis certifications.
                          BCS names, certification titles, trademarks, syllabuses, exam materials, and official resources
                          remain the property of BCS. Learners are responsible for checking current BCS requirements,
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

      {/* ===== DELIVERY STRUCTURE HERO ===== */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              style={{ color: 'var(--text-core)' }}>
              Delivery Structure
            </h1>
            <p className="text-lg md:text-xl font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA0gzLXUp48V0dJSiCC2Vqa43Tm7J--U-M_w-APFr-5YFwqDib8tHHzmcPMT7el94ySUT9K94gT19UZDx5JI9hfUmzm1i5Am-dCjoGOlwHMu8I9Xil8wDRHHje1HP0n8czn_rLUTLktlRLeAkN2eLOk5A5RXOc2PbqxX7jlBjZYrRSLkgyRWv8G4oOwbabA-rS7-X77Z_UxYTTZKlQGiyDtSmxE7T_5cu_WcztyjeDr2F9NSWEo46q_HSFdTdg_q0iwzq_Co3Te_LG"
                alt="Corporate Learning Environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block p-4 rounded-lg shadow-xl border-l-4"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderLeftColor: 'var(--brand-gold)',
              }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)',
                    color: '#0D1B2A',
                  }}>
                  <Verified className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-widest" style={{ color: '#0D1B2A' }}>
                    BCS Accredited Path
                  </div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    Guaranteed Syllabus Alignment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COHORT COMPARISON ===== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-2" style={{ color: 'var(--text-core)' }}>
            How our Diploma Cohorts Work
          </h2>
          <p className="text-lg font-semibold max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Choose the learning rhythm that matches your career pace and professional commitments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Starter Cohort */}
          <div className="p-8 rounded-2xl shadow-lg transition-all group hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderTop: '4px solid var(--border)',
            }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text-core)' }}>
                Starter Cohort
              </h3>
              <Rocket className="w-9 h-9" style={{ color: 'var(--text-muted)' }} />
            </div>
            <div className="space-y-4 mb-4">
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                The Complete Diploma Exam Prep Bundle - Zeelin Starter Diploma bundle cohort include the following Modules:
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>&bull; Business Analysis Practice</li>
                <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>&bull; Requirements Engineering</li>
                <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>&bull; Business Analysis Foundation</li>
                <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>&bull; Modelling Business Processes</li>
                <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>&bull; Oral Exam Preparation</li>
              </ul>
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--text-core)' }}>Why this module?</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Because it is broad, and beginner friendly. NB - All the courses in this Cohort are taught by instructor
                  in a live session.
                </p>
              </div>
            </div>
            <div className="text-xs italic pl-3 border-l-2"
              style={{ color: 'var(--text-muted)', borderLeftColor: 'rgba(212,160,42,0.3)' }}>
              Best for: Independent learners needing structured materials.
            </div>
          </div>

          {/* Hybrid Cohort */}
          <div className="relative p-8 rounded-2xl shadow-xl transition-all overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderTop: '4px solid var(--brand-gold)',
            }}>
            <div className="absolute top-0 right-0 px-4 py-1 font-bold text-[10px] uppercase"
              style={{ backgroundColor: 'var(--brand-gold)', color: '#0D1B2A' }}>
              POPULAR
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text-core)' }}>
                Zeelin Hybrid Diploma Bundle Cohort
              </h3>
              <Layers className="w-9 h-9" style={{ color: 'var(--brand-gold)' }} />
            </div>
            <div className="space-y-4">
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                The Complete Diploma Exam Prep Bundle - Zeelin Hybrid Diploma Bundle Cohort include 2 core modules which
                are taught by instructor in a live session and 2 Specialist Modules including (One knowledge-base and One
                Practitioner) Module.
              </p>
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--text-core)' }}>The Core modules include:</p>
                <ul className="space-y-1 ml-4 mt-2">
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                    Business Analysis Practice
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                    Requirements Engineering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6-WEEK STRUCTURED READING ROADMAP ===== */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2d4a 100%)',
          color: '#ffffff',
        }}>
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: 'var(--brand-gold)' }}>
              6-week structured reading roadmap
            </h2>
            <p className="text-xl md:text-2xl font-bold italic mb-6 text-white">
              Know what to read. Know when to read it. Know how it helps you pass.
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
                The 6-Week Structured Reading Roadmap is Zeelin Academy&rsquo;s guided study plan that helps learners know
                exactly what to read, when to read it, and how each reading task connects to exam preparation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-gold)' }}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold text-white">
                  Instead of leaving learners to face large textbooks, syllabuses, and study materials on their own,
                  Zeelin Academy breaks the reading journey into manageable weekly and daily tasks.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-gold)' }}>
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold text-white">
                  This helps busy professionals, career changers, parents, and working learners study with clarity,
                  consistency, and confidence.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-gold)' }}>
                  <ListChecks className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold text-white">
                  Each week, learners are guided through the key topics for their chosen module, supported with simple
                  explanations, focused reading instructions, revision tasks, practice questions, and exam-readiness checks.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-md"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-center gap-4 mb-4">
                <Flag className="w-9 h-9" style={{ color: 'var(--brand-gold)' }} />
                <h3 className="font-display text-2xl" style={{ color: 'var(--brand-gold)' }}>
                  The Goal is Simple
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-white">
                To help learners move from confusion to structure, from scattered reading to focused preparation, and from
                overwhelm to exam confidence.
              </p>
              <div className="mt-6 pt-6 flex justify-between items-center"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--brand-gold)' }}>6</div>
                  <div className="text-[10px] uppercase tracking-widest text-white">Weeks</div>
                </div>
                <div className="h-8 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--brand-gold)' }}>Daily</div>
                  <div className="text-[10px] uppercase tracking-widest text-white">Tasks</div>
                </div>
                <div className="h-8 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--brand-gold)' }}>100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-white">Clarity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEARNING & SUPPORT ECOSYSTEM ===== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
              Unmatched Learning Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mt-2" style={{ color: 'var(--text-core)' }}>
              Learning &amp; Support Ecosystem
            </h2>
            <p className="text-lg font-semibold max-w-3xl mx-auto mt-4" style={{ color: 'var(--text-secondary)' }}>
              Every element of our program is designed to guide you seamlessly through your BCS Diploma journey with expert
              coaching and modern learning tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningFeatures.map((feature) => {
              const FIcon = feature.icon
              const isGold = feature.accent === 'gold'
              return (
                <div key={feature.title}
                  className="p-6 rounded-xl shadow-md transition-all hover:-translate-y-1 flex flex-col h-full"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderTop: `4px solid ${isGold ? 'var(--brand-gold)' : '#0D1B2A'}`,
                  }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                      style={{
                        background: isGold
                          ? 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)'
                          : '#0D1B2A',
                        color: isGold ? '#0D1B2A' : 'var(--brand-gold)',
                      }}>
                      <FIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm flex-grow" style={{ color: 'var(--text-secondary)' }}>
                    {feature.desc}
                  </p>
                  {'tagline' in feature && feature.tagline && (
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>
                      {feature.tagline}
                    </p>
                  )}
                  {'disclaimer' in feature && feature.disclaimer && (
                    <p className="mt-3 text-[10px] leading-tight pt-2" style={{ color: 'var(--text-muted)' }}>
                      {feature.disclaimer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== DIPLOMA COHORT PATHWAYS ===== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
              Curriculum Details
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mt-2" style={{ color: 'var(--text-core)' }}>
              Diploma Cohort Pathways
            </h2>
          </div>
          <div className="space-y-8">
            {/* Hybrid Cohort Details */}
            <div className="p-8 rounded-2xl shadow-lg border-l-4"
              style={{ backgroundColor: 'var(--bg-card)', borderLeftColor: 'var(--brand-gold)' }}>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                Zeelin Hybrid Diploma Bundle Cohort
              </h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                The Complete Diploma Exam Prep Bundle - Zeelin Hybrid Diploma Bundle Cohort include 2 core modules which
                are taught by instructor in a live session and 2 Specialist Modules including (One knowledge-base and One
                Practitioner) Module.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--text-core)' }}>The Core modules include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} /> Business Analysis Practice
                    </li>
                    <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} /> Requirements Engineering
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--text-core)' }}>What are Specialist modules?</h4>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    These are the optional/specialist choices learners may select.
                  </p>
                  <div className="overflow-hidden rounded border text-xs"
                    style={{ borderColor: 'var(--border)' }}>
                    <table className="w-full text-left">
                      <thead>
                        <tr className="font-bold text-xs" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-core)' }}>
                          <th className="p-2 border-b" style={{ borderColor: 'var(--border)' }}>Specialist module</th>
                          <th className="p-2 border-b" style={{ borderColor: 'var(--border)' }}>Type</th>
                        </tr>
                      </thead>
                      <tbody style={{ color: 'var(--text-secondary)' }}>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Business Analysis Foundation</td><td className="p-2">Knowledge-based</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Business Change</td><td className="p-2">Knowledge-based</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Organisational Behaviour</td><td className="p-2">Knowledge-based</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">IS Project Management</td><td className="p-2">Knowledge-based</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Modelling Business Processes</td><td className="p-2">Practitioner</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Benefits Management and Business Acceptance</td><td className="p-2">Practitioner</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Systems Modelling Techniques</td><td className="p-2">Practitioner</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <td className="p-2">Systems Development Essentials</td><td className="p-2">Practitioner</td>
                        </tr>
                        <tr>
                          <td className="p-2">Data Management Essentials</td><td className="p-2">Practitioner</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded text-xs italic" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <strong style={{ color: 'var(--text-core)' }}>NB - Specialist Modules Delivery Requirement:</strong>
                {' '}A Specialist module becomes a live cohort when at least 5 learners enrol. If fewer than 5 learners
                enrol, they can choose to Join the Guided Self-Paced Route including (1 or 2 live session + everything in
                the Zeelin Starter Diploma bundle cohort) or join the nearest related Module-by-Module cohort if suitable.
              </div>
              <div className="mt-4 text-xl font-bold" style={{ color: 'var(--brand-gold)' }}>
                Price - £100 per Module
              </div>
            </div>

            {/* Single Module & Fast-Track Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Single Module */}
              <div className="p-8 rounded-2xl shadow-lg"
                style={{ backgroundColor: 'var(--bg-card)', borderTop: '4px solid #0D1B2A' }}>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                  Single module Diploma Cohort
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                  This option is ideal for learners who want to focus on one exam, study at a manageable pace, or
                  build their Diploma pathway gradually.
                </p>
                <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Candidates can prepare for one module at a time with Zeelin Academy&rsquo;s six-week exam preparation
                  structure.
                </p>
                <p className="text-xs mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Each module is delivered as a Live Cohort (5+ learners). If fewer than five learners enrol, the course
                  is delivered through a Guided Self-Paced Route including (1 or 2 live session + everything in the
                  Zeelin Starter Diploma bundle cohort).
                </p>
                <div className="flex justify-between items-center pt-4 font-bold"
                  style={{ borderTop: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-core)' }}>Price: £100 / module</span>
                  <span style={{ color: 'var(--text-core)' }}>Duration: 6 Weeks</span>
                </div>
              </div>

              {/* Fast-Track */}
              <div className="p-8 rounded-2xl shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--brand-gold)' }}>
                  The Fast-Track Diploma bundle cohort
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  An intensive preparation route for learners who want to cover the full Diploma preparation structure
                  in a shorter period. Best for experienced learners or current BAs.
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>
                    Includes full support ecosystem:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs" style={{ color: 'var(--text-core)' }}>
                    <li>&bull; 6-week reading roadmap</li>
                    <li>&bull; Mon-Fri Live Training</li>
                    <li>&bull; Saturday Success Lab</li>
                    <li>&bull; Visual summaries</li>
                    <li>&bull; Mock quizzes</li>
                    <li>&bull; Guided success support</li>
                    <li>&bull; Readiness checks</li>
                    <li>&bull; Coaching Call</li>
                    <li>&bull; LMS Access</li>
                    <li>&bull; Oral Exam support</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-4 font-bold"
                  style={{ borderTop: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--brand-gold)' }}>Price: £400</span>
                  <span style={{ color: 'var(--brand-gold)' }}>Duration: 6 Weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="mx-auto max-w-7xl rounded-2xl text-center shadow-xl relative overflow-hidden py-12 px-8"
          style={{
            backgroundColor: 'var(--brand-gold)',
            color: '#0D1B2A',
          }}>
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: 'var(--brand-gold)' }} />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: 'var(--brand-gold)' }} />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-8 text-center">
              C. Why choose Zeelin Academy?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderTop: '4px solid #0D1B2A' }}>
                <p className="text-lg leading-relaxed font-semibold" style={{ color: '#0D1B2A' }}>
                  Preparing for Business Analysis exams can feel overwhelming, especially when you are working full-time,
                  changing careers, raising a family, or trying to study after a long day. Zeelin Academy was created for
                  busy learners who need more than just study materials.
                </p>
              </div>
              <div className="p-8 rounded-2xl shadow-lg"
                style={{ backgroundColor: 'var(--bg-card)', borderTop: '4px solid var(--brand-gold)' }}>
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-core)' }}>
                  <Lightbulb className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} /> Our approach is simple
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  We break difficult topics into manageable steps, explain concepts in plain language, and provide visual
                  summaries. We guide learners through weekly reading tasks, support them with mock quizzes, and help them
                  track their exam readiness before booking the exam.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--text-core)' }}>
                    <CheckCircle className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} /> Structure &amp; Guidance
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--text-core)' }}>
                    <CheckCircle className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} /> Accountability Support
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderTop: '4px solid #0D1B2A' }}>
                <p className="text-lg leading-relaxed font-semibold" style={{ color: '#0D1B2A' }}>
                  Whether you are preparing for one module or working towards the full BCS International Diploma in
                  Business Analysis, Zeelin Academy helps you study with direction, stay consistent, and move towards
                  exam readiness with confidence.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/enroll"
                  className="inline-block px-10 py-4 rounded-lg font-bold text-base uppercase tracking-wider shadow-xl hover:scale-105 transition-transform active:scale-95"
                  style={{ backgroundColor: '#0D1B2A', color: '#ffffff' }}>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
