const router = require("express").Router();
const Test = require("../models/Test");
const verify = require("../verifyToken");


router.post("/", async (req, res) => {
      const test = new Test({
        name : req.body.name,
        description: req.body.description,
      })
    try{
        await test.save();
      res.status(200).json(test);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;