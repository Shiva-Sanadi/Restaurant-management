import React from 'react';
// import Home from './components/Home.js';
import Home from "./pages/Homes.js";
import Aboutus from "./pages/Aboutus.js";
import Menuc from './pages/Menuc.js';
import Reservation from './pages/Reservations.js';
import Contacts from './pages/Contacts.js';
import Registes from './pages/Registers.js';
import Login from './components/Login.js';
import Cart from './pages/Carts.js';
import Services from './pages/Services.js';
import Errors from './pages/Errors.js';
import Payment from './pages/Payment.js';
import CheckoutCart from './pages/CheckoutCart.js';


import { Routes, Route , Path } from 'react-router-dom';

// import Carts from "./components/AddToCart/Componentss/Addtocart.js";


// "proxy": "http://localhost:5000",

function App() {
  return (
    <>
     <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route path='/about' Component={Aboutus}></Route>
      <Route path='/service' Component={Services}></Route>
      <Route path='/menu' Component={Menuc}></Route>
      <Route path='/reservation' Component={Reservation}></Route>
      <Route path='/contact' Component={Contacts}></Route>
      <Route path='/register' Component={Registes}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/cart' Component={Cart}></Route>

      <Route path='/checkout' Component={CheckoutCart}></Route>


      <Route path='/payment' Component={Payment}></Route>
      <Route  path='*' Component={Errors}></Route>
    </Routes>
    </>
  );
}

export default App;



// export default App;