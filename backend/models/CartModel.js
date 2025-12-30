const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: String,
        // ref:"User"
    },
    items:{type:Array},
   
    bill: {
        type: Number,
        required: true,
        default: 0
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

module.exports = Cart = mongoose.model('cart',CartSchema);

