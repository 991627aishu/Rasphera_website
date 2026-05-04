import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, FileText, Download, FlaskConical, ArrowRight } from 'lucide-react'

const sections = [
  { to: '/learn/blog', icon: <BookOpen size={28} />, title: 'Blog', desc: 'Insights on wellness, play psychology, and sustainable living.', color: 'from-accent to-accent-dark' },
  { to: '/learn/downloads', icon: <Download size={28} />, title: 'Downloads', desc: 'Free printables, activity sheets, and facilitation toolkits.', color: 'from-gold to-accent' },
  { to: '/learn/research', icon: <FlaskConical size={28} />, title: 'Research', desc: 'Evidence-based articles on the science behind play and wellness.', color: 'from-emerald-600 to-teal-700' },
]

export default function Learn() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Learn</div>
          <h1 className="font-display text-5xl font-bold text-white">Knowledge that Empowers Play</h1>
          <p className="text-white/60 mt-3">Blogs,  downloads, and research — all in one place.</p>
        </div>
      </div>
      <div className="container-default">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">          {sections.map((s, i) => (
            <motion.div key={s.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={s.to} className="card group block overflow-hidden p-0 h-full">
                <div className={`h-36 bg-gradient-to-br ${s.color} flex items-center justify-center text-white/80 relative overflow-hidden`}>
                  <div className="absolute inset-0 hero-pattern opacity-25" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">{s.title}</h3>
                  <p className="text-text/60 dark:text-cream/60 text-sm mt-2 leading-relaxed">{s.desc}</p>
                  <span className="link-accent mt-4 inline-flex text-sm">Explore <ArrowRight size={12} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
