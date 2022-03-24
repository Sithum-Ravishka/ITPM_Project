const router = require("express").Router();
const Deliver = require("../models/Deliver");

//GET

router.get("/find/:id", async (req, res) => {
    try {
      const deliver = await Deliver.findById(req.params.id);
      res.status(200).json(deliver);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL

router.get("/", async (req, res) => {
      try {
        const delivers = await Deliver.find();
        res.status(200).json(delivers.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
  }); 


  module.exports = router;