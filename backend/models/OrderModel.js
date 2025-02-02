// const Mongoose = require('mongoose');
// const { Schema } = Mongoose;

// // Order Schema
// const OrderSchema = new Schema({
//   cart: {
//     type: Schema.Types.ObjectId,
//     ref: 'Cart'
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   total: {
//     type: Number,
//     default: 0
//   },
//   updated: Date,
//   created: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = Mongoose.model('Order', OrderSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref: "User",
    },
    email: {                   //end to end
        type: String,
        required:true,
        unique:true
    },
    items:{type:Array},
    // items: [{
    //     id: {
    //         type: String,
    //     },
    //     name:{ type:String},
    //     quantity: {
    //         type: Number,
    //         required: true,
    //         min: [1, 'Quantity can not be less then 1.']
    //     },
    //     price: {type:Number}
    // }],
    bill: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Order = mongoose.model('order',OrderSchema);