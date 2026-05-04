import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem('rasphera_user')
    if (raw) setUser(JSON.parse(raw))
  }, [])
  useEffect(() => {
    if (user) localStorage.setItem('rasphera_user', JSON.stringify(user))
    else localStorage.removeItem('rasphera_user')
  }, [user])

  const login = (payload) => {
    setUser({ ...payload, details: payload.details || {} })
  }
  const logout = () => setUser(null)
  const updateDetails = (patch) => {
    setUser((u) => ({ ...u, details: { ...(u?.details || {}), ...patch } }))
  }

  const value = useMemo(() => ({ user, login, logout, updateDetails }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

export function useHasRole(required) {
  const { user } = useAuth()
  if (!user) return false
  if (Array.isArray(required)) return required.includes(user.role)
  return user.role === required
}
