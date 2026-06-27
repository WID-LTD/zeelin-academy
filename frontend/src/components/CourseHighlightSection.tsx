'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { BookOpen, RefreshCw, FolderKanban, Users, Briefcase, FileCheck, GitBranch, Monitor, Database, BarChart, Gift } from 'lucide-react'

const courses = [
  {
    id: 'foundation-ba',
    title: 'Foundation Certificate in Business Analysis',
    for: 'Beginners, career changers, and busy professionals',
    duration: '6 weeks',
    includes: 'Video lessons, reading guide, mock quiz, visual summaries, study plan, live Trainer, Support',
    outcome: 'Build confidence and prepare for the BCS Foundation exam',
    icon: BookOpen,
  },
  {
    id: 'business-change',
    title: 'Business Change Certificate in Business Analysis',
    for: 'Learners interested in business change, transformation, organisational improvement, and change adoption',
    duration: '6 weeks',
    includes: 'Video lessons, reading guide, mock quiz, visual summaries, study plan, live trainer support, Saturday Success Lab, and exam-readiness checks',
    outcome: 'Build confidence, understand how organisations manage change, and prepare for the Business Change Certificate in Business Analysis exam.',
    icon: RefreshCw,
  },
  {
    id: 'is-project-mgmt',
    title: 'IS Project Management Certificate in Business Analysis',
    for: 'Learners who want to understand how information systems projects are planned, managed, delivered, and controlled; ideal for aspiring Business Analysts, IT Business Analysts, Project Analysts, PMO professionals, career changers, and busy professionals preparing for the International Diploma pathway.',
    duration: '6 weeks',
    includes: 'Video lessons, structured reading guide, mock quizzes, visual summaries, weekly study plan, live trainer support, exam-focused explanations, progress check-ins, and exam booking guidance.',
    outcome: 'Build confidence in IS project management concepts and prepare for the BCS IS Project Management Certificate exam while strengthening your understanding of how Business Analysis fits into IT and digital project delivery.',
    icon: FolderKanban,
  },
  {
    id: 'org-behaviour',
    title: 'Organisational Behaviour Certificate in Business Analysis',
    for: 'Learners who want to understand people, teams, culture, leadership, and how organisations behave during business change.',
    duration: '6 weeks',
    includes: 'Video lessons, reading guide, mock quiz, visual summaries, study plan, live trainer support, and guided exam preparation.',
    outcome: 'Build confidence in organisational behaviour concepts and prepare for the Organisational Behaviour Certificate exam.',
    icon: Users,
  },
  {
    id: 'ba-practice',
    title: 'Business Analysis Practice',
    for: 'Learners preparing for the BCS Business Analysis Practice exam, current or aspiring Business Analysts, career changers, and professionals who want to understand how business analysis works in real organisational situations.',
    duration: '6 weeks',
    includes: 'Video lessons, structured reading guide, mock quizzes, visual summaries, study plan, live trainer support, exam-focused explanations, practice questions, Saturday Success Lab, and exam-readiness checks.',
    outcome: 'Build confidence in analysing business situations, understanding stakeholder perspectives, exploring business activities, identifying potential solutions, and preparing for the BCS Business Analysis Practice exam.',
    icon: Briefcase,
  },
  {
    id: 'requirements-eng',
    title: 'Requirements Engineering in Business Analysis',
    for: 'Aspiring Business Analysts, current BAs, project professionals, product teams, and busy learners who want to understand how to capture and manage requirements clearly.',
    duration: '6 weeks',
    includes: 'Video lessons, structured reading guide, mock quizzes, visual summaries, study plan, live trainer support, requirements practice tasks, exam-focused guidance, and progress check-ins.',
    outcome: 'Build confidence in identifying, analysing, documenting, validating, and managing requirements while preparing for the Requirements Engineering exam.',
    icon: FileCheck,
  },
  {
    id: 'modelling-processes',
    title: 'Modelling Business Processes',
    for: 'Learners who want to understand business processes, improve workflows, identify pain points, and support process improvement projects',
    duration: '6 weeks',
    includes: 'Video lessons, reading guide, mock quiz, visual summaries, study plan, live trainer support, process modelling practice, exam-focused revision, and progress check-ins',
    outcome: 'Build confidence in analysing, modelling, and improving business processes while preparing for the Modelling Business Processes exam.',
    icon: GitBranch,
  },
  {
    id: 'systems-modelling',
    title: 'Systems Modelling Techniques',
    for: 'Learners who want to work closer to IT teams, systems analysis, solution design, digital projects, and technical Business Analyst roles.',
    duration: '6 weeks',
    includes: 'Video lessons, structured reading guide, mock quiz, visual summaries, study plan, live trainer support, practice questions, model examples, exam-readiness checks, and guided revision.',
    outcome: 'Build confidence in systems modelling techniques and prepare for the BCS Systems Modelling Techniques exam while learning how to translate business needs into clear system-level models.',
    icon: Monitor,
  },
  {
    id: 'systems-development',
    title: 'Systems Development Essentials',
    for: 'Learners who want to understand how business needs are turned into working systems, including aspiring IT Business Analysts, Digital Business Analysts, Systems Analysts, Product Analysts, and professionals working with technology delivery teams.',
    duration: '6 weeks',
    includes: 'Video lessons, structured reading guide, mock quizzes, visual summaries, weekly study plan, live trainer support, exam-focused guidance, progress check-ins, and exam-readiness support.',
    outcome: 'Build confidence in systems development concepts and prepare for the BCS Systems Development Essentials exam with a clearer understanding of how systems are investigated, developed, tested, implemented, and supported.',
    icon: Monitor,
  },
  {
    id: 'data-mgmt',
    title: 'Data Management Essentials',
    for: 'Learners interested in data-focused Business Analysis, data projects, reporting, data quality, data migration, and data governance.',
    duration: '6 weeks',
    includes: 'Video lessons, structured reading guide, mock quizzes, visual summaries, study plan, live trainer support, guided progress check-ins, and exam-readiness support.',
    outcome: 'Build confidence in data management concepts and prepare for the BCS Data Management Essentials exam.',
    icon: Database,
  },
  {
    id: 'benefits-mgmt',
    title: 'Benefits Management and Business Acceptance',
    for: 'Learners interested in business change, benefits realisation, user acceptance, transformation, and making sure solutions deliver real value.',
    duration: '6 weeks',
    includes: 'Video lessons, reading guide, mock quiz, visual summaries, study plan, live trainer support, exam-readiness check, and practical examples.',
    outcome: 'Build confidence in benefits management, business acceptance, and value delivery while preparing for the Benefits Management and Business Acceptance exam.',
    icon: Gift,
  },
]

