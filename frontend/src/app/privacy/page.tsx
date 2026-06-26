import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zeelin Academy',
  description: 'Zeelin Academy privacy policy outlining how we collect, use, store, and protect your personal data in compliance with UK GDPR and Data Protection Act 2018.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-sm font-semibold transition-colors" style={{ color: 'var(--brand-gold)' }}>← Back to Home</Link>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-black mb-8" style={{ color: 'var(--text-core)' }}>
          Privacy <span style={{ color: 'var(--brand-gold)' }}>Policy</span>
        </h1>

        <p className="text-sm mb-10" style={{ color: 'var(--text-secondary)' }}>
          Last updated: June 2026
        </p>

        <div className="space-y-10" style={{ color: 'var(--text-secondary)' }}>
          {/* 1. Introduction */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>1. Introduction</h2>
            <p className="leading-relaxed mb-3">
              Zeelin Academy (we, us, our) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit our website at zeelin-academy.vercel.app (the Site) or use our services, including enrolment in courses, the Pathway Finder assessment, and any related communications.
            </p>
            <p className="leading-relaxed mb-3">
              We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Zeelin Academy is the data controller responsible for your personal data.
            </p>
          </section>

          {/* 2. Data We Collect */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>2. Personal Data We Collect</h2>
            <p className="leading-relaxed mb-3">
              We may collect, use, store, and transfer the following categories of personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Identity Data:</strong> first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> email address, phone number, billing address.</li>
              <li><strong>Enrolment Data:</strong> course selections, payment history, assessment responses from the Pathway Finder.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types, operating system and platform, and other technology on the devices you use to access the Site.</li>
              <li><strong>Usage Data:</strong> information about how you use our Site, products, and services, including page interaction data and course completion statistics.</li>
              <li><strong>Marketing and Communications Data:</strong> your preferences in receiving marketing from us and your communication preferences.</li>
            </ul>
          </section>

          {/* 3. How We Collect Data */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>3. How We Collect Your Personal Data</h2>
            <p className="leading-relaxed mb-3">
              We collect data through the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Direct interactions:</strong> when you enrol in a course, complete the Pathway Finder, subscribe to our newsletter, fill in a contact form, or correspond with us by phone, email, or otherwise.</li>
              <li><strong>Automated technologies:</strong> as you interact with our Site, we may automatically collect Technical Data and Usage Data through cookies and similar technologies.</li>
              <li><strong>Third parties:</strong> we may receive data from analytics providers (such as Google Analytics), payment processors, and advertising networks.</li>
            </ul>
          </section>

          {/* 4. How We Use Data */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>4. How We Use Your Personal Data</h2>
            <p className="leading-relaxed mb-3">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>To register you as a new student and process your enrolment.</li>
              <li>To deliver our courses and provide you with access to learning materials, assessments, and certification support.</li>
              <li>To manage our relationship with you, including notifying you of changes to our terms or privacy policy.</li>
              <li>To administer and protect our business and the Site (including troubleshooting, data analysis, testing, system maintenance, and security).</li>
              <li>To deliver relevant website content and advertisements to you and measure the effectiveness of our advertising.</li>
              <li>To use data analytics to improve our Site, products, services, marketing, and user experience.</li>
              <li>To make suggestions and recommendations to you about courses or services that may be of interest to you.</li>
            </ul>
          </section>

          {/* 5. Legal Basis */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>5. Legal Basis for Processing</h2>
            <p className="leading-relaxed mb-3">
              Under UK GDPR, the legal bases we rely on for processing your personal data are:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Consent:</strong> where you have given clear consent for us to process your data for a specific purpose (e.g., marketing emails). You have the right to withdraw consent at any time.</li>
              <li><strong>Contractual obligation:</strong> where processing is necessary for the performance of a contract with you (e.g., providing access to a course you have enrolled in).</li>
              <li><strong>Legal obligation:</strong> where processing is necessary for compliance with a legal obligation (e.g., retaining financial records).</li>
              <li><strong>Legitimate interests:</strong> where processing is necessary for our legitimate interests (e.g., improving our services, fraud prevention) and your interests and fundamental rights do not override those interests.</li>
            </ul>
          </section>

          {/* 6. Data Sharing */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>6. Data Sharing and Disclosures</h2>
            <p className="leading-relaxed mb-3">
              We may share your personal data with the following categories of third parties:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Service providers:</strong> hosting providers (Vercel, Render), email delivery services (Brevo), payment processors (Stripe, PayPal), and analytics providers (Google Analytics).</li>
              <li><strong>Professional advisers:</strong> lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services.</li>
              <li><strong>Regulatory authorities:</strong> if required by law, we may disclose your data to law enforcement, tax authorities, or other governmental agencies.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.
            </p>
          </section>

          {/* 7. International Transfers */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>7. International Transfers</h2>
            <p className="leading-relaxed mb-3">
              Your personal data may be transferred to, and processed in, countries outside the UK. Where we transfer your data, we ensure a similar degree of protection is afforded to it by implementing appropriate safeguards, such as Standard Contractual Clauses approved by the UK Information Commissioner&apos;s Office or reliance on adequacy decisions.
            </p>
          </section>

          {/* 8. Data Retention */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>8. Data Retention</h2>
            <p className="leading-relaxed mb-3">
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. By law, we must keep basic information about our students (including Contact, Identity, and Financial Data) for six years after they cease being students for tax and accounting purposes.
            </p>
          </section>

          {/* 9. Your Rights */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>9. Your Legal Rights</h2>
            <p className="leading-relaxed mb-3">
              Under UK GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Right to be informed:</strong> you have the right to be told how your personal data will be used.</li>
              <li><strong>Right of access:</strong> you have the right to request a copy of the personal data we hold about you.</li>
              <li><strong>Right to rectification:</strong> you have the right to request that we correct any incomplete or inaccurate data.</li>
              <li><strong>Right to erasure:</strong> you have the right to request deletion of your personal data where there is no good reason for us continuing to process it.</li>
              <li><strong>Right to restrict processing:</strong> you have the right to request the restriction of processing of your personal data in certain circumstances.</li>
              <li><strong>Right to data portability:</strong> you have the right to request the transfer of your personal data to you or a third party in a structured, commonly used, machine-readable format.</li>
              <li><strong>Right to object:</strong> you have the right to object to processing of your personal data where we are relying on a legitimate interest.</li>
              <li><strong>Rights in relation to automated decision-making:</strong> you have the right not to be subject to a decision based solely on automated processing, including profiling.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              If you wish to exercise any of these rights, please contact us at privacy@zeelinacademy.com. You also have the right to make a complaint at any time to the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues.
            </p>
          </section>

          {/* 10. Cookies */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>10. Cookies</h2>
            <p className="leading-relaxed mb-3">
              Our Site uses cookies and similar tracking technologies to distinguish you from other users, provide a good experience, and improve our services. A cookie is a small file of letters and numbers that we store on your browser or device if you agree.
            </p>
            <p className="leading-relaxed mb-3">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Strictly necessary cookies:</strong> required for the operation of our Site (e.g., to enable you to log into secure areas).</li>
              <li><strong>Analytical/performance cookies:</strong> allow us to recognise and count the number of visitors and see how visitors move around our Site.</li>
              <li><strong>Functionality cookies:</strong> used to recognise you when you return to our Site and remember your preferences.</li>
              <li><strong>Targeting cookies:</strong> record your visit to our Site, the pages you have visited, and the links you have followed.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, some parts of our Site may become inaccessible or not function properly.
            </p>
          </section>

          {/* 11. Security */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>11. Data Security</h2>
            <p className="leading-relaxed mb-3">
              We have implemented appropriate technical and organisational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. These include encryption, access controls, and secure server infrastructure.
            </p>
            <p className="leading-relaxed mb-3">
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          {/* 12. Third-Party Links */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>12. Third-Party Links</h2>
            <p className="leading-relaxed mb-3">
              Our Site may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          {/* 13. Children */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>13. Children&apos;s Data</h2>
            <p className="leading-relaxed mb-3">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If you become aware that a child has provided us with personal data without parental consent, please contact us, and we will take steps to remove the data.
            </p>
          </section>

          {/* 14. Changes */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>14. Changes to This Policy</h2>
            <p className="leading-relaxed mb-3">
              We may update this Privacy Policy from time to time. Any changes we make will be posted on this page and, where appropriate, notified to you by email. Please check back frequently to see any updates or changes.
            </p>
          </section>

          {/* 15. Contact */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>15. Contact Us</h2>
            <p className="leading-relaxed mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Email:</strong> privacy@zeelinacademy.com</li>
              <li><strong>Data Protection Officer:</strong> dpo@zeelinacademy.com</li>
              <li><strong>Post:</strong> Zeelin Academy, Data Protection Office, [Registered Address]</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You have the right to make a complaint at any time to the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk).
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
