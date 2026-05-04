import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

export default function DashboardLayout() {
  const { user } = useAuth()
  return (
    <div className="container-default">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="opacity-80 mt-1">Signed in as {user?.name} ({user?.role})</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <NavLink to="/dashboard/admin" className="px-3 py-2 rounded-2xl card hover:scale-105">Admin</NavLink>
          <NavLink to="/dashboard/user" className="px-3 py-2 rounded-2xl card hover:scale-105">User</NavLink>
          <NavLink to="/dashboard/event-manager" className="px-3 py-2 rounded-2xl card hover:scale-105">Event Manager</NavLink>
        </div>
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
