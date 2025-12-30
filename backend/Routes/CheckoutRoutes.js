// backend/Routes/CheckoutRoutes.js
const express = require("express");
const router = express.Router();
// const User = require("../models/User");
const Checkout = require("../models/CheckoutSchema")
const { body, validationResult } = require("express-validator");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");


router.post('/Checkout', async(req, res) => {
  
    try {
      await Checkout.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone:req.body.phone,
        address:req.body.address,
        city:req.body.city,
        street:req.body.street,
        zip:req.body.zip,
      })
      
      .then(res.json({ success: true }));
    } catch (error) {
      // console.log(error)
      res.json({ success: false });
    }
  });

  module.exports = router;