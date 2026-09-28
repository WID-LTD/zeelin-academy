import Link from 'next/link'
import { ArrowRight, Headphones, MessageCircle, CalendarDays, LifeBuoy } from 'lucide-react'
import { stockImages } from '@/lib/jobReadinessData'

export default function SupportPage(){
  return <div className="jr-site"><section className="jr-split-hero"><div><span>SUPPORT CENTER</span><h1>Get help at the point you actually need it.</h1><p>Whether you are choosing a package, working through training, completing a project or applying for roles, support should be connected to the stage you are in.</p><Link href="/contact" className="jr-btn-primary">Contact support <ArrowRight size={16}/></Link></div><img src={stockImages.support} alt="Professional support conversation"/></section>
  <section className="jr-section"><div className="jr-support-cards"><article><Headphones/><h3>Admissions support</h3><p>Questions about packages, enrollment and choosing the right category.</p><Link href="/contact">Talk to admissions</Link></article><article><MessageCircle/><h3>Learner support</h3><p>Help with your training workflow, resources and platform access.</p><Link href="/help">Open help center</Link></article><article><CalendarDays/><h3>Mentor support</h3><p>Use mentorship sessions for project review, blockers and professional feedback.</p><Link href="/community">See community support</Link></article><article><LifeBuoy/><h3>Technical support</h3><p>Report access, account or system issues so the team can investigate.</p><Link href="/contact">Report an issue</Link></article></div></section></div>
}
