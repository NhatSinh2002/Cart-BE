const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

//GET /All Products
router.get("/", productController.getAllProduct);

//SET IN CART STATUS
router.patch("/setStatus", productController.setInCartStatus);

module.exports = router;
