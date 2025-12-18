// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// import CartState from "./components/AddToCart/context/cart/CartState";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <React.StrictMode>
  
//   <CartState>
//     <App />
//     </CartState>
//   </React.StrictMode>
//  </BrowserRouter>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CartState from './components/AddToCart/context/cart/CartState';
import CartProvider from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartState>
        <CartProvider>
          <App />
        </CartProvider>
      </CartState>
    </BrowserRouter>
  </React.StrictMode>
);