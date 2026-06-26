import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { ChevronRight, ClipboardList, Lightbulb, Zap, Star, Calendar, Clock, ShieldCheck, Crown, Users, CheckCircle, Award, BookOpen, MessageCircle, BarChart3 } from 'lucide-react'
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
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
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

      {/* Breadcrumb */}
      <section className="py-4 border-b" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <Link href="/" className="hover:gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:gold transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--brand-gold)' }}>Oral Examination</span>
          </nav>
        </div>
      </section>

      {/* Exam Format Guide */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Exam Format <span style={{ color: 'var(--brand-gold)' }}>Guide</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Understand exactly what to expect in the BCS Oral Examination and how to prepare effectively.
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Registration & Scheduling', desc: 'Register for your chosen exam date through the BCS portal. You will receive a confirmation with your allocated time slot and virtual meeting link.', icon: ClipboardList },
              { step: '02', title: 'Pre-Exam Briefing', desc: 'The examiner will introduce themselves, explain the format, and confirm the technical setup. You will have 5 minutes to settle in and ask any clarifying questions.', icon: BookOpen },
              { step: '03', title: 'Scenario Presentation', desc: 'You will be presented with a business scenario related to your chosen diploma pathway. Take notes and prepare your response. You have up to 10 minutes to review the scenario.', icon: Lightbulb },
              { step: '04', title: 'Oral Response & Discussion', desc: 'Present your analysis, recommendations, and rationale. The examiner will ask probing questions to assess your depth of understanding and application of BA techniques.', icon: MessageCircle },
              { step: '05', title: 'Assessment & Results', desc: 'The examiner evaluates your response against the BCS marking criteria. Results are typically issued within 2-3 weeks via email.', icon: Award },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex items-start gap-6 p-6 rounded-2xl border mb-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg" style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--brand-gold)' }}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      <h3 className="font-bold text-lg" style={{ color: 'var(--text-core)' }}>{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Strategies */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Tips & <span style={{ color: 'var(--brand-gold)' }}>Strategies</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Expert advice to help you perform at your best on exam day.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Stay Structured', desc: 'Use a clear framework (e.g., situation, analysis, recommendation) to organise your response logically.' },
              { icon: Star, title: 'Demonstrate Depth', desc: 'Go beyond surface-level answers. Reference BA techniques, tools, and real-world application.' },
              { icon: Clock, title: 'Manage Your Time', desc: 'Allocate time wisely between note-taking, presentation, and responding to follow-up questions.' },
              { icon: ShieldCheck, title: 'Stay Composed', desc: 'If you do not know an answer, acknowledge it calmly and explain how you would approach finding the solution.' },
            ].map((tip, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-6 rounded-2xl border h-full text-center" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <tip.icon className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--brand-gold)' }} />
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-core)' }}>{tip.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tip.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Choose Your <span style={{ color: 'var(--brand-gold)' }}>Package</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Select the preparation package that best fits your needs and budget.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Self-Study', price: '£149', features: ['Recording of exam strategy session', 'Sample scenario pack (5 scenarios)', 'Marking criteria guide', 'Email support'], highlight: false },
              { name: 'Guided Prep', price: '£349', features: ['Everything in Self-Study', '3 live coaching sessions', 'Personalised feedback on responses', 'Mock oral exam with examiner', 'Scenario bank (15 scenarios)'], highlight: true },
              { name: 'One-on-One', price: '£599', features: ['Everything in Guided Prep', '6 live coaching sessions', 'Custom study plan', 'Unlimited scenario reviews', 'Priority scheduling', 'Post-exam debrief call'], highlight: false },
            ].map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`p-8 rounded-2xl border flex flex-col h-full ${pkg.highlight ? 'relative' : ''}`} style={{
                  backgroundColor: pkg.highlight ? 'var(--bg-card)' : 'var(--bg-card)',
                  borderColor: pkg.highlight ? 'var(--brand-gold)' : 'var(--border)',
                  boxShadow: pkg.highlight ? '0 0 0 2px var(--brand-gold)' : 'none'
                }}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'var(--brand-gold)', color: '#0f1115' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--text-core)' }}>{pkg.name}</h3>
                  <div className="text-3xl font-black mb-6" style={{ color: 'var(--brand-gold)' }}>{pkg.price}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/enroll" className={`block w-full py-3 text-center rounded-xl font-bold text-sm transition-all ${pkg.highlight ? 'btn-gold' : 'border'}`}
                    style={pkg.highlight ? {} : { borderColor: 'var(--border)', color: 'var(--text-core)' }}>
                    Select {pkg.name}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Calendar className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--brand-gold)' }} />
            <h2 className="font-display text-3xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
              Ready to Book Your <span style={{ color: 'var(--brand-gold)' }}>Oral Exam?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Schedule your BCS Oral Examination through Zeelin Academy. We will guide you through the booking process and ensure you are fully prepared.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/enroll" className="btn-gold px-10 py-4 text-lg font-bold inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book Your Exam
              </Link>
              <Link href="/contact" className="btn-outline-gold px-10 py-4 text-lg font-bold inline-flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Speak to an Advisor
              </Link>
            </div>
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
