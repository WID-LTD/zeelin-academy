'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, XCircle, Award, BookOpen, HelpCircle, ArrowRight, ShieldCheck, FileText, Clock, TrendingUp, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

interface Question {
  id: number
  category: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    category: 'Requirements Engineering',
    question: 'Which of the following describes a functional requirement?',
    options: [
      'The system must load pages within 2 seconds.',
      'The system must encrypt customer credit card data at rest.',
      'The system must allow administrators to generate monthly revenue reports.',
      'The system must be available 99.9% of the time.'
    ],
    answer: 2,
    explanation: 'Functional requirements define what the system should do or services it must provide (e.g., generating reports). The other options represent non-functional requirements (performance, security, and availability).'
  },
  {
    id: 2,
    category: 'Business Analysis Practice',
    question: 'In CATWOE analysis, which letter represents the group of individuals who are affected by or benefit from the transformation?',
    options: [
      'A - Actors',
      'C - Customers',
      'T - Transformation',
      'W - Weltanschauung'
    ],
    answer: 1,
    explanation: "In CATWOE analysis, 'C' stands for Customers. They are the beneficiaries, users, or victims of the system who are affected by the transformation process."
  },
  {
    id: 3,
    category: 'Modelling Business Processes',
    question: 'Which BPMN element is used to represent an external participant or business entity in a process model?',
    options: [
      'Lane',
      'Pool',
      'Gateway',
      'Data Object'
    ],
    answer: 1,
    explanation: 'In BPMN, a Pool represents a participant or external business entity. Lanes are subdivisions within a pool used to represent specific roles, departments, or internal systems.'
  },
  {
    id: 4,
    category: 'Commercial Awareness',
    question: 'Which financial technique is used to calculate the time it takes for an investment to generate enough income to cover its initial cost?',
    options: [
      'Net Present Value (NPV)',
      'Internal Rate of Return (IRR)',
      'Payback Period',
      'Discounted Cash Flow'
    ],
    answer: 2,
    explanation: 'The Payback Period measures the length of time required to recover the initial cost of an investment. NPV and IRR take the time value of money into account for broader investment appraisal.'
  },
  {
    id: 5,
    category: 'Stakeholder Management',
    question: 'In a stakeholder power/interest grid, which stakeholder group requires the most active management?',
    options: [
      'High power, low interest',
      'High power, high interest',
      'Low power, high interest',
      'Low power, low interest'
    ],
    answer: 1,
    explanation: 'Stakeholders with high power and high interest are the "Key Players" and require the most active engagement and management. They have both the authority to influence the project and a strong interest in its outcomes.'
  },
  {
    id: 6,
    category: 'Business Analysis Practice',
    question: 'What is the primary purpose of a SWOT analysis in strategic business analysis?',
    options: [
      'To determine project budget and timeline',
      'To assess internal and external factors affecting an organization',
      'To define technical system requirements',
      'To allocate resources across departments'
    ],
    answer: 1,
    explanation: 'SWOT analysis evaluates Strengths (internal), Weaknesses (internal), Opportunities (external), and Threats (external). It provides a comprehensive view of an organization\'s strategic position to inform decision-making.'
  },
  {
    id: 7,
    category: 'Requirements Engineering',
    question: 'Which requirements elicitation technique is most appropriate when stakeholders are geographically dispersed?',
    options: [
      'Focus groups',
      'Questionnaires and surveys',
      'Observation',
      'Workshops'
    ],
    answer: 1,
    explanation: 'Questionnaires and surveys are effective for gathering requirements from a large number of geographically dispersed stakeholders. They provide structured data collection at scale and can be distributed electronically.'
  }
]

