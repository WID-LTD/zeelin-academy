import Link from 'next/link'
import { ArrowLeft, CreditCard } from 'lucide-react'

export default function CancelPage(){
  return <section className="jr-checkout-state"><CreditCard/><span>CHECKOUT NOT COMPLETED</span><h1>Your package has not been purchased.</h1><p>No problem. You can return to the package catalogue, compare your options or contact Zeelin if you need help deciding.</p><div><Link href="/packages" className="jr-btn-primary">Return to packages</Link><Link href="/" className="jr-btn-secondary"><ArrowLeft size={15}/> Home</Link></div></section>
}
