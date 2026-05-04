import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    quote:
      "We introduced Rasphera during our senior engagement sessions, and the response was heartwarming. Residents who are usually reserved started opening up, interacting, and even recalling memories. It felt truly meaningful.",
    author: "Anitha Rao",
  },
  {
    quote:
      "We’ve conducted multiple team-building activities before, but Rasphera stood out. It was simple, engaging, and genuinely brought the team together without feeling forced.",
    author: "Karthik Menon",
  },
  {
    quote:
      "My son usually spends most of his time on screens, but Rasphera games completely changed that. He was fully engaged, thinking creatively, and most importantly, spending quality time with us.",
    author: "Neha Sharma",
  },
  {
    quote:
      "The games are thoughtfully designed. Students were more focused, collaborative, and excited to participate. It’s a great blend of fun and learning.",
    author: "Ramesh Iyer",
  },
  {
    quote:
      "Rasphera became the highlight of our event. People of all age groups gathered around, played together, and stayed longer than expected. It created a very lively and inclusive environment.",
    author: "Pooja Nair",
  },
  {
    quote:
      "For a few moments, I could see recognition and joy in my parent’s face again. Those moments are rare, and Rasphera helped create them. That means a lot to us.",
    author: "Suresh Patel",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container-default">

      <div className="card p-10">

        <h1 className="text-4xl font-bold text-highlight text-center mb-10">
          Testimonials
        </h1>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {items.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-700 text-base leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-5">
                <p className="font-semibold text-accent text-sm">
                  — {t.author}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </div>
  )
}