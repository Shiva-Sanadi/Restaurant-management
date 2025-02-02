const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: String,
        // ref:"User"
    },
    items:{type:Array},
    // items: [{
    //     id: {
    //         type: Number,
    //         unique:true
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true,
    //         default: 1
    //     },
    //     name: {
    //         type:String,
    //         required:true
    //     },
       
    //     price:{
    //         type: Number,
    //         required:true
    //     }
    // }],
    bill: {
        type: Number,
        required: true,
        default: 0
    },
    // userId:{
    //     type:String,
    // },
    // items:{
    //     type:String,
    // },
    // productId:{
    //     type:String,
    // },
    // name:{
    //     type:String,
    // },
    // quantity: {
    //             type: Number,
    //             required: true,
    //             min: [1, 'Quantity can not be less then 1.'],
    //             default: 1
    //         },
    // price:{
    //     type:Number,
    // },
    // bill:{
    //     type:Number,
    // },
    // // email:{
    // //     type:String,
    // // }

    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

},
{
    timestamps:true,
}
);

module.exports = Cart = mongoose.model('cart',CartSchema);



// ===============================
// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User"
//     },
//     products: [
//       {
//         productId: Number,
//         quantity: Number,
//         name: String,
//         price: Number
//       }
//     ],
//     active: {
//       type: Boolean,
//       default: true
//     },
//     modifiedOn: {
//       type: Date,
//       default: Date.now
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("cart", CartSchema);

// /==========================================
// const CartSchema = new Schema(
//     {
//       userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
  
//       items: [ItemSchema],
  
//       subTotal: {
//         default: 0,
//         type: Number,
//       },
//     },
//     {
//       timestamps: true,
//     }
//   );
//   module.exports = mongoose.model("cart", CartSchema);

// ================= 4
// const mongoose = require("mongoose");

// const itemSchema = mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//   },
//   quantity: {
//     type: Number,
//     default: 0,
//   },
// });

// const cartSchema = mongoose.Schema({
//   products: [itemSchema],
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   total: {
//     type: Number,
//     default: 0,
//   },
//   __v: { type: Number, select: false },
// });

// exports.Cart = mongoose.model("Cart", cartSchema);
