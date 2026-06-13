export const MODULE_NAMES: Record<string, string> = {
  'ba-foundations': 'Business Analysis Foundations',
  'elicitation': 'Elicitation & Collaboration Techniques',
  'requirements-mgmt': 'Requirements Life Cycle Management',
  'strategy-analysis': 'Strategy Analysis',
  'requirements-design': 'Requirements Analysis & Design Definition',
  'solution-evaluation': 'Solution Evaluation',
  'agile-ba': 'Agile Business Analysis',
  'capstone': 'Capstone Project & Certification Prep',
}

export const COUNTDOWN_DATE = '2026-09-07T00:00:00'

export function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}
