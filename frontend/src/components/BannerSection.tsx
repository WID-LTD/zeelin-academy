'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const examFocusBooks = [
  { src: '/books/foundation.png', title: 'Exam Focus: Foundation in Business Analysis' },
  { src: '/books/business_change.png', title: 'Exam Focus: Business Change' },
  { src: '/books/is_project_mgmt.png', title: 'Exam Focus: IS Project Management' },
  { src: '/books/org_behaviour.png', title: 'Exam Focus: Organisational Behaviour' },
  { src: '/books/ba_practice.png', title: 'Exam Focus: Business Analysis Practice' },
  { src: '/books/requirements_eng.png', title: 'Exam Focus: Requirements Engineering' },
  { src: '/books/modelling_processes.png', title: 'Exam Focus: Modelling Business Processes' },
  { src: '/books/systems_modelling.png', title: 'Exam Focus: Systems Modelling Techniques' },
  { src: '/books/systems_development.png', title: 'Exam Focus: Systems Development Essentials' },
  { src: '/books/data_management.png', title: 'Exam Focus: Data Management Essentials' },
  { src: '/books/benefits_mgmt.png', title: 'Exam Focus: Benefits Management and Business Acceptance' },
]

export default function BannerSection() {
  return (
    <section style={{ backgroundColor: 'transparent' }}>
      {/* Hero H1 */}
      <div style={{ textAlign: 'center', padding: '3.75rem 1.25rem', background: 'radial-gradient(circle at center, #FFFDF9 0%, #FAF7F0 100%)' }}>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--navy-dark)', maxWidth: '56.25rem', margin: '0 auto 1.25rem', fontWeight: 700, lineHeight: 1.2 }}>
          Stop Guessing. Start Preparing for your <span style={{ color: '#AA820A' }}>Business Analysis Exam</span> with clarity.
        </h1>
      </div>

      {/* Top: Infinite-scroll book carousel */}
      <div
        className="flex gap-6 overflow-x-hidden py-6 select-none group/banner"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)' }}
      >
        <div className="flex gap-6 animate-marquee group-hover/banner:animate-marquee-paused">
          {[...examFocusBooks, ...examFocusBooks, ...examFocusBooks, ...examFocusBooks].map((book, i) => (
            <Link key={i} href="/courses" className="flex-shrink-0 flex flex-col items-center group/book no-underline">
              <div
                className="relative w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] aspect-[3/4] overflow-hidden transition-all duration-300 group-hover/book:scale-[1.04] group-hover/book:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover-glow"
                style={{ boxShadow: 'rgba(0,0,0,0.12) 0px 8px 30px', border: '1px solid transparent' }}
              >
                <Image
                  src={book.src}
                  alt={book.title}
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 190px"
                />
              </div>
              <div className="mt-4 w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] text-center px-1">
                <p className="text-sm md:text-base font-semibold leading-snug px-2 py-1 border transition-all duration-300 group-hover/book:border-[color:var(--brand-gold)]" style={{ color: 'var(--text-core)', borderColor: 'var(--border)', backgroundColor: 'transparent' }}>
                  {book.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom: Strategy Guide section */}
      <AnimatedSection delay={200}>
        <div className="w-full pt-10 pb-16" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight" style={{ color: 'var(--text-core)' }}>
                  <span style={{ color: 'var(--brand-gold)' }}>Business Analysis Exam Prep, Made Clear</span>
                </h3>
                <p className="text-lg md:text-xl max-w-full mx-auto lg:mx-0 mb-8 leading-relaxed font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  Zeelin Academy helps busy learners prepare for business analysis exams through structured teaching — guided study plans, mock quizzes, visual summaries, and exam-readiness support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="btn-gold px-10 py-4 text-lg font-bold inline-block text-center hover:scale-105 transition-transform">
                    Download Free Guide
                  </Link>
                  <Link href="/courses" className="btn-outline-gold px-10 py-4 text-lg font-bold inline-block text-center hover:scale-105 transition-transform">
                    Explore Courses
                  </Link>
                </div>
              </div>

              {/* Video Content */}
              <div
                className="relative w-full min-h-[20rem] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
              >
                <video
                  src="/home-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
