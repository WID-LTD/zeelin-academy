'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AlertCircle, ArrowLeft, Loader2 } from 'lucide-react'
import { dispatchAuthEvent } from '@/lib/auth'
import { stockImages } from '@/lib/jobReadinessData'

export default function LoginPage(){
  const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [error,setError]=useState('');const [loading,setLoading]=useState(false);const router=useRouter()
  const submit=async(e:React.FormEvent)=>{e.preventDefault();setLoading(true);setError('');try{const res=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});const data=await res.json();if(!res.ok){setError(data.message||data.error||'Login failed');setLoading(false);return}localStorage.setItem('token',data.token);localStorage.setItem('user',JSON.stringify(data.user));dispatchAuthEvent();router.push('/dashboard')}catch(err){setError(err instanceof Error?err.message:'Connection failed')}setLoading(false)}
  return <section className="jr-login"><div className="jr-login-media"><img src={stockImages.project} alt="Professional project workspace"/><div><span>WELCOME BACK</span><h2>Continue your job-readiness journey.</h2><p>Your training, project evidence, mentorship and progress stay connected.</p></div></div><div className="jr-login-form"><span>ZEELIN JOB READINESS SYSTEM</span><h1>Sign in</h1><p>Access your active package and continue where you left off.</p><form onSubmit={submit}><label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></label>{error&&<div className="jr-error"><AlertCircle size={16}/>{error}</div>}<button className="jr-btn-primary" disabled={loading}>{loading?<Loader2 className="animate-spin"/>:null}{loading?'Signing in...':'Sign in'}</button></form><Link href="/" className="jr-back"><ArrowLeft size={14}/> Back to homepage</Link></div></section>
}
