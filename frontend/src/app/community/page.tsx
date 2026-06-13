import Link from 'next/link'
export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[color:var(--text-core)] mb-8">Community</h1>
      <p className="text-xl text-[color:var(--text-secondary)] mb-6">Join the Zeelin Academy community of aspiring Business Analysts.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { title: 'Discussion Forum', desc: 'Connect with fellow learners, ask questions, and share study tips.' },
          { title: 'Study Groups', desc: 'Form or join study groups for collaborative learning and exam preparation.' },
          { title: 'Events & Webinars', desc: 'Attend live sessions, workshops, and networking events with industry experts.' },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] text-center">
            <h3 className="font-bold text-xl text-[color:var(--text-core)] mb-2">{item.title}</h3>
            <p className="text-[color:var(--text-secondary)]">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[color:var(--text-secondary)] mb-4">Access the community forum from your student dashboard to start participating in discussions.</p>
      <Link href="/dashboard/community" className="btn-gold px-8 py-3 font-bold inline-block">Go to Community Forum</Link>
      <div className="mt-10"><Link href="/" className="gold font-semibold">&larr; Back to Home</Link></div>
    </div>
  )
}
