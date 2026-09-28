import Link from 'next/link'
import { ArrowRight, MessageCircle, UsersRound, Trophy, ShieldCheck } from 'lucide-react'
import { stockImages } from '@/lib/jobReadinessData'

export default function CommunityPage(){
  return <div className="jr-site"><section className="jr-split-hero"><div><span>ZEELIN COMMUNITY</span><h1>Career progress is easier when you are not working in isolation.</h1><p>Discuss project decisions, compare approaches, join accountability routines and learn alongside people building toward related roles.</p><Link href="/packages" className="jr-btn-primary">Choose your package <ArrowRight size={16}/></Link></div><img src={stockImages.hero} alt="Professional learning community"/></section>
  <section className="jr-section"><div className="jr-section-heading"><span>BUILT INTO THE READINESS JOURNEY</span><h2>Community has a job to do.</h2><p>It exists to make delivery, accountability and professional thinking better — not to become another noisy social feed.</p></div><div className="jr-feature-grid">
    <article><MessageCircle/><h3>Project rooms</h3><p>Ask practical questions, share approaches and discuss blockers while working on deliverables.</p></article>
    <article><UsersRound/><h3>Cohort connection</h3><p>Learn with people on related pathways and see how others approach similar problems.</p></article>
    <article><Trophy/><h3>Accountability</h3><p>Daily routines, progress logs and milestones keep the work moving.</p></article>
    <article><ShieldCheck/><h3>Professional standard</h3><p>Mentor-monitored spaces reinforce useful, respectful and evidence-led collaboration.</p></article>
  </div></section></div>
}
