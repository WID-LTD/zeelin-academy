import Link from 'next/link'
import { ArrowRight, BookOpen, FileSpreadsheet, FolderKanban, SearchCheck } from 'lucide-react'
import { stockImages } from '@/lib/jobReadinessData'

const resources=[
  ['Career role maps','Understand the job titles inside each Zeelin package and how related roles differ.',BookOpen],
  ['Project templates','Use structured starting files for requirements, process maps, analysis and evidence.',FileSpreadsheet],
  ['Portfolio evidence guides','Learn how to organise project outputs so they are easy to review and discuss.',FolderKanban],
  ['Job acquisition guides','Use repeatable routines for sourcing roles, tailoring applications and tracking progress.',SearchCheck],
]

export default function ResourcesPage(){
  return <div className="jr-site"><section className="jr-split-hero reverse"><img src={stockImages.resources} alt="Professional working with learning resources"/><div><span>ZEELIN RESOURCES</span><h1>Practical resources for the work, not just revision notes.</h1><p>Use templates, career maps, project guides and acquisition resources to support every stage of the job-readiness journey.</p><Link href="/packages" className="jr-btn-primary">Explore packages <ArrowRight size={16}/></Link></div></section>
  <section className="jr-section"><div className="jr-section-heading"><span>RESOURCE LIBRARY</span><h2>Designed around real learner tasks.</h2><p>Resources are organised by what you are trying to achieve: understand a role, deliver a project, build evidence or acquire a job.</p></div><div className="jr-resource-grid">{resources.map(([title,desc,Icon]:any)=><article key={title}><Icon/><h3>{title}</h3><p>{desc}</p><span>Available through your package</span></article>)}</div></section>
  <section className="jr-resource-band"><div><span>PACKAGE-SPECIFIC RESOURCES</span><h2>Your package determines which templates, tools and role guides are most relevant.</h2><p>This keeps the resource library focused instead of overwhelming you with files that do not relate to your target work.</p></div><Link href="/pathway-finder" className="jr-btn-light">Find my package</Link></section></div>
}
