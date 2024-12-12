import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Urad7OcZZS6myS_BYk8EMrCmRPysYA0",
  authDomain: "fir-4e4f0.firebaseapp.com",
  projectId: "fir-4e4f0",
  storageBucket: "fir-4e4f0.firebasestorage.app",
  messagingSenderId: "684769743325",
  appId: "1:684769743325:web:98dd9b6aaf910b310f6634",
  measurementId: "G-X30Q95G7XS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
    app
}