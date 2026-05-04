import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'Experience Designer',
    dept: 'Design',
    type: 'Full-time',
    loc: 'Bangalore',
    desc: 'Design meaningful, tactile game experiences for diverse audiences.'
  },
  {
    title: 'Community Manager',
    dept: 'Marketing',
    type: 'Full-time',
    loc: 'Bangalore',
    desc: 'Build and nurture our growing community of play advocates.'
  },
  {
    title: 'Corporate Sales Manager',
    dept: 'Sales',
    type: 'Full-time',
    loc: 'Bangalore',
    desc: 'Drive partnerships with enterprises for wellness programs.'
  },
  {
    title: 'Sustainability Coordinator',
    dept: 'Operations',
    type: 'Part-time',
    loc: 'Bangalore',
    desc: 'Own our environmental impact program and supplier sustainability.'
  },
]

export default function Careers() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Join the Team</div>
          <h1 className="font-display text-5xl font-bold text-white">Build the Future of Play</h1>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">We're a small, passionate team on a big mission. Come help us change how the world connects.</p>
        </div>
      </div>

      <div className="container-default">
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div key={job.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-7 group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="tag-blue tag text-xs mb-2 inline-block">{job.dept}</span>
                  <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">{job.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent flex-shrink-0"><Briefcase size={18} /></div>
              </div>
              <p className="text-text/60 dark:text-cream/60 text-sm mt-2 leading-relaxed">{job.desc}</p>
              <div className="flex gap-4 mt-4 text-xs text-text/50 dark:text-cream/50">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-accent" />{job.loc}</span>
                <span className="flex items-center gap-1"><Clock size={12} className="text-accent" />{job.type}</span>
              </div>
              <button className="btn-ghost mt-5 text-sm py-2">Apply Now <ArrowRight size={12} /></button>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 card-premium rounded-3xl p-10 text-center max-w-xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-highlight dark:text-cream">Don't see your role?</h3>
          <p className="text-text/60 dark:text-cream/60 mt-2">We're always interested in exceptional people. Send us a note.</p>
          <a href="mailto:careers@rasphera.com" className="btn-primary mt-6 inline-flex">
            <ArrowRight size={14} /> Send Open Application
          </a>
        </div>
      </div>
    </div>
  )
}
