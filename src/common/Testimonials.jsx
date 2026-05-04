import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const items = [
  {
    quote:
      "We introduced Rasphera during our senior engagement sessions, and the response was heartwarming. Residents who are usually reserved started opening up, interacting, and even recalling memories. It felt truly meaningful.",
    author: "Anitha Rao",
    role: "Program Coordinator – Madhu Bhoomi Foundation, Bengaluru",
    rating: 5,
  },
  {
    quote:
      "We’ve conducted multiple team-building activities before, but Rasphera stood out. It was simple, engaging, and genuinely brought the team together without feeling forced.",
    author: "Karthik Menon",
    role: "HR Manager – Swift Solutions, Bengaluru",
    rating: 5,
  },
  {
    quote:
      "My son usually spends most of his time on screens, but Rasphera games completely changed that. He was fully engaged, thinking creatively, and most importantly, spending quality time with us.",
    author: "Neha Sharma",
    role: "Parent – Bengaluru",
    rating: 5,
  },
  {
    quote:
      "The games are thoughtfully designed. Students were more focused, collaborative, and excited to participate. It’s a great blend of fun and learning.",
    author: "Ramesh Iyer",
    role: "Teacher – Bharatiya Vidya Bhavan, Bengaluru",
    rating: 5,
  },
  {
    quote:
      "Rasphera became the highlight of our event. People of all age groups gathered around, played together, and stayed longer than expected. It created a very lively and inclusive environment.",
    author: "Pooja Nair",
    role: "Event Organizer – RVU Santhe, Bengaluru",
    rating: 5,
  },
  {
    quote:
      "For a few moments, I could see recognition and joy in my parent’s face again. Those moments are rare, and Rasphera helped create them. That means a lot to us.",
    author: "Suresh Patel",
    role: "Caregiver – Bengaluru",
    rating: 5,
  },
];
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIndex((i) => (i + 1) % items.length) }, 5000)
    return () => clearInterval(t)
  }, [])

  const go = (d) => { setDir(d); setIndex((i) => (i + d + items.length) % items.length) }

  return (
    <section className="container-default">
      <div className="text-center mb-10">
        <div className="tag mx-auto mb-3">Testimonials</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-highlight dark:text-cream">
          What People Are Saying
        </h2>
        <div className="section-divider mx-auto mt-4" />
      </div>
      <div className="max-w-3xl mx-auto relative">
        <div className="testimonial-card card-premium rounded-3xl p-10 md:p-14 text-center relative overflow-hidden min-h-[240px] flex flex-col items-center justify-center transition-colors duration-500">
          {/* Decorative quote */}
          <div className="absolute top-4 left-6 text-accent/10">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(items[index].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="font-display text-xl md:text-2xl italic text-text/80 dark:text-cream/80 leading-relaxed">
                "{items[index].quote}"
              </p>

              <div>
                <p className="font-semibold text-highlight dark:text-cream">{items[index].author}</p>
                <p className="text-text/50 dark:text-cream/50 text-sm mt-0.5">{items[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full card flex items-center justify-center hover:border-accent hover:text-accent transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-accent w-6' : 'bg-accent/25 w-2'}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full card flex items-center justify-center hover:border-accent hover:text-accent transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
