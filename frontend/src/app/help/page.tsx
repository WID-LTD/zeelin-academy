import Link from 'next/link'
export default function HelpPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[color:var(--text-core)] mb-8">Help Center</h1>
      <p className="text-xl text-[color:var(--text-secondary)] mb-10">Find answers to common questions about Zeelin Academy.</p>
      <div className="space-y-4">
        {[
          { q: 'How do I access my courses?', a: 'After enrolling, log in to your dashboard at zeelinacademy.com/dashboard. All your enrolled courses will appear under "Continue Learning".' },
          { q: 'How long do I have access to course materials?', a: 'You get lifetime access to purchased course materials. You can revisit them anytime from your dashboard.' },
          { q: 'Can I study on mobile?', a: 'Yes! Our platform is fully responsive and works on all devices including phones, tablets, and desktops.' },
          { q: 'How do I reset my password?', a: 'Click "Forgot Password" on the login page. A reset link will be sent to your registered email address.' },
          { q: 'Are the certificates recognized?', a: 'Zeelin Academy certificates are verifiable credentials. They demonstrate your commitment to professional development in Business Analysis.' },
          { q: 'Do you offer refunds?', a: 'Yes. We offer a 14-day money-back guarantee on course fees. Contact billing@zeelinacademy.com to request a refund.' },
          { q: 'How do I book my BCS exam?', a: 'BCS exams are booked separately through the BCS website. Your instructor will guide you through the process during the course.' },
          { q: 'Can I switch modules?', a: 'Yes. Contact your course advisor to discuss switching modules. Additional fees may apply depending on your enrollment plan.' },
        ].map((item, i) => (
          <details key={i} className="group bg-[color:var(--bg-card)] rounded-xl border border-[color:var(--border)] [&_summary::-webkit-details-marker]:hidden cursor-pointer">
            <summary className="flex items-center justify-between p-6 text-[color:var(--text-core)] font-semibold text-lg outline-none">
              {item.q}
              <span className="gold text-2xl group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-6 pb-6 text-[color:var(--text-secondary)] leading-relaxed border-t border-[color:var(--border)] pt-4 mt-2"><p>{item.a}</p></div>
          </details>
        ))}
      </div>
      <div className="mt-10"><Link href="/" className="gold font-semibold">&larr; Back to Home</Link></div>
    </div>
  )
}
