import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-w8Wx-9tCO9TWSu33BNdCgtlIp0nEPQ",
  authDomain: "games-1c3e7.firebaseapp.com",
  databaseURL: "https://games-1c3e7-default-rtdb.firebaseio.com",
  projectId: "games-1c3e7",
  storageBucket: "games-1c3e7.appspot.com",
  messagingSenderId: "1066726201703",
  appId: "1:1066726201703:web:5557d4d4838316274e37c2",
  measurementId: "G-MCCMW4RT4Q",
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getDatabase(firebaseApp);

// Get a reference to the auth service
export const auth = getAuth(firebaseApp);
