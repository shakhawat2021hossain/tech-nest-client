// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrBBkgogaqOq1bjk5-FNB1VLAIx9l7Mfo",
  authDomain: "laptop-sho.firebaseapp.com",
  projectId: "laptop-sho",
  storageBucket: "laptop-sho.appspot.com",
  messagingSenderId: "909307397024",
  appId: "1:909307397024:web:6a22e1f631eef02bc05ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;