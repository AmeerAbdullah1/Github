// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence } from 'firebase/auth';
import { getAuth, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // Import ReactNativeAsyncStorage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr1zk1XpMkOlCz0_5j69BdJNolMht6zaU",
  authDomain: "reactapp-45b0e.firebaseapp.com",
  projectId: "reactapp-45b0e",
  storageBucket: "reactapp-45b0e.appspot.com",
  messagingSenderId: "326690045865",
  appId: "1:326690045865:web:08ca3f61f64573893e0eb8",
  measurementId: "G-TXEJ704057"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});