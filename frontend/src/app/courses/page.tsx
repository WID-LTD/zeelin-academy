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
      <section className="hero-dark py-16 md:py-24 lg:py-32 px-[5%]">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto text-center">
          <AnimatedSection>
            <div className="mb-5 flex justify-center" style={{ color: '#D4A02A' }}>
              <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16M4 20h16M5 20v-9M9 20v-9M13 20v-9M19 20v-9M3 11l9-7 9 7M12 2v2" />
              </svg>
            </div>
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
                    boxShadow: '0 10px 30px rgba(184, 151, 83, 0.06)',
                    border: '1px solid rgba(184, 151, 83, 0.12)',
                  }}
                >
                  {/* Icon Circle */}
                  <div className="w-[3.75rem] h-[3.75rem] rounded-full flex items-center justify-center mb-6" style={{ border: '1px solid #e8dfcb', color: '#b89753' }}>
                    {icons[cat.slug] || icons['foundation-pathway']}
                  </div>

                  {/* Gold Divider */}
                  <hr className="w-10 border-none mb-5" style={{ borderTop: '1px solid #b89753' }} />

                  {/* Title */}
                  <h2 className="font-display text-[1.375rem] font-semibold leading-tight mb-4" style={{ color: '#0c1e36' }}>
                    {(cardTitle[cat.slug] || cat.name).split(' ').map((word, i) => (
                      <span key={i}>{i > 0 && <br />}{word}</span>
                    ))}
                  </h2>

                  {/* Description */}
                  <p className="text-[0.845rem] leading-relaxed mb-10 flex-1" style={{ color: '#6e6e6e' }}>
                    {cat.description}
                  </p>

                  {/* Instructor Photo */}
                  <div className="w-full flex justify-center items-center mt-auto pt-2">
                    <div className="w-[5rem] h-[5rem] rounded-full p-[3px]" style={{ border: '2px solid #b89753', backgroundColor: '#fff' }}>
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
