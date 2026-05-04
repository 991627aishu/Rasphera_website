import React from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { Calendar, Package, Star, ArrowRight, User } from 'lucide-react'

export default function UserDashboard() {
  const { user } = useAuth()
  return (
    <div className="space-y-8">
      <div className="card-premium rounded-3xl p-8 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center text-accent"><User size={28} /></div>
        <div>
          <h2 className="font-display text-2xl font-bold text-highlight dark:text-cream">Welcome back, {user?.name || 'Explorer'}!</h2>
          <p className="text-text/60 dark:text-cream/60 text-sm mt-1">Your Rasphera journey continues.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { icon: <Calendar size={22} />, label: 'Events Attended', val: '3', color: 'text-accent' },
          { icon: <Package size={22} />, label: 'Orders', val: '5', color: 'text-highlight dark:text-sky-300' },
          { icon: <Star size={22} />, label: 'Reviews', val: '2', color: 'text-gold' },
        ].map((s) => (
          <div key={s.label} className="card p-6 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center ${s.color}`}>{s.icon}</div>
            <div><div className="font-display text-3xl font-black text-accent">{s.val}</div><div className="text-text/55 dark:text-cream/55 text-sm">{s.label}</div></div>
          </div>
        ))}
      </div>
    </div>
  )
}
