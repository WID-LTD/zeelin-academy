'use client'

import SafeImage from '@/components/SafeImage'

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
]

export default function WhyChooseSection() {
  return (
    <section style={{ padding: '100px 5%', textAlign: 'center' }}>
      <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--navy-dark)' }}>
          Why Choose <span style={{ color: 'var(--dark-gold)' }}>Zeelin Academy</span>
        </h2>
        <p className="text-lg md:text-xl font-semibold max-w-[800px] mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
          Preparing for Business Analysis exams can feel overwhelming, especially when you are working full-time, changing careers, raising a family, or trying to study after a long day.
        </p>

        <h3 className="font-display text-2xl md:text-3xl font-bold italic mb-10" style={{ color: 'var(--dark-gold)' }}>
          A Guided Path. Every Step of the Way.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.tag} style={{ background: 'var(--bg-card)', borderRadius: '8px', overflow: 'hidden', textAlign: 'left', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid var(--border)' }}>
              <div className="relative w-full h-[120px] sm:h-[150px]" style={{ backgroundColor: '#E8E2D4' }}>
                <SafeImage src={f.image} alt={f.tag} fill className="object-cover" />
              </div>
              <div style={{ padding: '28px' }}>
                <span style={{ display: 'inline-block', background: 'var(--navy-dark)', color: 'white', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', padding: '5px 14px', borderRadius: '20px', marginBottom: '15px' }}>
                  {f.tag}
                </span>
                <h4 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--navy-dark)' }}>{f.title}</h4>
                <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
