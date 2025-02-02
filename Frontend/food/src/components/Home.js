import React from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Menus from './Menus';
import Reservation from './Reservation';
import Service from './Service';
import Review from './Review';
// import Register from './Register';
// import Login from './Login';
import Footer from './Footer';
import Cart from './Cart';


import Carts from "./AddToCart/Componentss/Addtocart";
// import Nave from "./AddToCart/Componentss/Nave";
// import HomeScreen from "./AddToCart/screens/HomeScreen";

const Home = () => {
  return (<>
          <Nav/>   

        {/* <Nave/> */}
      <Carts />
      {/* <HomeScreen /> */}

          <Header/>
          <About/>
          <Service/>
          <Menus/>
          <Review/>
          <Reservation/>
          <Contact/>
          {/* <Register/> */}
          {/* <Login/> */}
          <Cart/>
          <Footer/>
          
    </> )
}

export default Home;