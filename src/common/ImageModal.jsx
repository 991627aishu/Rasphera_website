import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ImageModal({ open, onClose, item }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[92%] max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl dark:bg-neutral-900/90"
            initial={{ scale: 0.9, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 24 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full px-2 py-1 text-lg font-bold text-neutral-500 transition hover:scale-110 hover:text-red-500"
            >
              ×
            </button>

            {item?.image ? (
              <motion.img
                src={item.image}
                alt={item.title || 'Item image'}
                className="h-56 w-full rounded-xl object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <div className="h-56 w-full rounded-xl bg-gradient-to-br from-accent/30 to-highlight/30" />
            )}

            <div className="mt-4">
              {item?.category && (
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {item.category}
                </span>
              )}
              <h2 className="mt-2 text-2xl font-semibold">{item?.title || 'Item'}</h2>
              {typeof item?.price !== 'undefined' && (
                <p className="mt-1 text-lg font-medium">₹{item.price}</p>
              )}
              {item?.description && (
                <p className="mt-2 text-sm opacity-80">{item.description}</p>
              )}
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-2xl bg-highlight text-white transition hover:scale-105"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
