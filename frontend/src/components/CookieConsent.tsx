'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 p-4 md:bottom-4 md:left-4 md:right-auto md:w-full md:max-w-[25rem]">
      <div className="relative rounded-lg bg-[#0F1115] p-4 shadow-xl">
        <button
          onClick={reject}
          className="absolute right-2 top-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>
        <p className="mb-4 pr-6 text-sm text-neutral-300">
          We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 rounded-lg bg-[#D4A843] px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Accept All
          </button>
          <button
            onClick={reject}
            className="flex-1 rounded-lg border border-neutral-600 px-4 py-2 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-400 hover:text-white"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  )
}
