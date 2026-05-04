import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import die from '../assets/die-logo.svg'

const links = {
  Explore: [
    { label: 'Services', to: '/services' },
    { label: 'Events', to: '/events' },
    { label: 'Shop', to: '/shop' },
    { label: 'Learn', to: '/learn' },
    { label: 'Community', to: '/community' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Story', to: '/about/our-story' },
    { label: 'Sustainability', to: '/about/sustainability' },
    { label: 'Careers', to: '/careers' },
    { label: 'Partner With Us', to: '/partner' },
  ],
  Support: [
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/contact' },
    { label: 'Privacy Policy', to: '/contact' },
    { label: 'Terms of Service', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="mt-16 relative overflow-hidden">
      {/* Top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Newsletter band */}
      <div className="bg-highlight dark:bg-highlight/95 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Stay in the loop</h3>
            <p className="text-white/60 text-sm mt-1">Monthly play insights, event announcements & exclusive offers.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent transition text-sm"
            />
            <button className="btn-primary text-sm py-3 px-5 whitespace-nowrap">
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-cream dark:bg-highlight/20">
        <div className="container mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="brand-badge">
                  <img
                    src="/logo.png"
                    alt="Rasphera"
                    className="h-10 w-auto brand-logo z-10 relative"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = die }}
                  />
                </div>
                <span className="font-display font-bold text-xl text-highlight dark:text-cream">Rasphera</span>
              </div>

              <p className="text-text/60 dark:text-cream/60 text-sm leading-relaxed max-w-xs">
                A premium, screen-free, eco-friendly play ecosystem that rebuilds human connection across generations.
              </p>

              {/* ✅ FIXED SOCIAL ICONS */}
              <div className="mt-5 flex gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rasphera.games?igsh=OXNzdTNnb2IwNnF4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg card flex items-center justify-center text-text/50 dark:text-cream/50 hover:text-accent hover:scale-110 transition-all duration-200"
                >
                  <Instagram size={16} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/rasphera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg card flex items-center justify-center text-text/50 dark:text-cream/50 hover:text-accent hover:scale-110 transition-all duration-200"
                >
                  <Linkedin size={16} />
                </a>

              </div>

              <div className="mt-5 space-y-2 text-sm text-text/55 dark:text-cream/55">
                <div className="flex items-center gap-2"><Mail size={13} className="text-accent" /> hello@rasphera.com</div>
                <div className="flex items-center gap-2"><Phone size={13} className="text-accent" /> +91 98765 43210</div>
                <div className="flex items-center gap-2"><MapPin size={13} className="text-accent" /> Karnataka, India</div>
              </div>
            </div>

            {/* Link groups */}
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <h4 className="font-semibold text-text dark:text-cream mb-4 text-sm tracking-wide uppercase">{group}</h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm text-text/55 dark:text-cream/55 hover:text-accent dark:hover:text-accent transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/10 dark:border-white/8">
          <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-text/45 dark:text-cream/45">
              © {new Date().getFullYear()} Rasphera. All rights reserved. Crafted with ♥ in India.
            </p>
            <div className="flex gap-4 text-xs text-text/45 dark:text-cream/45">
              <Link to="/contact" className="hover:text-accent transition">Privacy</Link>
              <Link to="/contact" className="hover:text-accent transition">Terms</Link>
              <Link to="/contact" className="hover:text-accent transition">Cookies</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}