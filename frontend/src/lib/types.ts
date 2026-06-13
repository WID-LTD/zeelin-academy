export interface Stats {
  total: number
  free: number
  paid: number
  verified: number
}

export interface Enrollment {
  id: number
  full_name: string
  email: string
  phone: string
  selected_module: string
  enrollment_type: string
  status: string
  created_at: string
}

export interface User {
  id: number
  email: string
  full_name: string
  role: string
  created_at: string
}

export interface ApiError {
  error: string
}

export interface LoginResponse {
  token: string
  user: User
}

export interface GenerateCredentialsResponse {
  generatedPassword?: string
}

export interface EnrollPayload {
  fullName: string
  email: string
  phone: string
  selectedModule: string
  enrollmentType: string
  experience: string
  goals: string
}

export interface VerifyCodePayload {
  email: string
  code: string
}
