// ============================================
// ENHANCED HOME PAGE
// ============================================
// File: src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import About from './Aboutus';
import Contacts from './Contacts';
import Menus from './Menus';
import Reservations from './Reservations';
import Service from './Service';
import Review from '../components/Review';
import Carts from "../components/AddToCart/Componentss/Addtocart";
import FeaturedItems from '../components/FeaturedItems';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import '../index.css';

const Home = () => {
  return (
    <> 
      <Carts />
      <Header />
      <FeaturedItems />
      <About />
      <Service />
      <Statistics />
      <Menus />
      <Review />
      <Testimonials />
      <Reservations />
      <Newsletter />
      <Contacts />
    </> 
  );
}

export default Home;
