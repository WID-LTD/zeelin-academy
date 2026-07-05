import Link from 'next/link'
import type { Metadata } from 'next'
import { Clock, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import CoursesHero from '@/components/CoursesHero'
import { categories } from '@/lib/courseData'

export const metadata: Metadata = {
  title: 'Our Training Programmes | Zeelin Academy',
  description: 'Explore our Diploma pathways: Foundation, Core, Practitioner, and Oral Exam preparation. Find the right course for your Business Analysis career.',
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Animated Avatar Hero */}
      <CoursesHero />

      {/* Section 2 — Category Cards */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <AnimatedSection key={cat.slug} delay={idx * 100} duration={600}>
                <div
                  className="p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <h2 className="font-display text-3xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
                    {cat.name}
                  </h2>

                  <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                    {cat.tagline}
                  </p>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {cat.description}
                  </p>

                  {/* Course Preview Thumbnails */}
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {cat.courses.slice(0, 3).map((course) => (
                      <div key={course.id} className="flex flex-col items-center gap-1">
                        <div
                          className="relative w-16 h-20 rounded-lg overflow-hidden shadow-sm"
                          style={{ backgroundColor: 'var(--bg-secondary)' }}
                        >
                          {course.isVideo ? (
                            <video
                              src={course.media}
                              className="w-full h-full object-cover"
                              muted
                              loop
                              playsInline
                              autoPlay
                            />
                          ) : (
                            <SafeImage
                              src={course.media}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <span className="text-[0.6rem] text-center leading-tight font-medium max-w-[4.5rem]" style={{ color: 'var(--text-muted)' }}>
                          {course.title.length > 20 ? course.title.slice(0, 18) + '...' : course.title}
                        </span>
                      </div>
                    ))}
                    {cat.courses.length > 3 && (
                      <div
                        className="relative w-16 h-20 rounded-lg flex items-center justify-center text-xs font-bold shadow-sm"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
                      >
                        +{cat.courses.length - 3}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={`/courses/${cat.slug}`}
                      className="btn-gold px-6 py-3 text-sm font-bold inline-block text-center w-full"
                    >
                      View Full Pathway
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Build the Skills. Deliver Real Impact. */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-3" style={{ color: 'var(--text-core)' }}>
              Build the Skills. <span style={{ color: 'var(--brand-gold)' }}>Deliver Real Impact.</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-base" style={{ color: 'var(--text-secondary)' }}>
              Each course is designed to build real-world capability — not just exam knowledge. Whether you are modelling processes or managing requirements, you will gain skills you can apply immediately.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'requirements-engineering', title: 'Requirements Engineering', subtitle: 'BAs, project teams, and systems analysts', duration: '6 weeks', tagline: 'Master the full requirements lifecycle — from elicitation to validation — and deliver clear, traceable requirements that drive project success.' },
              { id: 'modelling-business-processes', title: 'Modelling Business Processes', subtitle: 'Process analysts, BAs, and improvement specialists', duration: '6 weeks', tagline: 'Learn to map, analyse, and redesign business processes using industry-standard techniques such as BPMN and process modelling.' },
              { id: 'systems-modelling-techniques', title: 'Systems Modelling Techniques', subtitle: 'Technical BAs and systems analysts', duration: '6 weeks', tagline: 'Build confidence in UML and systems modelling to represent system requirements clearly and communicate effectively with technical teams.' },
              { id: 'systems-development-essentials', title: 'Systems Development Essentials', subtitle: 'IT-focused BAs and delivery team members', duration: '6 weeks', tagline: 'Understand the systems development lifecycle and your role within agile and waterfall delivery teams.' },
            ].map((course, idx) => (
              <AnimatedSection key={course.id} delay={idx * 80}>
                <Link href={`/courses/${course.id}`} className="block p-6 rounded-2xl border transition-all duration-300 hover:shadow-md h-full group no-underline" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[color:var(--brand-gold)] transition-colors" style={{ color: 'var(--text-core)' }}>
                    {course.title}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--brand-gold)' }}>
                    {course.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {course.tagline}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                    <span className="flex items-center gap-1 ml-auto group-hover:translate-x-1 transition-transform" style={{ color: 'var(--brand-gold)' }}>
                      View Course <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Build Skills. Deliver Value. Advance with Zeelin Academy. */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-3" style={{ color: 'var(--text-core)' }}>
              Build Skills. Deliver Value. <span style={{ color: 'var(--brand-gold)' }}>Advance with Zeelin Academy.</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-base" style={{ color: 'var(--text-secondary)' }}>
              Take your expertise further with courses that focus on data governance and benefits realisation — two areas where senior BAs make the biggest impact.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'data-management-essentials', title: 'Data Management Essentials', subtitle: 'Data-aware BAs and information managers', duration: '6 weeks', tagline: 'Learn to manage and govern business data effectively within BA projects, ensuring data quality, traceability, and compliance.' },
              { id: 'benefits-management', title: 'Benefits Management and Business Acceptance', subtitle: 'Change and benefits analysts', duration: '6 weeks', tagline: 'Manage benefits realisation and business acceptance throughout the project lifecycle to ensure change delivers measurable value.' },
            ].map((course, idx) => (
              <AnimatedSection key={course.id} delay={idx * 80}>
                <Link href={`/courses/${course.id}`} className="block p-6 rounded-2xl border transition-all duration-300 hover:shadow-md h-full group no-underline" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[color:var(--brand-gold)] transition-colors" style={{ color: 'var(--text-core)' }}>
                    {course.title}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--brand-gold)' }}>
                    {course.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {course.tagline}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                    <span className="flex items-center gap-1 ml-auto group-hover:translate-x-1 transition-transform" style={{ color: 'var(--brand-gold)' }}>
                      View Course <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
