// ============================================
// ENHANCED HEADER COMPONENT
// ============================================
// File: src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  return (
    <header className='hero-section'>
      <section className='container main-hero-container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 hero-content'>
            <span className='hero-badge'>
              <span className='material-symbols-outlined'>restaurant</span>
              Welcome to Foodies
            </span>
            <h1 className='hero-title'>
              Enjoy Your <span className='highlight'>Healthy</span> <br/> 
              and <span className='highlight'>Delicious</span> Food
            </h1>
            <p className='hero-description'>
              Experience the finest dining with our carefully crafted menu. 
              From breakfast to dinner, we serve fresh, organic, and delicious 
              meals prepared by our expert chefs.
            </p>
            <div className='hero-features'>
              <div className='feature-item'>
                <span className='material-symbols-outlined'>schedule</span>
                <span>Open 24/7</span>
              </div>
              <div className='feature-item'>
                <span className='material-symbols-outlined'>delivery_dining</span>
                <span>Fast Delivery</span>
              </div>
              <div className='feature-item'>
                <span className='material-symbols-outlined'>verified</span>
                <span>Quality Food</span>
              </div>
            </div>
            <div className='hero-actions'>
              <Link to='/menu' className="hero-btn primary-btn">
                <span className='material-symbols-outlined'>restaurant_menu</span>
                View Menu
              </Link>
              <Link to='/reservation' className="hero-btn secondary-btn">
                <span className='material-symbols-outlined'>event</span>
                Book a Table
              </Link>
            </div>
            <div className='hero-stats'>
              <div className='stat-item'>
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className='stat-item'>
                <h3>50+</h3>
                <p>Menu Items</p>
              </div>
              <div className='stat-item'>
                <h3>4.9</h3>
                <p>Rating</p>
              </div>
            </div>
          </div>
          
          <div className='col-12 col-lg-6 hero-image-section'>
            <div className='hero-image-wrapper'>
              {/* <img src='./images/bg3.jpg' alt='Delicious Food' className='hero-main-image'/> */}
              <img src={`${process.env.PUBLIC_URL}/images/bg3.jpg`} alt='Delicious Food' className='hero-main-image'/>
              <div className='floating-card card-1'>
                <span className='material-symbols-outlined'>star</span>
                <div>
                  <strong>4.9</strong>
                  <p>Customer Rating</p>
                </div>
              </div>
              <div className='floating-card card-2'>
                <span className='material-symbols-outlined'>delivery_dining</span>
                <div>
                  <strong>30 min</strong>
                  <p>Fast Delivery</p>
                </div>
              </div>
              <div className='floating-card card-3'>
                <span className='material-symbols-outlined'>restaurant</span>
                <div>
                  <strong>50+</strong>
                  <p>Dishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;