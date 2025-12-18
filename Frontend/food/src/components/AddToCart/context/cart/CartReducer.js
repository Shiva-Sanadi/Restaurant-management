// src/components/AddToCart/context/cart/CartReducer.js
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM,CLEAR_CART ,INCREMENT,DECREMENT, GET_TOTAL } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case CLEAR_CART:{
      return {...state,cartItems:[]}; //cartItem
    }

    case INCREMENT:{
      const updatedCart = state.cartItems.map((curElem) =>{
        if(curElem.id === action.payload){
            return{...curElem, quantity:curElem.quantity + 1}
        }
        return curElem;
    });
    return{...state, cartItems:updatedCart};  
    }

    case DECREMENT:{
      const updatedCart = state.cartItems.map((curElem) =>{
        if(curElem.id === action.payload){
            return{...curElem, quantity:curElem.quantity - 1};
        }
        return curElem;
    })
    .filter((curElem) => curElem.quantity !== 0);
    return{...state, cartItems:updatedCart};
    }
 
    case GET_TOTAL:{
      let {totalItem, totalAmount} = state.cartItems.reduce((accum,curVal) => {
        let {price , quantity} = curVal;
        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
    }, 
    {
        totalItem:0,
        totalAmount:0,
    });
    return {...state, totalItem,totalAmount};
    }
    

    default:
      return state;
  }
};

export default CartReducer;