export default function CourseHighlightSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28 3xl:py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #B5952F, transparent 70%)' }} />
      </div>

      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              All the Courses{' '}
              <span style={{ color: 'var(--brand-gold)' }}>We Offer</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              Comprehensive BCS Diploma preparation — from Foundation through to Benefits Management
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-10 max-w-[1600px] 3xl:max-w-[2000px] mx-auto">
          {courses.map((course, idx) => {
            const Icon = course.icon
            return (
              <AnimatedSection key={course.id} delay={100 + idx * 60} duration={600}>
                <div
                  className="p-6 3xl:p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col hover:border-[rgba(212,175,55,0.3)] group"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 3xl:w-14 3xl:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                      <Icon className="w-6 h-6 3xl:w-7 3xl:h-7" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <h3 className="font-display text-base 3xl:text-lg font-black leading-snug" style={{ color: 'var(--text-core)' }}>
                      {course.title}
                    </h3>
                  </div>

                  {/* For */}
                  <div className="mb-3">
                    <span className="text-xs 3xl:text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--brand-gold)' }}>For:</span>
                    <p className="text-xs 3xl:text-sm leading-relaxed mt-0.5" style={{ color: 'var(--text-secondary)' }}>{course.for}</p>
                  </div>

                  {/* Duration badge */}
                  <div className="mb-3">
                    <span className="text-xs 3xl:text-sm font-bold px-3 py-1 rounded-full border inline-block"
                      style={{ color: 'var(--brand-gold)', borderColor: 'rgba(212,175,55,0.3)', backgroundColor: 'rgba(212,175,55,0.08)' }}>
                      {course.duration}
                    </span>
                  </div>

                  {/* Includes */}
                  <div className="mb-3">
                    <span className="text-xs 3xl:text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--brand-gold)' }}>Includes:</span>
                    <p className="text-xs 3xl:text-sm leading-relaxed mt-0.5" style={{ color: 'var(--text-secondary)' }}>{course.includes}</p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-5 flex-1">
                    <span className="text-xs 3xl:text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--brand-gold)' }}>Outcome:</span>
                    <p className="text-xs 3xl:text-sm leading-relaxed mt-0.5" style={{ color: 'var(--text-secondary)' }}>{course.outcome}</p>
                  </div>

                  {/* Button */}
                  <Link
                    href="/courses/modules"
                    className="btn-gold px-5 py-2.5 text-sm font-bold text-center inline-block hover:scale-105 transition-transform"
                  >
                    View Course Details
                  </Link>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
