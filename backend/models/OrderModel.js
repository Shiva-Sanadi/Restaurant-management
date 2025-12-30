

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