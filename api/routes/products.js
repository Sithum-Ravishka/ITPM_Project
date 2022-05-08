const router = require("express").Router();
const Product = require("../models/Product");
const Deliver = require("../models/Deliver");
const verify = require("../verifyToken");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
  });
  try {
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.description = req.body.description;
  product.price = req.body.price;
  product.image = req.body.image;
  try {
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json("Product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
