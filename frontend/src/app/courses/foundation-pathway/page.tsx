import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { ChevronRight, BookOpen, Layers, ArrowUpDown, Plus, Minus, HelpCircle, CheckCircle, GraduationCap, Star, Clock, Award, Users, FileCheck, MessageCircle } from 'lucide-react'
import { categories } from '@/lib/courseData'

export const metadata: Metadata = {
  title: 'Foundation Pathway | Zeelin Academy',
  description: 'Start your Business Analysis journey with our Foundation Pathway courses. Designed for beginners and career changers.',
}

const cat = categories.find((c) => c.slug === 'foundation-pathway')!

export default function FoundationPathwayPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Standalone Title */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
        <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0}>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-none">
              <span style={{ color: '#ffffff' }}>Foundation </span>
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
            <span style={{ color: 'var(--brand-gold)' }}>Foundation Pathway</span>
          </nav>
        </div>
      </section>

      {/* Foundation Level Overview */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Foundation Level <span style={{ color: 'var(--brand-gold)' }}>Overview</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The Foundation Pathway is your entry point into Business Analysis. It covers the essential knowledge, core concepts, and foundational techniques required to understand the BA discipline and prepare for BCS Foundation certification.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Core Concepts', items: ['BACCM™ model', 'BA role & responsibilities', 'Industry standards & best practices', 'BA competencies & career paths'] },
              { icon: Layers, title: 'Key Techniques', items: ['Stakeholder identification', 'Requirements elicitation', 'Process modeling basics', 'Document analysis'] },
              { icon: Award, title: 'Certification Prep', items: ['BCS Foundation syllabus', 'Mock exam questions', 'Study guides & resources', 'Exam tips & techniques'] },
            ].map((col, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl border h-full" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <col.icon className="w-10 h-10 mb-4" style={{ color: 'var(--brand-gold)' }} />
                  <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--text-core)' }}>{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Module List */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              What&apos;s <span style={{ color: 'var(--brand-gold)' }}>Covered</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              A step-by-step curriculum designed to build your confidence from the ground up.
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { week: 'Weeks 1-2', title: 'Business Analysis Foundations', desc: 'Introduction to BA, BACCM™ model, stakeholder identification, and the role of a BA.' },
              { week: 'Weeks 1-2', title: 'Elicitation & Collaboration', desc: 'Interview techniques, workshop facilitation, surveys, and focus groups.' },
              { week: 'Weeks 3-4', title: 'Requirements Life Cycle Management', desc: 'Traceability matrices, prioritization frameworks, and change management.' },
              { week: 'Weeks 3-4', title: 'Strategy Analysis', desc: 'SWOT analysis, root cause analysis, business case development.' },
              { week: 'Weeks 5-6', title: 'Requirements Analysis & Design', desc: 'BPMN modeling, data modeling, use cases, and wireframing.' },
            ].map((mod, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-start gap-5 p-6 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="w-20 flex-shrink-0 text-center">
                    <div className="text-xs font-bold uppercase" style={{ color: 'var(--brand-gold)' }}>{mod.week}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--text-core)' }}>{mod.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{mod.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Foundation vs <span style={{ color: 'var(--brand-gold)' }}>Practitioner</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Understand the difference and choose the right level for your career.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b font-bold" style={{ borderColor: 'var(--border)', color: 'var(--text-core)' }}>Feature</th>
                  <th className="p-4 border-b font-bold text-center" style={{ borderColor: 'var(--border)', color: 'var(--brand-gold)' }}>Foundation</th>
                  <th className="p-4 border-b font-bold text-center" style={{ borderColor: 'var(--border)', color: 'var(--brand-gold)' }}>Practitioner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Target Audience', foundation: 'Beginners & career changers', practitioner: 'Experienced BAs & professionals' },
                  { feature: 'Prerequisites', foundation: 'None', practitioner: 'Foundation certification or equivalent' },
                  { feature: 'Focus Area', foundation: 'Core concepts & techniques', practitioner: 'Advanced analysis & application' },
                  { feature: 'Certification Level', foundation: 'BCS Foundation Certificate', practitioner: 'BCS Practitioner Certificate' },
                  { feature: 'Duration', foundation: '6 weeks', practitioner: '6 weeks' },
                  { feature: 'Exam Format', foundation: 'Multiple choice', practitioner: 'Scenario-based & oral' },
                  { feature: 'Career Impact', foundation: 'Entry-level BA roles', practitioner: 'Senior BA & lead roles' },
                ].map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-[rgba(212,175,55,0.03)]">
                    <td className="p-4 border-b text-sm font-medium" style={{ borderColor: 'var(--border)', color: 'var(--text-core)' }}>{row.feature}</td>
                    <td className="p-4 border-b text-sm text-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>{row.foundation}</td>
                    <td className="p-4 border-b text-sm text-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>{row.practitioner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: 'var(--text-core)' }}>
              Frequently Asked <span style={{ color: 'var(--brand-gold)' }}>Questions</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Common questions about the Foundation Pathway.
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Do I need any prior experience to start Foundation?', a: 'No prior experience is required. The Foundation Pathway is designed for complete beginners and career changers who want to enter the Business Analysis field.' },
              { q: 'How long does it take to complete the Foundation Pathway?', a: 'The Foundation Pathway is structured over 6 weeks, with approximately 8-10 hours of study per week. You can progress at your own pace.' },
              { q: 'Will I be ready for the BCS Foundation exam?', a: 'Yes. The curriculum is aligned with the BCS Foundation syllabus and includes mock exams, practice questions, and revision materials to ensure you are fully prepared.' },
              { q: 'Can I switch to the Practitioner Pathway later?', a: 'Absolutely. Many students start with Foundation and progress to Practitioner once they have built their confidence and passed the Foundation exam.' },
              { q: 'What career opportunities will I have after Foundation?', a: 'Graduates typically pursue roles such as Junior Business Analyst, Process Analyst, or Business Change Analyst. The pathway provides a solid foundation for career progression.' },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <details className="group rounded-2xl border overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold" style={{ color: 'var(--text-core)' }}>
                    {faq.q}
                    <Plus className="w-5 h-5 flex-shrink-0 group-open:hidden" style={{ color: 'var(--brand-gold)' }} />
                    <Minus className="w-5 h-5 flex-shrink-0 hidden group-open:block" style={{ color: 'var(--brand-gold)' }} />
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Course Cards */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cat.courses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={idx * 100} duration={600}>
              <div
                className="rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Media */}
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
                    <SafeImage
                      src={course.media}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Info */}
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
