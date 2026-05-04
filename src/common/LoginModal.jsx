import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoginModal({ open, onClose, onLogin, presetRole }) {
  const [role, setRole] = useState(presetRole || 'User')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (presetRole) setRole(presetRole)
  }, [presetRole])

  if (!open) return null

  const validate = () => {
    const e = {}
    if (!name) e.name = 'Name required'
    if (!email || !/\S+@\S+\.\S+/.test(email)) e.email = 'Valid email required'
    if (!role) e.role = 'Select a role'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = () => {
    if (!validate()) return
    onLogin({ name, email, role })
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="card p-6 w-full max-w-md"
        initial={{ scale: 0.95, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        <h3 className="text-xl font-semibold">Sign in</h3>
        <p className="opacity-80 text-sm mt-1">Enter details to continue.</p>
        <div className="mt-4 grid gap-3">
          <div>
            <label className="text-sm opacity-80">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-2xl card focus:outline-none focus:ring-2 focus:ring-accent">
              <option>User</option>
              <option>Admin</option>
              <option>Event Manager</option>
            </select>
            {errors.role && <p className="text-red-600 text-sm mt-1">{errors.role}</p>}
          </div>
          <div>
            <label className="text-sm opacity-80">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-2xl card focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Jane Doe" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm opacity-80">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-2xl card focus:outline-none focus:ring-2 focus:ring-accent" placeholder="jane@example.com" />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="flex gap-3 mt-2">
            <button className="btn-primary" onClick={submit}>Continue</button>
            <button className="px-4 py-2 rounded-2xl card hover:scale-105 transition" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
