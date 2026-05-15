import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronDown, Dice5, ShoppingCart, User, ShieldCheck } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import LoginModal from './LoginModal.jsx'
import toast from 'react-hot-toast'
import die from '../assets/die-logo.svg'

const navGroups = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Our Story', path: '/about/our-story' },
      { label: 'Sustainability', path: '/about/sustainability' },
      { label: 'Social Impact', path: '/about/social-impact' },
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'Corporate Solutions', path: '/services/corporate-solutions' },
      { label: 'CSR Programs', path: '/services/csr-programs' },
      { label: 'Senior Wellness', path: '/services/senior-wellness' },
      { label: 'Kids & Schools', path: '/services/kids-schools' },
      { label: 'Custom Game Design', path: '/services/custom-game-design' },
    ]
  },
  { label: 'Events', path: '/events' },
  { label: 'Shop', path: '/shop' },
  { label: 'Learn', path: '/learn' },
  { label: 'Community', path: '/community' },
  { label: 'Partner', path: '/partner' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [loginOpen, setLoginOpen] = useState(false)
  const [presetRole, setPresetRole] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { user, login, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('rasphera_theme')
    if (stored) setDark(stored === 'dark')
    else setDark(window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    localStorage.setItem('rasphera_theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null) }, [location.pathname])

  useEffect(() => {
    const fn = (e) => { if (!dropdownRef.current?.contains(e.target)) setActiveDropdown(null) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/92 dark:bg-highlight/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(13,34,54,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'bg-cream/70 dark:bg-highlight/80 backdrop-blur-md'
        }`}
      >
        {/* Subtle top bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

        <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="brand-badge animate-float">
              <img
                src="/logo.png"
                alt="Rasphera"
                className="h-10 w-auto brand-logo z-10 relative"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = die }}
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-highlight dark:text-cream hidden sm:block">
              Rasphera
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navGroups.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith(item.path)
                        ? 'text-accent bg-accent/8'
                        : 'text-text/80 dark:text-cream/80 hover:text-accent hover:bg-accent/6 dark:hover:bg-accent/10'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-accent bg-accent/8'
                          : 'text-text/80 dark:text-cream/80 hover:text-accent hover:bg-accent/6 dark:hover:bg-accent/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-52 card py-2 z-50 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-sm transition-all duration-150 ${
                              isActive
                                ? 'text-accent bg-accent/8 font-semibold'
                                : 'text-text/80 dark:text-cream/80 hover:text-accent hover:bg-accent/6 dark:hover:bg-accent/10'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setDark((v) => !v)}
              className="p-2.5 rounded-xl card text-text/70 dark:text-cream/70 hover:text-accent transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {user ? (
              <div className="hidden md:flex items-center gap-2">
                {user.role === 'Admin' ? (
                  <NavLink to="/dashboard/admin" className="btn-primary text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700">
                    <ShieldCheck size={14} /> Admin
                  </NavLink>
                ) : (
                  <NavLink to="/dashboard" className="btn-primary text-sm py-2 px-4">
                    <User size={14} /> Dashboard
                  </NavLink>
                )}
                <button
                  onClick={async () => {
                    await logout();
                    toast.success('Logged out successfully');
                    navigate('/');
                  }}
                  className="text-sm px-3 py-2 rounded-xl card text-text/70 dark:text-cream/70 hover:text-accent transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/auth"
                  className="btn-primary text-sm py-2 px-4"
                >
                  Sign In / Register
                </Link>
              </div>
            )}

            <button
              className="lg:hidden p-2.5 rounded-xl card"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-accent/10"
            >
              <div className="container mx-auto px-6 py-4 grid gap-1">
                {navGroups.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-text/80 dark:text-cream/80 hover:text-accent hover:bg-accent/6"
                        >
                          {item.label}
                          <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-4 grid gap-1 mt-1">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                className="block px-3 py-2 rounded-lg text-sm text-text/70 dark:text-cream/70 hover:text-accent hover:bg-accent/6"
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                            isActive ? 'text-accent bg-accent/8 font-semibold' : 'text-text/80 dark:text-cream/80 hover:text-accent hover:bg-accent/6'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="mt-3 pt-3 border-t border-accent/10 flex gap-2">
                  {user ? (
                    <>
                      {user.role === 'Admin' ? (
                        <NavLink to="/dashboard/admin" className="btn-primary text-sm py-2 px-4 flex-1 text-center bg-blue-600 border-blue-600">Admin</NavLink>
                      ) : (
                        <NavLink to="/dashboard" className="btn-primary text-sm py-2 px-4 flex-1 text-center">Dashboard</NavLink>
                      )}
                      <button onClick={async () => { await logout(); toast.success('Logged out'); navigate('/'); }} className="btn-ghost text-sm py-2 px-3">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth" className="btn-primary text-sm py-2 px-4 flex-1 text-center">Sign In</Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <LoginModal
        open={loginOpen}
        presetRole={presetRole}
        onClose={() => setLoginOpen(false)}
        onLogin={(payload) => { login(payload); setLoginOpen(false) }}
      />
    </>
  )
}
