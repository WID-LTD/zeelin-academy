'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, XCircle, Award, BookOpen, HelpCircle, ArrowRight, ShieldCheck, FileText, Check } from 'lucide-react'

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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in duration-700">
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[color:var(--text-core)]">
            BCS Business Analysis <span className="gold">Exam Prep</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
            Excel in your BCS exam modules and oral examination with our focused question banks, real-world case studies, and professional UK-based mentorship.
          </p>
        </div>

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
                      : "Good effort! Review the explanations to strengthen your understanding before taking the BCS exams."}
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

          {/* BCS Diploma Roadmap - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] shadow-md">
              <h3 className="font-display text-xl font-bold mb-4 text-[color:var(--text-core)]">
                The BCS Diploma <span className="gold">Path</span>
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                To achieve the prestigious **BCS International Diploma in Business Analysis**, you must pass four module certifications followed by a final 50-minute Oral Examination.
              </p>

              <div className="space-y-4">
                {[
                  { title: '1. Core Module (1 required)', desc: 'Choose between Business Analysis Practice or Commercial Awareness.' },
                  { title: '2. Core Module (1 required)', desc: 'Choose between Requirements Engineering or Systems Development.' },
                  { title: '3. Specialist Module (1 required)', desc: 'Choose from Modelling Business Processes, Benefits Management, or Data Management.' },
                  { title: '4. Knowledge-Based (1 required)', desc: 'Select from Commercial Awareness, Organisational Behaviour, or Foundation in BA.' },
                  { title: '5. Oral Examination', desc: 'A 50-minute interview with two BCS examiners testing your application of all modules.' }
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

            <div className="p-6 rounded-2xl border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.02)]">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <h4 className="text-sm font-bold text-[color:var(--text-core)]">Why Prep with Zeelin Academy?</h4>
              </div>
              <ul className="text-xs text-secondary space-y-2 pl-8 list-disc">
                <li>Over 95% pass rate on first attempt of BCS exams.</li>
                <li>Realistic oral examination simulation and expert feedback.</li>
                <li>Course materials designed directly under Dr. Franklin Kalu (MBCS).</li>
                <li>Exclusive syllabus-aligned mock question banks.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Section */}
        <div className="border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Core BCS Modules We <span className="gold">Prepare You For</span>
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
                desc: 'Specialized 1-on-1 coaching simulating the official BCS board. Focus on structure, clarity, confidence, and terminology.'
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

        {/* Oral Exam Prep CTA */}
        <div className="mt-20 p-10 rounded-2xl border text-center relative overflow-hidden bg-[rgba(212,175,55,0.03)] border-[rgba(212,175,55,0.2)]">
          <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none opacity-50" />
          <h2 className="font-display text-3xl font-bold mb-4 text-[color:var(--text-core)]">
            Ready to pass your BCS Oral Board?
          </h2>
          <p className="text-secondary max-w-xl mx-auto mb-8">
            Get access to realistic mock panels, structured answers, and expert tips from Dr. Franklin Kalu. Join today and obtain your BCS Diploma.
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
