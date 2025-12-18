// src/pages/Contextcarts.js
import React,{useContext} from 'react';
import Items from '../components/Items';
import  CartContext  from '../components/Cart';
import '../index.css';

const Contextcarts = () => {
   
        const {item ,showHideCart,clearCart,totalItem,totalAmount} = useContext(CartContext);

        if(item.length === 0){
            return(<>
            
             <header className='clearshop'>
                <div className='continue-shopping'>
                    <h1><span class="material-symbols-outlined"  onClick={showHideCart}>arrow_back</span></h1>
                    <h3>continue shopping</h3>
                </div>
                <div className='cart-icon'>
                    <h1><span class="material-symbols-outlined">shopping_cart</span></h1>
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className='main-cart-section clearhead'>
                <h2>Shopping Cart</h2>
                <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> in your shopping cart</p>
            </section>
            </>);
        }

  return (
    <>
        <div className='shoppingcart'>
        <header className='clearshop'>
                <div className='continue-shopping'>
                    <h1><span class="material-symbols-outlined"  onClick={showHideCart}>arrow_back</span></h1>
                    <h3>continue shopping</h3>
                </div>
                <div className='cart-icon'>
                    <h1><span class="material-symbols-outlined">shopping_cart</span></h1>
                    <p>{totalItem}</p>
                </div>
            </header>
            
            <div className='cart-header'>
                <div className='continue-shopping'>
                <h1><span class="material-symbols-outlined">arrow_back</span></h1>
                
                </div>

                <div className='heading'>
                <h1>Shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> in your shopping cart</p>
                </div>
                <div className='cart-icon'>
                <p>{totalItem}</p>
                    <h1><span class="material-symbols-outlined">shopping_cart</span></h1>
                    
                </div>
            </div>

            <section className='main-cart-section'>
                
            
                <div className='cart-items'>
                    <div className='cart-item-container'>
                    {/* <Scrollbar > */}
                    {
                        
                        item.map((curItem) => {
                            return <Items key={curItem.id} {...curItem}/>
                        })
                        
                    }
                   {/* </Scrollbar> */}
                    
                    </div>
                </div>

                <div className='cart-total'>
                    <h3>Cart Total : <span>{totalAmount}<span class="material-symbols-outlined">currency_rupee</span></span></h3>
                    <button className='hero-btn'>Checkout</button>
                    <button className='hero-btn' onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
    </div>    
    </>
  )
}

export default Contextcarts;