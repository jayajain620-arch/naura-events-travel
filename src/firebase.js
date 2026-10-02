import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB76q192Xs4TOW8IUOFqOnr8PTmbtJRKZg",
  authDomain: "naura-events.firebaseapp.com",
  projectId: "naura-events",
  storageBucket: "naura-events.firebasestorage.app",
  messagingSenderId: "919808575366",
  appId: "1:919808575366:web:118e61479c369040838e07"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
