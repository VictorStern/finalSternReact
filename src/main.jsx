import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdLyII4vaqD2xfSPXcmBrkFb1Z3cTLZQE",
  authDomain: "castabarberreact.firebaseapp.com",
  projectId: "castabarberreact",
  storageBucket: "castabarberreact.appspot.com",
  messagingSenderId: "902523695216",
  appId: "1:902523695216:web:f2488998ff247ce4cd04b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)