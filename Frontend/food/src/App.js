// import React from 'react';
// import Nav from './components/Nav.js';
// import Footer from './components/Footer.js';
// import Home from "./pages/Home.js";
// import Aboutus from "./pages/Aboutus.js";
// import Menus from './pages/Menus.js';
// import Reservation from './pages/Reservations.js';
// import Contacts from './pages/Contacts.js';
// import Registes from './pages/Registers.js';
// import Login from './pages/Logins.js';
// import Cart from './pages/Carts.js';
// import Services from './pages/Service.js';
// import Errors from './pages/Errors.js';
// import Payment from './pages/Payment.js';
// import CheckoutCart from './pages/CheckoutCart.js';


// import { Routes, Route , Path } from 'react-router-dom';

// // import Carts from "./components/AddToCart/Componentss/Addtocart.js";


// // "proxy": "http://localhost:5000",

// function App() {
//   return (
//     <>
//     <Nav/>
//      <Routes>
//       <Route exact path='/' Component={Home}></Route>
//       <Route path='/about' Component={Aboutus}></Route>
//       <Route path='/service' Component={Services}></Route>
//       <Route path='/menu' Component={Menus}></Route>
//       <Route path='/reservation' Component={Reservation}></Route>
//       <Route path='/contact' Component={Contacts}></Route>
//       <Route path='/register' Component={Registes}></Route>
//       <Route path='/login' Component={Login}></Route>
//       <Route path='/cart' Component={Cart}></Route>

//       <Route path='/checkout' Component={CheckoutCart}></Route>


//       <Route path='/payment' Component={Payment}></Route>
//       <Route  path='*' Component={Errors}></Route>
//     </Routes>
//     <Footer/>
//     </>
//   );
// }

// export default App;



// // export default App;




// ============================================
// 1. APP.JS - Enhanced with Admin Routes
// ============================================
// File: src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Home from "./pages/Home.js";
import Aboutus from "./pages/Aboutus.js";
import Menus from './pages/Menus.js';
import Reservation from './pages/Reservations.js';
import Contacts from './pages/Contacts.js';
import Registers from './pages/Registers.js';
import Login from './pages/Logins.js';
import Cart from './pages/Carts.js';
import Services from './pages/Service.js';
import Errors from './pages/Errors.js';
import Payment from './pages/Payment.js';
import CheckoutCart from './pages/CheckoutCart.js';

// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin.js';
import AdminDashboard from './pages/Admin/AdminDashboard.js';
import ManageOrders from './pages/Admin/ManageOrder.js';
import ManageMenuItems from './pages/Admin/ManageMenuItem.js';
import ManageReservations from './pages/Admin/ManageReservation.js';
import ManageUsers from './pages/Admin/ManageUsers.js';
import Analytics from './pages/Admin/Analytics.js';
import ProtectedRoute from './components/Admin/ProtectedRoute.js';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={
          <>
            <Nav />
            <Home />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <Nav />
            <Aboutus />
            <Footer />
          </>
        } />
        <Route path='/service' element={
          <>
            <Nav />
            <Services />
            <Footer />
          </>
        } />
        <Route path='/menu' element={
          <>
            <Nav />
            <Menus />
            <Footer />
          </>
        } />
        <Route path='/reservation' element={
          <>
            <Nav />
            <Reservation />
            <Footer />
          </>
        } />
        <Route path='/contact' element={
          <>
            <Nav />
            <Contacts />
            <Footer />
          </>
        } />
        <Route path='/register' element={<Registers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={
          <>
            <Nav />
            <Cart />
            <Footer />
          </>
        } />
        <Route path='/checkout' element={<CheckoutCart />} />
        <Route path='/payment' element={<Payment />} />

        {/* Admin Routes */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin' element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path='/admin/orders' element={
          <ProtectedRoute>
            <ManageOrders />
          </ProtectedRoute>
        } />
        <Route path='/admin/menu' element={
          <ProtectedRoute>
            <ManageMenuItems />
          </ProtectedRoute>
        } />
        <Route path='/admin/reservations' element={
          <ProtectedRoute>
            <ManageReservations />
          </ProtectedRoute>
        } />
        <Route path='/admin/users' element={
          <ProtectedRoute>
            <ManageUsers />
          </ProtectedRoute>
        } />
        <Route path='/admin/analytics' element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />

        {/* Error Route */}
        <Route path='*' element={<Errors />} />
      </Routes>
    </>
  );
}

export default App;