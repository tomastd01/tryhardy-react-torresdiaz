import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './store/CartContext';
import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAwjbkhX7dlgA0xkbitTGFbj-ItDFcouM0",
  authDomain: "mebel-final.firebaseapp.com",
  projectId: "mebel-final",
  storageBucket: "mebel-final.appspot.com",
  messagingSenderId: "269443171495",
  appId: "1:269443171495:web:da571e4cce8a3972ee4782"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <CartContextProvider>
          <App />     
        </CartContextProvider>
      </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
