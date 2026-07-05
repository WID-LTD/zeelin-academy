'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, CheckCircle2, Phone, Compass, BarChart3, Users, Star, ArrowRight, CheckCircle, ClipboardList, Award, ShieldCheck, TrendingUp } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const examFocusBooks = [
  { src: '/books/foundation.png', title: 'Exam Focus: Foundation in Business Analysis' },
  { src: '/books/business_change.png', title: 'Exam Focus: Business Change' },
  { src: '/books/is_project_mgmt.png', title: 'Exam Focus: IS Project Management' },
  { src: '/books/org_behaviour.png', title: 'Exam Focus: Organisational Behaviour' },
  { src: '/books/ba_practice.png', title: 'Exam Focus: Business Analysis Practice' },
  { src: '/books/requirements_eng.png', title: 'Exam Focus: Requirements Engineering' },
  { src: '/books/modelling_processes.png', title: 'Exam Focus: Modelling Business Processes' },
  { src: '/books/systems_modelling.png', title: 'Exam Focus: Systems Modelling Techniques' },
  { src: '/books/systems_development.png', title: 'Exam Focus: Systems Development Essentials' },
  { src: '/books/data_management.png', title: 'Exam Focus: Data Management Essentials' },
  { src: '/books/benefits_mgmt.png', title: 'Exam Focus: Benefits Management and Business Acceptance' },
]

const q3Options = [
  { id: 'A', label: 'General Business Analyst' },
  { id: 'B', label: 'Business Change Analyst' },
  { id: 'C', label: 'Process Improvement Analyst' },
  { id: 'D', label: 'Systems Analyst' },
  { id: 'E', label: 'IT Business Analyst' },
  { id: 'F', label: 'Data Business Analyst' },
  { id: 'G', label: 'Benefits/Change Adoption Analyst' },
  { id: 'H', label: 'I am not sure yet' },
]

const q6Options = [
  { id: 'A', label: 'Low technical — business-focused' },
  { id: 'B', label: 'Medium technical — some IT/project exposure' },
  { id: 'C', label: 'High technical — systems/data focused' },
  { id: 'D', label: 'I am not sure' },
]

const q8Options = [
  { id: 'A', label: 'No, I want Zeelin Academy to suggest a pathway' },
  { id: 'B', label: 'Yes, I already know what I want to choose' },
  { id: 'C', label: 'I am confused and would like guidance' },
  { id: 'D', label: 'I want the safest general BA route' },
  { id: 'E', label: 'I want the route that best matches my career goal' },
]

const jobTitleOptions = [
  { id: 'A', label: 'Business Analyst' },
  { id: 'B', label: 'Junior Business Analyst' },
  { id: 'C', label: 'Business Change Analyst' },
  { id: 'D', label: 'Process Analyst' },
  { id: 'E', label: 'Systems Analyst' },
  { id: 'F', label: 'IT Business Analyst' },
  { id: 'G', label: 'Data Business Analyst' },
  { id: 'H', label: 'Change/Benefits Analyst' },
  { id: 'I', label: 'Project Analyst' },
]

type PathwayResult = {
  path: string
  recommend: string
  msg: string
}

