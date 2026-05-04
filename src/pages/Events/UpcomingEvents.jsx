import React from 'react'

export default function UpcomingEvents() {
  return (
    <div className="container-default">
      <div className="card p-8 max-w-md">

        <h1 className="text-3xl font-semibold mb-6">
          Upcoming Event
        </h1>

        {/* Single Event Card */}
        <div className="card p-6 hover:scale-105 transition-all duration-300">

          <h3 className="font-semibold text-lg">
            R.V. University
          </h3>

          <p className="opacity-80 mt-1">
            Bengaluru
          </p>

          <p className="opacity-70 text-sm mt-2">
            7th May 2026
          </p>

        </div>

      </div>
    </div>
  )
}