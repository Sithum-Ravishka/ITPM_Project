const router = require("express").Router();
const CustomerUser = require("../models/CustomerUser");
const verify = require("../verifyToken");


//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newCustomerUser = new CustomerUser(req.body);


    try {
      const savedCustomerUser = await newCustomerUser.save();
      res.status(201).json(savedCustomerUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;