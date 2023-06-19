import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDmMAzn8QhubhBDO2LQPhNIN5nQMjNXMno",
    authDomain: "tiktok---clone-c6d10.firebaseapp.com",
    projectId: "tiktok---clone-c6d10",
    storageBucket: "tiktok---clone-c6d10.appspot.com",
    messagingSenderId: "482961375969",
    appId: "1:482961375969:web:0ea5d8e1fa056da923ada0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;