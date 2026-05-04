import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Leaf, Heart, ArrowRight } from 'lucide-react'
import CTASection from '../../common/CTASection.jsx'

const sections = [
  { to: '/about/our-story', icon: <BookOpen size={28} />, title: 'Our Story', desc: 'From a living room idea to a movement — learn how Rasphera was born from a desire to reconnect people through play.', color: 'from-highlight to-highlight-light' },
  { to: '/about/sustainability', icon: <Leaf size={28} />, title: 'Sustainability', desc: 'Every product starts with a pledge — to the planet and to future generations. See how we put sustainability at the heart of everything.', color: 'from-emerald-600 to-teal-700' },
  { to: '/about/social-impact', icon: <Heart size={28} />, title: 'Social Impact', desc: 'Numbers that matter: communities transformed, schools empowered, and elders engaged through the simple power of play.', color: 'from-rose-500 to-red-600' },
]

export default function About() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">About Rasphera</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            Minimal, Elegant,<br /><span className="text-gold-light">Wellness-Inspired</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-lg">
            We craft experiences that bring people together — across generations, industries, and borders.
          </p>
        </div>
      </div>

      <div className="container-default">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {sections.map((s, i) => (
            <motion.div key={s.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={s.to} className="card group block overflow-hidden p-0 h-full">
                <div className={`h-40 bg-gradient-to-br ${s.color} flex items-center justify-center text-white/80 relative overflow-hidden`}>
                  <div className="absolute inset-0 hero-pattern opacity-25" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">{s.title}</h3>
                  <p className="text-text/60 dark:text-cream/60 text-sm mt-2 leading-relaxed">{s.desc}</p>
                  <span className="link-accent mt-4 inline-flex text-sm">Read more <ArrowRight size={12} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="card-premium rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto">
          <blockquote className="font-display text-2xl md:text-3xl italic font-bold text-highlight dark:text-cream leading-snug">
            "Play is the highest form of research."
          </blockquote>
          <p className="text-text/50 dark:text-cream/50 mt-3 text-sm">— Inspired by Einstein, lived by Rasphera</p>
          <Link to="/partner" className="btn-primary mt-8 inline-flex">
            Partner With Us <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <CTASection />
    </div>
  )
}
