import React, { useState } from 'react'
import { services } from '../../data/servicesData.js'
import { useAuth } from '../../context/AuthContext.jsx'
import LoginModal from '../../common/LoginModal.jsx'

export default function BookEvent() {
  const { user } = useAuth()
  const [loginOpen, setLoginOpen] = useState(!user)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    participants: '',
    budget: '',
    date: '',
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const e = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.company) e.company = 'Company is required'
    if (!form.service) e.service = 'Select a service'
    if (!form.participants || Number(form.participants) <= 0) e.participants = 'Enter participant count'
    if (!form.budget) e.budget = 'Select a budget range'
    if (!form.date) e.date = 'Choose a date'
    if (!form.location) e.location = 'Enter a location'
    if (!form.message) e.message = 'Tell us a little about your event'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) setSubmitted(true)
  }

  return (
    <div className="container-default">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">Book an Event</h1>
        {!user && (
          <div className="mt-2 p-3 rounded-2xl bg-red-100 text-red-700 text-sm">
            Please sign in to book an event.
          </div>
        )}
        {submitted ? (
          <div className="mt-4 p-4 rounded-2xl bg-accent/10">
            <p>Thank you! We will contact you soon.</p>
          </div>
        ) : (
          <form className="grid md:grid-cols-2 gap-4 mt-4" onSubmit={onSubmit}>
            <div>
              <input
                name="name"
                placeholder="Full name"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.name}
                onChange={onChange}
                disabled={!user}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                name="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.email}
                onChange={onChange}
                disabled={!user}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                name="company"
                placeholder="Company"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.company}
                onChange={onChange}
                disabled={!user}
              />
              {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
            </div>
            <div>
              <select
                name="service"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.service}
                onChange={onChange}
                disabled={!user}
              >
                <option value="">Select service type</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
            </div>
            <div>
              <input
                type="number"
                min="1"
                name="participants"
                placeholder="Number of participants"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.participants}
                onChange={onChange}
                disabled={!user}
              />
              {errors.participants && <p className="text-red-600 text-sm mt-1">{errors.participants}</p>}
            </div>
            <div>
              <select
                name="budget"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.budget}
                onChange={onChange}
                disabled={!user}
              >
                <option value="">Budget range</option>
                <option value="Under ₹25,000">Under ₹25,000</option>
                <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                <option value="₹1,00,000+">₹1,00,000+</option>
              </select>
              {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget}</p>}
            </div>
            <div>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.date}
                onChange={onChange}
                disabled={!user}
              />
              {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
            </div>
            <div className="md:col-span-2">
              <input
                name="location"
                placeholder="Location"
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.location}
                onChange={onChange}
                disabled={!user}
              />
              {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Tell us about your event goals, audience, and constraints"
                rows={4}
                className="w-full px-4 py-2 rounded-2xl card"
                value={form.message}
                onChange={onChange}
                disabled={!user}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="md:col-span-2">
              <button className="btn-primary" disabled={!user}>
                Submit
              </button>
              {!user && (
                <button type="button" onClick={() => setLoginOpen(true)} className="ml-3 px-4 py-2 rounded-2xl card">
                  Sign in
                </button>
              )}
            </div>
          </form>
        )}
      </div>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLogin={() => setLoginOpen(false)} />
    </div>
  )
}
