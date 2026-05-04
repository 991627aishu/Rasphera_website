import React from 'react'
import { Link } from 'react-router-dom'

export default function CSRPrograms() {
  return (
    <div className="container-default">
      <div className="card p-8">
        <div className="h-40 rounded-2xl bg-highlight/20" />
        <h1 className="text-3xl font-semibold mt-6">CSR Programs</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="card p-6">
            <h3 className="font-semibold">Community Engagement</h3>
            <p className="opacity-80 mt-2">Design programs aligned to your CSR goals.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Sustainable Impact</h3>
            <p className="opacity-80 mt-2">Measure outcomes and create lasting value.</p>
          </div>
        </div>
        <div className="mt-6">
          <Link to="/events/book" className="px-4 py-2 rounded-2xl bg-accent text-white hover:scale-105 transition">
            Plan a CSR event
          </Link>
        </div>
      </div>
    </div>
  )
}
