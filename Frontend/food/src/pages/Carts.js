import React from 'react';
import Nav from "../components/Nav";
import Cart from '../components/Cart';
import Items from '../components/Items';
import Contextcart from '../components/Contextcart';
import Footer from "../components/Footer";

const Carts = () => {
  return (
    <>
<Nav/>
<Cart/>
<Items/>
<Contextcart/>
<Footer/>
    </>
  )
}

export default Carts;