export default function PathwayFinder() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: '', enrolled: '',
    q1: '', q2: '', q3: '', q4: [] as string[], q5: '', q6: '', q7: '', q8: '', q9: ''
  })
  const [result, setResult] = useState<PathwayResult | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    setStep(s => Math.min(7, s + 1))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const handlePrev = () => {
    setStep(s => Math.max(1, s - 1))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setStep(1)
  }

  const handleCheckboxChange = (id: string) => {
    const current = formData.q4
    if (current.includes(id)) {
      setFormData({ ...formData, q4: current.filter(x => x !== id) })
    } else if (current.length < 3) {
      setFormData({ ...formData, q4: [...current, id] })
    }
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/pathway-finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        setResult(data.result)
        setStep(7)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Unable to reach server. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  const update = (field: string, value: string | string[]) => setFormData({ ...formData, [field]: value })

  const renderProgress = () => (
    <div className="max-w-2xl mx-auto w-full mb-12">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--brand-gold)' }}>
        <span>Step {step - 1} of 5</span>
        <span>{Math.round(((step - 1) / 5) * 100)}% Completed</span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
        <div
          className="h-full transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((step - 1) / 5) * 100}%`, backgroundColor: 'var(--brand-gold)' }}
        />
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div className="text-center space-y-6 max-w-2xl mx-auto py-8">
      <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
        Find Your Best-Fit <span style={{ color: 'var(--brand-gold)' }}>Diploma Pathway</span>
      </h2>
      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        Choosing your Professional Diploma modules can feel confusing. Our pathway finder helps you identify a suitable route based on your background, confidence level, career direction, and the type of Business Analyst you want to become.
      </p>
      <button onClick={handleNext} className="btn-gold px-10 py-4 text-lg font-bold inline-block">
        Start Pathway Check
      </button>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>About You</h2>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-core)' }}>Full Name <span className="text-red-500">*</span></label>
          <input type="text" value={formData.name} onChange={e => update('name', e.target.value)}
            className="w-full rounded-lg px-4 py-3 border outline-none transition-colors"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
            onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
            placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-core)' }}>Email Address <span className="text-red-500">*</span></label>
          <input type="email" value={formData.email} onChange={e => update('email', e.target.value)}
            className="w-full rounded-lg px-4 py-3 border outline-none transition-colors"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
            onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
            placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-core)' }}>Phone Number</label>
          <input type="tel" value={formData.phone} onChange={e => update('phone', e.target.value)}
            className="w-full rounded-lg px-4 py-3 border outline-none transition-colors"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
            onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
            placeholder="+44 123 456 7890" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-core)' }}>Current Role</label>
          <input type="text" value={formData.role} onChange={e => update('role', e.target.value)}
            className="w-full rounded-lg px-4 py-3 border outline-none transition-colors"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
            onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
            placeholder="e.g. Operations Manager" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--text-core)' }}>Are you already enrolled with Zeelin Academy?</label>
          <div className="space-y-2">
            {['Yes', 'No', 'I am thinking about joining'].map(opt => (
              <label key={opt}
                className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors"
                style={{
                  borderColor: formData.enrolled === opt ? 'var(--brand-gold)' : 'var(--border)',
                  backgroundColor: formData.enrolled === opt ? 'rgba(212,175,55,0.05)' : 'transparent'
                }}>
                <input type="radio" name="enrolled" checked={formData.enrolled === opt}
                  onChange={() => update('enrolled', opt)}
                  className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
                <span style={{ color: 'var(--text-core)' }}>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <button onClick={handlePrev} className="px-6 py-2 border rounded-lg font-medium transition-colors"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          Back
        </button>
        <button onClick={handleNext} disabled={!formData.name || !formData.email}
          className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>Your Background</h2>
      <div>
        <label className="block text-lg font-semibold mb-4" style={{ color: 'var(--text-core)' }}>What best describes your current situation?</label>
        <div className="space-y-3">
          {[
            { id: 'A', label: 'I am new to Business Analysis' },
            { id: 'B', label: 'I am already doing some BA work' },
            { id: 'C', label: 'I work in project delivery' },
            { id: 'D', label: 'I work in operations or process improvement' },
            { id: 'E', label: 'I work with data or reporting' },
            { id: 'F', label: 'I work with people, change, training, or adoption' },
          ].map(opt => (
            <label key={opt.id}
              className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q1 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q1 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q1" checked={formData.q1 === opt.id}
                onChange={() => update('q1', opt.id)}
                className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <button onClick={handlePrev} className="px-6 py-2 border rounded-lg font-medium transition-colors"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          Back
        </button>
        <button onClick={handleNext} disabled={!formData.q1}
          className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>Career Direction</h2>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>What type of work do you enjoy most?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: 'A', label: 'Understanding business problems' },
            { id: 'B', label: 'Improving processes' },
            { id: 'C', label: 'Managing change' },
            { id: 'D', label: 'Working with systems and technology' },
            { id: 'E', label: 'Working with data' },
            { id: 'F', label: 'Helping people adopt new ways of working' },
          ].map(opt => (
            <label key={opt.id}
              className="flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q2 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q2 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q2" checked={formData.q2 === opt.id}
                onChange={() => update('q2', opt.id)} className="mt-1 text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>Which career direction interests you most?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q3Options.map(opt => (
            <label key={opt.id}
              className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q3 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q3 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q3" checked={formData.q3 === opt.id}
                onChange={() => update('q3', opt.id)}
                className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>What kind of job titles attract you? (Choose up to 3)</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {jobTitleOptions.map(opt => {
            const selected = formData.q4.includes(opt.id)
            const atMax = formData.q4.length >= 3 && !selected
            return (
              <label key={opt.id}
                className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all"
                style={{
                  borderColor: selected ? 'var(--brand-gold)' : 'var(--border)',
                  backgroundColor: selected ? 'rgba(212,175,55,0.05)' : 'transparent',
                  opacity: atMax ? 0.5 : 1,
                }}>
                <input type="checkbox" checked={selected}
                  onChange={() => handleCheckboxChange(opt.id)}
                  disabled={atMax}
                  className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)] rounded" />
                <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
              </label>
            )
          })}
        </div>
        {formData.q4.length > 0 && (
          <p className="text-xs mt-2 font-medium" style={{ color: 'var(--brand-gold)' }}>
            {formData.q4.length} of 3 selected
          </p>
        )}
      </div>

      <div className="flex justify-between mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <button onClick={handlePrev} className="px-6 py-2 border rounded-lg font-medium transition-colors"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          Back
        </button>
        <button onClick={handleNext} disabled={!formData.q2 || !formData.q3}
          className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="space-y-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>Confidence &amp; Preference</h2>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>What do you want your Diploma pathway to help you do?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: 'A', label: 'Build a strong BA foundation' },
            { id: 'B', label: 'Understand business processes better' },
            { id: 'C', label: 'Work confidently on IT projects' },
            { id: 'D', label: 'Understand system modelling' },
            { id: 'E', label: 'Understand data better' },
            { id: 'F', label: 'Support change and benefits realisation' },
            { id: 'G', label: 'Understand people, teams, and organisations' },
          ].map(opt => (
            <label key={opt.id}
              className="flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q5 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q5 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q5" checked={formData.q5 === opt.id}
                onChange={() => update('q5', opt.id)} className="mt-1 text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>How technical do you want your pathway to be?</label>
        <div className="space-y-3">
          {q6Options.map(opt => (
            <label key={opt.id}
              className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q6 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q6 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q6" checked={formData.q6 === opt.id}
                onChange={() => update('q6', opt.id)}
                className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>Which statement sounds most like you?</label>
        <div className="space-y-3">
          {[
            { id: 'A', label: 'I want the safest and most flexible route' },
            { id: 'B', label: 'I want to work on transformation' },
            { id: 'C', label: 'I want to work on IT delivery' },
            { id: 'D', label: 'I want to model systems' },
            { id: 'E', label: 'I want to work with data' },
            { id: 'F', label: 'I want to understand people and organisations' },
            { id: 'G', label: 'I want to improve business processes' },
          ].map(opt => (
            <label key={opt.id}
              className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q7 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q7 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q7" checked={formData.q7 === opt.id}
                onChange={() => update('q7', opt.id)}
                className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <button onClick={handlePrev} className="px-6 py-2 border rounded-lg font-medium transition-colors"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          Back
        </button>
        <button onClick={handleNext} disabled={!formData.q5 || !formData.q6 || !formData.q7}
          className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  )

  const renderStep6 = () => (
    <div className="space-y-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>Final Preference</h2>

      <div>
        <label className="block text-md font-semibold mb-4" style={{ color: 'var(--text-core)' }}>Do you already have a module preference?</label>
        <div className="space-y-3">
          {q8Options.map(opt => (
            <label key={opt.id}
              className="flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all"
              style={{
                borderColor: formData.q8 === opt.id ? 'var(--brand-gold)' : 'var(--border)',
                backgroundColor: formData.q8 === opt.id ? 'rgba(212,175,55,0.05)' : 'transparent'
              }}>
              <input type="radio" name="q8" checked={formData.q8 === opt.id}
                onChange={() => update('q8', opt.id)} className="mt-1 text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="font-medium" style={{ color: 'var(--text-core)' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-2" style={{ color: 'var(--text-core)' }}>Tell us anything else about your career goal</label>
        <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
          Example: &ldquo;I want to become an IT Business Analyst,&rdquo; &ldquo;I am new to BA,&rdquo; &ldquo;I work in operations,&rdquo; or &ldquo;I want to move into data projects.&rdquo;
        </p>
        <textarea
          value={formData.q9}
          onChange={e => update('q9', e.target.value)}
          className="w-full border rounded-xl p-4 outline-none transition-colors min-h-[7.5rem]"
          style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-core)',
            borderColor: 'var(--border)',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
          placeholder="Type here..."
        />
      </div>

      <div className="flex justify-between mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <button onClick={handlePrev} className="px-6 py-2 border rounded-lg font-medium transition-colors"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          Back
        </button>
        <button onClick={handleSubmit} disabled={!formData.q8 || submitting}
          className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50 flex items-center gap-2">
          {submitting ? 'Submitting...' : 'Submit & Get Results'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )

  const renderStep7 = () => (
    <div className="text-center space-y-6 max-w-2xl mx-auto py-8">
      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}>
        <CheckCircle2 className="w-10 h-10" style={{ color: '#22c55e' }} />
      </div>
      <h2 className="text-3xl font-bold" style={{ color: 'var(--text-core)' }}>
        Thank you — your pathway check has been submitted
      </h2>

      {result && (
        <div
          className="p-8 rounded-2xl shadow-xl mt-8 text-left relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '2px solid var(--brand-gold)',
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-10 -mt-10"
            style={{ backgroundColor: 'rgba(212,175,55,0.05)' }} />
          <div className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--brand-gold)' }}>
            Recommended Pathway
          </div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
            {result.path}
          </h3>
          <p className="text-lg font-medium mb-6 pb-6 gold" style={{ borderBottom: '1px solid var(--border)' }}>
            {result.recommend}
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {result.msg}
          </p>
        </div>
      )}

      {/* Next Steps — Recommended Courses */}
      <div className="mt-8 text-left max-w-2xl mx-auto">
        <h3 className="font-bold text-lg mb-4 text-center" style={{ color: 'var(--text-core)' }}>
          Recommended <span style={{ color: 'var(--brand-gold)' }}>Next Steps</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: '/courses/core-pathway', title: 'Core Pathway', desc: 'Build on your BA foundation with structured learning.' },
            { href: '/courses/foundation-pathway', title: 'Foundation Pathway', desc: 'Start your BA journey with essential concepts.' },
            { href: '/courses/oral-examination', title: 'Oral Exam Prep', desc: 'Prepare for your Oral Examination.' },
          ].slice(0, result?.path?.toLowerCase().includes('foundation') ? 2 : 2).map((rec, i) => (
            <Link key={i} href={rec.href}
              className="flex items-center justify-between p-5 rounded-xl border transition-all hover:shadow-md group"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div>
                <div className="font-bold text-sm" style={{ color: 'var(--text-core)' }}>{rec.title}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{rec.desc}</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
            </Link>
          ))}
        </div>
      </div>

      <p className="text-sm mt-8 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
        Our recommendation is guidance only. You remain free to choose your own modules based on your goals, employer requirements, personal preference, or official guidance. Zeelin Academy will also review your answers and may reach out to discuss further.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/courses" className="btn-gold px-8 py-3 font-bold text-lg rounded-xl shadow-lg inline-block">
          Explore Recommended Courses
        </Link>
        <Link href="/contact" className="btn-outline-gold px-8 py-3 font-bold text-lg rounded-xl inline-block">
          <Phone className="w-4 h-4 inline-block mr-2" />
          Book a Diploma Pathway Call
        </Link>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (step) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      case 5: return renderStep5()
      case 6: return renderStep6()
      case 7: return renderStep7()
      default: return renderStep1()
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Section 1 — Book Carousel */}
      <section className="pt-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div
          className="flex gap-6 overflow-x-hidden py-6 select-none group/banner"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)' }}
        >
          <div className="flex gap-6 animate-marquee group-hover/banner:animate-marquee-paused">
            {[...examFocusBooks, ...examFocusBooks, ...examFocusBooks, ...examFocusBooks].map((book, i) => (
              <Link key={i} href="/courses" className="flex-shrink-0 flex flex-col items-center group/book no-underline">
                <div
                  className="relative w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] aspect-[3/4] overflow-hidden transition-all duration-300 group-hover/book:scale-[1.04] group-hover/book:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover-glow"
                  style={{ boxShadow: 'rgba(0,0,0,0.12) 0px 8px 30px', backgroundColor: 'var(--bg-card)', border: '1px solid transparent' }}
                >
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    className="object-cover pointer-events-none"
                    draggable={false}
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 190px"
                  />
                </div>
                <div className="mt-4 w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] text-center px-1">
                  <p className="text-sm md:text-base font-semibold leading-snug px-2 py-1 border transition-all duration-300 group-hover/book:border-[color:var(--brand-gold)]" style={{ color: 'var(--text-core)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    {book.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
        <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0}>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-none">
              <span style={{ color: '#ffffff' }}>Zeelin Diploma </span>
              <span style={{ color: 'var(--brand-gold)' }}>Pathway Finder</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-lg sm:text-xl mt-6 max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-secondary)' }}>
              Choose your Diploma modules with clarity and confidence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <button onClick={scrollToForm} className="btn-gold mt-8 px-10 py-4 text-lg font-bold inline-block">
              Start Pathway Check
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5 — Start Assessment CTA with Trust Signals */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
              Ready to Find Your <span style={{ color: 'var(--brand-gold)' }}>Pathway?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
              Join thousands of professionals who have used our pathway finder to make confident diploma decisions.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { icon: Users, value: '3,500+', label: 'Assessments Completed' },
              { icon: Star, value: '4.9/5', label: 'Satisfaction Rating' },
              { icon: Award, value: '95%', label: 'Found It Helpful' },
              { icon: TrendingUp, value: '82%', label: 'Chose Recommended Path' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="text-center">
                  <stat.icon className="w-7 h-7 mx-auto mb-2" style={{ color: 'var(--brand-gold)' }} />
                  <div className="text-2xl font-black font-display" style={{ color: 'var(--text-core)' }}>{stat.value}</div>
                  <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToForm} className="btn-gold px-10 py-4 text-lg font-bold inline-flex items-center gap-3">
                <ClipboardList className="w-5 h-5" />
                Start My Assessment
              </button>
              <Link href="/contact" className="btn-outline-gold px-10 py-4 text-lg font-bold inline-flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Talk to an Advisor
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6 — Multi-Step Form */}
      <section ref={formRef} className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Progress Indicator */}
          {step > 1 && step < 7 && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                {[2,3,4,5,6].map((s, i) => (
                  <div key={s} className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step === s ? 'shadow-[0_0_0_2px_var(--brand-gold)]' : ''
                      }`} style={{
                        backgroundColor: step > s ? 'var(--brand-gold)' : step === s ? 'var(--brand-gold)' : 'var(--border)',
                        color: step >= s ? '#0f1115' : 'var(--text-secondary)'
                      }}>
                        {step > s ? <CheckCircle className="w-4 h-4" /> : i + 1}
                      </div>
                      <span className={`text-xs hidden sm:inline font-medium ${step >= s ? '' : 'text-muted'}`}
                        style={{ color: step >= s ? 'var(--brand-gold)' : 'var(--text-secondary)' }}>
                        {['About You', 'Background', 'Career', 'Preferences', 'Final'][i]}
                      </span>
                    </div>
                    {i < 4 && <div className="w-8 h-px" style={{ backgroundColor: step > s ? 'var(--brand-gold)' : 'var(--border)' }} />}
                  </div>
                ))}
              </div>
              {renderProgress()}
            </div>
          )}
          {renderCurrentStep()}
        </div>
      </section>
    </div>
  )
}
