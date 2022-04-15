const router = require("express").Router();
const DeliveryUser = require("../models/DeliveryUser");
const verify = require("../verifyToken");


//CREATE

router.post("/deliverregister", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newDeliveryUser = new DeliveryUser({

        password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
    ).toString(),
});


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

module.exports = router;