'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { getUserData, getUserToken } from '@/lib/auth'
import { ChevronLeft, Check, Lightbulb } from 'lucide-react'

const moduleLessons: Record<string, { id: string; title: string; duration: string; video?: string; content: string }[]> = {
  'ba-foundations': [
    { id: 'ba-intro', title: 'What is Business Analysis?', duration: '15 min', video: '/VID-20260605-WA0123.mp4', content: 'Learn the fundamentals of Business Analysis, its role in organizations, and the value it delivers.' },
    { id: 'baccm', title: 'BACCM Core Concept Model', duration: '20 min', content: 'Understand the six core concepts: Change, Need, Solution, Stakeholder, Value, and Context.' },
    { id: 'stakeholder-id', title: 'Stakeholder Identification', duration: '18 min', content: 'Techniques for identifying stakeholders and understanding their influence and impact.' },
    { id: 'ba-planning', title: 'BA Approach Planning', duration: '22 min', content: 'How to plan the Business Analysis approach for any project or initiative.' },
    { id: 'governance', title: 'Governance & BA Metrics', duration: '15 min', content: 'Understanding governance structures and measuring BA effectiveness.' },
  ],
  'elicitation': [
    { id: 'interviews', title: 'Interview Techniques', duration: '20 min', video: '/VID-20260605-WA0128.mp4', content: 'Master structured, semi-structured, and unstructured interview techniques.' },
    { id: 'workshops', title: 'Workshop Facilitation', duration: '25 min', content: 'Plan and facilitate effective requirements gathering workshops.' },
    { id: 'focus-groups', title: 'Focus Groups & Surveys', duration: '18 min', content: 'Design and moderate focus groups and create effective surveys.' },
    { id: 'document-analysis', title: 'Document Analysis', duration: '15 min', content: 'Extract requirements from existing documentation and systems.' },
  ],
  'requirements-mgmt': [
    { id: 'traceability', title: 'Requirements Traceability', duration: '22 min', content: 'Build and maintain traceability matrices from source to solution.' },
    { id: 'prioritization', title: 'Prioritization Frameworks', duration: '20 min', video: '/VID-20260605-WA0151.mp4', content: 'Apply MoSCoW, Kano, and other prioritization techniques.' },
    { id: 'change-mgmt', title: 'Change Management Process', duration: '18 min', content: 'Manage requirements changes through formal control processes.' },
    { id: 'approval', title: 'Requirements Approval', duration: '15 min', content: 'Navigate the requirements approval workflow and baseline management.' },
  ],
  'strategy-analysis': [
    { id: 'current-state', title: 'Current State Analysis', duration: '22 min', content: 'Assess the current business state using proven techniques.' },
    { id: 'future-state', title: 'Future State Definition', duration: '20 min', content: 'Define and communicate the desired future state.' },
    { id: 'swot-pestle', title: 'SWOT & PESTLE Analysis', duration: '25 min', video: '/VID-20260606-WA0000.mp4', content: 'Conduct comprehensive SWOT and PESTLE analyses.' },
    { id: 'business-case', title: 'Business Case Development', duration: '30 min', content: 'Build compelling business cases with cost-benefit analysis.' },
  ],
  'requirements-design': [
    { id: 'bpmn', title: 'BPMN Process Modeling', duration: '28 min', video: '/activities/Requirements-Analysis-Design-Definition.mp4', content: 'Model business processes using BPMN notation.' },
    { id: 'data-modeling', title: 'Data Modeling with ERDs', duration: '25 min', content: 'Design entity-relationship diagrams for information systems.' },
    { id: 'use-cases', title: 'Use Cases & User Stories', duration: '22 min', content: 'Write effective use cases and user stories with acceptance criteria.' },
    { id: 'wireframing', title: 'Wireframing & Prototyping', duration: '20 min', content: 'Create wireframes and prototypes to communicate design intent.' },
  ],
  'solution-evaluation': [
    { id: 'kpis', title: 'Performance Metrics & KPIs', duration: '20 min', video: '/activities/Solution-Evaluation.mp4', content: 'Define and measure solution performance using KPIs.' },
    { id: 'roi-analysis', title: 'ROI & Value Assessment', duration: '22 min', content: 'Calculate return on investment and assess solution value.' },
    { id: 'limitations', title: 'Enterprise Limitations', duration: '18 min', content: 'Identify and document enterprise limitations and constraints.' },
    { id: 'dashboards', title: 'Performance Dashboards', duration: '15 min', content: 'Design dashboards for ongoing solution monitoring.' },
  ],
  'agile-ba': [
    { id: 'agile-intro', title: 'Agile Fundamentals', duration: '20 min', content: 'Understand agile principles and the Agile Manifesto.' },
    { id: 'scrum', title: 'Scrum for Business Analysts', duration: '25 min', content: 'Apply Scrum framework: roles, events, and artifacts.' },
    { id: 'kanban', title: 'Kanban for BA', duration: '20 min', content: 'Use Kanban principles for workflow management.' },
    { id: 'ba-agile', title: 'BA Role in Agile Teams', duration: '18 min', content: 'Define and execute the BA role in agile environments.' },
  ],
  'capstone': [
    { id: 'project-scope', title: 'Capstone Project Overview', duration: '15 min', content: 'Understand the capstone project scope and deliverables.' },
    { id: 'ba-deliverables', title: 'Producing BA Deliverables', duration: '30 min', content: 'Create all BA deliverables for a real-world project.' },
    { id: 'mock-exam', title: 'Mock Certification Exam', duration: '45 min', content: 'Test your knowledge with a full mock certification exam.' },
    { id: 'career-prep', title: 'Career Preparation', duration: '25 min', content: 'Resume writing, interview prep, and career action planning.' },
  ],
}

