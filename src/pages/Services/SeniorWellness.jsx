import React from 'react'
import { Link } from 'react-router-dom'

export default function SeniorWellness() {
  return (
    <div className="container-default">
      <div className="card p-8">
        <div className="h-40 rounded-2xl bg-accent/20" />
        <h1 className="text-3xl font-semibold mt-6">Senior Wellness</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="card p-6">
            <h3 className="font-semibold">Gentle Movement</h3>
            <p className="opacity-80 mt-2">Joyful activities designed for seniors.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Social Connection</h3>
            <p className="opacity-80 mt-2">Games that spark conversation and belonging.</p>
          </div>
        </div>
        <div className="mt-6">
          <Link to="/events/book" className="px-4 py-2 rounded-2xl bg-accent text-white hover:scale-105 transition">
            Book a wellness circle
          </Link>
        </div>
      </div>
    </div>
  )
}
