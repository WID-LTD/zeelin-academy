import Link from 'next/link'

const weeks = [
  { num: 1, title: 'Business Analysis Planning and Monitoring', topics: ['BACCM™ Core Concept Model', 'Stakeholder identification & mapping', 'Planning the BA approach', 'Governance and BA metrics', 'Tools: Stakeholder maps, RACI matrix'] },
  { num: 2, title: 'Elicitation and Collaboration', topics: ['Interview techniques', 'Workshops facilitation', 'Focus groups', 'Survey analysis', 'Tools: Elicitation activity plans'] },
  { num: 3, title: 'Requirements Life Cycle Management', topics: ['Requirements traceability', 'MoSCoW prioritization', 'Change management', 'Requirements approval', 'Tools: Traceability matrices, Jira'] },
  { num: 4, title: 'Strategy Analysis', topics: ['Current vs future state', 'Risk identification', 'Root cause analysis', 'Business case development', 'Tools: SWOT, 5 Whys'] },
  { num: 5, title: 'Requirements Analysis and Design Definition', topics: ['BPMN process modeling', 'Data modeling (ERDs)', 'Use Cases & User Stories', 'Non-Functional Requirements', 'Tools: BPMN, Wireframes'] },
  { num: 6, title: 'Solution Evaluation', topics: ['Solution performance', 'Metrics analysis', 'Enterprise limitations', 'Value assessment', 'Tools: Performance dashboards'] }
]

export default function SyllabusPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
            Weekly <span className="gold">Syllabus</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-secondary">
            Week-by-week breakdown of the Diploma in Business Analysis program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {weeks.map((week) => (
            <div key={week.num} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-[23px] top-0 bottom-0 w-px last:hidden" style={{ backgroundColor: 'var(--border)' }} />
              <div className="absolute left-0 top-0 w-[2.875rem] h-[2.875rem] rounded-full gold-bg flex items-center justify-center font-bold" style={{ color: 'var(--text-core)' }}>
                {week.num}
              </div>
              <div className="ml-4 p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Week {week.num}: {week.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {week.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 gold-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-secondary">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-12 rounded-2xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
            Ready to Get <span className="gold">Started?</span>
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-secondary">
            Complete the full program and earn your Diploma in Business Analysis. Enroll now to begin your journey.
          </p>
          <Link href="/enroll" className="btn-gold px-10 py-4 text-lg inline-block">
            Enroll Now - Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
