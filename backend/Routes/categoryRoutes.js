const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {
  createCategoryController,
  updateCategoryControler,
  categorycontroller,
  singleCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");
// routes
// router.post('/create-category', async(req,res)=>{
router.post("/create-category", createCategoryController);

// update category
router.put("/update-category/:id", updateCategoryControler);

// get all category
router.get("/get-category", categorycontroller);

// get single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete("/delete/:id", deleteCategoryController);

module.exports = router;
