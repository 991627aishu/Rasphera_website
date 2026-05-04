import React from 'react'

export default function Badge({ children, variant = 'default' }) {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200'
  const variants = {
    default: 'bg-accent/10 text-accent-dark dark:text-accent-light border border-accent/15',
    blue: 'bg-highlight/8 text-highlight dark:text-sky-300 border border-highlight/12',
    success: 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/15',
  }
  return <span className={`${base} ${variants[variant] || variants.default}`}>{children}</span>
}
