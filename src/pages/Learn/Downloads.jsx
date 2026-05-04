import React from 'react'

export default function Downloads() {
  return (
    <div className="container-default">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">Downloads</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="card p-6">
            <h3 className="font-semibold">Program Brochure (PDF)</h3>
            <button className="mt-3 px-4 py-2 rounded-2xl bg-accent text-white hover:scale-105 transition">
              Download
            </button>
            <div className="mt-3 h-24 rounded-2xl bg-base flex items-center justify-center text-sm opacity-70">
              PDF preview placeholder
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Activity Guide (PDF)</h3>
            <button className="mt-3 px-4 py-2 rounded-2xl bg-accent text-white hover:scale-105 transition">
              Download
            </button>
            <div className="mt-3 h-24 rounded-2xl bg-base flex items-center justify-center text-sm opacity-70">
              PDF preview placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
