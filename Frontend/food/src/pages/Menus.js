
// ============================================
// ENHANCED MENU PAGE
// ============================================
// File: src/pages/Menus.js
import React, { useContext, useState, useEffect } from 'react';
import CartContext from "../components/AddToCart/context/cart/CartContext";
import Menu from '../apis/menuapi';
import '../index.css';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), "all"];

const Menus = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItem, setMenuItem] = useState(Menu);
  const [catItems] = useState(allCatValues);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filterItem = (categItem) => {
    setActiveCategory(categItem);
    if (categItem === "all") {
      setMenuItem(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setMenuItem(updatedItems);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    let filtered = activeCategory === 'all' 
      ? Menu 
      : Menu.filter(item => item.category === activeCategory);
    
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
    
    setMenuItem(filtered);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sorted = [...menuItem];
    switch(value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setMenuItem(sorted);
  };

  const isInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="menu-header">
          <div className="section-title-wrapper">
            <span className="section-badge">Our Menu</span>
            <h1 className="section-title">Discover Our <span className='highlight'>Delicious</span> Menu</h1>
            <p className="section-description">
              Choose from our wide variety of freshly prepared dishes
            </p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className='menu-controls'>
          <div className='search-box'>
            <span className='material-symbols-outlined'>search</span>
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <select 
            className='sort-select'
            value={sortBy}
            onChange={handleSort}
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* Category Tabs */}
        <div className='menu-tabs'>
          <div className='category-tabs'>
            {catItems.map((curElem, index) => (
              <button 
                className={`category-btn ${activeCategory === curElem ? 'active' : ''}`}
                key={index} 
                onClick={() => filterItem(curElem)}
              >
                <span className='material-symbols-outlined'>
                  {curElem === 'all' ? 'restaurant' : 
                   curElem === 'breakfast' ? 'breakfast_dining' :
                   curElem === 'lunch' ? 'lunch_dining' :
                   curElem === 'dinner' ? 'dinner_dining' :
                   curElem === 'evening' ? 'local_cafe' :
                   'restaurant_menu'}
                </span>
                {curElem.charAt(0).toUpperCase() + curElem.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {menuItem.length > 0 ? (
            menuItem.map((curelem) => {
              const { id, image, name, price, description, category } = curelem;
              const inCart = isInCart(id);
              
              return (
                <div className="menu-card" key={id}>
                  <div className="menu-card-image">
                    <img src={image} alt={name} />
                    <span className={`category-tag ${category}`}>
                      {category}
                    </span>
                    {inCart && (
                      <div className="in-cart-badge">
                        <span className='material-symbols-outlined'>check_circle</span>
                        In Cart
                      </div>
                    )}
                  </div>
                  
                  <div className="menu-card-content">
                    <div className="menu-card-header">
                      <h3>{name}</h3>
                      <div className="rating">
                        <span className='material-symbols-outlined filled'>star</span>
                        <span>4.5</span>
                      </div>
                    </div>
                    
                    <p className="menu-card-description">{description}</p>
                    
                    <div className="menu-card-footer">
                      <div className="price-tag">
                        <span className="price">₹{price}</span>
                        <span className="price-label">per dish</span>
                      </div>
                      
                      <button 
                        className={`add-to-cart-btn ${inCart ? 'in-cart' : ''}`}
                        onClick={() => !inCart && addToCart(curelem)}
                        disabled={inCart}
                      >
                        <span className='material-symbols-outlined'>
                          {inCart ? 'check' : 'add_shopping_cart'}
                        </span>
                        {inCart ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-results">
              <span className='material-symbols-outlined'>search_off</span>
              <h3>No dishes found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Menus;