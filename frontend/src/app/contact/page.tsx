'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'
import { stockImages } from '@/lib/jobReadinessData'

export default function ContactPage(){
  const [form,setForm]=useState({name:'',email:'',subject:'',message:''})
  const [sending,setSending]=useState(false)
  const [done,setDone]=useState(false)
  const submit=async(e:React.FormEvent)=>{
    e.preventDefault();setSending(true)
    try{
      const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      if(res.ok)setDone(true);else alert('Unable to send your message. Please try again.')
    }catch{alert('Unable to connect. Please try again.')}
    setSending(false)
  }
  return <div className="jr-site">
    <section className="jr-split-hero"><div><span>CONTACT ZEELIN</span><h1>Tell us where you want your career to go.</h1><p>Ask about packages, pathway selection, enrollment, partnerships or platform support. We will point you to the right next step.</p><div className="jr-contact-pills"><span><Mail/> info@zeelinacademy.com</span><span><MessageCircle/> Package guidance available</span></div></div><img src={stockImages.support} alt="Professional support discussion"/></section>
    <section className="jr-contact-wrap">
      <div className="jr-contact-info"><span>START WITH THE RIGHT QUESTION</span><h2>Not sure which package fits?</h2><p>Use Pathway Finder first. If your situation is more specific, send us a message and include your current role, target role and the kind of work you want to move into.</p><Link href="/pathway-finder" className="jr-btn-secondary">Use Pathway Finder <ArrowRight size={15}/></Link><div className="jr-contact-checks"><span><CheckCircle2/> Package & career-category guidance</span><span><CheckCircle2/> Enrollment support</span><span><CheckCircle2/> Technical help</span><span><CheckCircle2/> Partnerships & organisations</span></div></div>
      <div className="jr-contact-form">
        {done ? <div className="jr-contact-success"><CheckCircle2/><h2>Message sent.</h2><p>Thank you. The Zeelin team will review your message and respond as soon as possible.</p><Link href="/" className="jr-btn-primary">Back to homepage</Link></div> :
        <form onSubmit={submit}><span>CONTACT FORM</span><h2>How can we help?</h2><div className="jr-form-grid"><label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label></div><label>Subject<input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/></label><label>Message<textarea rows={6} required value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button className="jr-btn-primary" disabled={sending}>{sending?'Sending...':'Send message'} <Send size={15}/></button></form>}
      </div>
    </section>
  </div>
}
