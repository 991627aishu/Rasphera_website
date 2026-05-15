import React, { useEffect } from 'react';
import logo from '../assets/die-logo.svg'; // or your actual logo file
import tablePlay from '../assets/table-play.png';
import heroMain from '../assets/hero-main.png';
import gardenPlay from '../assets/garden-play.png';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { 
  ArrowRight, 
  Leaf, 
  Users, 
  Heart, 
  Search, 
  Settings, 
  Play, 
  BarChart, 
  Moon, 
  Sun,
  CheckCircle2,
  Star,
  Quote
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const IntroLanding = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animations variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-white overflow-x-hidden">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-100 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 hover:scale-110 transition-all shadow-xl"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
      </button>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] lg:min-h-[110vh] flex flex-col py-10 px-8 lg:px-24 xl:px-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        
        {/* Header Logo Area - Replicated from AuthPage */}
        <div className="container mx-auto max-w-[1700px] z-30 mb-12 lg:mb-20">
         <div className="flex items-center gap-3 group">
  


  {/* Brand text */}
  <span className="font-display text-2xl font-bold text-highlight dark:text-cream tracking-tight">
    Rasphera
  </span>
</div>
        </div>

        {/* Extraordinary Background: Floating Particles & Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated Gradients */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-20 bg-blue-500 dark:bg-blue-900 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-20 bg-orange-400 dark:bg-orange-900 animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Subtle Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-accent/20 dark:bg-accent/40 blur-sm"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0.1
              }}
              animate={{ 
                y: [null, Math.random() * -150 - 50 + 'px'],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: Math.random() * 7 + 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-[1700px] z-10 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* LEFT SIDE: Text Content (Dominant) */}
            <div className="text-left z-30">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-10 shadow-sm"
                >
                  <Leaf size={18} />
                  <span>100% Sustainable Wooden Gaming</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-10 leading-[0.9] dark:text-white drop-shadow-xl max-w-2xl">
                  Sustainable <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-accent to-orange-500">Connection</span>
                </h1>
                
                <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium tracking-wide mb-14 leading-relaxed max-w-xl">
                  Reimagining play for a tactile, <br className="hidden md:block" /> screen-free future.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-start gap-8 mb-20">
                  <button 
                    onClick={() => navigate('/auth')}
                    className="w-full sm:w-auto px-14 py-6 rounded-2xl bg-accent hover:bg-accent-light text-white font-bold text-2xl shadow-glow transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
                  >
                    Start Journey
                    <ArrowRight size={24} />
                  </button>
                </div>

                {/* Stats Footer - Replicated from AuthPage */}
                <div className="flex gap-12 pt-10 border-t border-slate-200 dark:border-white/10">
                  <div className="flex flex-col">
                    <span className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">10k+</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Active Users</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">100%</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Sustainable</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Creative Image Arrangement */}
            <div className="relative flex justify-center items-center h-[500px] lg:h-[700px] w-full">
              
              {/* Image 1: Top-Leftish Staggered */}
              <motion.div 
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  translateX: mousePos.x * -0.4,
                  translateY: mousePos.y * -0.4
                }}
                transition={{ 
                  x: { duration: 1.4, ease: "easeOut" },
                  opacity: { duration: 1.4 },
                  scale: { duration: 1.4 },
                  translateX: { duration: 0.3, ease: "linear" },
                  translateY: { duration: 0.3, ease: "linear" }
                }}
                className="absolute top-0 left-0 w-[65%] lg:w-[75%] z-20"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                  className="relative group perspective-1000"
                >
                  <div className="absolute -inset-8 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
                  <div className="rounded-[4rem] overflow-hidden shadow-card border-2 border-white/40 dark:border-white/5 transition-all duration-700 group-hover:shadow-glow-blue relative z-10 bg-white/5 backdrop-blur-sm">
                    <img 
                      src={tablePlay} 
                      alt="Family connection" 
                      className="w-full h-auto object-cover opacity-95"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Image 2: Bottom-Rightish Staggered with Overlap */}
              <motion.div 
                initial={{ opacity: 0, x: 150, y: 100, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  scale: 1,
                  translateX: mousePos.x * -0.6,
                  translateY: mousePos.y * -0.6
                }}
                transition={{ 
                  x: { duration: 1.4, ease: "easeOut", delay: 0.3 },
                  y: { duration: 1.4, ease: "easeOut", delay: 0.3 },
                  opacity: { duration: 1.4, delay: 0.3 },
                  scale: { duration: 1.4, delay: 0.3 },
                  translateX: { duration: 0.3, ease: "linear" },
                  translateY: { duration: 0.3, ease: "linear" }
                }}
                className="absolute bottom-0 right-0 w-[65%] lg:w-[75%] z-30"
              >
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                  className="relative group perspective-1000"
                >
                  <div className="absolute -inset-8 bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
                  <div className="rounded-[4rem] overflow-hidden shadow-card border-2 border-white/40 dark:border-white/5 transition-all duration-700 group-hover:shadow-glow-orange relative z-10 bg-white/5 backdrop-blur-sm">
                    <img 
                      src={heroMain} 
                      alt="Sustainable play" 
                      className="w-full h-auto object-cover opacity-95"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Glass Element behind images */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent blur-3xl rounded-full -z-10 opacity-30" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURE HIGHLIGHTS */}
      <section className="py-32 px-4 relative bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Designed for Joy & Connection</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Every Rasphera game is a masterpiece of craftsmanship, designed to bring people together while respecting our planet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Heart className="text-orange-500" size={32} />, 
                title: "Wellness & Learning", 
                text: "Enhance cognitive focus and mental well-being through tactile, mindful play that reduces stress." 
              },
              { 
                icon: <Leaf className="text-green-500" size={32} />, 
                title: "Eco-Friendly Fun", 
                text: "Sustainably sourced, FSC-certified wooden games that leave zero waste for future generations." 
              },
              { 
                icon: <Users className="text-blue-500" size={32} />, 
                title: "All Generations", 
                text: "Bridges the gap between kids and seniors with activities that are simple to learn but deeply engaging." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all"
              >
                <div className="mb-8 p-4 w-fit rounded-2xl bg-slate-50 dark:bg-white/5">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Rasphera Journey</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Four simple steps to meaningful engagement</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 hidden lg:block -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: <Search />, title: "Identify Needs", step: "01" },
                { icon: <Settings />, title: "Custom Games", step: "02" },
                { icon: <Play />, title: "Play & Engage", step: "03" },
                { icon: <BarChart />, title: "See the Impact", step: "04" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-8 relative transition-all group-hover:scale-110 group-hover:bg-accent group-hover:text-white shadow-lg">
                    {item.icon}
                    <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold border-4 border-white dark:border-slate-950">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL STORY SECTION */}
      <section className="py-32 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] overflow-hidden aspect-[4/3] shadow-2xl group"
            >
              <img 
                src={gardenPlay} 
                alt="Movement for sustainability" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Play fill="currentColor" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Watch Our Story</p>
                    <p className="text-white/60">A movement for connection</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-tight">More than a game. <br /> <span className="text-accent">A movement.</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Sustainability isn't just a buzzword for us—it's the core of everything we build. 
                We believe that play should bridge the gap between digital isolation and tactile reality, 
                returning us to genuine human connections.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "FSC Certified Wood", 
                  "Circular Design", 
                  "Zero Plastic Used", 
                  "Community Focused"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <span className="font-bold">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>Trusted by Families Worldwide</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What People Say</h2>
          </div>

         <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      name: "Anitha Rao",
      role: "Program Coordinator – Madhu Bhoomi Foundation, Bengaluru",
      quote:
        "We introduced Rasphera during our senior engagement sessions, and the response was heartwarming. Residents who are usually reserved started opening up, interacting, and even recalling memories. It felt truly meaningful.",
    },
    {
      name: "Karthik Menon",
      role: "HR Manager – Swift Solutions, Bengaluru",
      quote:
        "We’ve conducted multiple team-building activities before, but Rasphera stood out. It was simple, engaging, and genuinely brought the team together without feeling forced.",
    },
    {
      name: "Neha Sharma",
      role: "Parent – Bengaluru",
      quote:
        "My son usually spends most of his time on screens, but Rasphera games completely changed that. He was fully engaged, thinking creatively, and most importantly, spending quality time with us.",
    },
    {
      name: "Ramesh Iyer",
      role: "Teacher – Bharatiya Vidya Bhavan, Bengaluru",
      quote:
        "The games are thoughtfully designed. Students were more focused, collaborative, and excited to participate. It’s a great blend of fun and learning.",
    },
    {
      name: "Pooja Nair",
      role: "Event Organizer – RVU Santhe, Bengaluru",
      quote:
        "Rasphera became the highlight of our event. People of all age groups gathered around, played together, and stayed longer than expected. It created a very lively and inclusive environment.",
    },
    {
      name: "Suresh Patel",
      role: "Caregiver – Bengaluru",
      quote:
        "For a few moments, I could see recognition and joy in my parent’s face again. Those moments are rare, and Rasphera helped create them. That means a lot to us.",
    },
  ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 shadow-soft relative"
              >
                <Quote className="absolute top-10 right-10 text-slate-100 dark:text-white/5" size={60} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400" fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-slate-600 dark:text-slate-300 mb-8 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
  {t.name[0]}
