import React, { useState } from 'react'

import page1 from '../../assets/page1.png';
import page2 from '../../assets/page2.png';
import page3 from '../../assets/page3.png';
import page4 from '../../assets/page4.png';
import page5 from '../../assets/page5.png';

export default function Research() {

  // ✅ Add your 5 pages here
  const pages = [
    page1,
    page2,
    page3,
    page4,
    page5,
  ]

  const [page, setPage] = useState(0)

  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 0) setPage(page - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white flex flex-col items-center px-6 py-16">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-10 text-highlight">
        Research Document
      </h1>

      {/* BOOK */}
      <div className="w-full max-w-4xl">

        <div className="relative bg-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.2)] overflow-hidden">

          {/* PAGE IMAGE */}
          <img
            key={page}
            src={pages[page]}
            alt={`Page ${page + 1}`}
            className="w-full h-auto object-contain transition-all duration-500"
          />

          {/* PAGE NUMBER */}
          <div className="absolute bottom-4 right-6 text-xs text-gray-400">
            Page {page + 1} / {pages.length}
          </div>

        </div>

        {/* CONTROLS */}
        <div className="flex justify-between items-center mt-8">

          <button
            onClick={prevPage}
            disabled={page === 0}
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 disabled:opacity-40 transition font-medium"
          >
            ← Previous
          </button>

          {/* DOT INDICATORS */}
          <div className="flex gap-2">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === page ? 'bg-accent scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={page === pages.length - 1}
            className="px-6 py-3 rounded-xl bg-accent text-white hover:scale-105 disabled:opacity-40 transition font-medium"
          >
            Next →
          </button>

        </div>

      </div>
    </div>
  )
}