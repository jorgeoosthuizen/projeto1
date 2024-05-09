import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOyO_bKz3KW2PVuc4wYgmgJ6XrkE8DFgk",
  authDomain: "pokebase-ca29e.firebaseapp.com",
  databaseURL: "https://pokebase-ca29e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokebase-ca29e",
  storageBucket: "pokebase-ca29e.appspot.com",
  messagingSenderId: "268193697368",
  appId: "1:268193697368:web:13e662480d4b025a0d442d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore and get a reference to the database

export default db; // Export the initialized Firestore database instance



