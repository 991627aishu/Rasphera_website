import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { logOut } from '../firebase/auth';
import { getUserProfile } from '../firebase/firestore';

const withTimeout = (promise, ms) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))
  ]);
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch custom profile data (including role) from Firestore with a 5-second timeout
          const profile = await withTimeout(getUserProfile(firebaseUser.uid), 5000);
          
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: profile?.name || firebaseUser.displayName,
            role: profile?.role || 'User', 
            details: {} 
          });
        } catch (err) {
          console.error("Could not fetch user profile (check Firestore rules):", err);
          // Fallback if we can't read the profile
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || 'User',
            role: 'User',
            details: {}
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await logOut();
    setUser(null);
  };

  const updateDetails = (patch) => {
    setUser((u) => ({ ...u, details: { ...(u?.details || {}), ...patch } }));
  };

  const value = useMemo(() => ({ user, logout, updateDetails, loading }), [user, loading]);

  if (loading) {
    // Could return a spinner component here
    return <div className="min-h-screen flex items-center justify-center">Loading authentication...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useHasRole(required) {
  const { user } = useAuth();
  if (!user) return false;
  if (Array.isArray(required)) return required.includes(user.role);
  return user.role === required;
}
