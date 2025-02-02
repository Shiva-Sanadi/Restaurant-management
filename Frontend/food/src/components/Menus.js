import React, { useContext, useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

import CartContext from "./AddToCart/context/cart/CartContext"
import Menu from '../apis/menuapi';


// import { CartContext } from './Cart';

// const allCatValues = new Set(Menu.map((curElm)=>{ 
//     return curElm.category; 
// }))  


// 

const allCatValues = [...new Set(Menu.map((curElem)=>curElem.category)),"all"]

const Menus = () => {

  // add to cart 
  const {addToCart} = useContext(CartContext)


const [menuItem, setMenuItem] = useState(Menu);
const [catItems, setCatItems] = useState(allCatValues);

const filterItem = (categItem) =>{
  if(categItem === "all"){
    setMenuItem(Menu);
    return;
  }
    const updatedItems = Menu.filter((curElem)=>{
        return curElem.category === categItem;
    });
    setMenuItem(updatedItems);
}

  return (
    <>
    
    
    <section className="menu" id="menu" >
  <h1 className="heading">our <span>menu</span></h1>
  
  <div className='menu-tabs container'>
    <div className='menu-tab d-flex justify-content-center'>
    {
      catItems.map((curElem, index)=>{
        return <button className='hero-btn' key={index} onClick={()=>filterItem(curElem)}>{curElem}</button>
      })
    }
        {/* <button className='btn-style btn' onClick={()=>filterItem('breakfast')}>breakfast</button>
        <button className='btn-style btn'  onClick={()=>filterItem('lunch')}>lunch</button>
        <button className='btn-style btn'  onClick={()=>filterItem('evening')}>evening</button> */}
        {/* <button className='btn-style btn'  onClick={()=>setMenuItem(Menu)}>all</button> */}
    </div>
  </div>
  {/* items section */}
  <div className="box-container" >
    {
      menuItem.map((curelem)=>{
        const {id, image, name,price,description} = curelem;
        return(<>
    
                <div class="box" key={id} method="POST" >
                
                  <img src={image} alt={name}/>
                  <h3>{name}</h3>
                  {/* <h2>{category}</h2> */}
                  <p>{description}</p>
                  <div class="price">{price}</div>
                  <a href="#" class="btnm" onClick={() => addToCart(curelem)}>Order Now</a>
                </div>
                
        </>)
      })
    }
      
    
    </div>
 
</section>
    </>
  )
}

export default Menus;