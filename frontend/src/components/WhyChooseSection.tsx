'use client'

import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'

const features = [
  {
    tag: 'Live Training',
    title: 'Monday to Friday Live Instructor-Led Training',
    desc: 'Live weekday teaching sessions where learners receive clear explanations, real examples, guided support, and the opportunity to ask questions.',
    image: '/classroom.jpg',
  },
  {
    tag: 'Roadmap',
    title: '6-Week Structured Reading Roadmap',
    desc: 'A clear study plan that shows learners what to read, when to read it, and how each reading task connects to exam preparation.',
    image: '/guide.png',
  },
  {
    tag: 'Saturday Lab',
    title: 'Saturday Success Lab',
    desc: 'A weekly review and preparation session where learners summarise what they studied during the week, clarify difficult concepts, ask questions, and prepare for the next topic.',
    image: '/group.png',
  },
  {
    tag: 'Visual Summaries',
    title: 'Structured Visual Summaries',
    desc: 'Diagrams, tables, process flows, mind maps, and visual breakdowns that help learners understand difficult concepts faster and revise more effectively.',
    image: '/learning_experience.png',
  },
  {
    tag: 'Mock Quizzes',
    title: 'Interactive Mock Quizzes',
    desc: 'Engaging exam-style quizzes that help learners practise, receive feedback, identify weak areas, and build confidence.',
    image: '/dashboard_mockup.png',
  },
  {
    tag: 'Readiness Check',
    title: 'Automatic Exam Readiness Check',
    desc: 'A progress-based readiness check that helps learners understand whether they are prepared before booking or sitting their exam.',
    image: '/certificate_preview.png',
  },
  {
    tag: 'Oral Readiness',
    title: 'Oral Exam Readiness Support',
    desc: 'Provides focused preparation for explaining concepts clearly and responding confidently to examiner-style questions.',
    image: '/consultation.png',
  },
  {
    tag: 'Pathway Finder',
    title: 'Diploma Pathway Finder',
    desc: 'Guidance to help learners select modules based on their background, career goals, and confidence level.',
    image: '/unique_teaching_method.png',
  },
  {
    tag: 'Companion Guides',
    title: 'Exam Focus Companion Guides',
    desc: 'Access to course-specific study guides to support understanding and revision.',
    image: '/banner.png',
  },
  {
    tag: 'Booking Guidance',
    title: 'Exam Booking Guidance',
    desc: 'Support for understanding the official booking process and choosing the correct modules.',
    image: '/confident.jpg',
  },
  {
    tag: 'Tutor Check-Ins',
    title: 'Personal Tutor Check-Ins',
    desc: 'Weekly one-on-one sessions for personalized feedback, tracking progress, and maintaining motivation.',
    image: '/achievement_business_analysts.png',
  },
  {
    tag: 'Study Groups',
    title: 'Community Study Groups',
    desc: 'Small-group peer learning to collaborate on case studies, share tips, and build confidence in a supportive environment.',
    image: '/diverse-student-group.jpg',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 px-[5%]" style={{ textAlign: 'center' }}>
      <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
        <AnimatedSection delay={0}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wide mb-4" style={{ color: 'var(--navy-dark)' }}>
          Why Choose <span style={{ color: 'var(--dark-gold)' }}>Zeelin Academy</span>
        </h2>
        <p className="text-lg md:text-xl font-semibold max-w-[800px] mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
          Preparing for Business Analysis exams can feel overwhelming, especially when you are working full-time, changing careers, raising a family, or trying to study after a long day.
        </p>

        <h3 className="font-display text-2xl md:text-3xl font-bold italic mb-10" style={{ color: 'var(--dark-gold)' }}>
          A Guided Path. Every Step of the Way.
        </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <AnimatedSection key={f.tag} delay={100 + idx * 60}>
            <div className="group" style={{ background: 'var(--bg-card)', borderRadius: '0.5rem', overflow: 'hidden', textAlign: 'left', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid var(--border)', transition: 'box-shadow 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(180,160,130,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div className="relative w-full h-[7.5rem] sm:h-[9.375rem] overflow-hidden" style={{ backgroundColor: '#E8E2D4' }}>
                <SafeImage src={f.image} alt={f.tag} fill className="object-cover hover-image-zoom" />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <span style={{ display: 'inline-block', background: 'var(--navy-dark)', color: 'white', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', padding: '0.3125rem 0.875rem', borderRadius: '1.25rem', marginBottom: '0.9375rem' }}>
                  {f.tag}
                </span>
                <h4 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--navy-dark)' }}>{f.title}</h4>
                  <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
