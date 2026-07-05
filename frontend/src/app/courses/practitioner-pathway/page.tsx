import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { ChevronRight, CheckCircle, Target, Zap, Brain, BookOpen, Star, Quote, GraduationCap, Award, Clock, Users, FileCheck, MessageCircle } from 'lucide-react'
import { categories } from '@/lib/courseData'

export const metadata: Metadata = {
  title: 'Practitioner Pathway | Zeelin Academy',
  description: 'Advance beyond Foundation with our Practitioner Pathway courses. Deepen your Business Analysis expertise.',
}

const cat = categories.find((c) => c.slug === 'practitioner-pathway')!

export default function PractitionerPathwayPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
        <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0}>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-none">
              <span style={{ color: '#ffffff' }}>Practitioner </span>
              <span style={{ color: 'var(--brand-gold)' }}>Pathway</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-lg sm:text-xl mt-6 max-w-3xl mx-auto font-medium" style={{ color: 'var(--text-secondary)' }}>
              {cat.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <Link href="/" className="hover:gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:gold transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--brand-gold)' }}>Practitioner Pathway</span>
          </nav>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              <span style={{ color: 'var(--brand-gold)' }}>Prerequisites</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Before enrolling in the Practitioner Pathway, ensure you meet the following requirements.
            </p>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, label: 'Foundation Certificate or equivalent knowledge' },
              { icon: CheckCircle, label: 'At least 6 months of BA or related work experience' },
              { icon: CheckCircle, label: 'Familiarity with requirements documentation' },
              { icon: CheckCircle, label: 'Understanding of stakeholder management basics' },
              { icon: CheckCircle, label: 'Comfortable with business process concepts' },
              { icon: CheckCircle, label: 'Commitment to 8-10 hours study per week' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-start gap-3 p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Practitioner Different */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              What Makes Practitioner <span style={{ color: 'var(--brand-gold)' }}>Different</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Go deeper, think critically, and apply advanced techniques in real-world scenarios.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Advanced Analysis', desc: 'Dive into complex problem-solving with root cause analysis, system thinking, and advanced modeling techniques.' },
              { icon: Target, title: 'Scenario-Based Learning', desc: 'Tackle real-world business cases that simulate the challenges senior BAs face in industry.' },
              { icon: Zap, title: 'Exam-Focused Preparation', desc: 'Structured preparation for the Practitioner exam with scenario-based questions and mock oral assessments.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl border h-full" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <item.icon className="w-12 h-12 mb-5" style={{ color: 'var(--brand-gold)' }} />
                  <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--text-core)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation Tips */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Exam Preparation <span style={{ color: 'var(--brand-gold)' }}>Tips</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
               Proven strategies to help you ace the Practitioner exam.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: 'Study the Syllabus', desc: 'Familiarise yourself with the Practitioner syllabus and weightings so you can prioritise high-value topics.' },
              { icon: FileCheck, title: 'Practice Scenarios', desc: 'Work through as many scenario-based questions as possible. Focus on applying concepts, not just memorising them.' },
              { icon: Clock, title: 'Time Management', desc: 'Allocate time per question during the exam. Practice under timed conditions to build speed and accuracy.' },
              { icon: MessageCircle, title: 'Join Study Groups', desc: 'Discuss concepts with peers. Teaching others is one of the most effective ways to reinforce your understanding.' },
            ].map((tip, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <tip.icon className="w-8 h-8 mt-1 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: 'var(--text-core)' }}>{tip.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tip.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-12" style={{ color: 'var(--text-core)' }}>
              Success <span style={{ color: 'var(--brand-gold)' }}>Story</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="p-8 rounded-2xl border relative" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <Quote className="w-10 h-10 mb-4" style={{ color: 'var(--brand-gold)' }} />
                <blockquote className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--text-core)' }}>
                  &ldquo;The Practitioner Pathway transformed the way I approach Business Analysis. The scenario-based learning and mock exams gave me the confidence to pass the Practitioner exam on my first attempt. Within three months, I was promoted to Senior Business Analyst.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--brand-gold)' }}>SK</div>
                  <div>
                    <div className="font-bold" style={{ color: 'var(--text-core)' }}>Sarah K.</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Senior Business Analyst, London</div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-gold)' }} />)}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
