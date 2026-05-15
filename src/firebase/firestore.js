import { collection, addDoc, doc, setDoc, getDoc, serverTimestamp, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './config';

/**
 * Add a new message from the contact form
 * @param {Object} messageData 
 * @param {string|null} userId
 * @returns document reference
 */
export const saveContactMessage = async (messageData, userId = null) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...messageData,
      userId,
      createdAt: serverTimestamp()
    });
    return docRef;
  } catch (error) {
    console.error("Error adding message: ", error);
    throw error;
  }
};

/**
 * Save an event booking
 * @param {Object} eventData 
 * @param {string|null} userId
 * @returns document reference
 */
export const saveEventBooking = async (eventData, userId = null) => {
  try {
    const docRef = await addDoc(collection(db, 'event_bookings'), {
      ...eventData,
      userId,
      createdAt: serverTimestamp()
    });
    return docRef;
  } catch (error) {
    console.error("Error saving event booking: ", error);
    throw error;
  }
};

/**
 * Create a new user profile in Firestore
 * @param {string} uid 
 * @param {Object} data - email, name, role
 */
export const createUserProfile = async (uid, data) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      ...data,
      uid,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Error creating user profile: ", error);
    throw error;
  }
};

/**
 * Fetch a user profile from Firestore
 * @param {string} uid 
 * @returns User data or null
 */
export const getUserProfile = async (uid) => {
  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching user profile: ", error);
    throw error;
  }
};

export const getContactMessages = async () => {
  try {
    const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages: ", error);
    throw error;
  }
};