const MODULE_NAMES: Record<string, string> = {
  'ba-foundations': 'Business Analysis Foundations',
  'elicitation': 'Elicitation & Collaboration',
  'requirements-mgmt': 'Requirements Life Cycle Management',
  'strategy-analysis': 'Strategy Analysis',
  'requirements-design': 'Requirements Analysis & Design Definition',
  'solution-evaluation': 'Solution Evaluation',
  'agile-ba': 'Agile Business Analysis',
  'capstone': 'Capstone Project & Certification Prep',
}

export default function LessonPlayerPage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.moduleId as string
  const lessons = moduleLessons[moduleId] || []
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const u = getUserData()
    if (!u) { router.push('/dashboard/login'); return }

    // Load saved progress
    const token = getUserToken()
    if (token) {
      fetch(`/api/progress/${moduleId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(r => r.json()).then(data => {
        if (Array.isArray(data)) {
          setCompletedLessons(new Set(data.filter((l: { completed: boolean }) => l.completed).map((l: { lesson_id: string }) => l.lesson_id)))
        }
      }).catch(() => {})
    }
  }, [moduleId, router])

  const markComplete = async (lessonId: string) => {
    setSaving(true)
    const newCompleted = new Set(completedLessons)
    newCompleted.add(lessonId)
    setCompletedLessons(newCompleted)

    const token = getUserToken()
    if (token) {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ module_id: moduleId, lesson_id: lessonId, completed: true, progress: 100 }),
      })
    }
    setSaving(false)
  }

  if (!moduleId || (!moduleLessons[moduleId] && lessons.length === 0)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
        <h1 className="font-display text-3xl font-bold mb-4">Module Not Found</h1>
        <p className="text-muted mb-8">The learning module you are looking for does not exist.</p>
        <Link href="/courses/modules" className="btn-gold px-8 py-3">Browse Modules</Link>
      </div>
    )
  }

  const lesson = lessons[currentLesson]
  const progressPercent = lessons.length > 0 ? Math.round((completedLessons.size / lessons.length) * 100) : 0

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)]">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-80 xl:w-96 bg-[color:var(--bg-secondary)] border-r border-[color:var(--border)] lg:min-h-screen overflow-y-auto">
          <div className="p-6">
            <Link href="/dashboard" className="text-xs text-muted hover:gold transition-colors inline-flex items-center gap-1 mb-6">
              <ChevronLeft className="w-5 h-5" />
              Back to Dashboard
            </Link>
            <h2 className="font-display text-lg font-bold mb-1 text-[color:var(--text-core)]">{MODULE_NAMES[moduleId] || moduleId}</h2>
            <p className="text-xs text-muted mb-4">{lessons.length} lessons</p>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-muted mb-2">
                <span>Progress</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[color:var(--border)]">
                <div className="h-2 rounded-full gold-bg transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            <nav className="space-y-1">
              {lessons.map((l, i) => {
                const isComplete = completedLessons.has(l.id)
                const isActive = i === currentLesson
                return (
                  <button
                    key={l.id}
                    onClick={() => setCurrentLesson(i)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-all flex items-start gap-3 ${
                      isActive
                        ? 'bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]'
                        : 'hover:bg-[color:var(--bg-card)] border border-transparent'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isComplete ? 'gold-bg' : isActive ? 'border-2 border-[#D4AF37]' : 'border-2 border-[color:var(--border)]'
                    }`}>
                      {isComplete ? (
                        <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      ) : (
                        <span className={`text-[10px] font-bold ${isActive ? 'text-[#D4AF37]' : 'text-muted'}`}>{i + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium truncate ${isActive ? 'text-[color:var(--text-core)]' : 'text-muted'}`}>{l.title}</div>
                      <div className="text-xs text-muted mt-0.5">{l.duration}</div>
                    </div>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            {/* Video Player */}
            {lesson.video && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-black">
                <video
                  src={lesson.video}
                  controls
                  className="w-full h-full object-contain"
                  poster=""
                />
              </div>
            )}

            {!lesson.video && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-[rgba(223,186,107,0.1)] to-[rgba(223,186,107,0.05)] flex items-center justify-center border border-[color:var(--border)]">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-12 h-12" style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <p className="text-muted text-sm">Video lesson available in full program</p>
                </div>
              </div>
            )}

            {/* Lesson Content */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider gold-bg text-[color:var(--text-core)]">
                  Lesson {currentLesson + 1} of {lessons.length}
                </span>
                <span className="text-sm text-muted">{lesson.duration}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-[color:var(--text-core)]">{lesson.title}</h1>
              <p className="text-lg text-secondary leading-relaxed">{lesson.content}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <div className="flex gap-3">
                {currentLesson > 0 && (
                  <button onClick={() => setCurrentLesson(currentLesson - 1)} className="btn-outline-gold px-6 py-3 text-sm font-bold">
                    Previous Lesson
                  </button>
                )}
                {currentLesson < lessons.length - 1 && (
                  <button onClick={() => { markComplete(lesson.id); setCurrentLesson(currentLesson + 1) }} className="btn-gold px-6 py-3 text-sm font-bold" disabled={saving}>
                    {saving ? 'Saving...' : 'Complete & Continue'}
                  </button>
                )}
              </div>
              <button
                onClick={() => markComplete(lesson.id)}
                className={`px-6 py-3 rounded-lg text-sm font-bold border transition-all ${
                  completedLessons.has(lesson.id)
                    ? 'border-green-500 text-green-500 bg-green-50 dark:bg-green-900'
                    : 'border-[color:var(--border)] text-muted hover:border-green-500'
                }`}
                disabled={saving}
              >
                {completedLessons.has(lesson.id) ? (
                  <span className="flex items-center gap-2"><Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} /> Completed</span>
                ) : 'Mark Complete'}
              </button>
            </div>

            {/* Completion Message */}
            {progressPercent === 100 && (
              <div className="mt-8 p-8 rounded-2xl border bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700 text-center">
                <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <h2 className="font-display text-2xl font-bold mb-2 text-[color:var(--text-core)]">Module Complete!</h2>
                <p className="text-sm mb-6">Congratulations on completing all lessons in this module.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href={`/courses/modules/${moduleId}`} className="btn-outline-gold px-6 py-3 text-sm font-bold">Review Module Details</Link>
                  <Link href="/dashboard/certificate" className="btn-gold px-6 py-3 text-sm font-bold">View Certificate</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
