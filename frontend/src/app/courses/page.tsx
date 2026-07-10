import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { categories } from '@/lib/courseData'

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
  'foundation-pathway': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  'core-pathway': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3.02 3.02 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3.02 3.02 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  'practitioner-pathway': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" height="14" width="20" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  'oral-examination': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="8" cy="10" r="1" />
      <circle cx="12" cy="10" r="1" />
      <circle cx="16" cy="10" r="1" />
    </svg>
  ),
}

const instructorImages: Record<string, string> = {
  'foundation-pathway': '/Foundation%20Pathway/FP-1%20(1).jpg',
  'core-pathway': '/Core%20Pathway/CP-1%20(1).jpg',
  'practitioner-pathway': '/Practitioner%20Pathway/PP-1%20(1).jpg',
  'oral-examination': '/Oral%20Examination/OE-1%20(1).jpg',
}

const swooshBg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" fill="%23b89753" opacity="0.12"><path d="M30,40 Q40,35 45,25 T60,30 T80,20 T95,40 T75,70 T50,80 Z M140,25 Q160,15 180,20 T210,15 T230,35 T210,75 T160,85 T135,55 Z M40,85 Q45,95 60,90 T70,105 Z"/></svg>`
)

export default function CoursesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F0E5' }}>
      {/* Header */}
      <section className="py-16 lg:py-24 px-[5%]">
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto text-center">
          <AnimatedSection>
            <div className="mb-5 flex justify-center" style={{ color: '#b89753' }}>
              <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16M4 20h16M5 20v-9M9 20v-9M13 20v-9M19 20v-9M3 11l9-7 9 7M12 2v2" />
              </svg>
            </div>
            <h1 className="font-display text-[clamp(1.75rem,1rem+2.5vw,3rem)] font-bold tracking-wider uppercase leading-tight mb-5" style={{ color: '#0c1e36' }}>
              Our Training Programmes
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-[600px] mx-auto leading-relaxed" style={{ color: '#6e6e6e' }}>
              Structured learning pathways designed for busy professionals and future Business Analysts worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Cards */}
      <section className="px-[5%] pb-16 lg:pb-24">
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat, idx) => (
              <AnimatedSection key={cat.slug} delay={idx * 100}>
                <Link href={`/courses/${cat.slug}`} className="block">
                <div
                  className="w-[clamp(14rem,12rem+10vw,17.5rem)] rounded-xl flex flex-col items-center text-center px-6 py-10 pb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: '#ffffff',
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
                  <div className="w-full flex justify-center items-center mt-auto pt-2" style={{
                    backgroundImage: `url('${swooshBg}')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}>
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

      {/* Foundation Modules Detail Section */}
      <section className="px-[5%] pb-20">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="rounded-2xl p-8 text-center relative overflow-hidden" style={{
              backgroundColor: '#fdfaf5',
              border: '1px solid #dcdcdc',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              borderBottom: '8px solid #001f3f',
            }}>
              <h2 className="font-display text-[clamp(1.75rem,1.5rem+2vw,3rem)] font-bold mb-4 tracking-tight" style={{ color: '#001f3f' }}>
                Foundation Modules
              </h2>

              <div className="flex items-center justify-center mb-5" style={{ color: '#c5a059' }}>
                <span className="flex-1 h-px" style={{ backgroundColor: '#c5a059', marginRight: '0.9375rem' }} />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#c5a059">
                  <path d="M4 20h16v2H4v-2zM6 18h12v-2H6v2zm1-2h10v-1H7v1zm0-3h10v-1H7v1zm1-3h8v-1H8v1zm-1-3h10v-1H7v1zM6 6h12V4H6v2z" />
                </svg>
                <span className="flex-1 h-px" style={{ backgroundColor: '#c5a059', marginLeft: '0.9375rem' }} />
              </div>

              <p className="text-base md:text-lg max-w-[640px] mx-auto leading-relaxed" style={{ color: '#333' }}>
                These modules help learners build the knowledge base needed to understand Business Analysis, business change, project environments, and organisational behaviour before progressing through the wider Diploma pathway.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Badges */}
      <section className="px-[5%] pb-20">
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
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
