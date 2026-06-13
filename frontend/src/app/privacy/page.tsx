import Link from 'next/link'
export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[color:var(--text-core)] mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-[color:var(--text-secondary)] space-y-6">
        <p>Last updated: June 2026</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, including name, email address, phone number, payment information, and course progress data when you enroll in our programs.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">2. How We Use Your Information</h2>
        <p>We use your information to provide and improve our training services, process enrollments, send course updates, communicate with you about your learning journey, and comply with legal obligations.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">3. Data Protection</h2>
        <p>We implement appropriate security measures including encryption, secure servers, and access controls to protect your personal data. We never sell your personal information to third parties.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">4. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data at any time. Contact us at contact@zeelinacademy.com for data requests.</p>
        <h2 className="text-2xl font-bold text-[color:var(--text-core)] mt-8">5. Cookies</h2>
        <p>We use essential cookies for authentication and functionality. Analytics cookies help us improve our platform. You can control cookie preferences in your browser settings.</p>
      </div>
      <div className="mt-10"><Link href="/" className="gold font-semibold">&larr; Back to Home</Link></div>
    </div>
  )
}