export default function BcsExamPrepPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)

  const handleAnswerSubmit = (index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)
    if (index === quizQuestions[currentQuestion].answer) {
      setScore(s => s + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setIsAnswered(false)
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(q => q + 1)
    } else {
      setQuizFinished(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setQuizFinished(false)
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[color:var(--bg-primary)]">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in duration-700">
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[color:var(--text-core)]">
            Business Analysis <span className="gold">Exam Prep</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
             Excel in your exam modules and oral examination with our focused question banks, real-world case studies, and professional UK-based mentorship.
          </p>
        </div>

        {/* Success Metrics */}
        <AnimatedSection direction="up" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Pass Rate', value: '95%+', icon: <Award className="w-5 h-5" /> },
            { label: 'Students Helped', value: '2,400+', icon: <Users className="w-5 h-5" /> },
            { label: 'Practice Questions', value: '500+', icon: <BookOpen className="w-5 h-5" /> },
            { label: 'Avg. Score Improvement', value: '42%', icon: <TrendingUp className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center card-hover">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[rgba(223,186,107,0.08)]">
                <span className="text-[color:var(--brand-gold)]">{stat.icon}</span>
              </div>
              <p className="text-2xl font-bold text-[color:var(--text-core)]">{stat.value}</p>
              <p className="text-sm text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        {/* Exam Overview */}
        <AnimatedSection direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1 p-8 rounded-2xl border bg-[rgba(212,175,55,0.03)] border-[rgba(212,175,55,0.2)]">
            <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">
              Diploma <span className="gold">Overview</span>
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[color:var(--border)]">
                <span className="text-sm text-secondary">Number of Modules</span>
                <span className="text-sm font-bold text-[color:var(--text-core)]">4 written + 1 oral</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[color:var(--border)]">
                <span className="text-sm text-secondary">Exam Duration</span>
                <span className="text-sm font-bold text-[color:var(--text-core)]">50 mins per module</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[color:var(--border)]">
                <span className="text-sm text-secondary">Pass Mark</span>
                <span className="text-sm font-bold text-[color:var(--text-core)]">50% (50/100)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[color:var(--border)]">
                <span className="text-sm text-secondary">Oral Exam Length</span>
                <span className="text-sm font-bold text-[color:var(--text-core)]">50 minutes</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-secondary">Questions per Paper</span>
                <span className="text-sm font-bold text-[color:var(--text-core)]">8-10 questions</span>
              </div>
            </div>
          </div>

          {/* Study Plan */}
          <div className="md:col-span-2 p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
            <h2 className="font-display text-2xl font-bold mb-6 text-[color:var(--text-core)]">
              Sample <span className="gold">Study Plan</span>
            </h2>
            <div className="space-y-3">
              {[
                { day: 'Monday', focus: 'Business Analysis Practice - CATWOE & SWOT', hours: '2 hrs' },
                { day: 'Tuesday', focus: 'Requirements Engineering - Elicitation Techniques', hours: '2 hrs' },
                { day: 'Wednesday', focus: 'Modelling Business Processes - BPMN Practice', hours: '2 hrs' },
                { day: 'Thursday', focus: 'Commercial Awareness - Financial Concepts', hours: '1.5 hrs' },
                { day: 'Friday', focus: 'Mock Questions & Review of the Week', hours: '2 hrs' },
                { day: 'Saturday', focus: 'Oral Exam Practice & Case Study Review', hours: '1.5 hrs' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[color:var(--bg-secondary)] border border-[color:var(--border)]">
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-xs font-bold uppercase text-[color:var(--brand-gold)]">{item.day}</span>
                    <span className="text-sm text-[color:var(--text-core)]">{item.focus}</span>
                  </div>
                  <span className="text-xs font-semibold text-muted flex items-center gap-1"><Clock className="w-3 h-3" />{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Quiz & Syllabus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Interactive Mock Quiz - 7 columns */}
          <div className="lg:col-span-7 p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(212,175,55,0.02)] rounded-bl-full pointer-events-none"></div>
            
            {!quizFinished ? (
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[color:var(--border)]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">
                      {quizQuestions[currentQuestion].category}
                    </span>
                    <h2 className="text-lg font-bold text-[color:var(--text-core)] mt-1">
                      Mini Mock Exam Question
                    </h2>
                  </div>
                  <span className="text-sm font-semibold text-muted">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                </div>

                <p className="text-lg font-medium text-[color:var(--text-core)] mb-6">
                  {quizQuestions[currentQuestion].question}
                </p>

                <div className="space-y-3 mb-6">
                  {quizQuestions[currentQuestion].options.map((opt, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrectAnswer = quizQuestions[currentQuestion].answer === index
                    
                    let cardStyle = "border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50"
                    let badgeIcon = null

                    if (isAnswered) {
                      if (isCorrectAnswer) {
                        cardStyle = "border-green-500 bg-green-50/10"
                        badgeIcon = <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      } else if (isSelected) {
                        cardStyle = "border-red-500 bg-red-50/10"
                        badgeIcon = <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      } else {
                        cardStyle = "border-[color:var(--border)] opacity-60 pointer-events-none"
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSubmit(index)}
                        disabled={isAnswered}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${cardStyle}`}
                      >
                        <span className="text-sm font-medium text-[color:var(--text-core)]">{opt}</span>
                        {badgeIcon}
                      </button>
                    )
                  })}
                </div>

                {isAnswered && (
                  <div className="p-4 rounded-xl bg-[color:var(--bg-secondary)] border border-[color:var(--border)] mb-6 animate-in fade-in duration-300" aria-live="polite">
                    <h4 className="text-sm font-bold text-[color:var(--text-core)] mb-1">Explanation:</h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {isAnswered && (
                  <button
                    onClick={handleNextQuestion}
                    className="btn-gold w-full py-3 text-sm flex items-center justify-center gap-2"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Award className="w-16 h-16 text-[color:var(--brand-gold)] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-2">Quiz Completed!</h2>
                <p className="text-lg text-secondary mb-6">
                  You scored <span className="font-bold gold">{score}</span> out of <span className="font-bold">{quizQuestions.length}</span>
                </p>
                
                <div className="max-w-md mx-auto p-4 rounded-xl border bg-[color:var(--bg-secondary)] border-[color:var(--border)] mb-8">
                  <p className="text-sm text-muted">
                    {score === quizQuestions.length 
                      ? "Excellent! You have a strong grasp of the core Business Analysis concepts." 
                      : "Good effort! Review the explanations to strengthen your understanding before taking the certification exams."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={resetQuiz} className="btn-outline-gold px-6 py-2.5 text-sm font-semibold">
                    Try Again
                  </button>
                  <Link href="/enroll" className="btn-gold px-6 py-2.5 text-sm font-semibold">
                    Enroll for Full Preparation
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Diploma Roadmap - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] shadow-md">
              <h3 className="font-display text-xl font-bold mb-4 text-[color:var(--text-core)]">
                The Diploma <span className="gold">Path</span>
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                To achieve the prestigious **Professional Diploma in Business Analysis**, you must pass four module certifications followed by a final 50-minute Oral Examination.
              </p>

              <div className="space-y-4">
                {[
                  { title: '1. Core Module (1 required)', desc: 'Choose between Business Analysis Practice or Commercial Awareness.' },
                  { title: '2. Core Module (1 required)', desc: 'Choose between Requirements Engineering or Systems Development.' },
                  { title: '3. Specialist Module (1 required)', desc: 'Choose from Modelling Business Processes, Benefits Management, or Data Management.' },
                  { title: '4. Knowledge-Based (1 required)', desc: 'Select from Commercial Awareness, Organisational Behaviour, or Foundation in BA.' },
                  { title: '5. Oral Examination', desc: 'A 50-minute interview with two examiners testing your application of all modules.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full gold-bg flex items-center justify-center text-xs font-bold text-black flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[color:var(--text-core)]">{step.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[rgba(223,186,107,0.2)]" style={{ backgroundColor: 'rgba(223,186,107,0.02)' }}>
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                <h4 className="text-sm font-bold text-[color:var(--text-core)]">Why Prep with Zeelin Academy?</h4>
              </div>
              <ul className="text-xs text-secondary space-y-2 pl-8 list-disc">
                <li>Over 95% pass rate on first attempt of certification exams.</li>
                <li>Realistic oral examination simulation and expert feedback.</li>
                <li>Course materials designed directly under Dr. Franklin Kalu.</li>
                <li>Exclusive syllabus-aligned mock question banks.</li>
              </ul>
            </div>

            {/* Pass Guarantee */}
            <div className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[rgba(212,175,55,0.03)] rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-[color:var(--brand-gold)]" />
                <h4 className="font-bold text-[color:var(--text-core)]">Pass <span className="gold">Guarantee</span></h4>
              </div>
              <p className="text-xs text-secondary leading-relaxed mb-3">
                We are so confident in our prep program that if you do not pass your certification exam on the first attempt after completing our full course, we will provide free additional tutoring and support until you do.
              </p>
              <p className="text-xs text-muted italic">
                *Terms and conditions apply. Guarantee valid for students who complete 100% of course materials and attend all mentoring sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Section */}
        <div className="border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Core Modules We <span className="gold">Prepare You For</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Business Analysis Practice',
                icon: <BookOpen className="w-6 h-6 text-[color:var(--brand-gold)]" />,
                desc: 'Focuses on strategic analysis, CATWOE, SWOT, stakeholder analysis, and identifying business improvement options.'
              },
              {
                title: 'Requirements Engineering',
                icon: <FileText className="w-6 h-6 text-[color:var(--brand-gold)]" />,
                desc: 'Covers elicitation, requirements analysis, documentation, validation, and managing traceability throughout the project.'
              },
              {
                title: 'Modelling Business Processes',
                icon: <HelpCircle className="w-6 h-6 text-[color:var(--brand-gold)]" />,
                desc: 'Master business process hierarchies, process modelling with BPMN, identifying bottlenecks, and process improvement.'
              },
              {
                title: 'Oral Exam Preparation',
                icon: <Award className="w-6 h-6 text-[color:var(--brand-gold)]" />,
                desc: 'Specialized 1-on-1 coaching simulating the official exam board. Focus on structure, clarity, confidence, and terminology.'
              }
            ].map((mod, i) => (
              <div key={i} className="p-6 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/30 transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[rgba(223,186,107,0.08)]">
                  {mod.icon}
                </div>
                <h3 className="font-semibold text-lg text-[color:var(--text-core)] mb-2">{mod.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Reading */}
        <AnimatedSection direction="up" className="mt-20 border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Recommended <span className="gold">Reading</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Business Analysis 4th Ed.', author: 'Debra Paul & James Cadle',                 desc: 'A trusted textbook covering the entire BA syllabus.' },
              { title: 'BABOK v3 Guide', author: 'IIBA', desc: 'The global standard for business analysis best practices.' },
              { title: 'Requirements Engineering', author: 'Elizabeth Hull et al.', desc: 'A practical guide to requirements processes and management.' },
            ].map((book, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] card-hover">
                <BookOpen className="w-8 h-8 text-[color:var(--brand-gold)] mb-3" />
                <h3 className="font-bold text-[color:var(--text-core)] mb-1">{book.title}</h3>
                <p className="text-xs text-muted mb-3">{book.author}</p>
                <p className="text-sm text-secondary">{book.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection direction="up" className="mt-20 border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Exam <span className="gold">FAQ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How long does it take to prepare for the Diploma?",
                a: "Most students complete the full diploma preparation within 3-6 months, depending on study pace and prior experience."
              },
              {
                q: "What is the Oral Examination like?",
                a: "The oral exam is a 50-minute structured interview with two examiners. You present a case study and answer questions that connect all modules."
              },
              {
                q: "Do I need prior experience to enrol?",
                a: "While prior business analysis experience is helpful, our foundation pathway is designed for career changers and graduates with no BA background."
              },
              {
                q: "Are the practice exams updated for the latest syllabus?",
                a: "Yes, we regularly review and update our question banks to align with the current syllabus and examination standards."
              },
              {
                q: "Can I retake the quiz questions multiple times?",
                a: "Absolutely. You can retake the mock exams as many times as you like. Each attempt includes detailed explanations to reinforce your learning."
              },
              {
                q: "What support is available outside of class hours?",
                a: "Students have access to our online learning platform 24/7, a private community forum, and weekly group mentoring sessions with Dr. Kalu."
              }
            ].map((faq, i) => (
              <div key={i} className="flex gap-4">
                <HelpCircle className="w-5 h-5 flex-shrink-0 gold-text mt-1" />
                <div>
                  <h4 className="font-semibold text-base text-[color:var(--text-core)]">{faq.q}</h4>
                  <p className="text-sm text-secondary mt-1.5 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Oral Exam Prep CTA */}
        <div className="mt-20 p-10 rounded-2xl border text-center relative overflow-hidden bg-[rgba(212,175,55,0.03)] border-[rgba(212,175,55,0.2)]">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
          <h2 className="font-display text-3xl font-bold mb-4 text-[color:var(--text-core)]">
            Ready to pass your Oral Board?
          </h2>
          <p className="text-secondary max-w-xl mx-auto mb-8">
             Get access to realistic mock panels, structured answers, and expert tips from Dr. Franklin Kalu. Join today and obtain your Diploma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll" className="btn-gold px-8 py-3 text-sm font-semibold">
              Enroll in Exam Prep
            </Link>
            <Link href="/contact" className="btn-outline-gold bg-[color:var(--bg-primary)] px-8 py-3 text-sm font-semibold">
              Book a Strategy Call
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
