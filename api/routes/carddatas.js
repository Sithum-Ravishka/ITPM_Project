const router = require("express").Router();
const CardData = require("../models/CardData");
const verify = require("../verifyToken");


//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newCardData = new CardData(req.body);
    try {
      const savedCardData = await newCardData.save();
      res.status(201).json(savedCardData);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;