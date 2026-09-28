'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, RotateCcw } from 'lucide-react'
import { jobReadinessPackages } from '@/lib/jobReadinessData'

const interestOptions = [
  ['core-classic-business-analysis','Requirements, processes, operations and consulting'],
  ['technical-business-analysis','Systems, integrations, platforms and technical delivery'],
  ['product-agile','Products, backlogs, Agile teams and digital delivery'],
  ['data-business-intelligence','Data, dashboards, reporting and business intelligence'],
  ['ai-era-business-analysis','AI, automation, intelligent workflows and governance'],
  ['customer-journey','Customer experience, journeys, service and insights'],
  ['industry-specific-analysis','Sector-specific analysis in finance, healthcare, retail, government and more'],
]

const workStyleOptions = [
  ['business','Business problems, stakeholders and change'],
  ['technical','Technology, systems and solution delivery'],
  ['data','Evidence, analytics and decision support'],
  ['customer','Customers, products and service experiences'],
]

export default function PathwayFinderPage() {
  const [step,setStep]=useState(1)
  const [interest,setInterest]=useState('')
  const [workStyle,setWorkStyle]=useState('')
  const [technical,setTechnical]=useState('')
  const [goal,setGoal]=useState('')

  const result=useMemo(()=>{
    if(interest) return jobReadinessPackages.find(p=>p.slug===interest) || jobReadinessPackages[0]
    if(workStyle==='technical') return jobReadinessPackages[1]
    if(workStyle==='data') return technical==='high'?jobReadinessPackages[4]:jobReadinessPackages[3]
    if(workStyle==='customer') return jobReadinessPackages[5]
    return jobReadinessPackages[0]
  },[interest,workStyle,technical])

  const canNext = step===1 ? !!workStyle : step===2 ? !!technical : step===3 ? !!interest : true

  if(step===4){
    return <div className="jr-finder-page"><section className="jr-finder-result">
      <div className="jr-finder-result-image"><img src={result.image} alt="" /></div>
      <div className="jr-finder-result-copy">
        <span>YOUR RECOMMENDED JOB READINESS PACKAGE</span>
        <h1>{result.name}</h1>
        <p>{result.description}</p>
        {goal && <div className="jr-goal-note"><b>Your goal</b><p>{goal}</p></div>}
        <div className="jr-result-role-grid">{result.roles.slice(0,8).map(r=><span key={r}><CheckCircle2 size={14}/>{r}</span>)}</div>
        <div className="jr-hero-actions">
          <Link href={'/packages/'+result.slug} className="jr-btn-primary">Explore this package <ArrowRight size={16}/></Link>
          <Link href={'/enroll?package='+result.slug} className="jr-btn-light">Choose package</Link>
        </div>
        <button className="jr-reset" onClick={()=>{setStep(1);setInterest('');setWorkStyle('');setTechnical('');setGoal('')}}><RotateCcw size={14}/> Start again</button>
      </div>
    </section></div>
  }

  return <div className="jr-finder-page">
    <section className="jr-finder-hero">
      <Compass size={28}/>
      <span>PATHWAY FINDER</span>
      <h1>Find the package that fits the work you want to do.</h1>
      <p>Four focused steps. No exam-pathway jargon. We match your interests to one of Zeelin’s seven job-readiness categories.</p>
    </section>

    <section className="jr-finder-card">
      <div className="jr-finder-progress"><span style={{width:(step/3*100)+'%'}}></span></div>
      <div className="jr-finder-step-label">STEP {step} OF 3</div>

      {step===1 && <div><h2>What kind of work do you naturally enjoy?</h2><p>Choose the direction that feels closest to you.</p><div className="jr-finder-options four">
        {workStyleOptions.map(([id,label])=><button key={id} className={workStyle===id?'selected':''} onClick={()=>setWorkStyle(id)}>{label}</button>)}
      </div></div>}

      {step===2 && <div><h2>How technical do you want your pathway to be?</h2><p>This helps us distinguish classic, technical, data and AI-oriented routes.</p><div className="jr-finder-options three">
        {[['low','Mostly business-facing'],['medium','A balanced mix of business and technology'],['high','Strongly technical / data / AI-oriented']].map(([id,label])=><button key={id} className={technical===id?'selected':''} onClick={()=>setTechnical(id)}>{label}</button>)}
      </div></div>}

      {step===3 && <div><h2>Which career category is most attractive to you?</h2><p>You can explore every role inside the recommended package afterwards.</p><div className="jr-finder-options category">
        {interestOptions.map(([id,label])=><button key={id} className={interest===id?'selected':''} onClick={()=>setInterest(id)}>{label}</button>)}
      </div><label className="jr-goal-field">Optional career goal<textarea value={goal} onChange={e=>setGoal(e.target.value)} placeholder="Example: I want to move from operations into a Business Analyst role."/></label></div>}

      <footer>
        <button className="jr-btn-secondary" disabled={step===1} onClick={()=>setStep(step-1)}><ArrowLeft size={15}/> Back</button>
        <button className="jr-btn-primary" disabled={!canNext} onClick={()=>setStep(step+1)}>{step===3?'Show my package':'Continue'} <ArrowRight size={15}/></button>
      </footer>
    </section>
  </div>
}
