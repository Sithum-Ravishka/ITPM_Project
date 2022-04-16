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

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
      try {
        const deliverassigns = await DeliverAssign.find();
        res.status(200).json(deliverassigns.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
    res.status(403).json("You are not allowed!");
  }
}); 

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await DeliverAssign.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});


module.exports = router;