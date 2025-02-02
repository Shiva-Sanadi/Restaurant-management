const express = require("express");
const router = express.Router();
// const User = require("../models/User");
const Checkout = require("../models/CheckoutSchema")
const { body, validationResult } = require("express-validator");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const jwtSecret = "MyNameIsShivaShankarSanadi"

router.post('/Checkout', async(req, res) => {
    // const { firstName, lastName, phone, address, city, street, zip } = req.body;
  
    try {
      await Checkout.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone:req.body.phone,
        address:req.body.address,
        city:req.body.city,
        street:req.body.street,
        zip:req.body.zip,
        // location: req.body.location,
      })
      
      .then(res.json({ success: true }));
    } catch (error) {
      // console.log(error)
      res.json({ success: false });
    }
  });

  module.exports = router;