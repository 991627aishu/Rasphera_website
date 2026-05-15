import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth, useHasRole } from '../context/AuthContext.jsx'

const Home = lazy(() => import('../pages/Home.jsx'))
const IntroLanding = lazy(() => import('../pages/IntroLanding.jsx'))
const AuthPage = lazy(() => import('../pages/AuthPage.jsx'))
const About = lazy(() => import('../pages/About/About.jsx'))
const OurStory = lazy(() => import('../pages/About/OurStory.jsx'))
const Sustainability = lazy(() => import('../pages/About/Sustainability.jsx'))
const SocialImpact = lazy(() => import('../pages/About/SocialImpact.jsx'))

const Services = lazy(() => import('../pages/Services/Services.jsx'))
const CorporateSolutions = lazy(() => import('../pages/Services/CorporateSolutions.jsx'))
const CSRPrograms = lazy(() => import('../pages/Services/CSRPrograms.jsx'))
const SeniorWellness = lazy(() => import('../pages/Services/SeniorWellness.jsx'))
const KidsSchools = lazy(() => import('../pages/Services/KidsSchools.jsx'))
const CustomGameDesign = lazy(() => import('../pages/Services/CustomGameDesign.jsx'))

const Events = lazy(() => import('../pages/Events/Events.jsx'))
const BookEvent = lazy(() => import('../pages/Events/BookEvent.jsx'))
const UpcomingEvents = lazy(() => import('../pages/Events/UpcomingEvents.jsx'))
const EventCalendar = lazy(() => import('../pages/Events/EventCalendar.jsx'))

const Shop = lazy(() => import('../pages/Shop/Shop.jsx'))
const Games = lazy(() => import('../pages/Shop/Games.jsx'))
const DIYKits = lazy(() => import('../pages/Shop/DIYKits.jsx'))
const GiftSets = lazy(() => import('../pages/Shop/GiftSets.jsx'))
const Subscriptions = lazy(() => import('../pages/Shop/Subscriptions.jsx'))

const Learn = lazy(() => import('../pages/Learn/Learn.jsx'))
const Blog = lazy(() => import('../pages/Learn/Blog.jsx'))
const BlogDetail = lazy(() => import('../pages/Learn/BlogDetail.jsx'))
const Research = lazy(() => import('../pages/Learn/Research.jsx'))
const Downloads = lazy(() => import('../pages/Learn/Downloads.jsx'))

const Community = lazy(() => import('../pages/Community/Community.jsx'))
const TestimonialsPage = lazy(() => import('../pages/Community/TestimonialsPage.jsx'))
const CaseStudies = lazy(() => import('../pages/Community/CaseStudies.jsx'))
const UserStories = lazy(() => import('../pages/Community/UserStories.jsx'))
const PhotoWall = lazy(() => import('../pages/Community/PhotoWall.jsx'))

const Partner = lazy(() => import('../pages/Partner.jsx'))
const Careers = lazy(() => import('../pages/Careers.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))

const DashboardLayout = lazy(() => import('../pages/Dashboard/DashboardLayout.jsx'))
const AdminDashboard = lazy(() => import('../pages/Dashboard/AdminDashboard.jsx'))
const UserDashboard = lazy(() => import('../pages/Dashboard/UserDashboard.jsx'))
const EventManagerDashboard = lazy(() => import('../pages/Dashboard/EventManagerDashboard.jsx'))

function ProtectedRoute({ roles, children }) {
  const { user, loading } = useAuth()
  const allowed = useHasRole(roles)

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  if (!user) return <Navigate to="/auth" replace />
  if (!allowed) return <Navigate to="/auth" replace />
  return children
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IntroLanding />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/about/our-story" element={<OurStory />} />
      <Route path="/about/sustainability" element={<Sustainability />} />
      <Route path="/about/social-impact" element={<SocialImpact />} />

      <Route path="/services" element={<Services />} />
      <Route path="/services/corporate-solutions" element={<CorporateSolutions />} />
      <Route path="/services/csr-programs" element={<CSRPrograms />} />
      <Route path="/services/senior-wellness" element={<SeniorWellness />} />
      <Route path="/services/kids-schools" element={<KidsSchools />} />
      <Route path="/services/custom-game-design" element={<CustomGameDesign />} />

      <Route path="/events" element={<Events />} />
      <Route path="/events/book" element={<BookEvent />} />
      <Route path="/events/upcoming" element={<UpcomingEvents />} />
      <Route path="/events/calendar" element={<EventCalendar />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/games" element={<Games />} />
      <Route path="/shop/diy-kits" element={<DIYKits />} />
      <Route path="/shop/gift-sets" element={<GiftSets />} />
      <Route path="/shop/subscriptions" element={<Subscriptions />} />

      <Route path="/learn" element={<Learn />} />
      <Route path="/learn/blog" element={<Blog />} />
      <Route path="/learn/blog/:id" element={<BlogDetail />} />
      <Route path="/learn/research" element={<Research />} />
      <Route path="/learn/downloads" element={<Downloads />} />

      <Route path="/community" element={<Community />} />
      <Route path="/community/testimonials" element={<TestimonialsPage />} />
      <Route path="/community/case-studies" element={<CaseStudies />} />
      <Route path="/community/user-stories" element={<UserStories />} />
      <Route path="/community/photo-wall" element={<PhotoWall />} />

      <Route path="/partner" element={<Partner />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute roles={['Admin', 'User', 'Event Manager']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="admin"
          element={
            <ProtectedRoute roles={['Admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="user"
          element={
            <ProtectedRoute roles={['User']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="event-manager"
          element={
            <ProtectedRoute roles={['Event Manager']}>
              <EventManagerDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}
