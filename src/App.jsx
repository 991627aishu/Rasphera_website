import React, { Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes.jsx'
import Navbar from './common/Navbar.jsx'
import Footer from './common/Footer.jsx'
import ScrollToTopButton from './common/ScrollToTop.jsx'

export default function App() {
  const [mounted, setMounted] = useState(false)
  const location = useLocation()
  
  useEffect(() => setMounted(true), [])

  const isStandalonePage = location.pathname === '/' || location.pathname === '/auth'

  return (
    <div className="min-h-screen bg-base text-text dark:bg-neutral-950 dark:text-white">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      {!isStandalonePage && <Navbar />}
      <main>
        <Suspense fallback={<div className="container-default">Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </main>
      {!isStandalonePage && <Footer />}
      {mounted && !isStandalonePage && <ScrollToTopButton />}
    </div>
  )
}
