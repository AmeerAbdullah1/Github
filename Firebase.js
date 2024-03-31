import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence } from 'firebase/auth';
import { getAuth, initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Rwqm82KENL2z3CuwkH9R4SE8aF0OO60",
  authDomain: "madlabproject-905af.firebaseapp.com",
  projectId: "madlabproject-905af",
  storageBucket: "madlabproject-905af.appspot.com",
  messagingSenderId: "844615408553",
  appId: "1:844615408553:web:4ed16b01b5a1df743442b8",
  measurementId: "G-T6L1K2K8DZ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});