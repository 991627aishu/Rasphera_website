import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, MessageSquare, FileText, Star, ArrowRight } from 'lucide-react'

const sections = [
  { to: '/community/photo-wall', icon: <Camera size={28} />, title: 'Photo Wall', desc: 'See our community in action — moments captured from events around India.', color: 'from-pink-500 to-rose-600' },
  { to: '/community/user-stories', icon: <MessageSquare size={28} />, title: 'User Stories', desc: 'Real stories from people whose lives were touched by Rasphera.', color: 'from-accent to-accent-dark' },
  { to: '/community/case-studies', icon: <FileText size={28} />, title: 'Case Studies', desc: 'Detailed impact reports from corporate and community programs.', color: 'from-highlight to-highlight-light' },
  { to: '/community/testimonials', icon: <Star size={28} />, title: 'Testimonials', desc: 'What our clients and participants say about their experiences.', color: 'from-gold to-accent' },
]

export default function Community() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Community</div>
          <h1 className="font-display text-5xl font-bold text-white">The Rasphera Family</h1>
          <p className="text-white/60 mt-3">Stories, photos, and impact from across our growing community.</p>
        </div>
      </div>
      <div className="container-default">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s, i) => (
            <motion.div key={s.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={s.to} className="card group block overflow-hidden p-0 h-full">
                <div className={`h-36 bg-gradient-to-br ${s.color} flex items-center justify-center text-white/80 relative overflow-hidden`}>
                  <div className="absolute inset-0 hero-pattern opacity-25" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">{s.title}</h3>
                  <p className="text-text/60 dark:text-cream/60 text-sm mt-2">{s.desc}</p>
                  <span className="link-accent mt-4 inline-flex text-sm">View <ArrowRight size={12} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
