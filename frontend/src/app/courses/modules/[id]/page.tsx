'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ChevronLeft, Check, FileText, ChevronRight, Edit3, Plus, Clock, BookOpen, ArrowRight, BarChart3, Target, Award, Sparkles } from 'lucide-react'

const moduleDetails: Record<string, {
  title: string
  type: string
  duration: string
  overview: string
  objectives: string[]
  weeklyBreakdown: { week: number; title: string; topics: string[]; exercises: string[] }[]
  outcomes: string[]
}> = {
  'ba-foundations': {
    title: 'Business Analysis Foundations',
    type: 'free',
    duration: '2 Weeks',
    overview: 'Introduction to Business Analysis, the BACCM™ Core Concept Model, stakeholder identification, and the role of a Business Analyst in modern organizations.',
    objectives: [
      'Understand the role and responsibilities of a Business Analyst',
      'Apply the BACCM™ Core Concept Model to real-world scenarios',
      'Identify and map stakeholders effectively',
      'Plan the Business Analysis approach for any project',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Introduction to Business Analysis',
        topics: [
          'What is Business Analysis?',
          'The BACCM™ Core Concept Model',
          'Role of a BA in an organization',
          'BA competencies and career paths',
          'Industry standards and best practices',
        ],
        exercises: [
          'Write a 1-page summary of the BA role in your own words',
          'Identify 5 stakeholders in a sample project scenario',
          'Create a BACCM™ model for a business problem',
        ],
      },
      {
        week: 2,
        title: 'Stakeholder Identification & BA Planning',
        topics: [
          'Stakeholder identification techniques',
          'Stakeholder mapping and analysis',
          'RACI matrix creation',
          'Planning the BA approach',
          'Governance and BA metrics',
        ],
        exercises: [
          'Build a stakeholder map for a case study',
          'Create a RACI matrix for a sample project',
          'Draft a BA approach plan',
        ],
      },
    ],
    outcomes: [
      'Confidently define the BA role and responsibilities',
      'Apply BACCM™ to analyze business situations',
      'Identify and manage stakeholders using RACI',
      'Create a structured BA approach plan',
    ],
  },
  'elicitation': {
    title: 'Elicitation & Collaboration',
    type: 'free',
    duration: '2 Weeks',
    overview: 'Master the art of gathering information directly from stakeholders through interviews, workshops, focus groups, and survey techniques.',
    objectives: [
      'Plan and conduct effective elicitation sessions',
      'Choose the right elicitation technique for each scenario',
      'Facilitate collaborative workshops',
      'Document and validate elicitation results',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Elicitation Techniques',
        topics: [
          'Interview techniques: structured, semi-structured, unstructured',
          'Workshop facilitation methods',
          'Focus group planning and moderation',
          'Survey design and analysis',
          'Document analysis and observation',
        ],
        exercises: [
          'Prepare an interview question set for a stakeholder',
          'Design a workshop agenda for requirements gathering',
          'Create a survey with 10 targeted questions',
        ],
      },
      {
        week: 2,
        title: 'Collaboration & Validation',
        topics: [
          'Collaborative games and brainstorming',
          'Prototyping for elicitation',
          'Validating elicited information',
          'Managing stakeholder conflicts',
          'Elicitation activity planning',
        ],
        exercises: [
          'Conduct a mock elicitation session',
          'Document findings in an elicitation activity plan',
          'Facilitate a requirements prioritization exercise',
        ],
      },
    ],
    outcomes: [
      'Plan and execute elicitation sessions independently',
      'Facilitate workshops that produce actionable results',
      'Validate stakeholder input effectively',
      'Document elicitation outcomes professionally',
    ],
  },
  'requirements-mgmt': {
    title: 'Requirements Life Cycle Management',
    type: 'paid',
    duration: '2 Weeks',
    overview: 'Learn to manage and trace requirements from inception to completion using traceability matrices, prioritization frameworks, and change management processes.',
    objectives: [
      'Establish requirements traceability from source to solution',
      'Apply MoSCoW and other prioritization frameworks',
      'Manage requirements changes through formal processes',
      'Ensure requirements approval and sign-off',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Traceability & Prioritization',
        topics: [
          'Requirements traceability matrix',
          'MoSCoW prioritization framework',
          'Kano model for prioritization',
          'Cost-benefit analysis for requirements',
          'Requirements dependencies',
        ],
        exercises: [
          'Build a traceability matrix for a sample project',
          'Apply MoSCoW to prioritize 20 requirements',
          'Analyze requirements dependencies',
        ],
      },
      {
        week: 2,
        title: 'Change Management & Approval',
        topics: [
          'Change control process',
          'Requirements baseline management',
          'Impact analysis techniques',
          'Requirements approval workflow',
          'Tools: Jira for requirements management',
        ],
        exercises: [
          'Process a change request through full workflow',
          'Perform impact analysis for a proposed change',
          'Set up a requirements baseline document',
        ],
      },
    ],
    outcomes: [
      'Manage requirements through their full life cycle',
      'Prioritize requirements using industry frameworks',
      'Handle changes with formal impact analysis',
      'Use tools to track and manage requirements',
    ],
  },
  'strategy-analysis': {
    title: 'Strategy Analysis',
    type: 'paid',
    duration: '2 Weeks',
    overview: 'Define business needs, analyze current vs future states, and identify strategies for organizational change using SWOT, root cause analysis, and business case development.',
    objectives: [
      'Analyze current business state and define future vision',
      'Apply SWOT and root cause analysis techniques',
      'Develop compelling business cases',
      'Identify and assess strategic risks',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Current & Future State Analysis',
        topics: [
          'Current state assessment techniques',
          'Future state definition and visioning',
          'Gap analysis methodology',
          'SWOT analysis',
          'PESTLE analysis',
        ],
        exercises: [
          'Conduct a SWOT analysis for a case study company',
          'Create a current vs future state diagram',
          'Perform a PESTLE analysis',
        ],
      },
      {
        week: 2,
        title: 'Business Case & Risk Analysis',
        topics: [
          'Business case development',
          'Cost-benefit analysis',
          'Risk identification and assessment',
          'Root cause analysis (5 Whys, Fishbone)',
          'Strategy recommendation and presentation',
        ],
        exercises: [
          'Write a business case for a new initiative',
          'Perform root cause analysis using 5 Whys',
          'Create a risk register for the strategy',
        ],
      },
    ],
    outcomes: [
      'Assess organizational current state comprehensively',
      'Develop strategic recommendations backed by analysis',
      'Build compelling business cases for change',
      'Identify and mitigate strategic risks',
    ],
  },
  'requirements-design': {
    title: 'Requirements Analysis & Design Definition',
    type: 'paid',
    duration: '2 Weeks',
    overview: 'Structure requirements and design solutions using BPMN process modeling, data modeling, use cases, and wireframing techniques.',
    objectives: [
      'Create BPMN process models for business workflows',
      'Design data models using ERDs',
      'Write effective use cases and user stories',
      'Translate requirements into solution designs',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Process & Data Modeling',
        topics: [
          'BPMN process modeling fundamentals',
          'Creating process flow diagrams',
          'Data modeling with ERDs',
          'Entity identification and relationships',
          'Data dictionaries',
        ],
        exercises: [
          'Model a business process using BPMN',
          'Design an ERD for a sample system',
          'Create a data dictionary',
        ],
      },
      {
        week: 2,
        title: 'Use Cases, User Stories & Wireframes',
        topics: [
          'Use case writing (actors, scenarios, extensions)',
          'User story creation (INVEST framework)',
          'Acceptance criteria definition',
          'Wireframing and prototyping',
          'Non-functional requirements specification',
        ],
        exercises: [
          'Write 5 use cases with full scenarios',
          'Create user stories with acceptance criteria',
          'Build a wireframe for a key screen',
        ],
      },
    ],
    outcomes: [
      'Model business processes using BPMN notation',
      'Design data models for information systems',
      'Write clear use cases and user stories',
      'Create wireframes to communicate design intent',
    ],
  },
  'solution-evaluation': {
    title: 'Solution Evaluation',
    type: 'paid',
    duration: '2 Weeks',
    overview: 'Assess the value delivered by implemented solutions using performance metrics, solution assessment techniques, and enterprise limitation analysis.',
    objectives: [
      'Define and measure solution performance metrics',
      'Conduct solution assessments and evaluations',
      'Identify enterprise limitations and constraints',
      'Make data-driven recommendations for improvement',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Performance Metrics & Assessment',
        topics: [
          'Solution performance metrics (KPIs)',
          'Measuring solution value and ROI',
          'Solution assessment techniques',
          'Benchmarking and baselines',
          'Qualitative vs quantitative assessment',
        ],
        exercises: [
          'Define 10 KPIs for a sample solution',
          'Calculate ROI for an implemented solution',
          'Conduct a solution assessment using benchmarks',
        ],
      },
      {
        week: 2,
        title: 'Limitations & Recommendations',
        topics: [
          'Enterprise limitation analysis',
          'Technology constraints assessment',
          'Organizational readiness evaluation',
          'Recommendation frameworks',
          'Performance dashboards',
        ],
        exercises: [
          'Identify enterprise limitations for a case study',
          'Build a recommendation report',
          'Design a performance dashboard mockup',
        ],
      },
    ],
    outcomes: [
      'Evaluate solution performance against defined metrics',
      'Identify and document enterprise limitations',
      'Make evidence-based improvement recommendations',
      'Create performance dashboards for ongoing monitoring',
    ],
  },
  'agile-ba': {
    title: 'Agile Business Analysis',
    type: 'paid',
    duration: '2 Weeks',
    overview: 'Understand agile methodologies including Scrum and Kanban, and learn the Business Analyst role in agile environments.',
    objectives: [
      'Understand agile principles and the Agile Manifesto',
      'Apply Scrum and Kanban frameworks',
      'Define the BA role in agile teams',
      'Write and manage agile requirements',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Agile Fundamentals & Scrum',
        topics: [
          'Agile Manifesto and principles',
          'Scrum framework: roles, events, artifacts',
          'Product backlog management',
          'Sprint planning and execution',
          'User stories in agile',
        ],
        exercises: [
          'Write a product backlog with 15 user stories',
          'Participate in a simulated sprint planning',
          'Create a definition of done for a sprint',
        ],
      },
      {
        week: 2,
        title: 'Kanban & BA in Agile',
        topics: [
          'Kanban principles and practices',
          'Work-in-progress limits and flow',
          'BA role in agile teams',
          'Agile modeling techniques',
          'Agile requirements documentation',
        ],
        exercises: [
          'Set up a Kanban board for a project',
          'Map BA activities to Scrum events',
          'Write agile requirement specifications',
        ],
      },
    ],
    outcomes: [
      'Work effectively in Scrum and Kanban environments',
      'Manage product backlogs and user stories',
      'Collaborate with agile teams as a BA',
      'Adapt BA techniques for agile delivery',
    ],
  },
  'capstone': {
    title: 'Capstone Project & Certification Prep',
    type: 'paid',
    duration: '2 Weeks',
    overview: 'Apply all learned skills to a real-world capstone project, prepare for certification exams, and receive career guidance for job placement.',
    objectives: [
      'Complete a comprehensive capstone BA project',
      'Prepare for industry certification exams',
      'Build a professional BA portfolio',
      'Develop career strategy and job search skills',
    ],
    weeklyBreakdown: [
      {
        week: 1,
        title: 'Capstone Project',
        topics: [
          'Project scope and requirements',
          'Full BA work through the project',
          'Stakeholder management in practice',
          'Requirements documentation',
          'Solution design and recommendations',
        ],
        exercises: [
          'Complete a full capstone BA project',
          'Produce all BA deliverables for the project',
          'Present findings to peers for feedback',
        ],
      },
      {
        week: 2,
        title: 'Certification & Career Prep',
        topics: [
          'Certification exam overview and structure',
          'Mock exams and practice questions',
          'Resume writing for BA roles',
          'Interview preparation techniques',
          'Career path planning',
        ],
        exercises: [
          'Take a full mock certification exam',
          'Polish your BA resume',
          'Practice behavioral interview questions',
          'Create a 90-day career action plan',
        ],
      },
    ],
    outcomes: [
      'Complete a real-world BA project end-to-end',
      'Demonstrate readiness for certification exams',
      'Build a professional BA portfolio',
      'Launch or advance your BA career',
    ],
  },
}

