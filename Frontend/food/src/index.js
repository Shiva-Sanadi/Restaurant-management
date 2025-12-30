

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CartState from './components/AddToCart/context/cart/CartState';
import CartProvider from './components/Cart';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <CartState>
        <CartProvider>
          <App />
        </CartProvider>
      </CartState>
    </HashRouter>
  </React.StrictMode>
);