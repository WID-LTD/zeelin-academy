import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Zeelin Academy',
  description: 'Zeelin Academy terms and conditions governing enrolment, payments, refunds, intellectual property, liability, and the use of our Business Analysis education platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-sm font-semibold transition-colors" style={{ color: 'var(--brand-gold)' }}>← Back to Home</Link>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-black mb-8" style={{ color: 'var(--text-core)' }}>
          Terms &amp; <span style={{ color: 'var(--brand-gold)' }}>Conditions</span>
        </h1>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p className="text-base font-medium" style={{ color: 'var(--text-muted)' }}>
            Last updated: June 2026
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>1. Introduction</h2>
            <p>Welcome to Zeelin Academy (hereinafter referred to as &ldquo;Zeelin Academy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms and Conditions (the &ldquo;Terms&rdquo;) constitute a legally binding agreement between you (the &ldquo;User,&rdquo; &ldquo;Student,&rdquo; or &ldquo;Learner&rdquo;) and Zeelin Academy governing your access to and use of our website, platform, courses, materials, content, and all related services (collectively, the &ldquo;Services&rdquo;). By accessing, browsing, registering, enrolling, or otherwise using any part of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree with any provision contained herein, you must immediately cease all use of our Services and refrain from enrolling in any programme or course offered by Zeelin Academy.</p>
            <p className="mt-4">Zeelin Academy reserves the right, at its sole discretion, to modify, amend, update, or replace these Terms at any time without prior notice. It is your sole responsibility to review these Terms periodically for any changes. Your continued use of the Services after any such modifications shall constitute your acceptance of the revised Terms. If you do not agree to the amended Terms, you must discontinue your use of the Services immediately. Certain provisions of these Terms may be superseded by expressly designated legal notices or terms located on particular pages of our website.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>2. Definitions and Interpretation</h2>
            <p>For the purposes of these Terms, the following definitions shall apply unless the context requires otherwise:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>&ldquo;Academy&rdquo;</strong> means Zeelin Academy, its owners, operators, affiliates, instructors, employees, agents, and assigns.</li>
              <li><strong>&ldquo;Course&rdquo;</strong> means any educational programme, module, pathway, workshop, seminar, or training session offered by Zeelin Academy, whether delivered live, recorded, online, in-person, or through any other medium.</li>
              <li><strong>&ldquo;Content&rdquo;</strong> includes but is not limited to all video recordings, audio recordings, text materials, presentations, slides, documents, PDF files, assessments, quizzes, examination papers, case studies, templates, frameworks, images, graphics, software, and any other educational or informational resources provided by Zeelin Academy.</li>
              <li><strong>&ldquo;Platform&rdquo;</strong> means the Zeelin Academy website, learning management system, mobile application, and any other digital interface through which Services are delivered.</li>
              <li><strong>&ldquo;Enrolment&rdquo;</strong> means the process by which a User registers for and gains access to a Course or Programme, subject to the payment of applicable fees.</li>
              <li><strong>&ldquo;Fees&rdquo;</strong> means all charges, costs, subscriptions, and payments required to access the Services, including but not limited to course fees, enrolment fees, registration fees, examination fees, certification fees, and any applicable taxes, levies, or surcharges.</li>
              <li><strong>&ldquo;BCS&rdquo;</strong> means the British Computer Society, The Chartered Institute for IT, and any of its affiliated examination bodies.</li>
              <li><strong>&ldquo;Certification&rdquo;</strong> means any certificate, diploma, badge, or credential awarded upon successful completion of a Course or examination, whether awarded by Zeelin Academy, BCS, or any other awarding body.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>3. Eligibility and Registration</h2>
            <p>By registering with Zeelin Academy, you represent and warrant that you are at least eighteen (18) years of age or have obtained the consent of a parent or legal guardian. You agree to provide accurate, current, and complete information during the registration process and to update such information promptly to maintain its accuracy and completeness. Zeelin Academy reserves the right to suspend, terminate, or refuse any registration or enrolment if we reasonably suspect that the information provided is false, misleading, or fraudulent, or if we determine, in our sole discretion, that your registration may violate any applicable law, regulation, or third-party right.</p>
            <p className="mt-4">You are solely responsible for maintaining the confidentiality of your account credentials, including your username and password. You accept full responsibility for all activities that occur under your account, whether or not expressly authorised by you. You must notify Zeelin Academy immediately of any unauthorised use of your account or any other breach of security. Zeelin Academy shall not be liable for any loss, damage, or liability arising from your failure to safeguard your account credentials or from any unauthorised access to your account.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>4. Enrolment and Payment Terms</h2>
            <p>Enrolment in any Course or Programme offered by Zeelin Academy is subject to availability and acceptance. Zeelin Academy reserves the right to limit the number of enrolments, reject any enrolment application, or cancel any enrolment at its sole discretion, with or without cause, and without liability beyond a full refund of any Fees paid. All Fees are quoted in the currency specified on the Platform at the time of enrolment and are exclusive of any applicable taxes, duties, or levies unless otherwise stated.</p>
            <p className="mt-4">Payment for Courses and Programmes must be made in full at the time of enrolment unless an alternative payment plan has been expressly agreed in writing by Zeelin Academy. Where payment plans are offered, you agree to make all instalment payments on or before the due dates specified. Failure to make any payment when due may result in immediate suspension of your access to the Course or Programme, and Zeelin Academy reserves the right to revoke access entirely if payment is not received within fourteen (14) days of the due date. Late payments may incur additional charges at a rate of 1.5% per month or the maximum rate permitted by applicable law, whichever is lower.</p>
            <p className="mt-4">All payments are processed through third-party payment processors. Zeelin Academy does not store, process, or have access to your full payment card details. You agree to be bound by the terms and conditions of any third-party payment processor used in connection with your enrolment. Zeelin Academy shall not be liable for any errors, delays, or failures arising from the use of third-party payment processors.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>5. Refund and Cancellation Policy</h2>
            <p>Zeelin Academy is committed to providing high-quality educational services. However, we recognise that circumstances may arise where a refund is appropriate. Our refund policy is as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Cancellation before course start:</strong> If you cancel your enrolment in writing at least fourteen (14) days before the scheduled start date of the Course, you shall receive a full refund of all Fees paid, less an administrative processing fee of £50 or 5% of the total Fees, whichever is greater.</li>
              <li><strong>Cancellation within 14 days of course start:</strong> If you cancel your enrolment within fourteen (14) days of the scheduled start date but before the Course has commenced, you shall receive a refund of 75% of the Fees paid.</li>
              <li><strong>Cancellation after course commencement:</strong> If you cancel your enrolment after the Course has commenced, you shall receive a pro-rata refund based on the proportion of the Course not yet delivered, less an administrative processing fee of £100 or 10% of the total Fees, whichever is greater. No refund shall be given if more than 50% of the Course has been delivered.</li>
              <li><strong>Dissatisfaction guarantee:</strong> If you are dissatisfied with the quality of the Course within the first seven (7) days of access, you may request a full refund, provided that you have completed no more than 20% of the Course content. This guarantee applies only to the first Course you enrol in and does not apply to repeat enrolments, bundle purchases, or promotional offers.</li>
              <li><strong>Exam fees and third-party charges:</strong> Fees paid to third-party examination bodies, including but not limited to BCS examination fees, are non-refundable and non-transferable unless the relevant examination body expressly permits otherwise.</li>
            </ul>
            <p className="mt-4">All refund requests must be submitted in writing to contact@zeelinacademy.com and will be processed within thirty (30) business days of approval. Refunds will be issued using the same payment method used for the original transaction, unless otherwise agreed. Zeelin Academy reserves the right to deduct any applicable bank charges, currency conversion fees, or transaction costs from the refund amount.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>6. Intellectual Property Rights</h2>
            <p>All Content provided by Zeelin Academy, including but not limited to course materials, video recordings, presentations, text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the exclusive intellectual property of Zeelin Academy or its licensors and is protected by applicable copyright, trademark, patent, and other intellectual property laws of the United Kingdom and international treaties. The Zeelin Academy name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Zeelin Academy or its affiliates.</p>
            <p className="mt-4">Upon enrolment and payment of applicable Fees, Zeelin Academy grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Content solely for your personal, non-commercial educational purposes. You may not, under any circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Reproduce, distribute, modify, adapt, translate, create derivative works from, publicly perform, publicly display, or otherwise exploit any Content, in whole or in part, without the prior written consent of Zeelin Academy;</li>
              <li>Download, record, capture, store, archive, or copy any Content except as expressly permitted by Zeelin Academy for offline viewing within the Platform;</li>
              <li>Share, transfer, sublicense, sell, rent, lease, lend, barter, or otherwise make available your account access or any Content to any third party;</li>
              <li>Remove, alter, obscure, or circumvent any copyright, trademark, or other proprietary rights notices appearing on or in connection with any Content;</li>
              <li>Use any Content for commercial purposes, including but not limited to training, consulting, or providing educational services to third parties.</li>
            </ul>
            <p className="mt-4">Any unauthorised use of the Content shall constitute a material breach of these Terms and may result in immediate termination of your access, legal action, and claims for damages. Zeelin Academy reserves the right to pursue all available legal remedies, including injunctive relief, without the requirement of posting a bond.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>7. User Conduct and Prohibited Activities</h2>
            <p>You agree to use the Services in a manner consistent with all applicable laws, regulations, and these Terms. You shall not, and shall not permit any third party to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the Services for any unlawful, fraudulent, or unauthorised purpose;</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
              <li>Interfere with, disrupt, or attempt to gain unauthorised access to the Platform, servers, networks, or systems connected to the Services;</li>
              <li>Introduce any viruses, trojans, worms, logic bombs, or other malicious code into the Platform or any systems used to provide the Services;</li>
              <li>Engage in any activity that could damage, disable, overburden, or impair the functioning of the Platform or any associated infrastructure;</li>
              <li>Harvest, collect, or store personal data about other users without their express consent;</li>
              <li>Post, transmit, or share any content that is defamatory, obscene, offensive, harassing, discriminatory, or otherwise objectionable;</li>
              <li>Use any automated means, including bots, scrapers, or crawlers, to access, monitor, or copy any Content or data from the Platform;</li>
              <li>Attempt to circumvent any technological protection measures, access restrictions, or usage limitations implemented by Zeelin Academy.</li>
            </ul>
            <p className="mt-4">Zeelin Academy reserves the right, but has no obligation, to monitor your use of the Services and to investigate any suspected violation of these Terms. We may disclose information about your use of the Services to third parties if we believe in good faith that such disclosure is necessary to comply with a legal obligation, protect our rights or property, or protect the safety of our users or the public.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>8. Examination and Certification</h2>
            <p>Zeelin Academy provides preparatory education and training for BCS examinations and other professional certifications. However, Zeelin Academy does not guarantee that any student will pass any examination or obtain any certification. Examination outcomes depend on a variety of factors, including but not limited to the student&apos;s prior knowledge, study habits, time commitment, comprehension, and examination performance, all of which are outside the control of Zeelin Academy.</p>
            <p className="mt-4">Any references to pass rates, success rates, or student outcomes are based on historical data and are not indicative of future results. Individual results may vary significantly. Zeelin Academy expressly disclaims any warranties or representations regarding examination or certification outcomes.</p>
            <p className="mt-4">Examination fees, registration processes, scheduling, and administration are the sole responsibility of the relevant examination body (e.g., BCS). Zeelin Academy shall not be liable for any errors, omissions, delays, or changes made by such examination bodies. Students are responsible for verifying examination dates, locations, fees, and requirements directly with the relevant examination body.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Zeelin Academy, its officers, directors, employees, agents, instructors, affiliates, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or in connection with your use of or inability to use the Services, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if Zeelin Academy has been advised of the possibility of such damages. This limitation of liability applies regardless of the theory of liability, whether based on contract, tort (including negligence), strict liability, warranty, or any other legal theory.</p>
            <p className="mt-4">Notwithstanding the foregoing, if Zeelin Academy is found to be liable for any damages arising out of or in connection with these Terms or the Services, such liability shall be limited to the total amount of Fees paid by you to Zeelin Academy in the twelve (12) months immediately preceding the event giving rise to the claim. This limitation represents the entire liability of Zeelin Academy and your exclusive remedy for any claim arising under or in connection with these Terms.</p>
            <p className="mt-4">Nothing in these Terms shall exclude or limit liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>10. Disclaimer of Warranties</h2>
            <p>The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without any warranties of any kind, whether express, implied, statutory, or otherwise. To the fullest extent permitted by applicable law, Zeelin Academy expressly disclaims all warranties, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement;</li>
              <li>Warranties that the Services will be uninterrupted, timely, secure, error-free, or free of viruses or other harmful components;</li>
              <li>Warranties regarding the accuracy, completeness, reliability, or currency of any Content;</li>
              <li>Warranties that the results obtained from using the Services will meet your expectations or requirements.</li>
            </ul>
            <p className="mt-4">No advice or information, whether oral or written, obtained by you from Zeelin Academy or through the Services shall create any warranty not expressly stated in these Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Zeelin Academy, its officers, directors, employees, agents, instructors, affiliates, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, and fees (including reasonable legal fees and costs) arising out of or in connection with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your use of the Services in violation of these Terms;</li>
              <li>Your violation of any applicable law, regulation, or third-party right;</li>
              <li>Any content or material you submit, post, transmit, or otherwise make available through the Services;</li>
              <li>Your negligence, wilful misconduct, or fraudulent conduct;</li>
              <li>Any dispute between you and any other user of the Services.</li>
            </ul>
            <p className="mt-4">Zeelin Academy reserves the right, at its own expense, to assume the exclusive defence and control of any matter otherwise subject to indemnification by you, in which event you shall cooperate fully with Zeelin Academy in asserting any available defences.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>12. Termination</h2>
            <p>Zeelin Academy reserves the right to suspend, terminate, or restrict your access to the Services at any time, with or without cause, and with or without notice, including but not limited to cases where we reasonably believe that you have violated these Terms or engaged in conduct that may harm Zeelin Academy, its users, or third parties. Upon termination, your right to access and use the Services shall immediately cease, and you must destroy any copies of Content in your possession or control.</p>
            <p className="mt-4">Sections 5 (Refund and Cancellation Policy), 6 (Intellectual Property Rights), 9 (Limitation of Liability), 10 (Disclaimer of Warranties), 11 (Indemnification), 13 (Governing Law and Dispute Resolution), and 14 (Miscellaneous) shall survive any termination of these Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>13. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of laws principles. Any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by the London Court of International Arbitration (LCIA) in accordance with its rules then in effect. The arbitration shall be conducted in London, England, and the language of the arbitration shall be English. The decision of the arbitrator shall be final and binding on the parties, and judgment upon the award may be entered in any court having jurisdiction thereof.</p>
            <p className="mt-4">Notwithstanding the foregoing, Zeelin Academy may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property rights or to enforce compliance with these Terms. You consent to the exclusive jurisdiction and venue of the courts of London, England, for any such action.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>14. Miscellaneous Provisions</h2>
            <p><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Zeelin Academy regarding your use of the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, whether written or oral.</p>
            <p className="mt-4"><strong>Waiver:</strong> No failure or delay by Zeelin Academy in exercising any right, power, or privilege under these Terms shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, power, or privilege preclude any other or further exercise thereof.</p>
            <p className="mt-4"><strong>Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect.</p>
            <p className="mt-4"><strong>Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without the prior written consent of Zeelin Academy. Zeelin Academy may assign or transfer its rights and obligations under these Terms at any time without notice to you.</p>
            <p className="mt-4"><strong>Notices:</strong> All notices, requests, and other communications under these Terms shall be in writing and shall be deemed duly given if delivered personally, sent by registered post (return receipt requested), or sent by email to the addresses specified on the Platform.</p>
            <p className="mt-4"><strong>Force Majeure:</strong> Zeelin Academy shall not be liable for any failure or delay in performing its obligations under these Terms if such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, strikes, lockouts, pandemics, epidemics, government actions, natural disasters, failure of telecommunications or internet infrastructure, or any other event that is unforeseeable and beyond the reasonable control of Zeelin Academy.</p>
            <p className="mt-4"><strong>Third-Party Rights:</strong> A person who is not a party to these Terms shall have no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of these Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>15. Contact Information</h2>
            <p>If you have any questions, concerns, or requests regarding these Terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>By email: contact@zeelinacademy.com</li>
              <li>By mail: Zeelin Academy, London, United Kingdom</li>
              <li>Through our website: https://zeelin-academy.vercel.app/contact</li>
            </ul>
            <p className="mt-8">We encourage you to read these Terms carefully and to contact us if you have any questions. By using our Services, you acknowledge that you have had the opportunity to review these Terms and that you understand and agree to be bound by them.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <Link href="/" className="btn-gold px-8 py-3 inline-block text-sm font-bold">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
