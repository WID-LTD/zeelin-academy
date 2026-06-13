export class ApiClient {
  private getToken: () => string | null

  constructor(getToken: () => string | null = () => null) {
    this.getToken = getToken
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken()
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const res = await fetch(path, { ...options, headers })

    if (res.status === 401) {
      localStorage.removeItem('admin-token')
      localStorage.removeItem('admin-user')
      localStorage.removeItem('user-token')
      localStorage.removeItem('user-data')
      window.location.href = window.location.pathname.includes('/admin') ? '/admin/login' : '/dashboard/login'
      throw new Error('Unauthorized')
    }

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || 'Request failed')
    }

    return data as T
  }

  get<T>(path: string) {
    return this.request<T>(path)
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>(path, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    })
  }
}

export const adminApi = new ApiClient(() => localStorage.getItem('admin-token'))
export const userApi = new ApiClient(() => localStorage.getItem('user-token'))
export const publicApi = new ApiClient()
