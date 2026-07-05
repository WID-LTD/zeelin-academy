'use client'

import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'

const courses = [
  {
    title: 'Organisational Behaviour Certificate',
    duration: '6 weeks',
    desc: 'Build confidence in organisational behaviour concepts and prepare for your certificate exam.',
    image: '/Core Pathway/CP-1 (1).jpg',
    href: '/courses/modules',
  },
  {
    title: 'Business Analysis Practice',
    duration: '6 weeks',
    desc: 'Build confidence in analysing business situations and managing key stakeholders.',
    image: '/Foundation Pathway/FP-1 (1).jpg',
    href: '/courses/modules',
  },
  {
    title: 'Requirements Engineering',
    duration: '6 weeks',
    desc: 'Build confidence in identifying, analysing, documenting, and validating systems requirements.',
    image: '/Practitioner Pathway/PP-1 (1).jpg',
    href: '/courses/modules',
  },
]

const buildSkillsCourses = [
  {
    id: 'modelling-business-processes',
    title: 'Modelling Business Processes',
    subtitle: 'Process analysts, BAs, and improvement specialists',
    duration: '6 weeks',
    tagline: 'Learn to map, analyse, and redesign business processes using industry-standard techniques such as BPMN and process modelling.',
    image: '/Modelling Business Processes/MBP-1 (1).jpg',
  },
  {
    id: 'systems-modelling-techniques',
    title: 'Systems Modelling Techniques',
    subtitle: 'Technical BAs and systems analysts',
    duration: '6 weeks',
    tagline: 'Build confidence in UML and systems modelling to represent system requirements clearly and communicate effectively with technical teams.',
    image: '/Practitioner Pathway/PP-1 (2).jpg',
  },
  {
    id: 'systems-development-essentials',
    title: 'Systems Development Essentials',
    subtitle: 'IT-focused BAs and delivery team members',
    duration: '6 weeks',
    tagline: 'Understand the systems development lifecycle and your role within agile and waterfall delivery teams.',
    image: '/Practitioner Pathway/PP-1 (3).jpg',
  },
]

const advanceCourses = [
  {
    id: 'data-management-essentials',
    title: 'Data Management Essentials',
    subtitle: 'Data-aware BAs and information managers',
    duration: '6 weeks',
    tagline: 'Learn to manage and govern business data effectively within BA projects, ensuring data quality, traceability, and compliance.',
    image: '/Core Pathway/CP-1 (2).jpg',
  },
  {
    id: 'benefits-management',
    title: 'Benefits Management and Business Acceptance',
    subtitle: 'Change and benefits analysts',
    duration: '6 weeks',
    tagline: 'Manage benefits realisation and business acceptance throughout the project lifecycle to ensure change delivers measurable value.',
    image: '/Core Pathway/CP-1 (3).jpg',
  },
]

export default function CourseHighlightSection() {
  return (
    <section className="py-16 lg:py-24 px-[5%]">
      <div className="max-w-[1600px] 3xl:max-w-[2400px] mx-auto">
        {/* Split layout: heading left, image right */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--navy-dark)' }}>
                All the Courses <span style={{ color: 'var(--dark-gold)' }}>We Offer</span>
              </h2>
              <p className="text-lg font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive Diploma preparation — from Foundation through to Benefits Management.
              </p>
            </div>
            <div className="relative w-full h-[12.5rem] sm:h-[17.5rem] rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
              <SafeImage
                src="/learning_experience.png"
                alt="Zeelin Academy courses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <AnimatedSection key={course.title} delay={200 + idx * 100}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <div className="relative w-full h-[10rem] sm:h-[12.5rem]" style={{ backgroundColor: '#DDD' }}>
                  <SafeImage src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--navy-dark)' }}>{course.title}</h3>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.9375rem' }}>
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-base font-semibold mb-5" style={{ color: 'var(--text-secondary)' }}>{course.desc}</p>
                  <Link
                    href={course.href}
                    className="btn-gold w-full text-center justify-center text-base"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Build the Skills. Deliver Real Impact. */}
        <AnimatedSection delay={100}>
          <div className="mt-24 mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-black text-center" style={{ color: 'var(--navy-dark)' }}>
              Build the Skills. <span style={{ color: 'var(--dark-gold)' }}>Deliver Real Impact.</span>
            </h3>
            <p className="text-center max-w-2xl mx-auto mt-3 text-base" style={{ color: 'var(--text-secondary)' }}>
              Each course is designed to build real-world capability — not just exam knowledge. Whether you are modelling processes or managing requirements, you will gain skills you can apply immediately.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildSkillsCourses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={200 + idx * 100}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <div className="relative w-full h-[10rem] sm:h-[12.5rem]" style={{ backgroundColor: '#DDD' }}>
                  <SafeImage src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--navy-dark)' }}>{course.title}</h3>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.9375rem' }}>
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>{course.tagline}</p>
                  <p className="text-sm font-medium mb-5" style={{ color: 'var(--brand-gold)' }}>{course.subtitle}</p>
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn-gold w-full text-center justify-center text-base"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Build Skills. Deliver Value. Advance with Zeelin Academy. */}
        <AnimatedSection delay={100}>
          <div className="mt-24 mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-black text-center" style={{ color: 'var(--navy-dark)' }}>
              Build Skills. Deliver Value. <span style={{ color: 'var(--dark-gold)' }}>Advance with Zeelin Academy.</span>
            </h3>
            <p className="text-center max-w-2xl mx-auto mt-3 text-base" style={{ color: 'var(--text-secondary)' }}>
              Take your expertise further with courses that focus on data governance and benefits realisation — two areas where senior BAs make the biggest impact.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advanceCourses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={200 + idx * 100}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <div className="relative w-full h-[10rem] sm:h-[12.5rem]" style={{ backgroundColor: '#DDD' }}>
                  <SafeImage src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--navy-dark)' }}>{course.title}</h3>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.9375rem' }}>
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>{course.tagline}</p>
                  <p className="text-sm font-medium mb-5" style={{ color: 'var(--brand-gold)' }}>{course.subtitle}</p>
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn-gold w-full text-center justify-center text-base"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
