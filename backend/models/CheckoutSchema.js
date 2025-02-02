const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');

// const {Schema} = mongoose;

const checkoutSchema  = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    street:{
        type: String,
        required:true
    },
    zip:{
        type: String,
        required:true,
    },
    
    
    // date:{
    //     type:Date,
    //     default:Date.now
    // },
    
},
{
    timestamps:true,
}
);



module.exports = mongoose.model('Checkout', checkoutSchema) ;  