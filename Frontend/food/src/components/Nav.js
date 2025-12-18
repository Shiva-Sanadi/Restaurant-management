
// ============================================
// ENHANCED NAV COMPONENT
// ============================================
// File: src/components/Nav.js
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartContext from './AddToCart/context/cart/CartContext';
import { isAuthenticated, logout } from '../utils/auth';
import '../index.css';

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [location]);

  const handleClick = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <section className={`navbar-bg ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className='nav-head'>
            <Link className="navbar-brand" to="/">
              <span className='material-symbols-outlined'>restaurant</span>
              <span className='brand-name'>Foodies</span>
            </Link>
            
            <div className='mobile-actions'>
              {/* Mobile Cart Icon */}
              <div className='cart__icon mobile-cart'>
                <button className="cart-btn" onClick={showHideCart}> 
                  <span className="material-symbols-outlined">shopping_cart</span>
                  {cartItems.length > 0 && (
                    <span className='cart-badge'>{cartItems.length}</span>
                  )}
                </button>
              </div>
              
              {/* Hamburger Menu */}
              <div className='hamburger' onClick={handleClick}>
                <span className="material-symbols-outlined">
                  {show ? 'close' : 'menu'}
                </span>
              </div>
            </div>
          </div>
        
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/')}`} to="/" onClick={() => setShow(false)}>
                  <span className='material-symbols-outlined'>home</span>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about')}`} to="/about" onClick={() => setShow(false)}>
                  <span className='material-symbols-outlined'>info</span>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/service')}`} to="/service" onClick={() => setShow(false)}>
                  <span className='material-symbols-outlined'>room_service</span>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/menu')}`} to="/menu" onClick={() => setShow(false)}>
                  <span className='material-symbols-outlined'>restaurant_menu</span>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/reservation')}`} to="/reservation" onClick={() => setShow(false)}>
                  <span className='material-symbols-outlined'>event</span>
                  Reservation
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/contact')}`} to="/contact" onClick={() => setShow(false)}>
                  <span className='material-symbols-outlined'>mail</span>
                  Contact
                </Link>
              </li>

              <li className="nav-divider"></li>

              {isLoggedIn ? (
                <>
                  <li className="nav-item user-info">
                    <span className='material-symbols-outlined'>account_circle</span>
                    <span className='user-email'>{localStorage.getItem('userEmail')}</span>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link logout-link" onClick={handleLogout}>
                      <span className='material-symbols-outlined'>logout</span>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/register')}`} to="/register" onClick={() => setShow(false)}>
                      <span className='material-symbols-outlined'>person_add</span>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/login')}`} to="/login" onClick={() => setShow(false)}>
                      <span className='material-symbols-outlined'>login</span>
                      Login
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item desktop-cart">
                <div className='cart__icon'>
                  <button className="cart-btn" onClick={showHideCart}> 
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </button>
                  {cartItems.length > 0 && (
                    <span className='cart-badge'>{cartItems.length}</span>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Nav;