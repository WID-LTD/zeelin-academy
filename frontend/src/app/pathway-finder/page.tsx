'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, CheckCircle2, Phone, ArrowRight, CheckCircle, ClipboardList } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const examFocusBooks = [
  { src: '/books/foundation_in_bussiness_analysis_pratice.png', title: 'Exam Focus: Foundation in Business Analysis' },
  { src: '/books/bussiness_change.png', title: 'Exam Focus: Business Change' },
  { src: '/books/project_management.png', title: 'Exam Focus: IS Project Management' },
  { src: '/books/organisational_behaviour.png', title: 'Exam Focus: Organisational Behaviour' },
  { src: '/books/requirements_engineering.png', title: 'Exam Focus: Requirements Engineering' },
  { src: '/books/modelling_buussiness_process.png', title: 'Exam Focus: Modelling Business Processes' },
  { src: '/books/system_modelling_techniques.png', title: 'Exam Focus: Systems Modelling Techniques' },
  { src: '/books/data_management_essential.png', title: 'Exam Focus: Data Management Essentials' },
  { src: '/books/benefits_mangement_and_bussiness_acceptance.png', title: 'Exam Focus: Benefits Management and Business Acceptance' },
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
    <div className="max-w-2xl lg:max-w-4xl mx-auto w-full mb-12">
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
    <div className="text-center space-y-6 max-w-2xl lg:max-w-4xl mx-auto py-8">
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
    <div className="space-y-6 max-w-lg lg:max-w-2xl lg:max-w-4xl mx-auto">
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
    <div className="space-y-6 max-w-lg lg:max-w-2xl lg:max-w-4xl mx-auto">
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
    <div className="space-y-8 max-w-xl lg:max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>Career Direction</h2>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>What type of work do you enjoy most?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
    <div className="space-y-8 max-w-xl lg:max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center" style={{ color: 'var(--text-core)' }}>Confidence &amp; Preference</h2>

      <div>
        <label className="block text-md font-semibold mb-3" style={{ color: 'var(--text-core)' }}>What do you want your Diploma pathway to help you do?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
    <div className="space-y-8 max-w-lg lg:max-w-2xl lg:max-w-4xl mx-auto">
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
    <div className="text-center space-y-6 max-w-2xl lg:max-w-4xl mx-auto py-8">
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
      <div className="mt-8 text-left max-w-2xl lg:max-w-4xl mx-auto">
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

      <p className="text-sm mt-8 max-w-xl lg:max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
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
      <section className="pt-24 overflow-hidden">
        <div
          className="flex gap-6 overflow-x-hidden py-6 select-none group/banner"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)' }}
        >
          <div className="flex gap-6 animate-marquee group-hover/banner:animate-marquee-paused">
            {[...examFocusBooks, ...examFocusBooks, ...examFocusBooks, ...examFocusBooks].map((book, i) => (
              <Link key={i} href="/courses" className="flex-shrink-0 flex flex-col items-center group/book no-underline">
                <div
                  className="relative w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] aspect-[3/4] overflow-hidden transition-all duration-300 group-hover/book:scale-[1.04] group-hover/book:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover-glow"
                  style={{ boxShadow: 'rgba(0,0,0,0.12) 0px 8px 30px', backgroundColor: 'rgba(255,255,255,0.7)', border: '1px solid transparent' }}
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
                  <p className="text-sm md:text-base font-semibold leading-snug px-2 py-1 border transition-all duration-300 group-hover/book:border-[color:var(--brand-gold)]" style={{ color: 'var(--text-core)', borderColor: 'var(--border)', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                    {book.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Header matching template */}
      <section className="py-[clamp(2rem,1rem+2vw,4rem)] px-[5%]">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto text-center">
          <AnimatedSection delay={0}>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight" style={{ color: '#002855' }}>
              ZEELIN DIPLOMA
            </h1>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-wider leading-tight mt-1 mb-5" style={{ color: '#c5a043' }}>
              PATHWAY FINDER
            </h2>
            <div className="text-sm mb-5" style={{ color: '#c5a043' }}>✦</div>
            <p className="text-sm md:text-base lg:text-lg max-w-[clamp(20rem,15rem+20vw,40rem)] mx-auto leading-relaxed" style={{ color: '#1c2b39' }}>
              Choosing the right Diploma modules can be confusing, especially when learners are unsure which specialist route is best for their career. <br />
              At Zeelin Academy, we do not believe learners should choose modules blindly. That is why we provide our Zeelin Diploma Pathway Finder — a guided module selection support process designed to help learners choose their knowledge-based and practitioner modules with clarity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4 — Stats + Start My Assessment with mature hand */}
      <section className="py-[clamp(1.25rem,0.625rem+1.25vw,2.5rem)] px-[5%]">
        <div className="max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2000px] mx-auto text-center">
          <AnimatedSection>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4" style={{ color: '#222222' }}>
              Ready to Find Your <span style={{ color: '#c5a043' }}>Pathway?</span>
            </h3>
            <p className="text-sm md:text-base lg:text-lg max-w-[clamp(18rem,14rem+18vw,36rem)] mx-auto mb-10 leading-relaxed" style={{ color: '#444444' }}>
              Join thousands of professionals who have used our pathway finder to make confident diploma decisions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ margin: '0 auto 2.1875rem auto' }}>
            {[
              {
                value: '3,500+', label: 'Assessments Completed',
                path: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
              },
              {
                value: '4.9/5', label: 'Satisfaction Rating',
                path: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>
              },
              {
                value: '95%', label: 'Found It Helpful',
                path: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>
              },
              {
                value: '82%', label: 'Chose Recommended Path',
                path: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>
              },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="text-center">
                  <svg className="w-7 h-7 lg:w-9 lg:h-9 mb-2" style={{ fill: 'none', stroke: '#c5a043', strokeWidth: 2 }} viewBox="0 0 24 24">
                    {stat.path}
                  </svg>
                  <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold" style={{ color: '#222222' }}>{stat.value}</div>
                  <div className="text-[0.625rem] md:text-xs lg:text-sm font-medium mt-0.5" style={{ color: '#666666' }}>{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button onClick={scrollToForm} className="btn-gold text-sm md:text-base lg:text-lg font-bold px-7 py-3 inline-flex items-center gap-2">
                <ClipboardList className="w-4 h-4" />
                Start My Assessment
              </button>
              {/* Hand pointer icon overlay */}
              <div style={{ position: 'absolute', bottom: '-24px', right: '-40px', pointerEvents: 'none' }}>
                <img src="/hand-pointer.svg" alt="" width={44} height={44} style={{ display: 'block' }} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6 — Multi-Step Form */}
      <section ref={formRef} className="py-24">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Progress Indicator */}
          {step > 1 && step < 7 && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                {[2,3,4,5,6].map((s, i) => (
                  <div key={s} className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold transition-all ${
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
                    {i < 4 && <div className="w-8 lg:w-16 h-px" style={{ backgroundColor: step > s ? 'var(--brand-gold)' : 'var(--border)' }} />}
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
