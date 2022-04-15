const router = require("express").Router();
const ShoppingData = require("../models/ShoppingData");
const verify = require("../verifyToken");


//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newShoppinData = new ShoppingData(req.body);
    try {
      const savedShoppingData = await newShoppinData.save();
      res.status(201).json(savedShoppingData);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;