import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomGameDesign() {
  return (
    <div className="container-default">
      <div className="card p-8">
        <div className="h-40 rounded-2xl bg-accent/20" />
        <h1 className="text-3xl font-semibold mt-6">Custom Game Design</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="card p-6">
            <h3 className="font-semibold">Discovery</h3>
            <p className="opacity-80 mt-2">Understand your brand and goals.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Design & Prototype</h3>
            <p className="opacity-80 mt-2">Iterate with elegant, wellness-inspired aesthetics.</p>
          </div>
        </div>
        <div className="mt-6">
          <Link to="/events/book" className="px-4 py-2 rounded-2xl bg-accent text-white hover:scale-105 transition">
            Start a design project
          </Link>
        </div>
      </div>
    </div>
  )
}
