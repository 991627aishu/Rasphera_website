import React from 'react'
import HeroSection from '../common/HeroSection.jsx'
import Testimonials from '../common/Testimonials.jsx'
import CTASection from '../common/CTASection.jsx'
import { services } from '../data/servicesData.js'
import { events } from '../data/eventsData.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Building2, Heart, Zap, Leaf, Star } from 'lucide-react'

// ✅ ADD YOUR IMAGE HERE
import aboutImage from '../assets/2.jpeg'

const serviceIcons = {
  corporate: <Building2 size={22} />,
  csr: <Heart size={22} />,
  senior: <Users size={22} />,
  schools: <Zap size={22} />,
  custom: <Star size={22} />,
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="mb-10">
      {eyebrow && <div className="tag mb-3">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-highlight dark:text-cream">{title}</h2>
      {sub && <p className="mt-3 text-text/60 dark:text-cream/60 max-w-xl leading-relaxed">{sub}</p>}
      <div className="section-divider mt-4" />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Marquee */}
      <div className="bg-accent dark:bg-accent-dark overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, pass) => (
            <span key={pass} className="text-white text-sm font-medium tracking-widest uppercase mx-12">
              {['Sustainable Play','Cross-Generational','Screen-Free','Eco-Friendly','Premium Design','Wellness-Inspired','Corporate Wellness','CSR Programs','Custom Games']
                .map((t,i)=>(<span key={i} className="mx-6">✦ {t}</span>))}
            </span>
          ))}
        </div>
      </div>

      {/* WHAT IS RASPHERA */}
      <section className="container-default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              eyebrow="Who We Are"
              title="More than a game. A movement."
            />

            <p className="text-text/65 dark:text-cream/65 leading-relaxed mb-6">
              Rasphera is a premium, screen-free, eco-friendly play ecosystem that rebuilds human connection.
              We craft cross-generational wooden experiences for corporate teams, seniors, and families —
              aligning with wellness and CSR values.
            </p>

            <ul className="space-y-3">
              {[
                { icon: <Leaf size={16} />, text: 'Eco-friendly, FSC-certified materials' },
                { icon: <Zap size={16} />, text: 'Screen-free engagement' },
                { icon: <Building2 size={16} />, text: 'Corporate wellness & CSR' },
                { icon: <Users size={16} />, text: 'Cross-generational play' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            <Link to="/about" className="link-accent mt-6 inline-flex">
              Our full story <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* ✅ RIGHT IMAGE (FIXED) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">

              <img
                src={aboutImage}
                alt="Rasphera Experience"
                className="w-full h-full object-cover"
              />

            </div>

            {/* subtle glow */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-highlight/4 dark:bg-slate-900/50 border-y border-accent/10">
        <div className="container mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <div className="tag mb-3">Who It's For</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-highlight dark:text-cream">
              Designed for Every Generation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title:'Kids & Schools', desc:'Boost creativity', icon:'🧒' },
              { title:'Corporate Teams', desc:'Build stronger teams', icon:'🏢' },
              { title:'Senior Wellness', desc:'Promote joy', icon:'👴' },
              { title:'Families', desc:'Bond together', icon:'👨‍👩‍👧' }
            ].map((item,i)=>(
              <motion.div key={i} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:20}} className="card p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-default">
        <SectionTitle title="Services Built for Every Generation" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0,3).map((s,i)=>(
            <motion.div key={s.id} className="card p-6">
              <div className="mb-4">{serviceIcons[s.id]}</div>
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm mt-2">{s.description}</p>
              <Link to={s.link} className="link-accent mt-3 inline-flex">
                Learn more <ArrowRight size={12}/>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CTASection />

    </div>
  )
}