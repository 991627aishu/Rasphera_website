import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Leaf, Users, Award } from 'lucide-react'
import heroImage from '../assets/1.jpeg'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 hero-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-highlight/6 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">
            
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/25 bg-accent/6 text-sm font-semibold text-accent-dark dark:text-accent-light"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Premium Wooden Play Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-highlight dark:text-white leading-[1.05]"
            >
              Rebuilding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-accent to-orange-500">
                Human
              </span>
              <br />
              Connection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text/65 dark:text-cream/70 max-w-xl leading-relaxed font-medium"
            >
              Cross-generational gaming experiences for corporate teams, seniors, and families —
              premium, screen-free, and crafted from sustainable materials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/services"
                className="px-10 py-5 rounded-2xl bg-accent hover:bg-accent-light text-white font-bold text-lg shadow-glow transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                Explore Our Games <ArrowRight size={20} />
              </Link>

              <Link
                to="/events/book"
                className="px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
              >
                Book an Experience
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="flex gap-12 pt-10 border-t border-slate-200 dark:border-white/10">
              <div>
                <div className="text-3xl font-black">10k+</div>
                <div className="text-xs uppercase text-gray-500">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-black">100%</div>
                <div className="text-xs uppercase text-gray-500">Sustainable</div>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE ONLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              
              <img
                src={heroImage}
                alt="Rasphera Experience"
                className="w-full h-full object-cover"
              />

              {/* Optional soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}