import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import BundleSection from '@/components/BundleSection'
import CoursesHero from '@/components/CoursesHero'
import { categories } from '@/lib/courseData'

export const metadata: Metadata = {
  title: 'Our Training Programmes | Zeelin Academy',
  description: 'Explore our BCS Diploma pathways: Foundation, Core, Practitioner, and Oral Exam preparation. Find the right course for your Business Analysis career.',
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Animated Avatar Hero */}
      <CoursesHero />

      <BundleSection />

      {/* Section 2 — Category Cards */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'url("/group.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
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
    </div>
  )
}
