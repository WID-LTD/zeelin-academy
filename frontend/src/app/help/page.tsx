import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const faqs=[
 ['What exactly do I purchase?','You purchase a job-readiness package. Each package represents one career category and includes its complete training-to-job-acquisition pathway.'],
 ['Is a package the same as a course?','Yes. In the Zeelin model, one package is one course and one course is one package. The package contains the shared foundation, role differentiators and the connected readiness journey.'],
 ['Do I need to choose one job title immediately?','No. You select a category package first. You can then explore and develop toward the roles inside that category as you learn more about the work.'],
 ['Does every package include a project?','Yes. Each package is designed around one substantial work-experience project that helps you produce evidence and practise professional delivery.'],
 ['What happens after the project?','You continue through mentorship, evaluation and the Job Acquisition Portal for relevant roles.'],
]

export default function HelpPage(){
 return <div className="jr-site"><section className="jr-subhero"><span>HELP CENTER</span><h1>Understand how the Zeelin system works.</h1><p>Clear answers about packages, pathways, projects, mentorship and job acquisition.</p></section><section className="jr-help-wrap"><div>{faqs.map((f,i)=><details key={f[0]} open={i===0}><summary>{f[0]}</summary><p>{f[1]}</p></details>)}</div><aside><h2>Still need help?</h2><p>Talk to the Zeelin team about your career goal or package choice.</p><Link href="/contact" className="jr-btn-primary">Contact us <ArrowRight size={15}/></Link><Link href="/pathway-finder" className="jr-btn-secondary">Use Pathway Finder</Link></aside></section></div>
}
