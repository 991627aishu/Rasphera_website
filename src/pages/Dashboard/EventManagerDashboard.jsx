import React, { useState } from 'react'
import { events } from '../../data/eventsData.js'
import { useAuth } from '../../context/AuthContext.jsx'

export default function EventManagerDashboard() {
  const { user, updateDetails } = useAuth()
  const [assigned, setAssigned] = useState(events)

  const updateStatus = (id, status) => {
    setAssigned((list) => list.map((e) => (e.id === id ? { ...e, status } : e)))
  }

  return (
    <div className="card p-6">
      {!user?.details?.assignedRegion && (
        <div className="mb-4">
          <h3 className="font-semibold">Complete EM Profile</h3>
          <div className="mt-3 grid md:grid-cols-3 gap-3">
            <input id="region" placeholder="Assigned region" className="px-4 py-2 rounded-2xl card" />
            <input id="empId" placeholder="Employee ID" className="px-4 py-2 rounded-2xl card" />
            <button
              className="btn-primary"
              onClick={() => {
                const r = document.getElementById('region').value
                const id = document.getElementById('empId').value
                if (r && id) updateDetails({ assignedRegion: r, employeeId: id })
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
      <h3 className="font-semibold">Assigned Events</h3>
      <div className="mt-3 grid gap-3">
        {assigned.map((e) => (
          <div key={e.id} className="card p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{e.title}</div>
                <div className="opacity-70 text-sm">{e.date} • {e.location}</div>
              </div>
              <select
                value={e.status || 'Scheduled'}
                onChange={(ev) => updateStatus(e.id, ev.target.value)}
                className="px-3 py-1 rounded-2xl card"
              >
                <option>Scheduled</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
