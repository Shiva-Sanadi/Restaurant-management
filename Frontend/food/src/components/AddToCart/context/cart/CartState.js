// src/components/AddToCart/context/cart/CartState.js
import { useReducer,useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM,CLEAR_CART ,INCREMENT,DECREMENT, GET_TOTAL  } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    totalAmount:0,//
    totalItem:0,//
    quantity:1,//
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

/*************  ✨ Windsurf Command ⭐  *************/
/*******  a827b9a7-a8c8-478c-a045-476228ddeddd  *******/
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearCart = () => {
     dispatch({type:CLEAR_CART});
}

const increment = (id) =>{
   dispatch({
      type:INCREMENT,
      payload:id,
  });
};

const decrement = (id) =>{
   dispatch({
      type:DECREMENT,
      payload:id,
  });
};

useEffect(() => {                         //gettotal
  dispatch({type: GET_TOTAL});
},[state.cartItems]);


  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        clearCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;