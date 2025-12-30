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

