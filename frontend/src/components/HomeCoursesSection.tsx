'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { categories } from '@/lib/courseData'

const allCourses = categories.flatMap((cat) => cat.courses)

export default function HomeCoursesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              Our{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Courses</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              Explore all our BCS Diploma pathways — from Foundation to Oral Examination
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.slice(0, 9).map((course, idx) => (
            <AnimatedSection key={course.id} delay={100 + idx * 60} duration={600}>
              <div
                className="rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="relative w-full aspect-video" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
                    <SafeImage src={course.media} alt={course.title} fill className="object-cover" />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                    {course.title}
                  </h3>
                  <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                    {course.duration} &middot; {course.for}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/enroll?module=${course.id}`}
                      className="btn-gold px-5 py-2.5 text-sm font-bold inline-block text-center w-full"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
          {allCourses.length > 9 && (
            <AnimatedSection delay={100 + 9 * 60} duration={600} className="flex">
              <Link
                href="/courses"
                className="rounded-2xl border-2 border-dashed flex items-center justify-center h-full w-full p-8 transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-gold)]"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              >
                <div className="text-center">
                  <span className="block text-2xl font-black" style={{ color: 'var(--brand-gold)' }}>+{allCourses.length - 9}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>More Courses</span>
                </div>
              </Link>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  )
}
