// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6H5Bpb90yKUWd-4vsQldtjwLJyYwg7JE",
  authDomain: "chat-app-gs-be7f7.firebaseapp.com",
  projectId: "chat-app-gs-be7f7",
  storageBucket: "chat-app-gs-be7f7.firebasestorage.app",
  messagingSenderId: "727420662002",
  appId: "1:727420662002:web:a93d50481ef622d657206b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, There i am using Chat App",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[2].split("-").join(""));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.message);
  }
};

export { signup, login, logout };
