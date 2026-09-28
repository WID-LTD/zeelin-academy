'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, CreditCard, Loader2, ShieldCheck } from 'lucide-react'
import { jobReadinessPackages } from '@/lib/jobReadinessData'

type ApiPackage={slug:string;price:number|null;currency:string}

function EnrollFlow(){
  const search=useSearchParams()
  const initial=search.get('package') || ''
  const [step,setStep]=useState(1)
  const [form,setForm]=useState({fullName:'',email:'',phone:'',packageSlug:initial,experience:'',goals:''})
  const [sending,setSending]=useState(false)
  const [codeSent,setCodeSent]=useState(false)
  const [code,setCode]=useState('')
  const [verified,setVerified]=useState(false)
  const [enrollmentId,setEnrollmentId]=useState<number|null>(null)
  const [apiPackages,setApiPackages]=useState<ApiPackage[]>([])
  const [paying,setPaying]=useState(false)

  useEffect(()=>{fetch('/api/packages').then(r=>r.ok?r.json():[]).then(setApiPackages).catch(()=>setApiPackages([]))},[])
  const selected=useMemo(()=>jobReadinessPackages.find(p=>p.slug===form.packageSlug),[form.packageSlug])
  const priced=apiPackages.find(p=>p.slug===form.packageSlug)
  const can1=form.fullName&&form.email&&form.phone
  const can2=!!form.packageSlug

  const submit=async()=>{
    if(!selected)return
    setSending(true)
    try{
      const res=await fetch('/api/enroll',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        fullName:form.fullName,email:form.email,phone:form.phone,
        selectedModule:selected.name,enrollmentType:'package',experience:form.experience,goals:form.goals,packageSlug:form.packageSlug
      })})
      const data=await res.json()
      if(res.ok){setEnrollmentId(data.enrollment_id||null);setCodeSent(true)}else alert(data.error||'Unable to submit enrollment')
    }catch{alert('Unable to submit enrollment')}
    setSending(false)
  }

  const verify=async()=>{
    const res=await fetch('/api/verify-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:form.email,code})})
    if(res.ok)setVerified(true);else{const d=await res.json();alert(d.error||'Invalid verification code')}
  }

  const pay=async()=>{
    if(!enrollmentId||!priced||!priced.price){return}
    setPaying(true)
    try{
      const res=await fetch('/api/payments/create-checkout-session',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        enrollmentId,packageSlug:form.packageSlug,amount:priced.price,email:form.email,fullName:form.fullName
      })})
      const d=await res.json();if(d.url)window.location.href=d.url;else alert(d.error||'Unable to start checkout')
    }catch{alert('Unable to start checkout')}
    setPaying(false)
  }

  if(verified){
    return <section className="jr-enroll-complete"><CheckCircle2/><span>EMAIL VERIFIED</span><h1>{selected?.name}</h1><p>Your enrollment is ready for the package checkout stage.</p>
      {priced&&priced.price ? <><div className="jr-price-box"><span>Package price</span><b>{priced.currency==='GBP'?'£':''}{priced.price}</b></div><button className="jr-btn-primary" onClick={pay} disabled={paying}>{paying?<Loader2 className="animate-spin"/>:<CreditCard/>} {paying?'Opening checkout...':'Proceed to secure payment'}</button></> :
      <div className="jr-pricing-pending"><ShieldCheck/><div><b>Package pricing is not configured in the live catalogue yet.</b><p>Your package selection has been captured. Contact admissions to complete pricing and checkout rather than using an invented price.</p><Link href="/contact" className="jr-btn-primary">Contact admissions</Link></div></div>}
    </section>
  }

  if(codeSent){
    return <section className="jr-enroll-shell"><div className="jr-enroll-card small"><span>VERIFY YOUR EMAIL</span><h1>One last check.</h1><p>Enter the six-digit code sent to <b>{form.email}</b>.</p><input className="jr-code" value={code} maxLength={6} onChange={e=>setCode(e.target.value.replace(/\D/g,''))} placeholder="000000"/><button className="jr-btn-primary" onClick={verify} disabled={code.length!==6}>Verify enrollment</button></div></section>
  }

  return <section className="jr-enroll-shell">
    <div className="jr-enroll-intro"><span>PACKAGE ENROLLMENT</span><h1>Choose a career category, not a disconnected module.</h1><p>Your selected package becomes your complete Zeelin pathway: training, one work-experience project, mentorship, assessment and job acquisition.</p><div><CheckCircle2/> One package = one course</div><div><CheckCircle2/> One package = one project</div><div><CheckCircle2/> One package = role-specific acquisition</div></div>
    <div className="jr-enroll-card">
      <div className="jr-enroll-progress"><i style={{width:(step/3*100)+'%'}}></i></div><small>STEP {step} OF 3</small>
      {step===1&&<div><h2>Tell us who you are.</h2><div className="jr-form-grid"><label>Full name<input value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})}/></label><label>Email<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label></div><label>Phone<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label></div>}
      {step===2&&<div><h2>Choose your job-readiness package.</h2><div className="jr-enroll-packages">{jobReadinessPackages.map(p=><button key={p.slug} className={form.packageSlug===p.slug?'selected':''} onClick={()=>setForm({...form,packageSlug:p.slug})}><img src={p.image} alt=""/><span><b>{p.name}</b><small>{p.roles.length} target roles</small></span></button>)}</div></div>}
      {step===3&&<div><h2>Tell us where you are starting from.</h2><label>Current experience<select value={form.experience} onChange={e=>setForm({...form,experience:e.target.value})}><option value="">Select one</option><option>Complete beginner</option><option>Career changer</option><option>Some relevant experience</option><option>Already working in a related role</option></select></label><label>Career goal<textarea rows={5} value={form.goals} onChange={e=>setForm({...form,goals:e.target.value})} placeholder="What role or career change are you working toward?"/></label>{selected&&<div className="jr-selected-summary"><img src={selected.image} alt=""/><div><span>SELECTED PACKAGE</span><b>{selected.name}</b><small>{selected.roles.length} roles · training + project + job acquisition</small></div></div>}</div>}
      <footer><button className="jr-btn-secondary" disabled={step===1} onClick={()=>setStep(step-1)}><ArrowLeft size={14}/> Back</button>{step<3?<button className="jr-btn-primary" disabled={step===1?!can1:!can2} onClick={()=>setStep(step+1)}>Continue <ArrowRight size={14}/></button>:<button className="jr-btn-primary" disabled={sending||!can2} onClick={submit}>{sending?<Loader2 className="animate-spin"/>:null} Submit enrollment</button>}</footer>
    </div>
  </section>
}

export default function EnrollPage(){return <Suspense fallback={<div className="jr-enroll-shell">Loading...</div>}><EnrollFlow/></Suspense>}
