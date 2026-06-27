'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const examFocusBooks = [
  { src: '/exam_focus_foundation.png', title: 'Exam Focus: Foundation in Business Analysis', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_business_change.png', title: 'Exam Focus: Business Change', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_is_project_mgmt.png', title: 'Exam Focus: IS Project Management', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_org_behaviour.png', title: 'Exam Focus: Organisational Behaviour', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_ba_practice.png', title: 'Exam Focus: Business Analysis Practice', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_requirements_eng.png', title: 'Exam Focus: Requirements Engineering', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_modelling_processes.png', title: 'Exam Focus: Modelling Business Processes', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_systems_modelling.png', title: 'Exam Focus: Systems Modelling Techniques', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_systems_development.png', title: 'Exam Focus: Systems Development Essentials', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_data_management.png', title: 'Exam Focus: Data Management Essentials', oldPrice: '£129.99', salePrice: '£100.00' },
  { src: '/exam_focus_benefits_mgmt.png', title: 'Exam Focus: Benefits Management and Business Acceptance', oldPrice: '£129.99', salePrice: '£100.00' },
]

export default function BannerSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Top: Infinite-scroll book carousel */}
      <div
        className="flex gap-6 3xl:gap-8 overflow-x-hidden py-6 3xl:py-8 select-none group/banner"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)' }}
      >
        <div className="flex gap-6 3xl:gap-8 animate-marquee group-hover/banner:animate-marquee-paused">
          {[...examFocusBooks, ...examFocusBooks, ...examFocusBooks, ...examFocusBooks].map((book, i) => (
            <Link key={i} href="/courses" className="flex-shrink-0 flex flex-col items-center group/book no-underline">
              <div
                className="relative w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] 3xl:w-[15rem] aspect-[3/4] overflow-hidden transition-all duration-300 group-hover/book:scale-[1.04] group-hover/book:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover-glow"
                style={{ boxShadow: 'rgba(0,0,0,0.12) 0px 8px 30px', backgroundColor: 'var(--bg-card)', border: '1px solid transparent' }}
              >
                <Image
                  src={book.src}
                  alt={book.title}
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 190px"
                />
                <div
                  className="absolute top-3 right-3 text-white font-bold px-2 py-1 z-10 flex flex-col items-center border"
                  style={{ backgroundColor: 'rgba(220,38,38,0.9)', borderColor: 'rgba(220,38,38,0.5)' }}
                >
                  <span className="line-through text-[0.65rem] leading-none opacity-80 mb-0.5">{book.oldPrice}</span>
                  <span className="text-sm leading-none">{book.salePrice}</span>
                </div>
              </div>
              <div className="mt-4 w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] 3xl:w-[15rem] text-center px-1">
                <p className="text-sm md:text-base 3xl:text-lg font-semibold leading-snug px-2 py-1 border transition-all duration-300 group-hover/book:border-[color:var(--brand-gold)]" style={{ color: 'var(--text-core)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
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
            <div className="max-w-[1280px] 3xl:max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 3xl:gap-16 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-black mb-4 leading-tight" style={{ color: 'var(--text-core)' }}>
                  <span style={{ color: 'var(--brand-gold)' }}>Business Analysis Exam Prep, Made Clear</span>
                </h3>
                <p className="text-base md:text-lg 3xl:text-xl max-w-full mx-auto lg:mx-0 mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Zeelin Academy helps busy learners prepare for business analysis exams through structured teaching — guided study plans, mock quizzes, visual summaries, and exam-readiness support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 3xl:gap-6 justify-center lg:justify-start">
                  <Link href="/contact" className="btn-gold px-10 py-4 text-base font-bold inline-block text-center hover:scale-105 transition-transform">
                    Download Free Guide
                  </Link>
                  <Link href="/courses" className="btn-outline-gold px-10 py-4 text-base font-bold inline-block text-center hover:scale-105 transition-transform">
                    Explore Courses
                  </Link>
                </div>
              </div>

              {/* Video Content */}
              <div
                className="relative w-full min-h-[320px] 3xl:min-h-[420px] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
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