</div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[160px] opacity-20 bg-accent/40" />
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 lg:p-24 rounded-[4rem] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white shadow-3xl overflow-hidden relative border border-slate-100 dark:border-white/5"
          >
            {/* Background image overlay for CTA - Improved blending */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
              <img src={tablePlay} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-bold mb-10 leading-tight">Ready to Experience Something Meaningful?</h2>
              <p className="text-xl text-slate-600 dark:text-white/70 mb-12 max-w-2xl mx-auto">Join thousands of families rediscovering the joy of sustainable, tactile play.</p>
              <button 
                onClick={() => navigate('/auth')}
                className="px-16 py-7 rounded-2xl bg-accent hover:bg-accent-light text-white text-2xl font-bold shadow-[0_20px_50px_rgba(255,107,0,0.4)] hover:shadow-[0_25px_60px_rgba(255,107,0,0.6)] transition-all hover:scale-105 active:scale-95"
              >
                Start Experience
              </button>
            </div>
          </motion.div>
        </div>
      </section>
{/* FOOTER */}
<footer className="py-20 border-t border-slate-200 dark:border-white/10 px-4 bg-white dark:bg-slate-950">

  <div className="container mx-auto max-w-7xl">

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

      {/* BRAND */}
      <div className="col-span-2 lg:col-span-2">

        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            Rasphera
          </span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
          Rebuilding human connection through sustainable, screen-free wooden play ecosystems.
        </p>

        {/* ✅ SOCIAL ICONS */}
        <div className="mt-5 flex gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rasphera.games?igsh=OXNzdTNnb2IwNnF4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 
                       flex items-center justify-center 
                       text-slate-500 dark:text-slate-400
                       hover:text-accent hover:border-accent hover:scale-110 
                       transition-all duration-200"
          >
            <Instagram size={16} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/rasphera/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 
                       flex items-center justify-center 
                       text-slate-500 dark:text-slate-400
                       hover:text-accent hover:border-accent hover:scale-110 
                       transition-all duration-200"
          >
            <Linkedin size={16} />
          </a>

        </div>

        {/* ✅ CONTACT INFO */}
        <div className="mt-5 space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-accent" />
            hello@rasphera.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            +91 98765 43210
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            Karnataka, India
          </div>
        </div>

      </div>

      {/* PRODUCT */}
      <div>
        <h5 className="font-semibold mb-5 text-sm uppercase tracking-wide">
          Product
        </h5>
        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/home" className="hover:text-accent transition">How it works</Link></li>
          <li><Link to="/shop" className="hover:text-accent transition">The Collection</Link></li>
          <li><Link to="/services" className="hover:text-accent transition">Custom Design</Link></li>
        </ul>
      </div>

      {/* COMPANY */}
      <div>
        <h5 className="font-semibold mb-5 text-sm uppercase tracking-wide">
          Company
        </h5>
        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/about" className="hover:text-accent transition">Our Story</Link></li>
          <li><Link to="/about/sustainability" className="hover:text-accent transition">Sustainability</Link></li>
          <li><Link to="/careers" className="hover:text-accent transition">Careers</Link></li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div>
        <h5 className="font-semibold mb-5 text-sm uppercase tracking-wide">
          Support
        </h5>
        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/contact" className="hover:text-accent transition">Contact Us</Link></li>
          <li><Link to="/learn/guides" className="hover:text-accent transition">Guides</Link></li>
          <li><Link to="/learn/downloads" className="hover:text-accent transition">Downloads</Link></li>
        </ul>
      </div>

    </div>

    {/* BOTTOM BAR */}
    <div className="pt-10 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Rasphera – Sustainable Play. All rights reserved.
      </p>

      <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
        <Link to="/contact" className="hover:text-accent transition">Privacy Policy</Link>
        <Link to="/contact" className="hover:text-accent transition">Terms of Service</Link>
      </div>

    </div>

  </div>
</footer>
    </div>
  );
};

export default IntroLanding;