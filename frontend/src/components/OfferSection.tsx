'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import {
  Target, Route, Presentation, Rocket, BarChart, ClipboardCheck, Users,
  ShieldCheck, PhoneCall, Lock, Star, Gift, Mic, Calendar, ChevronDown,
} from 'lucide-react'

const offers = [
  {
    title: 'Zeelin Diploma Pathway Finder',
    label: 'Find Your Best Learning Path',
    icon: Target,
    description:
      'Helping you identify the most suitable route through the BCS International Diploma in Business Analysis based on your experience, goals, and current level.',
  },
  {
    title: '6-Week Structured Reading Roadmap',
    label: 'Clear Weekly Study Plan',
    icon: Route,
    description:
      'A step-by-step reading schedule that removes guesswork and helps you stay focused, organized, and on track throughout your preparation journey.',
  },
  {
    title: 'Monday–Friday Live Instructor-Led Training',
    label: 'Daily Expert Coaching',
    icon: Presentation,
    description:
      'Join live sessions led by experienced instructors who break down complex Business Analysis concepts and prepare you for examination success.',
  },
  {
    title: 'Saturday Success Lab',
    label: 'Practice & Reinforcement',
    icon: Rocket,
    description:
      'Dedicated weekend sessions focused on revision, practical application, discussion, and resolving learning challenges.',
  },
  {
    title: 'Structured Visual Summaries',
    label: 'Learn Faster',
    icon: BarChart,
    description:
      'Visual learning resources designed to simplify key concepts and make revision more effective and memorable.',
  },
  {
    title: 'Mock Quiz',
    label: 'Test Your Knowledge',
    icon: ClipboardCheck,
    description:
      'Practice quizzes that simulate exam conditions and identify areas requiring additional attention.',
  },
  {
    title: 'Guided Success Support',
    label: 'Never Study Alone',
    icon: Users,
    description:
      'Because you should not have to prepare alone. Regular check-ins, progress tracking, encouragement, reminders, accountability, and support to help you stay consistent and reach exam readiness.',
  },
  {
    title: 'Automatic Exam Readiness Check',
    label: "Know When You're Ready",
    icon: ShieldCheck,
    description:
      'Our readiness assessment system helps determine whether you are prepared to sit your examination confidently.',
  },
  {
    title: 'Pass-Ready Coaching Call',
    label: 'Personal Strategy Session',
    icon: PhoneCall,
    description:
      'A focused coaching session designed to address weaknesses, strengthen confidence, and finalize your exam strategy.',
  },
  {
    title: 'Access to Zeelin Academy Exam Readiness System',
    label: 'Smart Exam Preparation',
    icon: Lock,
    description:
      'Gain access to our structured readiness framework, helping you monitor progress and prepare strategically.',
  },
  {
    title: 'Bonus – Zeelin Academy BCS Membership Tour',
    label: 'Maximize Your Membership',
    icon: Star,
    description:
      'Learn how to use your BCS membership effectively to create professional opportunities, build credibility, and support career growth.',
  },
  {
    title: 'Bonus – Exam Focus Guide',
    label: 'Selected Module Support',
    icon: Gift,
    description:
      'Receive a complimentary exam-focused guide for selected modules to streamline your preparation.',
  },
  {
    title: 'Oral Exam Readiness Support',
    label: 'Oral Exam Confidence',
    icon: Mic,
    description:
      'Specialized preparation and coaching to help you confidently approach oral examination requirements.',
  },
  {
    title: 'Guidance on Booking the Exam',
    label: 'Stress-Free Registration',
    icon: Calendar,
    description:
      'Step-by-step assistance on selecting, scheduling, and booking your BCS examinations correctly.',
  },
]

const initialCount = 9

export default function OfferSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? offers : offers.slice(0, initialCount)

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }} />
      </div>

      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
              style={{ color: 'var(--text-core)' }}>
              What Zeelin Academy{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Offers</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              A complete Business Analysis success system designed to guide you from enrollment to exam readiness
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((offer, idx) => {
            const Icon = offer.icon
            return (
              <AnimatedSection key={offer.title} delay={100 + idx * 60} duration={600}>
                <div
                  className="p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col hover:border-[rgba(212,175,55,0.3)]"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold leading-snug" style={{ color: 'var(--text-core)' }}>
                        {offer.title}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {offer.label}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {offer.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}

          {!showAll && offers.length > initialCount && (
            <AnimatedSection delay={100 + initialCount * 60} duration={600}>
              <button
                onClick={() => setShowAll(true)}
                className="p-6 rounded-2xl border-2 border-dashed w-full h-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-gold)] cursor-pointer"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="text-center">
                  <span className="block text-3xl font-black mb-1" style={{ color: 'var(--brand-gold)' }}>
                    +{offers.length - initialCount}
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                    More Features
                  </span>
                  <ChevronDown className="w-5 h-5 mx-auto mt-2" style={{ color: 'var(--brand-gold)' }} />
                </div>
              </button>
            </AnimatedSection>
          )}

          {showAll && offers.length > initialCount && (
            <AnimatedSection delay={100 + initialCount * 60} duration={600} className="lg:col-span-3">
              <button
                onClick={() => setShowAll(false)}
                className="w-full py-3 rounded-xl border text-sm font-bold transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                Show Less
              </button>
            </AnimatedSection>
          )}
        </div>

        <AnimatedSection delay={400}>
          <div className="relative mt-16 rounded-2xl overflow-hidden text-center p-10 md:p-14 border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(223,186,107,0.06), transparent 70%)',
              }} />

            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                Built to Help You{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Pass with Confidence</span>
              </h3>

              <p className="text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}>
                Every component of the Zeelin Academy system is designed to help you stay accountable,
                remain consistent, and achieve exam success.
              </p>

              <Link href="/courses" className="btn-gold px-10 py-4 text-base font-bold inline-block hover:scale-105 transition-transform">
                Explore Our Courses
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
