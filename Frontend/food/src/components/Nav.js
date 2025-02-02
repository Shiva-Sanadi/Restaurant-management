import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom';
// import { CartContext } from './Cart';
// import Register from './Register';

import CartContext from './AddToCart/context/cart/CartContext';

// import CartContext from "./Cart";


const Nav = () => {
            // Items
    const {cartItems,showHideCart} = useContext(CartContext);

    const [show, setShow] = useState(false);

    const handleClick =()=>{
        setShow(!show);
    }
  return (
    <>
    <section className='navbar-bg'>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container">
                    <div className='nav-head'>
                        <Link className="navbar-brand" to="/">Foodies</Link>
                        
                        <div className='hamburger' onClick={handleClick}>
                                {
                                    show ? <span class="material-symbols-outlined">close</span> :<span class="material-symbols-outlined">menu</span> 
                                }
                        </div>
                        
                    </div>
                  
                    <div className={`collapse navbar-collapse ${show ? "show" : ""} `} >
                        <ul className={` navbar-nav  ms-auto mb-2 mb-lg-0 ${show ? " navbar-nav active" : " navbar-nav"} `}>
                            <li className="nav-item" >
                            <Link className="nav-link "  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">AboutUS</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/reservation">Reservation</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">ContactUS</Link>
                            </li>
      
                            <form className=" buttons d-flex">
                        
                                <Link className="nav-link btn  btn-style" to="/register">Register</Link>
                                
                                
                                <Link className="nav-link btn  btn-style" to="/login">Login</Link>

                                <div className='cart__icon'>
                                    <button className="nav-link btn  btn-style cart-btn"  onClick={showHideCart} > 
                                    <span class="material-symbols-outlined">shopping_cart</span></button>
                                
                                    {cartItems.length > 0 && (
                                        <div className='item__count'>
                                        <span>{cartItems.length}</span>
                                        </div>
                                    )}
                                </div>
                      
                            </form>
                        </ul>
                        
                        
                        
                    </div>
                    
                </div>
                </nav>
            </section>
    </>
  )
}

export default Nav;