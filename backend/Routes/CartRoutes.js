const { Router } = require('express');
const cartController = require('../controllers/CartControler');
const router = Router();
const Item = require("../models/ItemModel");
const Cart= require("../models/CartModel")
const User = require("../models/User")

router.get('/cart/:id',cartController.get_cart_items);
// router.post('/cart/:id',cartController.add_cart_item);
router.delete('/cart/:userId/:itemId',cartController.delete_item);
// module.exports = router;

// ================routes
// const express = require("express");
// const router = express.Router();
// const cartController = require("../controllers/CartControler");

// router.post("/:userId", cartController.addItemToCart);
// router.get("/:userId", cartController.getCart);
// router.patch("/:userId", cartController.decreaseQuantity);
// router.delete("/:userId", cartController.removeItem);

// module.exports = router;

// ================================================


router.post("/cart", async (req, res) => {
    const { id, quantity, name, price } = req.body;
   
    // const userId = "5de7ffa74fff640a0491bc4f"; //TODO: the logged in user id
  const userId = req.params.id;
    try {
      let cart = await Cart.findOne({ userId });
      let item = await Item.findOne({_id:id});
      let user = await User.findOne({_id: userId});
  
      // console.log(item);
      // if(!item){
      //     res.status(404).send("item not found")
      // }
      // const price = item.price;
      // const name = item.name;
  
      if (cart) {
        //cart exists for user
        let itemIndex = cart.items.findIndex(p => p.id == id);
  
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.items[itemIndex];
          productItem.quantity = quantity;
        //   productItem.quantity += quantity;
          cart.items[itemIndex] = productItem;
        } else {
          //product does not exists in cart, add new item
          cart.items.push({ id, quantity, name, price });
        }
        cart.bill += quantity*price;
        
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          userId,
          items: [{ id, quantity, name, price }]
        });
  
        return res.status(201).send(newCart);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  });


  module.exports = router;