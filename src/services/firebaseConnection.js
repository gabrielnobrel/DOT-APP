import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9_T7r1hQmqcu-yKwB9CepcOoXb4FFTvo",
  authDomain: "chatgpt-917f8.firebaseapp.com",
  databaseURL: "https://chatgpt-917f8-default-rtdb.firebaseio.com",
  projectId: "chatgpt-917f8",
  storageBucket: "chatgpt-917f8.appspot.com",
  messagingSenderId: "228379907384",
  appId: "1:228379907384:web:31563621a27363b7f15dcd",
};

const app = initializeApp(firebaseConfig);
const firebaseConnection = getDatabase(app);

export default firebaseConnection;
