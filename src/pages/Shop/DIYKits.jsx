import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products } from '../../data/shopData.js'

export default function DIYKits() {
  const items = products.filter((p) => p.category === 'DIYKits')
  const [selected, setSelected] = useState(null)
  return (
    <div className="container-default">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">DIY Kits</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {items.map((p) => (
            <div key={p.id} className="card p-6 hover:scale-105">
              <button
                className="block w-full text-left"
                onClick={() => setSelected(p)}
                aria-label={`View details for ${p.title}`}
              >
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-32 w-full rounded-2xl object-cover" />
                ) : (
                  <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-accent/30 to-highlight/30" />
                )}
              </button>
              <h3 className="font-semibold mt-3">{p.title}</h3>
              <p className="opacity-80 mt-1">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
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
              className="relative w-[92%] max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl dark:bg-neutral-900/90"
              initial={{ scale: 0.9, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 24 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 rounded-full px-2 py-1 text-lg font-bold text-neutral-500 transition hover:scale-110 hover:text-red-500"
                aria-label="Close"
              >
                ×
              </button>
              {selected.image ? (
                <motion.img
                  src={selected.image}
                  alt={selected.title}
                  className="h-56 w-full rounded-xl object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              ) : (
                <div className="h-56 w-full rounded-xl bg-gradient-to-br from-accent/30 to-highlight/30" />
              )}
              <div className="mt-4">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {selected.category}
                </span>
                <h2 className="mt-2 text-2xl font-semibold">{selected.title}</h2>
                <p className="mt-1 text-lg font-medium">₹{selected.price}</p>
              </div>
              <div className="mt-5 flex justify-end gap-2">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-2xl bg-highlight text-white transition hover:scale-105"
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
