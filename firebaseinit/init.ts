import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAk15hbdBDZ_MaqHn2wcCq9VRD2vMK36d0",
  authDomain: "nmamitclub-final.firebaseapp.com",
  projectId: "nmamitclub-final",
  storageBucket: "nmamitclub-final.appspot.com",
  messagingSenderId: "500536882753",
  appId: "1:500536882753:web:88a057944a16ce669cf8c0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db =  getFirestore(app)