const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    // location:{
    //     type: String,
    //     required:true
    // },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    confirm_password:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    // isAdmin: { type: Boolean, default: false },
    date:{
        type:Date,
        default:Date.now
    },
    
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

});



module.exports = mongoose.model('user',UserSchema) ;

