import React from 'react'
import { services } from '../../data/servicesData.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Heart, Users, Zap, Star } from 'lucide-react'
import CTASection from '../../common/CTASection.jsx'

const icons = {
  corporate: Building2,
  csr: Heart,
  senior: Users,
  schools: Zap,
  custom: Star
}

const colors = {
  corporate: 'from-blue-600 to-indigo-700',
  csr: 'from-rose-500 to-red-600',
  senior: 'from-emerald-500 to-teal-600',
  schools: 'from-amber-500 to-orange-600',
  custom: 'from-accent to-accent-dark'
}

export default function Services() {

  const firstRow = services.slice(0, 3)
  const secondRow = services.slice(3)

  const Card = (s, i) => {
    const Icon = icons[s.id] || Star

    return (
      <motion.div
        key={s.id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="card group p-0 overflow-hidden w-full max-w-[420px]"
      >
        <div className={`h-40 bg-gradient-to-br ${colors[s.id] || 'from-accent to-accent-dark'} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 hero-pattern opacity-20" />
          <Icon size={48} className="text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-500" />

          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">
              {s.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">
            {s.title}
          </h3>

          <p className="text-text/60 dark:text-cream/60 text-sm mt-2 leading-relaxed">
            {s.description}
          </p>

          <ul className="mt-4 space-y-2">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs text-text/55 dark:text-cream/55">
                <span className="w-4 h-4 rounded-full bg-accent/12 flex items-center justify-center text-accent text-xs">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>

          <Link to={s.link} className="link-accent mt-5 inline-flex text-sm">
            View details <ArrowRight size={12} />
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Our Services</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
            Play for Every Purpose
          </h1>
          <p className="mt-4 text-white/65 max-w-xl mx-auto text-lg leading-relaxed">
            Thoughtfully designed experiences for every generation and every goal — from corporate culture to community wellness.
          </p>
        </div>
      </div>

      <div className="container-default">

        {/* ✅ FIRST ROW (3 cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {firstRow.map((s, i) => Card(s, i))}
        </div>

        {/* ✅ SECOND ROW (CENTERED 2 cards) */}
        <div className="flex justify-center gap-7 mt-7 flex-wrap">
          {secondRow.map((s, i) => Card(s, i))}
        </div>

      </div>

      <CTASection />
    </div>
  )
}