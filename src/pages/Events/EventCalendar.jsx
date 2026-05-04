import React, { useState } from 'react'

export default function EventCalendar() {

  const [selectedEvent, setSelectedEvent] = useState(null)

  // ✅ Start from current month
  const [currentDate, setCurrentDate] = useState(new Date())

  // ✅ Event (fixed)
  const eventDate = new Date(2026, 4, 7) // May 7, 2026

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // ✅ Days in selected month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const monthName = currentDate.toLocaleString('default', { month: 'long' })

  // ✅ Navigation
  const goPrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const goNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  return (
    <div className="container-default">
      <div className="card p-8">

        {/* HEADER WITH CONTROLS */}
        <div className="flex items-center justify-between mb-6">

          <button
            onClick={goPrevMonth}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100"
          >
            ←
          </button>

          <h1 className="text-2xl font-semibold">
            {monthName} {currentYear}
          </h1>

          <button
            onClick={goNextMonth}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100"
          >
            →
          </button>

        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {days.map((day) => {

            const isEvent =
              currentMonth === eventDate.getMonth() &&
              currentYear === eventDate.getFullYear() &&
              day === eventDate.getDate()

            return (
              <div
                key={day}
                onClick={() => isEvent && setSelectedEvent(true)}
                className={`card p-4 cursor-pointer transition-all duration-300 
                ${isEvent ? 'border-2 border-accent bg-accent/5 hover:scale-105' : 'hover:scale-105'}`}
              >

                <div className="font-semibold text-lg">
                  {day}
                </div>

                <div className="mt-2 text-sm opacity-80">
                  {isEvent ? (
                    <span className="text-accent font-medium">
                      R.V. University
                    </span>
                  ) : (
                    "No events"
                  )}
                </div>

              </div>
            )
          })}

        </div>
      </div>

      {/* POPUP */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">

            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">
              R.V. University
            </h2>

            <p className="text-accent font-medium mb-3">
              Bangalore • 7th May 2026
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Join us for an engaging memory games experience designed to boost cognitive skills,
              improve focus, and encourage social interaction. These activities enhance recall,
              concentration, and teamwork in a fun, screen-free way.
            </p>

            <button
              onClick={() => setSelectedEvent(null)}
              className="btn-primary mt-6 w-full"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  )
}