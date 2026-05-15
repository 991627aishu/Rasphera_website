import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  UserCircle, 
  ArrowLeft,
  CheckCircle2,
  Moon,
  Sun
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { signUp, logIn } from '../firebase/auth';
import toast from 'react-hot-toast';

const AuthPage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      if (user.role === 'Admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard');
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (activeTab === 'register') {
        await signUp(formData.email, formData.password, formData.name);
        toast.success("Account created successfully!");
      } else {
        await logIn(formData.email, formData.password);
        toast.success("Welcome back!");
      }
      // Redirection is handled by the useEffect watching the 'user' state
    } catch (err) {
      setError(err.message || "Failed to authenticate");
      toast.error(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans p-4 lg:p-8">
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 hover:scale-110 transition-all shadow-xl"
      >
        {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
      </button>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] min-h-[850px] border border-slate-100 dark:border-white/5"
      >
        
        {/* Left Side: Visual/Illustration Panel */}
        <div className="relative w-full lg:h-auto overflow-hidden bg-transparent flex flex-col p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5">
          {/* Header Area */}
          <div className="z-20 mb-6 lg:mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors mb-6 group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wider">Back to intro</span>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Rasphera</h1>
            </div>
          </div>

          {/* Illustration Area: Dominant and large visual */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 py-2">
            <motion.div 
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full flex items-center justify-center group/img"
            >
              {/* Parent container for shadow since clip-path cuts it off */}
              <div className="w-full relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] flex justify-center">
                <img 
                  src="/src/assets/auth-visual.png" 
                  alt="Rasphera Gaming" 
                  className="w-[110%] h-auto object-contain transition-transform duration-1000 group-hover/img:scale-105"
                  style={{ 
                    clipPath: 'ellipse(44% 36% at 50% 53%)',
                    maskImage: 'radial-gradient(ellipse 44% 36% at 50% 53%, black 98%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 44% 36% at 50% 53%, black 98%, transparent 100%)',
                    filter: theme === 'dark' ? 'contrast(1.1) brightness(0.85) drop-shadow(0 0 15px rgba(0,0,0,0.7))' : 'none'
                  }}
                />
              </div>
              {/* Background soft glow: Vibrant tones */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] bg-blue-500/10 dark:bg-blue-900/15 blur-[90px] rounded-full -z-10 animate-pulse transition-colors duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-accent/10 dark:bg-accent-dark/15 blur-[80px] rounded-full -z-10 animate-pulse transition-colors duration-500" style={{ animationDelay: '2.5s' }} />
            </motion.div>

            {/* Text Content: Integrated and impactful */}
            <div className="text-center lg:text-left w-full mt-8 lg:mt-12 space-y-4">
              <h2 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 dark:text-white">
                Reconnect through <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-accent to-orange-500">sustainable play.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join our movement of screen-free, eco-friendly wooden experiences for all generations.
              </p>
            </div>
          </div>
          
          {/* Stats Footer Area */}
          <div className="mt-10 lg:mt-auto pt-8 border-t border-slate-200 dark:border-white/10 flex gap-12 z-20">
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">10k+</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Active Users</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">100%</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Sustainable</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white dark:bg-slate-900 transition-colors duration-500">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow">R</div>
            <h1 className="text-2xl font-bold dark:text-white">Rasphera</h1>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3 text-slate-900 dark:text-white">
              {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {activeTab === 'login' ? "Please enter your details to sign in." : "Fill in the information below to join us."}
            </p>
            {error && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium border border-red-200 dark:border-red-800">
                {error}
              </div>
            )}
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl mb-10">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3.5 rounded-xl font-bold transition-all ${activeTab === 'login' ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3.5 rounded-xl font-bold transition-all ${activeTab === 'register' ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {activeTab === 'register' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-accent transition-colors">
                      <User size={20} />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={activeTab === 'register'}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all placeholder:text-slate-400"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-accent transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all placeholder:text-slate-400"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block">Password</label>
                {activeTab === 'login' && (
                  <button type="button" className="text-xs font-bold text-accent hover:underline">Forgot password?</button>
                )}
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-accent transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all placeholder:text-slate-400"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Role Selection is determined securely on the backend/auth logic */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 rounded-2xl bg-accent hover:bg-accent-light text-white font-bold text-xl shadow-[0_15px_30px_rgba(255,107,0,0.3)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (activeTab === 'login' ? 'Sign In' : 'Create Account')}
              {!loading && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              By joining, you agree to our <br />
              <span className="text-slate-900 dark:text-white font-bold hover:underline cursor-pointer">Terms of Service</span> and <span className="text-slate-900 dark:text-white font-bold hover:underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;