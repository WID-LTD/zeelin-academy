'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { categories } from '@/lib/courseData'
import { Clock, Monitor, ArrowRight, Target } from 'lucide-react'

function getLevelBadge(categoryName: string): { label: string; color: string } {
  switch (categoryName) {
    case 'Foundation Pathway': return { label: 'Beginner', color: 'rgba(34,197,94,0.15)' }
    case 'Core Pathway': return { label: 'Intermediate', color: 'rgba(59,130,246,0.15)' }
    case 'Practitioner Pathway': return { label: 'Advanced', color: 'rgba(212,175,55,0.15)' }
    case 'Oral Examination': return { label: 'Advanced', color: 'rgba(212,175,55,0.15)' }
    default: return { label: 'All Levels', color: 'rgba(107,114,128,0.15)' }
  }
}

const allCoursesWithMeta = categories.flatMap((cat) =>
  cat.courses.map((course) => ({
    ...course,
    categoryName: cat.name,
  }))
)

export default function HomeCoursesSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              Our{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Courses</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              Explore all our Diploma pathways — from Foundation to Oral Examination
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto">
          {allCoursesWithMeta.slice(0, 9).map((course, idx) => {
            const level = getLevelBadge(course.categoryName)
            return (
              <AnimatedSection key={course.id} delay={100 + idx * 60} duration={600}>
                <div
                  className="rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div className="relative w-full aspect-video overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    {course.isVideo ? (
                      <video
                        src={course.media}
                        className="w-full h-full object-cover hover-image-zoom"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <SafeImage src={course.media} alt={course.title} fill className="object-cover hover-image-zoom" />
                    )}
                    {/* Badges overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span
                        className="text-[0.625rem] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{ backgroundColor: level.color, color: 'var(--text-core)' }}
                      >
                        {level.label}
                      </span>
                      <span
                        className="text-[0.625rem] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm inline-flex items-center gap-1"
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff' }}
                      >
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span
                        className="text-[0.625rem] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm inline-flex items-center gap-1"
                        style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff' }}
                      >
                        <Monitor className="w-3 h-3" />
                        Online
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                      {course.title}
                    </h3>
                    <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                      {course.for}
                    </p>
                    {course.outcome && (
                      <div className="mb-4 px-3 py-2 rounded-lg text-xs font-medium leading-snug" style={{ backgroundColor: 'rgba(223,186,107,0.1)', color: 'var(--brand-gold)' }}>
                        <Target className="w-3 h-3 inline mr-1" />
                        {course.outcome}
                      </div>
                    )}
                    <div className="mt-auto flex flex-col gap-3">
                      <Link
                        href={`/enroll?module=${course.id}`}
                        className="btn-gold px-5 py-2.5 text-sm font-bold inline-block text-center w-full"
                      >
                        View Course
                      </Link>
                      <Link
                        href={`/courses#${course.id}`}
                        className="text-xs font-medium text-center inline-flex items-center justify-center gap-1 transition-all duration-200 hover:gap-2"
                        style={{ color: 'var(--brand-gold)' }}
                      >
                        Learn more <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
          {allCoursesWithMeta.length > 9 && (
            <AnimatedSection delay={100 + 9 * 60} duration={600} className="flex">
              <Link
                href="/courses"
                className="rounded-2xl border-2 border-dashed flex items-center justify-center h-full w-full p-8 transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-gold)]"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              >
                <div className="text-center">
                  <span className="block text-2xl font-black" style={{ color: 'var(--brand-gold)' }}>+{allCoursesWithMeta.length - 9}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>More Courses</span>
                </div>
              </Link>
            </AnimatedSection>
          )}
        </div>

        {/* View All Courses CTA */}
        <AnimatedSection delay={300}>
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-core)',
              }}
            >
              View All Courses
              <ArrowRight className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
            </Link>
            <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
              {allCoursesWithMeta.length} courses across {categories.length} pathways
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
