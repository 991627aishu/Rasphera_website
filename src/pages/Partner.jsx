import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Heart, Handshake, CheckCircle, ArrowRight, Send } from 'lucide-react'

const tiers = [
  { icon: <Building2 size={24} />, title: 'Corporate Partner', desc: 'Integrate Rasphera experiences into your team culture and CSR programs.', perks: ['Dedicated event coordinator', 'Custom game branding', 'Bulk pricing discounts', 'Impact reports & analytics'] },
  { icon: <Heart size={24} />, title: 'NGO / Social Partner', desc: 'Partner with us to bring play to underserved communities and schools.', perks: ['Subsidized program rates', 'Co-branded awareness campaigns', 'Volunteer coordination', 'Community impact tracking'] },
  { icon: <Handshake size={24} />, title: 'Reseller / Distributor', desc: 'Bring Rasphera products to your market with exclusive distribution rights.', perks: ['Wholesale pricing', 'Marketing support', 'Territory exclusivity', 'Training & onboarding'] },
]

export default function Partner() {
  const [sent, setSent] = useState(false)

  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Partnerships</div>
          <h1 className="font-display text-5xl font-bold text-white">Grow Together</h1>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">Join our ecosystem of impact-driven organizations and help us spread the joy of sustainable play.</p>
        </div>
      </div>

      <div className="container-default">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">{t.icon}</div>
              <h3 className="font-display text-xl font-bold text-highlight dark:text-cream">{t.title}</h3>
              <p className="text-text/60 dark:text-cream/60 text-sm mt-2 leading-relaxed">{t.desc}</p>
              <ul className="mt-5 space-y-2">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-text/70 dark:text-cream/70">
                    <CheckCircle size={14} className="text-accent flex-shrink-0" />{p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {sent ? (
            <div className="card-premium rounded-3xl p-10 text-center">
              <CheckCircle size={52} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-highlight dark:text-cream">Interest Submitted!</h3>
              <p className="text-text/60 dark:text-cream/60 mt-2">Our partnerships team will be in touch within 2 business days.</p>
            </div>
          ) : (
            <div className="card-premium rounded-3xl p-10">
              <h2 className="font-display text-2xl font-bold text-highlight dark:text-cream mb-6">Express Interest</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-xs font-medium text-text/50 dark:text-cream/50 uppercase block mb-1.5">Name</label><input className="input-field" placeholder="Your name" /></div>
                  <div><label className="text-xs font-medium text-text/50 dark:text-cream/50 uppercase block mb-1.5">Company</label><input className="input-field" placeholder="Organisation" /></div>
                </div>
                <div><label className="text-xs font-medium text-text/50 dark:text-cream/50 uppercase block mb-1.5">Email</label><input className="input-field" placeholder="Email address" /></div>
                <div><label className="text-xs font-medium text-text/50 dark:text-cream/50 uppercase block mb-1.5">Partnership Type</label>
                  <select className="input-field">
                    <option>Corporate Partner</option><option>NGO / Social Partner</option><option>Reseller / Distributor</option><option>Other</option>
                  </select>
                </div>
                <div><label className="text-xs font-medium text-text/50 dark:text-cream/50 uppercase block mb-1.5">Message</label><textarea className="input-field resize-none" rows={3} placeholder="Tell us about your goals" /></div>
                <button onClick={() => setSent(true)} className="btn-primary w-full justify-center py-4"><Send size={16} /> Submit Interest</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
