const router = require("express").Router();
const DeliveryUser = require("../models/DeliveryUser");
const verify = require("../verifyToken");


//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newDeliveryUser = new DeliveryUser(req.body);


    try {
      const savedDeliveryUser = await newDeliveryUser.save();
      res.status(201).json(savedDeliveryUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});



//GET ALL
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await DeliveryUser.find().sort({ _id: -1 }).limit(4)
        : await DeliveryUser.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
});

module.exports = router;