import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cases = [
  {
    id: 1,
    title: 'Corporate Wellness Week',
    summary: 'A 5-day immersive program designed to improve employee wellbeing and team connection.',
    details: `
Problem:
Modern workplaces often face stress, disengagement, and weak team connections.

Solution:
Rasphera designed a 5-day wellness program combining memory games, collaborative challenges, and mindful play experiences.

Impact:
Employees reported improved focus, reduced stress, and stronger interpersonal connections. Teams became more aligned and communication improved significantly.
    `
  },
  {
    id: 2,
    title: 'School Play Lab',
    summary: 'Introducing play-based learning across classrooms to improve engagement and creativity.',
    details: `
Problem:
Traditional classroom learning often leads to low engagement and passive participation.

Solution:
We introduced structured play sessions using tactile games that encouraged collaboration, memory building, and creative thinking.

Impact:
Students became more active, confident, and collaborative. Teachers observed better retention and improved classroom energy.
    `
  },
  {
    id: 3,
    title: 'Senior Joy Circles',
    summary: 'Community-driven sessions helping seniors reconnect through play and shared experiences.',
    details: `
Problem:
Many seniors experience isolation and reduced cognitive engagement.

Solution:
Rasphera created small group play circles using memory games and social activities designed for inclusivity.

Impact:
Participants showed improved mood, better recall ability, and a renewed sense of community and belonging.
    `
  },
]

export default function CaseStudies() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="container-default">

      <div className="card p-10">

        <h1 className="text-4xl font-bold text-highlight mb-8">
          Case Studies
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-display text-lg font-bold text-highlight">
                {c.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {c.summary}
              </p>

              <button
                onClick={() => setSelected(c)}
                className="mt-5 px-5 py-2 rounded-xl bg-accent text-white hover:scale-105 transition"
              >
                Read more
              </button>
            </motion.div>
          ))}

        </div>

      </div>

      {/* ✅ MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-highlight mb-3">
                {selected.title}
              </h2>

              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {selected.details}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="btn-primary mt-6 w-full"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}