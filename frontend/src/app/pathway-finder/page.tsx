'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react'

// Pathway scoring categories
type PathwayType = 'N' | 'P' | 'C' | 'IT' | 'S' | 'D' | 'PB'

export default function PathwayFinder() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    enrolled: '',
    q1: '',
    q2: '',
    q3: '',
    q4: [],
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: ''
  })
  const [result, setResult] = useState<{ path: string, recommend: string, msg: string } | null>(null)

  const handleNext = () => setStep(s => Math.min(7, s + 1))
  const handlePrev = () => setStep(s => Math.max(1, s - 1))

  const calculateResult = () => {
    const scores: Record<PathwayType, number> = { N: 0, P: 0, C: 0, IT: 0, S: 0, D: 0, PB: 0 }
    
    // Q1 logic
    if (formData.q1 === 'A' || formData.q1 === 'H') scores.N += 1
    if (formData.q1 === 'D') scores.P += 1
    if (formData.q1 === 'E') scores.D += 1
    if (formData.q1 === 'F') { scores.C += 1; scores.PB += 1 }
    if (formData.q1 === 'C') { scores.IT += 1; scores.S += 1 }

    // Q2 logic
    if (formData.q2 === 'B') scores.P += 1
    if (formData.q2 === 'C') scores.C += 1
    if (formData.q2 === 'D') { scores.IT += 1; scores.S += 1 }
    if (formData.q2 === 'E') scores.D += 1
    if (formData.q2 === 'F') scores.PB += 1

    // Find highest score
    let highestScore = -1
    let winner: PathwayType = 'N'
    for (const [key, value] of Object.entries(scores)) {
      if (value > highestScore) {
        highestScore = value
        winner = key as PathwayType
      }
    }

    let res = { path: 'Neutral BA Pathway', recommend: 'Business Analysis Foundation + Modelling Business Processes', msg: 'This route is best if you are new to Business Analysis, unsure of your specialism, or want a safe and flexible route.' }
    
    if (winner === 'P') res = { path: 'Process Improvement BA Pathway', recommend: 'Business Analysis Foundation or Business Change + Modelling Business Processes', msg: 'This route is best if you want to understand business processes, identify pain points, improve workflows, and support operational improvement.' }
    if (winner === 'C') res = { path: 'Business Change BA Pathway', recommend: 'Business Change + Benefits Management and Business Acceptance', msg: 'This route is best if you want to work in transformation, change adoption, benefits realisation, and business improvement.' }
    if (winner === 'IT') res = { path: 'IT Delivery BA Pathway', recommend: 'IS Project Management + Systems Development Essentials', msg: 'This route is best if you want to work with IT projects, implementation teams, delivery teams, and digital change.' }
    if (winner === 'S') res = { path: 'Systems Analyst Pathway', recommend: 'IS Project Management + Systems Modelling Techniques', msg: 'This route is best if you want to become more technical, work with solution teams, and understand how systems are modelled.' }
    if (winner === 'D') res = { path: 'Data-Aware BA Pathway', recommend: 'Business Analysis Foundation or IS Project Management + Data Management Essentials', msg: 'This route is best if you want to work with data quality, reporting, data migration, governance, or data-led business change.' }
    if (winner === 'PB') res = { path: 'People & Benefits BA Pathway', recommend: 'Organisational Behaviour + Benefits Management and Business Acceptance', msg: 'This route is best if you are interested in people, teams, culture, business acceptance, benefits, and change adoption.' }

    setResult(res)
    setStep(7)
  }

  const renderStep1 = () => (
    <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <ArrowRight className="w-8 h-8 text-blue-600" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-core)]">Find Your Best-Fit Diploma Pathway</h2>
      <p className="text-lg text-[color:var(--text-secondary)] max-w-xl mx-auto">
        Choosing your BCS International Diploma modules can feel confusing. Our pathway finder helps you identify a suitable route based on your background, confidence level, career direction, and the type of Business Analyst you want to become.
      </p>
      <button onClick={handleNext} className="btn-gold px-8 py-3 font-bold text-lg rounded-xl mt-6">
        Start Pathway Finder
      </button>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 text-center">About You</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Full Name</label>
          <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-b-2 border-[color:var(--border)] py-2 bg-transparent outline-none focus:border-[color:var(--brand-gold)] text-[color:var(--text-core)]" placeholder="John Doe" required />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Email Address</label>
          <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border-b-2 border-[color:var(--border)] py-2 bg-transparent outline-none focus:border-[color:var(--brand-gold)] text-[color:var(--text-core)]" placeholder="john@example.com" required />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Phone Number</label>
          <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-b-2 border-[color:var(--border)] py-2 bg-transparent outline-none focus:border-[color:var(--brand-gold)] text-[color:var(--text-core)]" placeholder="+44 123 456 7890" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)]">Current Role</label>
          <input type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full border-b-2 border-[color:var(--border)] py-2 bg-transparent outline-none focus:border-[color:var(--brand-gold)] text-[color:var(--text-core)]" placeholder="e.g. Operations Manager" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--text-core)] mt-4">Are you already enrolled with Zeelin Academy?</label>
          <div className="space-y-2 mt-2">
            {['Yes', 'No', 'I am thinking about joining'].map(opt => (
              <label key={opt} className="flex items-center gap-3 p-3 border border-[color:var(--border)] rounded-lg cursor-pointer hover:border-[color:var(--brand-gold)] transition-colors">
                <input type="radio" name="enrolled" checked={formData.enrolled === opt} onChange={() => setFormData({...formData, enrolled: opt})} className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
                <span className="text-[color:var(--text-core)]">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8 pt-4 border-t border-[color:var(--border)]">
        <button onClick={handlePrev} className="px-6 py-2 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] font-medium">Back</button>
        <button onClick={handleNext} disabled={!formData.name || !formData.email} className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">Next</button>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 text-center">Your Background</h2>
      
      <div>
        <label className="block text-lg font-semibold mb-4 text-[color:var(--text-core)]">What best describes your current situation?</label>
        <div className="space-y-3">
          {[
            { id: 'A', label: 'I am new to Business Analysis' },
            { id: 'B', label: 'I am already doing some BA work' },
            { id: 'C', label: 'I work in project delivery' },
            { id: 'D', label: 'I work in operations or process improvement' },
            { id: 'E', label: 'I work with data or reporting' },
            { id: 'F', label: 'I work with people, change, training, or adoption' }
          ].map(opt => (
            <label key={opt.id} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${formData.q1 === opt.id ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.05)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}>
              <input type="radio" name="q1" checked={formData.q1 === opt.id} onChange={() => setFormData({...formData, q1: opt.id})} className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-[color:var(--text-core)] font-medium">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8 pt-4 border-t border-[color:var(--border)]">
        <button onClick={handlePrev} className="px-6 py-2 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] font-medium">Back</button>
        <button onClick={handleNext} disabled={!formData.q1} className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">Next</button>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-2 text-center">Career Direction</h2>
      
      <div>
        <label className="block text-md font-semibold mb-3 text-[color:var(--text-core)]">What type of work do you enjoy most?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: 'A', label: 'Understanding business problems' },
            { id: 'B', label: 'Improving processes' },
            { id: 'C', label: 'Managing change' },
            { id: 'D', label: 'Working with systems and technology' },
            { id: 'E', label: 'Working with data' },
            { id: 'F', label: 'Helping people adopt new ways of working' }
          ].map(opt => (
            <label key={opt.id} className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${formData.q2 === opt.id ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.05)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}>
              <input type="radio" name="q2" checked={formData.q2 === opt.id} onChange={() => setFormData({...formData, q2: opt.id})} className="mt-1 text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm text-[color:var(--text-core)] font-medium">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-3 text-[color:var(--text-core)]">Which career direction interests you most?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['General Business Analyst', 'Business Change Analyst', 'Process Improvement Analyst', 'Systems Analyst', 'IT Business Analyst', 'Data Business Analyst', 'Benefits/Change Adoption Analyst', 'I am not sure yet'].map(opt => (
            <label key={opt} className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${formData.q3 === opt ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.05)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}>
              <input type="radio" name="q3" checked={formData.q3 === opt} onChange={() => setFormData({...formData, q3: opt})} className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm text-[color:var(--text-core)] font-medium">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8 pt-4 border-t border-[color:var(--border)]">
        <button onClick={handlePrev} className="px-6 py-2 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] font-medium">Back</button>
        <button onClick={handleNext} disabled={!formData.q2 || !formData.q3} className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">Next</button>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-2 text-center">Confidence & Preference</h2>
      
      <div>
        <label className="block text-md font-semibold mb-3 text-[color:var(--text-core)]">What do you want your Diploma pathway to help you do?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: 'A', label: 'Build a strong BA foundation' },
            { id: 'B', label: 'Understand business processes better' },
            { id: 'C', label: 'Work confidently on IT projects' },
            { id: 'D', label: 'Understand system modelling' },
            { id: 'E', label: 'Understand data better' },
            { id: 'F', label: 'Support change and benefits realisation' },
            { id: 'G', label: 'Understand people, teams, and organisations' }
          ].map(opt => (
            <label key={opt.id} className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${formData.q5 === opt.id ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.05)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}>
              <input type="radio" name="q5" checked={formData.q5 === opt.id} onChange={() => setFormData({...formData, q5: opt.id})} className="mt-1 text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm text-[color:var(--text-core)] font-medium">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-3 text-[color:var(--text-core)]">How technical do you want your pathway to be?</label>
        <div className="space-y-3">
          {['Low technical — business-focused', 'Medium technical — some IT/project exposure', 'High technical — systems/data focused', 'I am not sure'].map(opt => (
            <label key={opt} className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${formData.q6 === opt ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.05)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}>
              <input type="radio" name="q6" checked={formData.q6 === opt} onChange={() => setFormData({...formData, q6: opt})} className="text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-sm text-[color:var(--text-core)] font-medium">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8 pt-4 border-t border-[color:var(--border)]">
        <button onClick={handlePrev} className="px-6 py-2 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] font-medium">Back</button>
        <button onClick={handleNext} disabled={!formData.q5 || !formData.q6} className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">Next</button>
      </div>
    </div>
  )

  const renderStep6 = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-[color:var(--text-core)] mb-2 text-center">Final Preference</h2>
      
      <div>
        <label className="block text-md font-semibold mb-4 text-[color:var(--text-core)]">Do you already have a module preference?</label>
        <div className="space-y-3">
          {[
            'No, I want Zeelin Academy to suggest a pathway',
            'Yes, I already know what I want to choose',
            'I am confused and would like guidance',
            'I want the safest general BA route',
            'I want the route that best matches my career goal'
          ].map(opt => (
            <label key={opt} className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${formData.q8 === opt ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.05)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}>
              <input type="radio" name="q8" checked={formData.q8 === opt} onChange={() => setFormData({...formData, q8: opt})} className="mt-1 text-[color:var(--brand-gold)] focus:ring-[color:var(--brand-gold)]" />
              <span className="text-[color:var(--text-core)] font-medium">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-semibold mb-2 text-[color:var(--text-core)]">Tell us anything else about your career goal</label>
        <p className="text-xs text-[color:var(--text-muted)] mb-3">Example: "I want to become an IT Business Analyst," or "I want to move into data projects."</p>
        <textarea 
          value={formData.q9} 
          onChange={e => setFormData({...formData, q9: e.target.value})} 
          className="w-full border border-[color:var(--border)] rounded-xl p-4 bg-transparent outline-none focus:border-[color:var(--brand-gold)] text-[color:var(--text-core)] min-h-[120px]"
          placeholder="Type here..."
        />
      </div>
      
      <div className="flex justify-between mt-8 pt-4 border-t border-[color:var(--border)]">
        <button onClick={handlePrev} className="px-6 py-2 border border-[color:var(--border)] rounded-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] font-medium">Back</button>
        <button onClick={calculateResult} disabled={!formData.q8} className="btn-gold px-8 py-2 font-bold rounded-lg disabled:opacity-50">Submit & Get Results</button>
      </div>
    </div>
  )

  const renderStep7 = () => (
    <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto py-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-[color:var(--text-core)]">Thank you — your pathway check has been submitted</h2>
      
      <div className="bg-[color:var(--bg-card)] border-2 border-[color:var(--brand-gold)] p-8 rounded-2xl shadow-xl mt-8 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(212,175,55,0.05)] rounded-bl-full -mr-10 -mt-10"></div>
        <div className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-gold)] mb-2">Recommended Pathway</div>
        <h3 className="text-2xl font-bold text-[color:var(--text-core)] mb-4">{result?.path}</h3>
        <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-6 pb-6 border-b border-[color:var(--border)]">{result?.recommend}</p>
        <p className="text-[color:var(--text-secondary)] leading-relaxed">{result?.msg}</p>
      </div>

      <p className="text-sm text-[color:var(--text-muted)] mt-8 max-w-xl mx-auto">
        Our recommendation is guidance only. You remain free to choose your own modules based on your goals, employer requirements, personal preference, or official BCS guidance. Zeelin Academy will also review your answers and may reach out to discuss further.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/courses" className="btn-gold px-8 py-3 font-bold text-lg rounded-xl shadow-lg">
          Explore Recommended Courses
        </Link>
        <Link href="/contact" className="btn-outline-gold bg-[color:var(--bg-primary)] px-8 py-3 font-bold text-lg rounded-xl">
          Book a Pathway Call
        </Link>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch(step) {
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
    <div className="min-h-[80vh] flex flex-col pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg-primary)]">
      {step > 1 && step < 7 && (
        <div className="max-w-2xl mx-auto w-full mb-12">
          <div className="flex justify-between text-xs font-bold text-[color:var(--brand-gold)] uppercase tracking-wider mb-3">
            <span>Step {step - 1} of 5</span>
            <span>{Math.round(((step - 1) / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full bg-[color:var(--border)] h-2 rounded-full overflow-hidden">
            <div className="bg-[color:var(--brand-gold)] h-full transition-all duration-500 ease-out" style={{ width: `${((step - 1) / 5) * 100}%` }}></div>
          </div>
        </div>
      )}
      
      {renderCurrentStep()}
    </div>
  )
}
