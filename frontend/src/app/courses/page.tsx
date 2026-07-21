import Link from 'next/link'
import type { Metadata } from 'next'
import { BookOpen, BookCopy, Briefcase, MessageCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { categories } from '@/lib/courseData'
import {
  foundationCertificates,
  coreCertificates,
  practitionerCertificates,
  oralCertificates,
} from '@/lib/certificateData'
import CourseCertificateSection from '@/components/CourseCertificateSection'

export const metadata: Metadata = {
  title: 'Our Training Programmes | Zeelin Academy',
  description: 'Explore our Diploma pathways: Foundation, Core, Practitioner, and Oral Exam preparation. Find the right course for your Business Analysis career.',
}

const cardTitle: Record<string, string> = {
  'foundation-pathway': 'Foundation Modules',
  'core-pathway': 'Core Modules',
  'practitioner-pathway': 'Practitioner Modules',
  'oral-examination': 'Oral Module',
}

const icons: Record<string, JSX.Element> = {
  'foundation-pathway': <BookOpen className="w-8 h-8" />,
  'core-pathway': <BookCopy className="w-8 h-8" />,
  'practitioner-pathway': <Briefcase className="w-8 h-8" />,
  'oral-examination': <MessageCircle className="w-8 h-8" />,
}

const instructorImages: Record<string, string> = {
  'foundation-pathway': '/Foundation%20Pathway/FP-1%20(1).jpg',
  'core-pathway': '/Core%20Pathway/CP-1%20(1).jpg',
  'practitioner-pathway': '/Practitioner%20Pathway/PP-1%20(1).jpg',
  'oral-examination': '/Oral%20Examination/OE-1%20(1).jpg',
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 lg:py-32 px-[5%] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #04071A 0%, #0D1530 50%, #1a2240 100%)',
          position: 'relative'
        }}
      >
        {/* Decorative background SVGs */}
        <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
          <svg className="absolute top-10 right-10 w-28 h-28 lg:w-40 lg:h-40 opacity-[0.06]"
            viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#D4A02A" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-48 lg:w-72 opacity-[0.03]"
            viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 L200 200 L200 0 Z" fill="none" stroke="#D4A02A" strokeWidth="2" />
            <path d="M20 200 L200 20" fill="none" stroke="#D4A02A" strokeWidth="1" opacity="0.4" />
            <path d="M60 200 L200 60" fill="none" stroke="#D4A02A" strokeWidth="1" opacity="0.2" />
            <path d="M100 200 L200 100" fill="none" stroke="#D4A02A" strokeWidth="1" opacity="0.1" />
            <path d="M0 160 L160 160" fill="none" stroke="#D4A02A" strokeWidth="1" opacity="0.15" />
          </svg>
          <svg className="absolute top-1/3 right-0 w-24 lg:w-32 opacity-[0.04]"
            viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" rx="8" fill="none" stroke="#D4A02A" strokeWidth="1.5" />
            <rect x="20" y="20" width="60" height="60" rx="4" fill="none" stroke="#D4A02A" strokeWidth="0.5" />
          </svg>
          <svg className="absolute top-1/2 left-0 w-32 lg:w-48 opacity-[0.02]"
            viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L60 60 M0 60 L60 0" stroke="#D4A02A" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="30" r="5" fill="#D4A02A" />
            <path d="M90 90 L150 90" stroke="#D4A02A" strokeWidth="0.5" fill="none"/>
            <path d="M90 120 L150 120" stroke="#D4A02A" strokeWidth="0.5" fill="none"/>
            <path d="M90 150 L150 150" stroke="#D4A02A" strokeWidth="0.5" fill="none"/>
            <circle cx="160" cy="90" r="5" fill="#D4A02A" />
            <circle cx="160" cy="120" r="3" fill="#D4A02A" />
            <circle cx="160" cy="150" r="4" stroke="#D4A02A" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-display text-[clamp(1.75rem,1rem+2.5vw,3rem)] sm:text-[clamp(2rem,1rem+3vw,3.5rem)] lg:text-[clamp(2.5rem,1rem+3.5vw,4rem)] font-black tracking-wider uppercase leading-tight mb-5" style={{ color: '#ffffff' }}>
              Our Training Programmes
            </h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-[700px] mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Structured learning pathways designed for busy professionals and future Business Analysts worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Cards */}
      <section className="px-[5%] py-16 lg:py-24">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {categories.map((cat, idx) => (
              <AnimatedSection key={cat.slug} delay={idx * 100}>
                <Link href={`/courses/${cat.slug}`} className="block h-full">
                <div
                  className="rounded-xl flex flex-col items-center text-center px-6 py-10 pb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 10px 30px rgba(212, 160, 42, 0.06)',
                    border: '1px solid rgba(212, 160, 42, 0.12)',
                  }}
                >
                  {/* Icon Circle */}
                  <div className="w-[3.75rem] h-[3.75rem] rounded-full flex items-center justify-center mb-6" style={{ border: '1px solid var(--border)', color: 'var(--brand-gold)' }}>
                    {icons[cat.slug] || icons['foundation-pathway']}
                  </div>

                  {/* Gold Divider */}
                  <hr className="w-10 border-none mb-5" style={{ borderTop: '1px solid var(--brand-gold)' }} />

                  {/* Title */}
                  <h2 className="font-display text-[1.375rem] font-semibold leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
                    {(cardTitle[cat.slug] || cat.name).split(' ').map((word, i) => (
                      <span key={i}>{i > 0 && <br />}{word}</span>
                    ))}
                  </h2>

                  {/* Description */}
                  <p className="text-[0.845rem] leading-relaxed mb-10 flex-1" style={{ color: 'var(--text-muted)' }}>
                    {cat.description}
                  </p>

                  {/* Instructor Photo */}
                  <div className="w-full flex justify-center items-center mt-auto pt-2">
                    <div className="w-[5rem] h-[5rem] rounded-full p-[3px]" style={{ border: '2px solid var(--brand-gold)', backgroundColor: 'var(--white)' }}>
                      <img
                        src={instructorImages[cat.slug] || '/instructor_1.png'}
                        alt={`${cat.name} Instructor`}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Foundation Certificate Sections */}
      <section className="px-[5%] pt-6 pb-0">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-4 mb-8 lg:mb-10 xl:mb-12">
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
              <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-wider" style={{ color: '#0c1e36' }}>
                Foundation Modules
              </h2>
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>
      {foundationCertificates.map((cert, idx) => (
        <section key={cert.id} className={`px-[5%] py-8 lg:py-10 xl:py-12 ${idx > 0 ? 'course-section-divider' : ''}`}>
          <AnimatedSection delay={0}>
            <CourseCertificateSection data={cert} />
          </AnimatedSection>
        </section>
      ))}

      {/* Core Certificate Sections */}
      <section className="px-[5%] pt-12 pb-0">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-4 mb-8 lg:mb-10 xl:mb-12">
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
              <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-wider" style={{ color: '#0c1e36' }}>
                Core Modules
              </h2>
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>
      {coreCertificates.map((cert, idx) => (
        <section key={cert.id} className={`px-[5%] py-8 lg:py-10 xl:py-12 ${idx > 0 ? 'course-section-divider' : ''}`}>
          <AnimatedSection delay={0}>
            <CourseCertificateSection data={cert} />
          </AnimatedSection>
        </section>
      ))}

      {/* Practitioner Certificate Sections */}
      <section className="px-[5%] pt-12 pb-0">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-4 mb-8 lg:mb-10 xl:mb-12">
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
              <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-wider" style={{ color: '#0c1e36' }}>
                Practitioner Modules
              </h2>
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>
      {practitionerCertificates.map((cert, idx) => (
        <section key={cert.id} className={`px-[5%] py-8 lg:py-10 xl:py-12 ${idx > 0 ? 'course-section-divider' : ''}`}>
          <AnimatedSection delay={0}>
            <CourseCertificateSection data={cert} />
          </AnimatedSection>
        </section>
      ))}

      {/* Oral Certificate Sections */}
      <section className="px-[5%] pt-12 pb-0">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-4 mb-8 lg:mb-10 xl:mb-12">
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
              <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-wider" style={{ color: '#0c1e36' }}>
                Oral Module
              </h2>
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: '#D4A02A' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>
      {oralCertificates.map((cert, idx) => (
        <section key={cert.id} className={`px-[5%] py-8 lg:py-10 xl:py-12 ${idx > 0 ? 'course-section-divider' : ''}`}>
          <AnimatedSection delay={0}>
            <CourseCertificateSection data={cert} />
          </AnimatedSection>
        </section>
      ))}

      {/* Badges */}
      <section className="px-[5%] py-16 lg:py-20">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto">
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[0.6875rem] font-bold uppercase tracking-wider" style={{ color: '#0c1e36' }}>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b89753" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                Global Reach
              </div>
              <span className="text-sm" style={{ color: 'rgba(184,151,83,0.4)' }}>|</span>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b89753" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Academic Excellence
              </div>
              <span className="text-sm" style={{ color: 'rgba(184,151,83,0.4)' }}>|</span>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b89753" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Expert Mentors
              </div>
              <span className="text-sm" style={{ color: 'rgba(184,151,83,0.4)' }}>|</span>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b89753" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                Career Impact
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
