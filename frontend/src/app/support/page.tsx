import Link from 'next/link'
export default function SupportPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[color:var(--text-core)] mb-8">Support &amp; Legal</h1>
      <p className="text-xl text-[color:var(--text-secondary)] mb-10">Get the help you need to make the most of your Zeelin Academy experience.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Technical Support', desc: 'Having trouble accessing your courses or dashboard? Contact our technical team.', email: 'tech@zeelinacademy.com' },
          { title: 'Course Enquiries', desc: 'Questions about course content, modules, or learning pathways? We are here to help.', email: 'courses@zeelinacademy.com' },
          { title: 'Billing Support', desc: 'For payment issues, refunds, or invoice requests.', email: 'billing@zeelinacademy.com' },
          { title: 'General Enquiries', desc: 'Something else? Reach out to our main support team.', email: 'contact@zeelinacademy.com' },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
            <h3 className="font-bold text-xl text-[color:var(--text-core)] mb-2">{item.title}</h3>
            <p className="text-[color:var(--text-secondary)] mb-4">{item.desc}</p>
            <a href={`mailto:${item.email}`} className="gold font-semibold">{item.email}</a>
          </div>
        ))}
      </div>
      <div className="mt-10"><Link href="/" className="gold font-semibold">&larr; Back to Home</Link></div>
    </div>
  )
}
