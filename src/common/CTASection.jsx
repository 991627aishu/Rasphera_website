import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Compass } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="container-default">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-highlight via-highlight-light to-highlight/80 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 p-10 md:p-16 text-center shadow-[0_24px_80px_rgba(13,34,54,0.25)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)] transition-colors duration-500">
        {/* Background pattern */}
        <div className="absolute inset-0 hero-pattern opacity-20 pointer-events-none" />

        {/* Orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8 text-white/80 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Ready to play?
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Create Your Perfect{' '}
            <span className="text-gold-light">Experience</span>
          </h2>

          <p className="text-white/65 text-lg leading-relaxed">
            Book a wellness-inspired event, explore our game collections, or partner with us to create something extraordinary.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/events/book" className="btn-primary text-base px-7 py-3.5">
              <Calendar size={16} /> Book an Event <ArrowRight size={14} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/8 transition-all duration-300 text-base"
            >
              <Compass size={16} /> Explore Services
            </Link>
          </div>

          <p className="text-white/40 text-sm">
            No commitment needed · Free consultation available
          </p>
        </div>
      </div>
    </section>
  )
}
