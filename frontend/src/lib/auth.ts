export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('admin-token')
}

export function getAdminUser(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('admin-user')
}

export function setAdminAuth(token: string, user: unknown) {
  localStorage.setItem('admin-token', token)
  localStorage.setItem('admin-user', JSON.stringify(user))
}

export function clearAdminAuth() {
  localStorage.removeItem('admin-token')
  localStorage.removeItem('admin-user')
}

export function getUserToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('user-token')
}

export function getUserData<T = unknown>(): T | null {
  if (typeof window === 'undefined') return null
  const data = localStorage.getItem('user-data')
  return data ? JSON.parse(data) : null
}

export function setUserAuth(token: string, user: unknown) {
  localStorage.setItem('user-token', token)
  localStorage.setItem('user-data', JSON.stringify(user))
}

export function clearUserAuth() {
  localStorage.removeItem('user-token')
  localStorage.removeItem('user-data')
}

export function dispatchAuthEvent() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('auth-changed'))
  }
}

