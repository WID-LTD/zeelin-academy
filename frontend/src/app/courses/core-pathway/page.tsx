import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { ChevronRight, BookOpen, Target, Lightbulb, BarChart3, Users, Award, Clock, MessageCircle, FileCheck, Monitor, RefreshCw, Star, CheckCircle, GraduationCap, User } from 'lucide-react'
import { categories } from '@/lib/courseData'

export const metadata: Metadata = {
  title: 'Core Pathway | Zeelin Academy',
  description: 'Prepare for professional exams with our Core Pathway courses. Designed for learners who want to build on their BA foundation.',
}

const cat = categories.find((c) => c.slug === 'core-pathway')!

export default function CorePathwayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-30" />
        <div className="relative max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0}>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide leading-none">
              <span style={{ color: '#ffffff' }}>Core </span>
              <span style={{ color: 'var(--brand-gold)' }}>Pathway</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-lg sm:text-xl mt-6 max-w-3xl mx-auto font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {cat.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 course-section-divider">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <Link href="/" className="hover:gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:gold transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--brand-gold)' }}>Core Pathway</span>
          </nav>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Award, label: 'Pass Rate', value: '92%' },
              { icon: Clock, label: 'Avg. Completion', value: '12 Weeks' },
              { icon: Users, label: 'Students', value: '3,200+' },
              { icon: Star, label: 'Rating', value: '4.8/5.0' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center p-5 lg:p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
                  <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--brand-gold)' }} />
                  <div className="text-2xl lg:text-3xl font-black font-display mb-1" style={{ color: 'var(--text-core)' }}>{stat.value}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-20 lg:py-24 course-section-divider">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              What You&apos;ll <span style={{ color: 'var(--brand-gold)' }}>Learn</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Core Pathway equips you with practical Business Analysis skills that you can apply immediately.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: BookOpen, title: 'BA Fundamentals', desc: 'Master the Core Concept Model, stakeholder identification, and the core BA toolkit.' },
              { icon: Target, title: 'Requirements Engineering', desc: 'Elicit, analyse, validate, and manage requirements through the full life cycle.' },
              { icon: Lightbulb, title: 'Strategic Thinking', desc: 'Apply SWOT, PESTLE, root cause analysis, and business case development.' },
              { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'Use metrics, KPIs, and performance analysis to guide solution evaluation.' },
              { icon: Users, title: 'Stakeholder Management', desc: 'Build rapport, facilitate workshops, and manage expectations effectively.' },
              { icon: Award, title: 'Certification Readiness', desc: 'Prepare confidently for intermediate-level certification exams.' },
              { icon: RefreshCw, title: 'Agile & Waterfall', desc: 'Navigate both traditional and agile delivery frameworks with ease.' },
              { icon: MessageCircle, title: 'Communication Skills', desc: 'Present findings, write reports, and influence decision-makers.' },
            ].map((skill, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-5 lg:p-6 rounded-2xl border h-full" style={{ backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
                  <skill.icon className="w-10 h-10 mb-4" style={{ color: 'var(--brand-gold)' }} />
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-core)' }}>{skill.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Course Includes */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Course <span style={{ color: 'var(--brand-gold)' }}>Includes</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Everything you need to succeed, all in one place.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {[
              { icon: Award, label: 'Certificate of Completion' },
              { icon: Clock, label: 'Lifetime Access' },
              { icon: MessageCircle, label: 'Mentor Support' },
              { icon: FileCheck, label: 'Practice Quizzes' },
              { icon: Monitor, label: 'Mobile & TV Access' },
              { icon: RefreshCw, label: 'Free Updates' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-4 lg:p-5 rounded-xl border text-center" style={{ backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
                  <item.icon className="w-7 h-7 mx-auto mb-3" style={{ color: 'var(--brand-gold)' }} />
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-core)' }}>{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 md:py-20 lg:py-24 course-section-divider">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12" style={{ color: 'var(--text-core)' }}>
              Meet Your <span style={{ color: 'var(--brand-gold)' }}>Instructor</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-6 lg:p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full flex-shrink-0 flex items-center justify-center text-4xl font-bold" style={{ backgroundColor: 'rgba(243,239,227,0.5)', color: 'var(--brand-gold)' }}>
                  <GraduationCap className="w-14 h-14" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-core)' }}>Dr. Franklin Kalu</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: 'var(--brand-gold)' }}>Senior Business Analyst & Educator</p>
                  <p className="leading-relaxed text-sm lg:text-base" style={{ color: 'var(--text-secondary)' }}>
                    With over 15 years of experience in Business Analysis across Fortune 500 companies, Dr. Franklin Kalu brings real-world insights to every lesson. He is passionate about helping aspiring BAs build successful careers and has trained over 3,000 professionals globally. His teaching approach blends theory with hands-on practice, ensuring you develop skills that matter in the workplace.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {cat.courses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={idx * 100} duration={600}>
              <div
                className="rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}
              >
                <div className="relative w-full aspect-video" style={{ backgroundColor: 'rgba(243,239,227,0.5)' }}>
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
                      <User className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                      {course.for}
                    </div>
                    <div className="flex items-center gap-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <Clock className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
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
                    style={{ backgroundColor: 'rgba(243,239,227,0.4)', borderColor: 'var(--border)', color: 'var(--text-core)' }}
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
