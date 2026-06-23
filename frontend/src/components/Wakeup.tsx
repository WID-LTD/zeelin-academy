'use client'
import { useEffect } from 'react'

export default function Wakeup() {
  useEffect(() => {
    fetch('/api/health').catch(() => {})
  }, [])
  return null
}
