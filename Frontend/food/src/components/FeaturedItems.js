// ============================================
// FEATURED ITEMS COMPONENT
// ============================================
// File: src/components/FeaturedItems.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './AddToCart/context/cart/CartContext';
import Menu from '../apis/menuapi';
import '../index.css';

const FeaturedItems = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  
  // Get featured items (you can add a 'featured' property to your menu items)
  const featuredItems = Menu.slice(0, 4);

  const isInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-badge">Chef's Special</span>
          <h2 className="section-title">Featured <span className='highlight'>Dishes</span></h2>
          <p className="section-description">
            Try our most popular and recommended dishes
          </p>
        </div>

        <div className="featured-grid">
          {featuredItems.map((item) => {
            const inCart = isInCart(item.id);
            return (
              <div className="featured-card" key={item.id}>
                <div className="featured-badge">
                  <span className='material-symbols-outlined'>star</span>
                  Featured
                </div>
                <div className="featured-image">
                  <img src={item.image} alt={item.name} />
                  <div className="image-overlay">
                    <button 
                      className="quick-view-btn"
                      onClick={() => !inCart && addToCart(item)}
                    >
                      <span className='material-symbols-outlined'>
                        {inCart ? 'check' : 'add_shopping_cart'}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-header">
                    <h3>{item.name}</h3>
                    <div className="rating">
                      <span className='material-symbols-outlined filled'>star</span>
                      <span>4.8</span>
                    </div>
                  </div>
                  <p className="featured-description">{item.description}</p>
                  <div className="featured-footer">
                    <span className="price">₹{item.price}</span>
                    <button 
                      className={`add-btn ${inCart ? 'added' : ''}`}
                      onClick={() => !inCart && addToCart(item)}
                      disabled={inCart}
                    >
                      {inCart ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="featured-cta">
          <Link to="/menu" className="hero-btn primary-btn">
            View Full Menu
            <span className='material-symbols-outlined'>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;