import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBMtOcVHWBzFYJBRtrq5wG0Ikun17tkRHk",
  authDomain: "simpleweather-70222.firebaseapp.com",
  projectId: "simpleweather-70222",
  storageBucket: "simpleweather-70222.appspot.com",
  messagingSenderId: "232919545375",
  appId: "1:232919545375:web:3289338c6578b2e96d472a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


