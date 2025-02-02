const express = require("express");    
const router = express.Router();
const User = require("../models/User");
const Reserve = require("../models/Reservation");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtSecret = "MyNameIsShivaShankarSanadi"

// == Register ===
router.post(
  "/reserve",
  [
    body("email").isEmail(),
    body('phone').isLength({min:10}),
    body("name").isLength({ min: 5 })
  ],
  async (req, res) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Reserve.create({
        partysize:req.body.partysize,
        date:req.body.date,
        time:req.body.time,
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
      })
      
      .then(res.json({ success: true }));
    } catch (error) {
      res.json({ success: false });
    }
   
  }

);

module.exports = router;