const express = require("express");
const router = express.Router();
const productData = require("../Models/Store")



//Home Route
router.get("/", (req, res) => {
    const products = productData.getAllProducts();
    res.json(products);

});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const product = productData.getProductById(parseInt(id));

    if (!product) {
    return res
        .status(404)
        .json({ message: "Product Not found" });
    }
    res.json(product);
    
  });

module.exports = router;

