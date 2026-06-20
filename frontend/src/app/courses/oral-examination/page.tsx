import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { categories } from '@/lib/courseData'

export const metadata: Metadata = {
  title: 'Oral Examination | Zeelin Academy',
  description: 'Prepare for your BCS Oral Examination with our focused preparation course.',
}

const cat = categories.find((c) => c.slug === 'oral-examination')!

export default function OralExaminationPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0}>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-none">
              <span style={{ color: '#ffffff' }}>Oral </span>
              <span style={{ color: 'var(--brand-gold)' }}>Examination</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-lg sm:text-xl mt-6 max-w-3xl mx-auto font-medium" style={{ color: 'var(--text-secondary)' }}>
              {cat.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cat.courses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={idx * 100} duration={600}>
              <div
                className="rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="relative w-full aspect-video" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  {course.isVideo ? (
                    <video src={course.media} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                  ) : (
                    <SafeImage src={course.media} alt={course.title} fill className="object-cover" />
                  )}
                </div>

                <div className="p-6 sm:p-8 space-y-5 flex flex-col flex-1">
                  <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--text-core)' }}>
                    {course.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <span className="text-lg" style={{ color: 'var(--brand-gold)' }}>👤</span>
                      {course.for}
                    </div>
                    <div className="flex items-center gap-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <span className="text-lg" style={{ color: 'var(--brand-gold)' }}>⏱</span>
                      {course.duration}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--brand-gold)' }}>
                      What you will learn
                    </h3>
                    <ul className="space-y-2">
                      {course.learn.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brand-gold)' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--brand-gold)' }}>
                      What&apos;s included
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.includes.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--brand-gold)' }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="p-4 rounded-xl border text-sm font-semibold"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)', color: 'var(--text-core)' }}
                  >
                    Outcome: {course.outcome}
                  </div>

                  <Link
                    href={`/enroll?module=${course.id}`}
                    className="btn-gold px-8 py-3 text-sm font-bold inline-block text-center w-full sm:w-auto mt-auto"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
          </div>
        </div>
      </section>
    </div>
  )
}
