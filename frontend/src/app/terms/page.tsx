import Link from 'next/link'
export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[color:var(--text-core)] mb-8">Terms &amp; Conditions</h1>
      <div className="prose prose-lg max-w-none text-[color:var(--text-secondary)] space-y-6">
        <p>Last updated: June 2026</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">1. Enrollment</h2>
        <p>By enrolling in any Zeelin Academy program, you agree to these terms. Enrollment is confirmed upon successful payment or approval of free access.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">2. Course Access</h2>
        <p>Course materials are provided for personal educational use only. Sharing, redistributing, or selling course content is strictly prohibited.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">3. Payment &amp; Refunds</h2>
        <p>We offer a 14-day money-back guarantee on course fees if you are not satisfied. Refund requests must be submitted in writing to contact@zeelinacademy.com.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">4. Student Responsibilities</h2>
        <p>Students are responsible for their own exam bookings and attendance. Zeelin Academy provides training and preparation support but does not guarantee exam results.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">5. Intellectual Property</h2>
        <p>All course materials, including videos, slides, templates, and quizzes, are the intellectual property of Zeelin Academy and are protected by copyright law.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">6. Limitation of Liability</h2>
        <p>Zeelin Academy provides educational guidance only. We do not guarantee employment, career outcomes, or exam success. Learners should always check official BCS requirements.</p>
      </div>
      <div className="mt-10"><Link href="/" className="gold font-semibold">&larr; Back to Home</Link></div>
    </div>
  )
}