export default function ModuleDetailPage() {
  const params = useParams()
  const id = params.id as string
  const mod = moduleDetails[id]

  if (!mod) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
        <h1 className="font-display text-3xl font-bold mb-4">Module Not Found</h1>
        <p className="text-muted mb-8">The module you are looking for does not exist.</p>
        <Link href="/courses/modules" className="btn-gold px-8 py-3">Back to Modules</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/courses/modules" className="text-sm text-muted hover:gold transition-colors inline-flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            Back to Modules
          </Link>
        </div>

        {/* Progress Bar & Study Time Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="flex-1 w-full sm:w-auto">
            <div className="flex justify-between text-xs font-medium mb-1">
              <span style={{ color: 'var(--text-core)' }}>Module Progress</span>
              <span style={{ color: 'var(--brand-gold)' }}>0%</span>
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
              <div className="h-full rounded-full" style={{ width: '0%', backgroundColor: 'var(--brand-gold)' }} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
              <Clock className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
              <span className="font-medium" style={{ color: 'var(--brand-gold)' }}>Study Time: ~{mod.duration}</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${mod.type === 'free' ? 'bg-[rgba(223,186,107,0.15)] text-[#D4AF37]' : 'bg-[rgba(223,186,107,0.15)] text-[#D4AF37]'}`}>
              {mod.type === 'free' ? 'Free Access' : 'Premium Module'}
            </span>
            <span className="text-sm text-muted">{mod.duration}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-[color:var(--text-core)]">
            {mod.title}
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            {mod.overview}
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">
            <span className="gold">Learning</span> Objectives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mod.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full gold-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <span className="text-[1.0625rem] font-medium text-[color:var(--text-core)]">{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Topics */}
        <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">
            <span className="gold">Key</span> Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Target, label: 'Core Concepts' },
              { icon: BarChart3, label: 'Analysis Techniques' },
              { icon: BookOpen, label: 'Industry Standards' },
              { icon: Award, label: 'Certification Prep' },
            ].map((topic, i) => (
              <div key={i} className="p-4 rounded-xl border text-center" style={{ borderColor: 'var(--border)' }}>
                <topic.icon className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--brand-gold)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{topic.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Breakdown */}
        <h2 className="font-display text-3xl font-bold mb-8 text-[color:var(--text-core)]">
          Weekly <span className="gold">Breakdown</span>
        </h2>
        <div className="space-y-8 mb-12">
          {mod.weeklyBreakdown.map((week) => (
            <div key={week.week} className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center font-bold text-[color:var(--text-core)]">
                  {week.week}
                </div>
                <h3 className="font-display text-xl font-bold text-[color:var(--text-core)]">
                  Week {week.week}: {week.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    Topics Covered
                  </h4>
                  <ul className="space-y-3">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                        <span className="text-[0.9375rem] text-secondary">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                    <Edit3 className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    Exercises
                  </h4>
                  <ul className="space-y-3">
                    {week.exercises.map((ex, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(223,186,107,0.12)' }}>
                          <Plus className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                        </div>
                        <span className="text-[0.9375rem] text-secondary">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="p-8 rounded-2xl border bg-[color:var(--bg-secondary)] border-[color:var(--border)] mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">
            What You Will <span className="gold">Achieve</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mod.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
                <div className="w-8 h-8 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <span className="text-[1.0625rem] font-medium text-[color:var(--text-core)]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
          <h2 className="font-display text-3xl font-bold mb-4 text-[color:var(--text-core)]">
            {mod.type === 'free' ? 'Start Learning for Free' : 'Enroll in This Module'}
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-secondary text-lg">
            {mod.type === 'free'
              ? 'Begin your Business Analysis journey today with free access to foundational content.'
              : 'Get full access to this premium module with detailed lessons, exercises, and expert guidance.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/enroll?module=${id}&type=${mod.type}`}
              className="btn-gold btn-blink px-10 py-4 text-lg inline-block"
            >
              {mod.type === 'free' ? 'Start Learning Now' : 'Enroll Now'}
            </Link>
            {mod.type === 'paid' && (
              <Link href="/enroll" className="btn-outline-gold px-10 py-4 text-lg inline-block">
                Get Full Program Access
              </Link>
            )}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 p-8 rounded-2xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">
            Next <span className="gold">Steps</span>
          </h2>
          <p className="mb-8 text-secondary text-sm max-w-2xl">
            Continue your learning journey with these related modules.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: 'ba-foundations', title: 'Business Analysis Foundations' },
              { id: 'elicitation', title: 'Elicitation & Collaboration' },
              { id: 'requirements-mgmt', title: 'Requirements Life Cycle Mgmt' },
            ].filter(r => r.id !== id).slice(0, 2).map((rel, i) => (
              <Link key={i} href={`/courses/modules/${rel.id}`}
                className="flex items-center justify-between p-4 rounded-xl border transition-all hover:shadow-md group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <span className="font-medium text-sm" style={{ color: 'var(--text-core)' }}>{rel.title}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--brand-gold)' }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
