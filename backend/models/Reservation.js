const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// const {Schema} = mongoose;

const ReserveSchema = new mongoose.Schema({
    partysize:{
        type:String,
        required:true
    },
    date:{ 
        type:Date,
        default:Date.now
    },
    time:{
        type:String,
        // default:Date.now
        required:true
    },
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
   
    phone:{
        type: String,
        required:true
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



module.exports = mongoose.model('Reserve',ReserveSchema) ;

