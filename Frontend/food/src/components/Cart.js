// src/components/Cart.js
import React, { createContext, useEffect, useReducer ,useContext} from 'react';

import { reducer } from './Reducer';

export const CartContext = createContext();
  
const initialState = {
    showCart:false,
    item:[],      //
    // Items:[],   
    totalAmount:0,//
    totalItem:0,//
    quantity:1,// 
};
 
const Cart = ({ children }) => {
    // const [item, setItem] = useState(Menu);
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the individual elements from an Item Cart
    const removeItem = (id) => {  
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id,
        });
    };

    // clear the cart
    const clearCart = () => {
        return dispatch({type:"CLEAR_CART"});
    }

    // increment the item
    const increment = (id) =>{
        return dispatch({
            type:"INCREMENT",
            payload:id,
        });
    };

    // decrement the item
    const decrement = (id) =>{
        return dispatch({
            type:"DECREMENT",
            payload:id,
        });
    };


    // Add to cart
    const addToCart = (item) => {
       return dispatch({ type: "ADD_TO_CART", payload: item, });
      };
    
    //   show / hide cart
    const showHideCart = () => {
        dispatch({ type: 'SHOW_HIDE_CART' });
      };

    // we will use useEffect Hook to update the data / total Amount

    useEffect(() => {
        dispatch({type: "GET_TOTAL"});
    },[state.item]);

  return (
    <>
    <CartContext.Provider value={{...state,
                                showCart:state.showCart,
                                Items:state.Items,
                                removeItem,
                                clearCart,
                                increment,
                                decrement,
                                addToCart,
                                showHideCart}}>
        {/* <Contextcart/> */}
        { children }
    </CartContext.Provider>
    
    </>
  )
}

// custom hook
export const useGlobalContext = () =>{
    return useContext(CartContext);
}

export default Cart;