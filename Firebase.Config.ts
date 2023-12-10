import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0zfFTiuXtpezlHDtKSacb8TAdlFPvSVw",
  authDomain: "fir-crud-4078f.firebaseapp.com",
  projectId: "fir-crud-4078f",
  storageBucket: "fir-crud-4078f.appspot.com",
  messagingSenderId: "954504116213",
  appId: "1:954504116213:web:81416b7abf7134acaa52bc"
};

export const app = initializeApp(firebaseConfig);