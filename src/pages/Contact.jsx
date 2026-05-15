import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { saveContactMessage } from '../firebase/firestore'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function Contact() {
  const { user } = useAuth();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setLoading(true);
    setError(null);
    try {
      await saveContactMessage(formData, user?.uid);
      setSent(true);
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again.');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="tag mx-auto mb-4">Get in Touch</div>
          <h1 className="font-display text-5xl font-bold text-white">We'd Love to Hear From You</h1>
          <p className="text-white/60 mt-3 max-w-md mx-auto">Questions, partnerships, or just want to play — reach out.</p>
        </div>
      </div>

      <div className="container-default">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold text-highlight dark:text-cream mb-6">Contact Details</h2>
            <div className="space-y-5">
              {[
                { icon: <Mail size={18} />, label: 'Email', val: 'hello@rasphera.com' },
                { icon: <Phone size={18} />, label: 'Phone', val: '+91 98765 43210' },
{ icon: <MapPin size={18} />, label: 'Location', val: 'Bangalore, Karnataka, India' },              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs text-text/50 dark:text-cream/50 uppercase tracking-wide font-medium">{item.label}</p>
                    <p className="font-medium text-text dark:text-cream">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 card-premium rounded-2xl p-6">
              <h3 className="font-display font-bold text-highlight dark:text-cream">Office Hours</h3>
              <div className="mt-3 space-y-2 text-sm text-text/60 dark:text-cream/60">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-accent">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-accent">10:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-text/40 dark:text-cream/40">Closed</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {sent ? (
              <div className="card-premium rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <CheckCircle size={52} className="text-green-500" />
                <h3 className="font-display text-2xl font-bold text-highlight dark:text-cream">Message Sent!</h3>
                <p className="text-text/60 dark:text-cream/60">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-ghost">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium rounded-3xl p-8 space-y-5">
                <h2 className="font-display text-2xl font-bold text-highlight dark:text-cream">Send a Message</h2>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-text/60 dark:text-cream/60 uppercase tracking-wide block mb-1.5">Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-text/60 dark:text-cream/60 uppercase tracking-wide block mb-1.5">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="you@example.com" required />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-text/60 dark:text-cream/60 uppercase tracking-wide block mb-1.5">Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} className="input-field" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text/60 dark:text-cream/60 uppercase tracking-wide block mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="input-field resize-none" rows={5} placeholder="Tell us more..." required />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send size={16} /> {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
