import React, { useState } from 'react'
import { events } from '../../data/eventsData.js'
import { products } from '../../data/shopData.js'
import { useAuth } from '../../context/AuthContext.jsx'

export default function AdminDashboard() {
  const { user, updateDetails } = useAuth()
  const [eventList] = useState(events)
  const [productList] = useState(products)
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {!user?.details?.organization && (
        <div className="md:col-span-2 card p-6">
          <h3 className="font-semibold">Complete Admin Profile</h3>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            <input id="org" placeholder="Organization name" className="px-4 py-2 rounded-2xl card" />
            <input id="code" placeholder="Admin code" className="px-4 py-2 rounded-2xl card" />
            <div className="md:col-span-2">
              <button
                className="btn-primary"
                onClick={() => {
                  const org = document.getElementById('org').value
                  const code = document.getElementById('code').value
                  if (org && code) updateDetails({ organization: org, adminCode: code })
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="card p-6">
        <h3 className="font-semibold">Manage Events</h3>
        <div className="mt-3 grid gap-2">
          {eventList.map((e) => (
            <div key={e.id} className="flex justify-between">
              <span>{e.title}</span>
              <button className="btn-primary">Edit</button>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6">
        <h3 className="font-semibold">Manage Products</h3>
        <div className="mt-3 grid gap-2">
          {productList.map((p) => (
            <div key={p.id} className="flex justify-between">
              <span>{p.title}</span>
              <button className="btn-primary">Edit</button>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 card p-6">
        <h3 className="font-semibold">View Bookings</h3>
        <p className="opacity-80 mt-2">Placeholder table for recent bookings.</p>
      </div>
    </div>
  )
}
