
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Restaurant',
// mongodb+srv://admin:<password>@shivacluster.dbtkuie.mongodb.net/
// mongoose.connect('mongodb://127.0.0.1:27017/Registration',
{   useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(() => {
    console.log('Connection Successful');
    
    
}).catch((error) => {
    console.log('something went wrong',error);
})



// end to end 6th video==============================================

const mongoURI = 'mongodb://localhost:27017/Restaurant'
const mongoDB = async() => {
    await mongoose.connect(mongoURI,{useNewUrlParser : true},async(err,result) => {
        if(err) {
            console.log("..not connected.",err)
        }
        else{
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");//==
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("food_items");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err) console.log(err);
                    else {
                        global.food_items = data;//==
                          global.foodCategory = catData;
                         }
                })
                if(err) console.log(err);
                else {
                    global.food_items = data;//==
                      
                     }
            })
        }
    });
    
}

module.exports = mongoDB;