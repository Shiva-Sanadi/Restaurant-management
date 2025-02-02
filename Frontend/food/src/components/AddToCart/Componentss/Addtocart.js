import { useContext, useEffect,useState } from "react";
import "./Addtocart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItems";
import {useNavigate } from 'react-router-dom';
// =================================
import loadStripe from "stripe";

const stripePromise = loadStripe("pk_test_51NY7pvSGxeBpeYQoR7hA48wc0jy6b3S1FoDQl900zFVrCjXkUDv6BFfepNUCjvBQTwmecrNB5fcRWiieX6VpwZAS009s5RBPPX");


{/* <script async src="https://js.stripe.com/v3/pricing-table.js"></script> */}
<stripe-pricing-table pricing-table-id="prctbl_1Nfjx6SGxeBpeYQoRUBijXkB"
publishable-key="pk_test_51NY7pvSGxeBpeYQoR7hA48wc0jy6b3S1FoDQl900zFVrCjXkUDv6BFfepNUCjvBQTwmecrNB5fcRWiieX6VpwZAS009s5RBPPX">
</stripe-pricing-table> 
// ======================================
const Cart = () => {

  const [idata,setData]=useState([])
  
  let navigate = useNavigate();

  const { showCart, cartItems, item ,showHideCart,clearCart,totalItem,totalAmount } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };

  

     const fetchData=()=>{
      const url="http://localhost:5000/api/items"
              const params={
              method:'get',
              headers:{
                  'Content-Type':'application/json'
              }
          }
          fetch(url,params).then((res)=>{
              return res.json()
          }).then((data)=>{
          console.log(data);
          setData(data)
          
      })
  }
    useEffect(()=>{
      fetchData();
  },[])



  // ================================================

  const handleCheckOut = async (event) => {
    event.preventDefault();

    let userId = localStorage.getItem("userId")
    let userEmail = localStorage.getItem("userEmail")

    const response = await fetch("http://localhost:5000/api/order/:id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId:userId,
           email:userEmail,
        // items:[
        //   {
        //     productId:idata.id,
        //     quantity:idata.quantity,
        //     name:idata.name,
        //     price:idata.price
        //   }
        // ]
        // userId:userId,
        // items:[idata],
        items:[{
          id:idata.id,
          name:idata.name,
          quantity:idata.quantity,
          price:idata.price
      }],
        bill:idata.price*idata.quantity,
      
      }),
    });
    const data = await response.json();
    console.log(data);
    
    if (!data.success) {
      alert("Enter valid Credentials");
    }else{
      navigate("/login");
    }
  } 

    
//     const response = await fetch("http://localhost:5000/api/cart/:id", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
      
//       body: JSON.stringify({
//         userId:localStorage.getItem("userId"),
        
//         items:[{ 
//         productId : cartItems.id, 
//         name:cartItems.name,   
//         quantity:cartItems.quantity,
//         price:cartItems.price
//       }],
//         bill:cartItems.price*cartItems.quantity,
//         // email: userEmail,
//         // date: new Date().toDateString()
//       }),
      
//     });
// // =====================
//     const data = await response.json()
//     console.log(data)
// // ===================
//     console.log("JSON RESPONSE:::::", response.status)
//     if (data.status === 200) {
//       alert("cart added successfully");

//       navigate("/");

//     }else{
//       alert("something went wrong");
//     }
  
// =================================================
// const handleCheckOut = () => {
//   axios
//     .post("http://localhost:5000/api/cart/:id", {
//       cartItems,
//       userId: user._id,
//     })
//     .then((response) => {
//       if (response.data.url) {
//         window.location.href = response.data.url;
//       }
//     })
//     .catch((err) => console.log(err.message));
// };


  // ============================================ chatgpt
  // const handleAddToCart = (product) => {
  //   // Make a POST request to the backend API to add the item to the cart
  //   fetch('/api/cart/add', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       productId: product.id,
  //       quantity: 1, // Assuming we always add a single quantity at a time
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the server
  //       console.log(data); // You can customize this based on your needs
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              // aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item}  />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total{totalAmount}</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => (item.price * item.quantity) + amount, 0),
                opts ,
                
              )}

            </div>
          </div>
          <div className='cart-total' method="POST">
                    {/* <h3>Cart Total : <span>{cartItems.reduce((amount, item) => (item.price * item.quantity) + amount, 0)}<span class="material-symbols-outlined">currency_rupee</span></span></h3> */}
                    <button className='hero-btn' onClick={handleCheckOut}>Checkout</button>
                    <button className='hero-btn' onClick={clearCart}>Clear Cart</button>
                </div>
        </div>
      )}
    </>
  );
};

export default Cart;