const router = require("express").Router();
const Deliver = require("../models/Deliver");
const verify = require("../verifyToken");

//GET

router.get("/find/:id", verify, async (req, res) => {
    try {
      const deliver = await Deliver.findById(req.params.id);
      res.status(200).json(deliver);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
      try {
        const delivers = await Deliver.find();
        res.status(200).json(delivers.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
    res.status(403).json("You are not allowed!");
  }
}); 


module.exports = router;