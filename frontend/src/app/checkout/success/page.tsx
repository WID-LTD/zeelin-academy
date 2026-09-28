import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function SuccessPage(){
  return <section className="jr-checkout-state success"><CheckCircle2/><span>PAYMENT CONFIRMED</span><h1>Your Zeelin package journey starts here.</h1><p>Your enrollment has been confirmed. Sign in to access the connected training, work-experience and job-readiness system.</p><div><Link href="/login" className="jr-btn-primary">Go to sign in <ArrowRight size={15}/></Link><Link href="/" className="jr-btn-secondary">Back to homepage</Link></div></section>
}
