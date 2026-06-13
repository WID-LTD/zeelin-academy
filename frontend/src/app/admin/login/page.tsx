'use client'

import LoginForm from '@/components/LoginForm'

export default function AdminLogin() {
  return (
    <LoginForm
      title="Admin"
      tokenKey="admin-token"
      userKey="admin-user"
      redirectTo="/admin"
    />
  )
}
