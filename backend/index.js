const dotenv = require('dotenv');
const express = require('express')
const app = express() 
const port = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json())

// app.use(bodyParser.json());


const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoDB = require('./db/conn');
const db = "mongodb://localhost:27017"

const secretKey = 'yourSecretKey';

const path = require('path');
// const config = require('config');


const morgan = require('morgan');

// ====== config env
// const dotenv = require('dotenv')
dotenv.config();
// const PORT = process.env.PORT || 5000;
// =======================


// dotenv.config();

// ======================== middleware ===========
const middleware = (req,res,next) =>{
  console.log('hello middleware');  
  next();
}

 app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept"
  );
  next();
 })

// ==================================

// ============== routes
app.use('/api/',require("./Routes/CreateUser"));

app.use('/api/',require("./Routes/Contacts"));
app.use('/api/',require("./Routes/RegisterRoutes"));

app.use('/api/',require("./Routes/categoryRoutes"));

app.use('/api/',require("./Routes/CheckoutRoutes"));

app.use('/api/',require("./Routes/CartRoutes"));

app.use('/api/',require("./Routes/DisplayData"));

app.use('/api/',require("./Routes/Itemroutes"));

// app.use('/api/',require("./Routes/Authroutes"));
app.use('/api/',require("./Routes/OrderRoutes"));
// app.use('/api/',require("./Routes/productRoutes"));

app.get('/', (req, res) => {
  res.send('Hello World!=============')
})

// listen
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})