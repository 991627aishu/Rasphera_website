import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from './config';
import { createUserProfile } from './firestore';

const withTimeout = (promise, ms) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))
  ]);
};

const adminEmails = [
  "YOUR_ADMIN_EMAIL@gmail.com",
  // Add other admin emails here
];

/**
 * Register a new user
 * @param {string} email 
 * @param {string} password 
 * @param {string} name 
 * @returns User credentials
 */
export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (name) {
      await updateProfile(user, { displayName: name });
    }

    const role = adminEmails.includes(email.toLowerCase()) ? 'Admin' : 'User';

    try {
      await withTimeout(createUserProfile(user.uid, {
        email: user.email,
        name: name || user.email.split('@')[0],
        role: role
      }), 5000);
    } catch (profileErr) {
      console.warn("Could not create user profile in Firestore (check if database exists):", profileErr);
      // We don't throw here because the user is already created in Firebase Auth successfully
    }

    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

/**
 * Log in an existing user
 * @param {string} email 
 * @param {string} password 
 * @returns User credentials
 */
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

/**
 * Log out the current user
 */
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};
