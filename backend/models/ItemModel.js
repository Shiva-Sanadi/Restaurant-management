const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    // food_data:{
    //     type:Array
    // },
    
   id: {
        type: Number,
        // unique:true,
    },
    name: {
        type: String,
        // unique:true,
        // required: true
    },
    
    quantity:{
        type: Number,
        required: true
    },
    price: { 
        type: Number,
        required: true
    },
   

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

module.exports = Item = mongoose.model('item',ItemSchema);



// ========================  2
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// let ItemSchema = new Schema(
//   {
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       min: [1, "Quantity can not be less then 1."],
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     total: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// module.exports = mongoose.model("item", ItemSchema);

// ==========  3
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
