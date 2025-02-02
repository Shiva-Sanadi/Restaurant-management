const Cart = require("../models/CartModel");
const Item = require("../models/ItemModel");
const User = require("../models/User");

module.exports.get_cart_items = async (req,res) => { 
    // const userId = req.params.id;
    const userId = req.params.userId;

    let user = await User.exists({ _id: userId });//

    try{
        let cart = await Cart.findOne({userId});
        if(cart && cart.items.length>0){
            res.send(cart);
        }
        else{
            res.send(null);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.add_cart_item = async (req,res) => {
    // const userId = req.params.id;
    const userId = req.params.userId;
    const { productId, quantity,price } = req.body;

    let user = await User.exists({ _id: userId });//
    
    try{
      // -------Get users Cart & item------
        let cart = await Cart.findOne({userId});
        let item = await Item.findOne({_id: productId});
        console.log(item);
        if(!item){
            res.status(404).send("item not found")
        }
        const price = item.price;
        const name = item.name;

        if(cart){ 
            // if cart exists for the user
            let itemIndex = cart.items.findIndex((p) => p.productId === productId);

            // Check if product exists or not
            if(itemIndex > -1)
            {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.items.push({ productId, name, quantity, price });
            }
            cart.bill += quantity*price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            // no cart exists, create one
            const newCart = await Cart.create({
                userId,
                items: [{ productId, name, quantity, price }],
                bill: quantity*price
            });
            return res.status(201).send(newCart);
        }       
    }
    catch (err) {
        console.log(err);
        // res.status(500).send("Something went wrong");
    }
}

module.exports.delete_item = async (req,res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;

    let user = await User.exists({ _id: userId });

    try{
        let cart = await Cart.findOne({userId});
        let itemIndex = cart.items.findIndex((p) => p.productId == productId);
        if(itemIndex > -1)
        {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity*productItem.price;
            cart.items.splice(itemIndex,1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}



// =========================================
// module.exports.addItemToCart = async (req, res) => {
//     const {
//         userId,
//         productId
//     } = req.body;
//     const quantity = Number.parseInt(req.body.quantity);

//     try {
//         // -------Get users Cart ------
//         let cart = await Cart.findOne({
//             userId: userId
//         })

//         //-----Get Selected Product Details ----
//         const productDetails = await Product.findById(productId);

//         //-- Check if cart Exists and Check the quantity if items -------
//         if (!cart && quantity item.productId == productId);

//             //------this removes an item from the the cart if the quantity is set to zero,We can use this method to remove an item from the list  --------
//             if (indexFound !== -1 && quantity  item.total).reduce((acc, next) => acc + next);
//             }

//             //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
//             else if (indexFound !== -1) {
//                 cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
//                 cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
//                 cart.items[indexFound].price = productDetails.price
//                 cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
//             }

//             //----Check if Quantity is Greater than 0 then add item to items Array ----
//             else if (quantity > 0) {
//                 cart.items.push({
//                     productId: productId,
//                     quantity: quantity,
//                     price: productDetails.price,
//                     total: parseInt(productDetails.price * quantity)
//                 })
//                 cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
//             }
//             //----if quantity of price is 0 throw the error -------
//             else {
//                 return res.status(400).json({
//                     type: "Invalid",
//                     msg: "Invalid request"
//                 })
//             }
//             let data = await cart.save();
//             res.status(200).json({
//                 type: "success",
//                 mgs: "Process Successful",
//                 data: data
//             })
//         }
//         //------------ if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created------------
//         else {
//             const cartData = {
//                 userId: userId,
//                 items: [{
//                     productId: productId,
//                     quantity: quantity,
//                     total: parseInt(productDetails.price * quantity),
//                     price: productDetails.price
//                 }],
//                 subTotal: parseInt(productDetails.price * quantity)
//             }
//             cart = new Cart(cartData);
//             let data = await cart.save();
//             res.json(data);
//         }
//     } catch (err) {
//         console.log(err)
//         res.status(400).json({
//             type: "Invalid",
//             msg: "Something Went Wrong",
//             err: err
//         })
//     }
// }


// ===or
// const { userId, itemId, note } = req.body;
// let data = null;

// const quantity = Number.parseInt(req.body.quantity);

// let cart = await Cart.findOne({ userId: userId}); 
// const productDetails = await Product.findById(itemId);

// console.log("productDetails", productDetails)

// //-- Check if cart Exists and Check the quantity if items -------
// if (cart){
//     let indexFound = cart.items.findIndex(p => p.itemId == itemId);
//     console.log("Index", indexFound)
//     //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
//     if (indexFound != -1) {
//         cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
//         cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
//         cart.items[indexFound].price = productDetails.price
//         cart.subTotal = cart.items.map(item => item.total).reduce((acc, curr) => acc + curr);
//     }
//     //----Check if Quantity is Greater than 0 then add item to items Array ----
//     else if (quantity > 0) {
//         cart.items.push({
//             itemId: itemId,
//             quantity: quantity,
//             price: productDetails.price,
//             total: parseInt(productDetails.price * quantity).toFixed(2),
//         })
//         cart.subTotal = cart.items.map(item => item.total).reduce((acc, curr) => acc + curr);
//     }
//     //----if quantity of price is 0 throw the error -------
//     else {
//         return res.status(400).json({
//             code: 400,
//             message: "Invalid request"                
//         })
//     }

//     data = await cart.save();
// }
// //------if there is no user with a cart then it creates a new cart and then adds the item to the cart that has been created---------
// else {
//     const cartData = {
//         userId: userId,
//         items: [{
//             itemId: itemId,
//             quantity: quantity,
//             total: parseInt(productDetails.price * quantity),
//             price: productDetails.price,
//             note: note
            
//         }],
//         subTotal: parseInt(productDetails.price * quantity)
//     }
//     cart = new Cart(cartData);
//     data = await cart.save();
// }

// return res.status(200).send({ 
//     code: 200,
//     message: "Add to Cart successfully!",
//     data: data
// });

// === or

//  ======================================================= controler
// const { isValidObjectId } = require("mongoose");
// const { Cart } = require("../models/cart.model");
// const { User } = require("../models/user.model");

// module.exports.addItemToCart = async (req, res) => {
//   let userId = req.params.userId;
//   let user = await User.exists({ _id: userId });

//   if (!userId || !isValidObjectId(userId) || !user)
//     return res.status(400).send({ status: false, message: "Invalid user ID" });

//   let productId = req.body.productId;
//   if (!productId)
//     return res.status(400).send({ status: false, message: "Invalid product" });

//   let cart = await Cart.findOne({ userId: userId });

//   if (cart) {
//     let itemIndex = cart.products.findIndex((p) => p.productId == productId);

//     if (itemIndex > -1) {
//       let productItem = cart.products[itemIndex];
//       productItem.quantity += 1;
//       cart.products[itemIndex] = productItem;
//     } else {
//       cart.products.push({ productId: productId, quantity: 1 });
//     }
//     cart = await cart.save();
//     return res.status(200).send({ status: true, updatedCart: cart });
//   } else {
//     const newCart = await Cart.create({
//       userId,
//       products: [{ productId: productId, quantity: 1 }],
//     });

//     return res.status(201).send({ status: true, newCart: newCart });
//   }
// };

// module.exports.getCart = async (req, res) => {
//   let userId = req.params.userId;
  // let user = await User.exists({ _id: userId });

//   if (!userId || !isValidObjectId(userId) || !user)
//     return res.status(400).send({ status: false, message: "Invalid user ID" });

//   let cart = await Cart.findOne({ userId: userId });
//   if (!cart)
//     return res
//       .status(404)
//       .send({ status: false, message: "Cart not found for this user" });

//   res.status(200).send({ status: true, cart: cart });
// };

// module.exports.decreaseQuantity = async (req, res) => {
//   // use add product endpoint for increase quantity
//   let userId = req.params.userId;
//   let user = await User.exists({ _id: userId });
//   let productId = req.body.productId;

//   if (!userId || !isValidObjectId(userId) || !user)
//     return res.status(400).send({ status: false, message: "Invalid user ID" });

//   let cart = await Cart.findOne({ userId: userId });
//   if (!cart)
//     return res
//       .status(404)
//       .send({ status: false, message: "Cart not found for this user" });

//   let itemIndex = cart.products.findIndex((p) => p.productId == productId);

//   if (itemIndex > -1) {
//     let productItem = cart.products[itemIndex];
//     productItem.quantity -= 1;
//     cart.products[itemIndex] = productItem;
//     cart = await cart.save();
//     return res.status(200).send({ status: true, updatedCart: cart });
//   }
//   res
//     .status(400)
//     .send({ status: false, message: "Item does not exist in cart" });
// };

// module.exports.removeItem = async (req, res) => {
//   let userId = req.params.userId;
//   let user = await User.exists({ _id: userId });
//   let productId = req.body.productId;

//   if (!userId || !isValidObjectId(userId) || !user)
//     return res.status(400).send({ status: false, message: "Invalid user ID" });

//   let cart = await Cart.findOne({ userId: userId });
//   if (!cart)
//     return res
//       .status(404)
//       .send({ status: false, message: "Cart not found for this user" });

//   let itemIndex = cart.products.findIndex((p) => p.productId == productId);
//   if (itemIndex > -1) {
//     cart.products.splice(itemIndex, 1);
//     cart = await cart.save();
//     return res.status(200).send({ status: true, updatedCart: cart });
//   }
//   res
//     .status(400)
//     .send({ status: false, message: "Item does not exist in cart" });
// };