import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, BookOpen, Clock, ArrowRight } from 'lucide-react'
import CTASection from '../../common/CTASection.jsx'

const cards = [
  { to: '/events/book', icon: <BookOpen size={32} />, title: 'Book an Event', desc: 'Reserve your wellness experience for your team or family.', color: 'from-accent to-accent-dark' },
  { to: '/events/upcoming', icon: <Clock size={32} />, title: 'Upcoming Events', desc: 'Browse all scheduled events and find one near you.', color: 'from-highlight to-highlight-light' },
  { to: '/events/calendar', icon: <Calendar size={32} />, title: 'Event Calendar', desc: 'Full monthly view of all Rasphera experiences.', color: 'from-gold to-accent' },
]

export default function Events() {
  return (
    <div>
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Events</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
            Experiences Worth Showing Up For
          </h1>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            Real people. Real games. Real connection.
          </p>
        </div>
      </div>

      <div className="container-default">

        {/* ✅ TOP 3 CARDS (EQUAL HEIGHT FIXED) */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cards.map((c, i) => (
            <motion.div
              key={c.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                to={c.to}
                className="card group block overflow-hidden p-0 h-full flex flex-col"
              >
                <div className={`h-36 bg-gradient-to-br ${c.color} flex items-center justify-center text-white/80 relative`}>
                  <div className="absolute inset-0 hero-pattern opacity-20" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {c.icon}
                  </div>
                </div>

                {/* 👇 THIS MAKES HEIGHT SAME */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">
                    {c.title}
                  </h3>

                  <p className="text-text/60 dark:text-cream/60 text-sm mt-2 flex-1">
                    {c.desc}
                  </p>

                  <span className="link-accent mt-4 inline-flex text-sm">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ✅ SINGLE EVENT ONLY */}
        <h2 className="font-display text-3xl font-bold text-highlight dark:text-cream mb-2">
          Upcoming Highlights
        </h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="card p-6">
            <div className="flex items-start gap-4">

              {/* DATE BOX */}
              <div className="w-14 h-14 rounded-2xl bg-highlight/8 dark:bg-white/8 flex flex-col items-center justify-center border border-accent/15">
                <span className="text-accent font-bold text-xs">May</span>
                <span className="font-display font-black text-xl text-highlight dark:text-cream leading-none">
                  7
                </span>
              </div>

              {/* EVENT INFO */}
              <div>
                <h3 className="font-display font-bold text-highlight dark:text-cream">
                  R.V. University
                </h3>
                <p className="text-accent text-sm font-medium">
                  Bangalore
                </p>
                <p className="text-text/50 dark:text-cream/50 text-xs mt-0.5">
                  7th May 2026
                </p>
              </div>
            </div>

            <Link
              to="/events/book"
              className="btn-primary mt-4 text-xs py-2 px-4 inline-flex"
            >
              Book Spot <ArrowRight size={11} />
            </Link>
          </div>

        </div>

      </div>

      <CTASection />
    </div>
  )
}