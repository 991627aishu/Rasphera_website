import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// ✅ Import images (check extension names carefully)
import pw1 from '../../assets/pw1.jpeg'
import pw2 from '../../assets/pw2.jpeg'
import pw3 from '../../assets/pw3.jpeg'
import pw4 from '../../assets/pw4.jpeg'
import pw5 from '../../assets/pw5.jpeg'
import pw6 from '../../assets/pw6.jpeg'
import pw7 from '../../assets/pw7.jpeg'
import pw8 from '../../assets/pw8.jpeg'
import pw9 from '../../assets/pw9.jpeg'
import pw10 from '../../assets/pw10.jpeg'

// ✅ Photo data with descriptions
const photos = [
  {
    id: 1,
    label: 'Traditional Game Activity',
    src: pw1,
    desc: 'Participant engaged in a traditional board game activity promoting cultural interaction.',
  },
  {
    id: 2,
    label: 'Community Craft Workshop',
    src: pw2,
    desc: 'Community members collaborating in a hands-on craft and sustainability workshop.',
  },
  {
    id: 3,
    label: 'Eco-friendly Product Demo',
    src: pw3,
    desc: 'Demonstration of handmade eco-friendly products encouraging sustainable living.',
  },
  {
    id: 4,
    label: 'Skill Demonstration',
    src: pw4,
    desc: 'Showcasing traditional skills and techniques passed through generations.',
  },
  {
    id: 5,
    label: 'Exhibition & Awareness',
    src: pw5,
    desc: 'Display of community initiatives and awareness materials at the event.',
  },
  {
    id: 6,
    label: 'Group Participation',
    src: pw6,
    desc: 'Participants gathered together celebrating community engagement and collaboration.',
  },
  {
    id: 7,
    label: 'Youth Engagement',
    src: pw7,
    desc: 'Young participants actively involved in sustainability and social initiatives.',
  },
  {
    id: 8,
    label: 'Interactive Session',
    src: pw8,
    desc: 'People interacting and exchanging ideas during a community-driven session.',
  },
  {
    id: 9,
    label: 'Event Crowd Activity',
    src: pw9,
    desc: 'Lively participation showcasing strong community involvement during the event.',
  },
  {
    id: 10,
    label: 'Sustainable Products Display',
    src: pw10,
    desc: 'Showcasing handcrafted sustainable products created by local communities.',
  },
]

export default function PhotoWall() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="container-default">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">Photo Wall</h1>

        {/* ✅ Clean Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {photos.map((p) => (
            <div
              key={p.id}
              className="card p-4 hover:scale-[1.02] transition duration-200"
            >
              <button
                className="block w-full text-left"
                onClick={() => setSelected(p)}
                aria-label={`View details for ${p.label}`}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-auto max-h-52 object-cover rounded-2xl"
                />
              </button>

              <div className="mt-3">
                <p className="text-sm font-medium">{p.label}</p>
                <p className="text-xs opacity-70 line-clamp-2">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-[92%] max-w-lg rounded-2xl bg-white/95 p-6 shadow-2xl dark:bg-neutral-900/90"
              initial={{ scale: 0.9, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 24 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 rounded-full px-2 py-1 text-lg font-bold text-neutral-500 hover:text-red-500 transition"
              >
                ×
              </button>

              {/* Image */}
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full max-h-[400px] object-cover rounded-xl"
              />

              {/* Content */}
              <div className="mt-4">
                <h2 className="text-2xl font-semibold">
                  {selected.label}
                </h2>
                <p className="mt-2 text-sm opacity-80">
                  {selected.desc}
                </p>
              </div>

              {/* Action */}
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-2xl bg-highlight text-white hover:scale-105 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}