import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CorporateSolutions() {
  return (
    <div className="container-default">
      <section className="card p-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Corporate Team Bonding</h1>
          <p className="opacity-80 mt-3">
            Structured wooden experiential play that rebuilds trust, morale, and collaboration — screen-free and sustainable.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/events/book" className="btn-primary">Book a Session</Link>
            <Link to="/community/testimonials" className="btn-secondary">See Outcomes</Link>
          </div>
        </div>
        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-accent/20 to-highlight/20" />
      </section>

      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { t: 'Low engagement, burnout, digital fatigue', h: 'Problem' },
          { t: 'Cross-generational, tactile, mindful play', h: 'Solution' },
          { t: 'Measurable team outcomes and renewed energy', h: 'Result' },
        ].map((b) => (
          <div key={b.h} className="card p-6">
            <h3 className="font-semibold">{b.h}</h3>
            <p className="opacity-80 mt-2">{b.t}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 card p-8">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          {['Discovery', 'Curated Play', 'Facilitated Reflection', 'Actionable Takeaways'].map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="card p-6 text-center">
                <div className="text-2xl font-semibold">{i + 1}</div>
                <div className="mt-2">{s}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          'Stronger collaboration',
          'Trust and psychological safety',
          'Joyful energy and morale',
        ].map((o) => (
          <div key={o} className="card p-6">
            <h3 className="font-semibold">{o}</h3>
          </div>
        ))}
      </section>

      <section className="mt-8 card p-8 text-center">
        <h3 className="text-2xl font-semibold">Bring Back Real Play</h3>
        <p className="opacity-80 mt-1">Book a premium team experience for your organization.</p>
        <Link to="/events/book" className="mt-3 inline-block btn-primary">Book Now</Link>
      </section>
    </div>
  )
}
