import Link from 'next/link'
import CountUp from '@/components/CountUp'

const weeks = [
  { num: 1, title: 'Business Analysis Planning and Monitoring', desc: 'Understanding the BA role, stakeholder mapping, and project approach.' },
  { num: 2, title: 'Elicitation and Collaboration', desc: 'Gathering information directly from stakeholders through interviews, workshops, and surveys.' },
  { num: 3, title: 'Requirements Life Cycle Management', desc: 'Managing and tracing requirements from inception to completion.' },
  { num: 4, title: 'Strategy Analysis', desc: 'Defining business needs and identifying strategies for organizational change.' },
  { num: 5, title: 'Requirements Analysis and Design Definition', desc: 'Structuring requirements and designing solutions using BPMN and wireframes.' },
  { num: 6, title: 'Solution Evaluation', desc: 'Assessing the value delivered by the implemented solution.' }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
            Course <span style={{ color: 'var(--brand-gold)' }}>Outline</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-secondary">
            A comprehensive 6-week Diploma in Business Analysis program designed for practical learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {weeks.map((week) => (
            <div key={week.num} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ color: 'var(--text-core)' }}>
                  {week.num}
                </div>
                {week.num < 6 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'var(--border)' }} />}
              </div>
              <div className="flex-1 pb-2">
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                  Week {week.num}: {week.title}
                </h3>
                <p className="text-muted">{week.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="font-display text-lg text-secondary">
            Ready to dive deeper?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses/modules" className="btn-gold px-8 py-4 text-lg inline-block">
              Unlock the Full Curriculum
            </Link>
            <Link href="/enroll" className="btn-outline-gold px-8 py-4 text-lg inline-block">
              Join the <CountUp end={500} suffix="+" /> Students
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
