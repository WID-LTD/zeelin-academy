import Link from 'next/link'
import { jobReadinessPackages } from '@/lib/jobReadinessData'

const links=[['/','Home'],['/packages','Packages'],['/courses','Curriculum'],['/pathway-finder','Pathway Finder'],['/about','About'],['/resources','Resources'],['/community','Community'],['/support','Support'],['/contact','Contact'],['/enroll','Enroll'],['/login','Sign in'],['/privacy','Privacy'],['/terms','Terms']]

export default function SitemapPage(){
 return <div className="jr-site"><section className="jr-subhero"><span>SITEMAP</span><h1>Explore the Zeelin Job Readiness System.</h1><p>Public pages, package pathways and learner support.</p></section><section className="jr-sitemap"><div><h2>Main pages</h2>{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div><div><h2>Job Readiness Packages</h2>{jobReadinessPackages.map(p=><Link key={p.slug} href={'/packages/'+p.slug}>{p.name}</Link>)}</div></section></div>
}
