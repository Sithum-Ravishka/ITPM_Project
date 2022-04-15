const router = require("express").Router();
const DeliverAssign = require("../models/DeliverAssign");
const verify = require("../verifyToken");


//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newDelivery = new DeliverAssign(req.body);
    try {
      const savedDelivery = await newDelivery.save();
      res.status(201).json(savedDelivery);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;