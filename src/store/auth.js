import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { collection } from 'firebase/firestore';
import db from '../firebase/firebase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  actions: {
    async register(email, password) {
      const auth = getAuth();
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const usersCollectionRef = collection(db, 'users');
        await setDoc(doc(usersCollectionRef, user.uid), {
          email: user.email,
        });
        this.setUser(user);
        alert('Registration successful!');
      } catch (error) {
        throw new Error(error.message);
      }
    },
    async login(email, password) {
      const auth = getAuth();
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        this.setUser(user);
        alert('Login successful!');
      } catch (error) {
        throw new Error(error.message);
      }
    },
    setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    }
  }
});
