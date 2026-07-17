'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle, Award, ShieldCheck, Clock, Star, MessageCircle, CreditCard, ChevronRight, Check, Loader2, ChevronLeft, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const moduleNames: Record<string, string> = {
  'ba-foundations': 'Business Analysis Foundations',
  'elicitation': 'Elicitation & Collaboration Techniques',
  'requirements-mgmt': 'Requirements Life Cycle Management',
  'strategy-analysis': 'Strategy Analysis',
  'requirements-design': 'Requirements Analysis & Design Definition',
  'solution-evaluation': 'Solution Evaluation',
  'agile-ba': 'Agile Business Analysis',
  'capstone': 'Capstone Project & Certification Prep',
}

function EnrollForm() {
  const searchParams = useSearchParams()
  const preselectedModule = searchParams.get('module') || ''
  const preselectedType = searchParams.get('type') || 'paid'
  const preselectedPackage = searchParams.get('package') || ''

  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedModule: preselectedModule,
    enrollmentType: preselectedType,
    experience: '',
    goals: '',
    packageSlug: preselectedPackage,
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [codeSent, setCodeSent] = useState(false)
  const [verified, setVerified] = useState(false)
  const [code, setCode] = useState('')
  const [enrollmentId, setEnrollmentId] = useState<number | null>(null)
  const [processingPayment, setProcessingPayment] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(null)
    setTouched({ ...touched, [e.target.name]: true })
  }

  const isFloating = (field: string) => focusedField === field || form[field as keyof typeof form] !== ''

  const inputClass = (field: string) => `
    w-full rounded-lg border bg-[color:var(--bg-primary)] text-[color:var(--text-core)]
    transition-all duration-200 ease-out
    focus:outline-none pt-6 pb-2 px-4
    ${touched[field] && !form[field as keyof typeof form]
      ? 'border-red-400 focus:border-red-500'
      : 'border-[color:var(--border)] focus:border-[#D4A02A]'}
  `

  const inputStyle = (field: string) => ({
    boxShadow: focusedField === field && !(touched[field] && !form[field as keyof typeof form])
      ? '0 0 0 3px rgba(212,160,42,0.15)'
      : 'none',
  })

  const labelClass = (field: string) => `
    absolute left-4 transition-all duration-200 ease-out pointer-events-none
    ${isFloating(field)
      ? 'top-2 text-[0.7rem]'
      : 'top-1/2 -translate-y-1/2 text-sm'}
    ${touched[field] && !form[field as keyof typeof form]
      ? 'text-red-400'
      : isFloating(field)
        ? 'text-[#D4A02A]'
        : 'text-[color:var(--text-muted)]'}
  `

  const canProceedToStep2 = form.fullName && form.email && form.phone
  const canProceedToStep3 = form.selectedModule && form.enrollmentType
  const canSubmit = form.experience && form.goals

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        const data = await res.json()
        if (data.enrollment_id) setEnrollmentId(data.enrollment_id)
        setCodeSent(true)
      } else {
        const data = await res.json()
        alert(data.error || 'Something went wrong')
      }
    } catch {
      alert('Failed to submit enrollment')
    }
    setSubmitting(false)
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email, code }),
    })
    if (res.ok) {
      setVerified(true)
    } else {
      const data = await res.json()
      alert(data.error || 'Invalid code')
    }
  }

  const handlePayment = async () => {
    setProcessingPayment(true)
    try {
      const res = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId: enrollmentId,
          packageSlug: form.packageSlug || form.enrollmentType,
          amount: form.packageSlug === 'fast-track' || form.packageSlug === 'complete-bundle' ? 400 : 100,
          email: form.email,
          fullName: form.fullName,
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Failed to initiate payment. Please try again.')
      }
    } catch {
      alert('Failed to process payment')
    }
    setProcessingPayment(false)
  }

  if (verified) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <AnimatedSection delay={0} direction="scale">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pop-in"
            style={{ backgroundColor: 'rgba(212,160,42,0.12)' }}>
            <CheckCircle className="w-10 h-10" style={{ color: '#D4A02A' }} />
          </div>
          <h2 className="font-display text-3xl font-black mb-4" style={{ color: '#0c1e36' }}>
            Verified &amp; Ready
          </h2>
          <p className="text-base font-semibold mb-3" style={{ color: '#4A4A4A' }}>
            Your email has been verified. Complete payment to confirm your enrollment.
          </p>
          <p className="text-sm mb-8" style={{ color: '#6e6e6e' }}>
            Enrolled as <strong style={{ color: '#0c1e36' }}>{form.fullName}</strong> &mdash; {form.email}
          </p>
          <div className="space-y-4">
            <button onClick={handlePayment} disabled={processingPayment}
              className="w-full py-4 rounded-lg font-bold text-base uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95 shadow-xl disabled:opacity-50"
              style={{ backgroundColor: '#D4A02A', color: '#fff' }}>
              {processingPayment ? 'Processing...' : `Proceed to Payment`}
            </button>
            <Link href="/" className="inline-block text-sm font-semibold transition-colors hover:underline"
              style={{ color: '#6e6e6e' }}>
              Back to Home
            </Link>
          </div>
        </AnimatedSection>
      </div>
    )
  }

  if (codeSent) {
    return (
      <div className="max-w-xl mx-auto py-20">
        <AnimatedSection delay={0} direction="up">
          <h2 className="font-display text-2xl font-bold text-center mb-8" style={{ color: '#0c1e36' }}>
            Verify Your <span style={{ color: '#D4A02A' }}>Email</span>
          </h2>
          <p className="text-sm text-center mb-8" style={{ color: '#6e6e6e' }}>
            We&apos;ve sent a verification code to <strong style={{ color: '#0c1e36' }}>{form.email}</strong>.
          </p>
          <form onSubmit={handleVerify} className="p-8 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" style={{ color: '#0c1e36' }}>Verification Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-center text-2xl tracking-[0.5em] border focus:outline-none focus:border-[#D4A02A] transition-all"
                style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}
                placeholder="000000"
                maxLength={6}
                required
              />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: '#D4A02A', color: '#fff' }}>
              Verify &amp; Confirm
            </button>
          </form>

          <AnimatedSection direction="up" className="mt-8">
            <div className="p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#0c1e36' }}>Payment <span style={{ color: '#D4A02A' }}>Options</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5" style={{ borderColor: 'var(--border)' }}>
                <CreditCard className="w-8 h-8 mx-auto mb-2" style={{ color: '#D4A02A' }} />
                <p className="text-sm font-bold" style={{ color: '#0c1e36' }}>Full Payment</p>
                <p className="text-xs" style={{ color: '#6e6e6e' }}>One-time payment</p>
                <p className="text-xs mt-1 font-semibold" style={{ color: '#D4A02A' }}>Best value</p>
              </div>
              <div className="p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5" style={{ borderColor: 'var(--border)' }}>
                <Clock className="w-8 h-8 mx-auto mb-2" style={{ color: '#D4A02A' }} />
                <p className="text-sm font-bold" style={{ color: '#0c1e36' }}>Monthly Plan</p>
                <p className="text-xs" style={{ color: '#6e6e6e' }}>Spread the cost</p>
                <p className="text-xs mt-1 font-semibold" style={{ color: '#D4A02A' }}>3 or 6 months</p>
              </div>
              <div className="p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5" style={{ borderColor: 'var(--border)' }}>
                <ShieldCheck className="w-8 h-8 mx-auto mb-2" style={{ color: '#D4A02A' }} />
                <p className="text-sm font-bold" style={{ color: '#0c1e36' }}>Sponsorship</p>
                <p className="text-xs" style={{ color: '#6e6e6e' }}>Employer-funded</p>
                <p className="text-xs mt-1 font-semibold" style={{ color: '#D4A02A' }}>Invoice available</p>
              </div>
            </div>
            <p className="text-xs text-center mt-4" style={{ color: '#6e6e6e' }}>We accept Visa, Mastercard, American Express, PayPal, and bank transfers.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" className="mt-8">
            <div className="p-8 rounded-xl border text-center" style={{ backgroundColor: 'rgba(212,160,42,0.03)', borderColor: 'rgba(212,160,42,0.2)' }}>
            <MessageCircle className="w-10 h-10 mx-auto mb-3" style={{ color: '#D4A02A' }} />
            <h3 className="font-bold text-xl mb-2" style={{ color: '#0c1e36' }}>Still Have Questions?</h3>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#6e6e6e' }}>
              Not sure which module is right for you? Contact our team for a free consultation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#D4A02A', color: '#fff' }}>
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-20">
      <AnimatedSection delay={0}>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: '#D4A02A' }} />
            <span className="text-xs font-bold tracking-[0.125rem]" style={{ color: '#D4A02A' }}>ENROLLMENT</span>
            <div className="h-px w-10" style={{ backgroundColor: '#D4A02A' }} />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: '#0c1e36' }}>
            {preselectedType === 'bundle' ? (
              <>Complete Diploma <span style={{ color: '#D4A02A' }}>Exam Prep Bundle</span></>
            ) : preselectedType === 'fast-track' ? (
              <>Fast-Track Diploma <span style={{ color: '#D4A02A' }}>Exam Prep</span></>
            ) : (
              <>Enroll in <span style={{ color: '#D4A02A' }}>Zeelin Academy</span></>
            )}
          </h1>
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#6e6e6e', fontWeight: 500 }}>
            {preselectedType === 'bundle'
              ? 'Follow a structured full Diploma preparation route without rushing. Complete the steps below to get started.'
              : preselectedType === 'fast-track'
                ? 'Move faster with an intensive preparation route. Complete the steps below to get started.'
                : 'Complete the steps below to begin your Business Analysis journey.'}
          </p>
        </div>
      </AnimatedSection>

      {/* Progress Bar */}
      <AnimatedSection delay={100}>
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {['Personal Info', 'Course Selection', 'Review'].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[0.65rem] font-bold transition-all duration-300 ${
                  step > i + 1
                    ? 'bg-[#D4A02A] text-white'
                    : step === i + 1
                      ? 'bg-[#D4A02A] text-white'
                      : '' 
                }`}
                  style={step <= i + 1 && step !== i + 1 ? { backgroundColor: 'var(--border)', color: 'var(--text-muted)' } : {}}>
                  {step > i + 1 ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className={`text-[0.65rem] font-bold uppercase tracking-wider hidden sm:inline ${
                  step >= i + 1 ? '' : ''
                }`}
                  style={{ color: step >= i + 1 ? '#0c1e36' : '#6e6e6e' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--border)' }}>
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((step - 1) / 2) * 100}%`,
                backgroundColor: '#D4A02A',
              }}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200} direction="up">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {/* Step 1: Personal Info */}
          <div className={`transition-all duration-500 ${step === 1 ? 'block' : 'hidden'}`}>
            <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#0c1e36' }}>
              Step 1: <span style={{ color: '#D4A02A' }}>Personal Information</span>
            </h3>

            <div className="space-y-5">
              <div className="relative">
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
                  onFocus={() => setFocusedField('fullName')} onBlur={handleBlur}
                  className={inputClass('fullName')} style={inputStyle('fullName')}
                  placeholder=" " required
                />
                <label className={labelClass('fullName')}>Full Name</label>
                {touched.fullName && form.fullName && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#22c55e' }} />
                )}
              </div>

              <div className="relative">
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  onFocus={() => setFocusedField('email')} onBlur={handleBlur}
                  className={inputClass('email')} style={inputStyle('email')}
                  placeholder=" " required
                />
                <label className={labelClass('email')}>Email Address</label>
                {touched.email && form.email && /\S+@\S+\.\S+/.test(form.email) && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#22c55e' }} />
                )}
              </div>

              <div className="relative">
                <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                  onFocus={() => setFocusedField('phone')} onBlur={handleBlur}
                  className={inputClass('phone')} style={inputStyle('phone')}
                  placeholder=" " required
                />
                <label className={labelClass('phone')}>Phone Number</label>
                {touched.phone && form.phone && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#22c55e' }} />
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button type="button" onClick={() => { setTouched({ fullName: true, email: true, phone: true }); if (canProceedToStep2) setStep(2) }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-40"
                style={{ backgroundColor: canProceedToStep2 ? '#D4A02A' : 'var(--border)', color: canProceedToStep2 ? '#fff' : '#6e6e6e' }}
                disabled={!canProceedToStep2}>
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step 2: Course Selection */}
          <div className={`transition-all duration-500 ${step === 2 ? 'block' : 'hidden'}`}>
            <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#0c1e36' }}>
              Step 2: <span style={{ color: '#D4A02A' }}>Course Selection</span>
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0c1e36' }}>Select Module</label>
                <select name="selectedModule" value={form.selectedModule} onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:border-[#D4A02A] transition-all"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
                  <option value="">Choose a module...</option>
                  {Object.entries(moduleNames).map(([key, val]) => (
                    <option key={key} value={key}>{val}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3" style={{ color: '#0c1e36' }}>Enrollment Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'paid', label: 'Self-Paid', desc: 'Pay for yourself' },
                    { value: 'bundle', label: 'Bundle', desc: 'Complete diploma prep' },
                    { value: 'fast-track', label: 'Fast-Track', desc: 'Intensive route' },
                  ].map((opt) => (
                    <button key={opt.value} type="button" onClick={() => setForm({ ...form, enrollmentType: opt.value })}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                        form.enrollmentType === opt.value ? 'ring-2' : ''
                      }`}
                      style={{
                        borderColor: form.enrollmentType === opt.value ? '#D4A02A' : 'var(--border)',
                        backgroundColor: form.enrollmentType === opt.value ? 'rgba(212,160,42,0.05)' : 'var(--bg-primary)',
                      }}>
                      <p className="text-sm font-bold" style={{ color: '#0c1e36' }}>{opt.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#6e6e6e' }}>{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button type="button" onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid var(--border)', color: '#0c1e36' }}>
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button type="button" onClick={() => { if (form.selectedModule && form.enrollmentType) setStep(3) }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-40"
                style={{ backgroundColor: canProceedToStep3 ? '#D4A02A' : 'var(--border)', color: canProceedToStep3 ? '#fff' : '#6e6e6e' }}
                disabled={!canProceedToStep3}>
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step 3: Review & Submit */}
          <div className={`transition-all duration-500 ${step === 3 ? 'block' : 'hidden'}`}>
            <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#0c1e36' }}>
              Step 3: <span style={{ color: '#D4A02A' }}>Review &amp; Submit</span>
            </h3>

            {/* Summary Card */}
            <div className="p-4 rounded-xl mb-6" style={{ backgroundColor: 'rgba(212,160,42,0.05)', border: '1px solid rgba(212,160,42,0.15)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold" style={{ color: '#6e6e6e' }}>Name:</span> <span className="font-bold" style={{ color: '#0c1e36' }}>{form.fullName}</span></div>
                <div><span className="font-semibold" style={{ color: '#6e6e6e' }}>Email:</span> <span className="font-bold" style={{ color: '#0c1e36' }}>{form.email}</span></div>
                <div><span className="font-semibold" style={{ color: '#6e6e6e' }}>Phone:</span> <span className="font-bold" style={{ color: '#0c1e36' }}>{form.phone}</span></div>
                <div><span className="font-semibold" style={{ color: '#6e6e6e' }}>Module:</span> <span className="font-bold" style={{ color: '#0c1e36' }}>{moduleNames[form.selectedModule] || form.selectedModule}</span></div>
                <div><span className="font-semibold" style={{ color: '#6e6e6e' }}>Type:</span> <span className="font-bold" style={{ color: '#0c1e36' }}>{form.enrollmentType}</span></div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0c1e36' }}>Experience Level</label>
                <select name="experience" value={form.experience} onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:border-[#D4A02A] transition-all"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-core)', borderColor: 'var(--border)' }}>
                  <option value="">Select your experience...</option>
                  <option value="beginner">Beginner - No prior BA experience</option>
                  <option value="intermediate">Intermediate - Some BA knowledge</option>
                  <option value="advanced">Advanced - Experienced BA professional</option>
                </select>
              </div>

              <div className="relative">
                <textarea name="goals" value={form.goals} onChange={handleChange}
                  onFocus={() => setFocusedField('goals')} onBlur={handleBlur}
                  className="w-full rounded-lg border bg-[color:var(--bg-primary)] text-[color:var(--text-core)] transition-all duration-200 ease-out focus:outline-none pt-6 pb-3 px-4 focus:border-[#D4A02A]"
                  style={inputStyle('goals')}
                  placeholder=" " required rows={4}
                />
                <label className={labelClass('goals')}>What are your learning goals?</label>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button type="button" onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid var(--border)', color: '#0c1e36' }}>
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button type="submit" disabled={submitting || !canSubmit}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-40"
                style={{ backgroundColor: canSubmit ? '#D4A02A' : 'var(--border)', color: canSubmit ? '#fff' : '#6e6e6e' }}>
                {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Submit Enrollment <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>
          </div>
        </form>
      </AnimatedSection>

      {/* Trust indicators */}
      <AnimatedSection delay={300} className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Award className="w-5 h-5" />, title: 'Industry-Aligned', desc: 'Mapped to official syllabus' },
            { icon: <Star className="w-5 h-5" />, title: 'Expert Mentors', desc: 'Learn from Dr. Franklin Kalu' },
            { icon: <CheckCircle className="w-5 h-5" />, title: 'Proven Results', desc: 'Strong first-attempt pass rate' },
            { icon: <Clock className="w-5 h-5" />, title: 'Flexible Schedule', desc: 'Study at your own pace' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="flex justify-center mb-2" style={{ color: '#D4A02A' }}>{item.icon}</div>
              <p className="text-xs font-bold" style={{ color: '#0c1e36' }}>{item.title}</p>
              <p className="text-[0.65rem] mt-0.5" style={{ color: '#6e6e6e' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Still Have Questions */}
      <AnimatedSection delay={400}>
        <div className="mt-8 p-6 rounded-xl border text-center"
          style={{ backgroundColor: 'rgba(212,160,42,0.03)', borderColor: 'rgba(212,160,42,0.2)' }}>
        <MessageCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#D4A02A' }} />
        <h3 className="font-bold text-base mb-1" style={{ color: '#0c1e36' }}>Need Help Choosing?</h3>
        <p className="text-xs mb-4" style={{ color: '#6e6e6e' }}>
          Contact our team for a free consultation to find the right module for you.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-xs transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: '#D4A02A', color: '#fff' }}>
          Contact Us <ChevronRight className="w-3.5 h-3.5" />
        </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default function EnrollPage() {
  return (
    <div className="min-h-screen relative">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="text-center py-20">
            <Loader2 className="w-8 h-8 animate-spin mx-auto" style={{ color: '#D4A02A' }} />
          </div>
        }>
          <EnrollForm />
        </Suspense>
      </div>
    </div>
  )
}
