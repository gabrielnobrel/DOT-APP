import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9_T7r1hQmqcu-yKwB9CepcOoXb4FFTvo",
  authDomain: "chatgpt-917f8.firebaseapp.com",
  databaseURL: "https://chatgpt-917f8-default-rtdb.firebaseio.com",
  projectId: "chatgpt-917f8",
  storageBucket: "chatgpt-917f8.appspot.com",
  messagingSenderId: "228379907384",
  appId: "1:228379907384:web:31563621a27363b7f15dcd",
};

const firebaseConnection = initializeApp(firebaseConfig);

const auth = getAuth(firebaseConnection);
const database = getDatabase(firebaseConnection);

export { auth, database };
export default firebaseConnection;
