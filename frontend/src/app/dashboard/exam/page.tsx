'use client'
import { useEffect, useState } from 'react'
import { getUserToken } from '@/lib/auth'
import { CheckCircle2, ChevronRight, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function ExamPage() {
  const [questions, setQuestions] = useState<any[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<{ score: number; total: number; passed: boolean } | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/exams/questions?module_id=ba-foundations&exam_type=daily')
      .then(r => r.json()).then(d => { setQuestions(Array.isArray(d) ? d : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const submitExam = async () => {
    setSubmitting(true)
    try {
      const token = getUserToken()
      const res = await fetch('/api/exams/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token || ''}` },
        body: JSON.stringify({ module_id: 'ba-foundations', exam_type: 'daily', answers })
      })
      const data = await res.json()
      setResult(data)
      setSubmitted(true)
    } catch { alert('Submission failed') }
    setSubmitting(false)
  }

  if (loading) return <div className="flex items-center justify-center py-20"><Loader2 className="w-8 h-8 animate-spin gold" /></div>

  return (
    <div>
      <h1 className="text-2xl font-bold text-[color:var(--text-core)] mb-6 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 gold" /> Daily Compulsory Test</h1>
      {submitted && result ? (
        <div className="text-center py-12">
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${result.passed ? 'gold-bg' : 'bg-red-500'}`}>
            {result.passed ? <CheckCircle2 className="w-10 h-10 text-black" /> : <AlertCircle className="w-10 h-10 text-white" />}
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${result.passed ? 'gold' : 'text-red-500'}`}>{result.passed ? 'Passed!' : 'Needs Improvement'}</h2>
          <p className="text-[color:var(--text-secondary)] mb-2">Score: {result.score}/{result.total} ({Math.round(result.score / result.total * 100)}%)</p>
          <Link href="/dashboard" className="btn-gold px-6 py-2.5 text-sm font-bold inline-block mt-4">Back to Dashboard</Link>
        </div>
      ) : questions.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[color:var(--text-secondary)]">No questions available for today&apos;s test.</p>
          <Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 justify-center mt-4"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-[color:var(--text-secondary)]">Answer the following questions to test your knowledge.</p>
          {questions.map((q, i) => (
            <div key={q.id} className="p-5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
              <h3 className="font-bold text-[color:var(--text-core)] mb-3">{i + 1}. {q.question}</h3>
              <div className="space-y-2">
                {q.options.map((opt: string, j: number) => {
                  const optKey = String.fromCharCode(97 + j)
                  return (
                    <label key={j} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${answers[q.id] === opt ? 'border-[color:var(--brand-gold)] bg-[rgba(212,175,55,0.1)]' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]'}`}>
                      <input type="radio" name={`q-${q.id}`} value={opt} onChange={() => setAnswers(prev => ({ ...prev, [q.id]: opt }))} className="accent-[color:var(--brand-gold)]" />
                      <span className="text-sm text-[color:var(--text-core)]">{optKey}. {opt}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          ))}
          <button onClick={submitExam} disabled={submitting || Object.keys(answers).length < questions.length} className="btn-gold px-8 py-3 font-bold disabled:opacity-50">
            {submitting ? 'Submitting...' : 'Submit Answers'}
          </button>
        </div>
      )}
      <div className="mt-6"><Link href="/dashboard" className="text-sm gold font-semibold flex items-center gap-1 w-fit"><ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard</Link></div>
    </div>
  )
}
