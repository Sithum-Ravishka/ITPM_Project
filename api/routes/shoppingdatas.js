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


router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
      try {
        const shoppingdatas = await ShoppingData.find();
        res.status(200).json(shoppingdatas.reverse());
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
      await ShoppingData.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});


router.get("/find/:id", verify, async (req, res) => {
  try {
    const shoppingdata = await ShoppingData.findById(req.params.id);
    res.status(200).json(shoppingdata);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Update

router.put("/:id", async (req, res) => {
  const shoppingdata = await ShoppingData.findById(req.params.id);
  shoppingdata.name = req.body.name;
  shoppingdata.contactNum = req.body.contactNum;
  shoppingdata.addresl1 = req.body.addresl1;
  shoppingdata.addresl2 = req.body.addresl2;
  shoppingdata.addresl3 = req.body.addresl3;
  shoppingdata.district = req.body.district;
  shoppingdata.zipCode = req.body.zipCode;
 
  try {
    await shoppingdata.save();
    res.status(200).json(shoppingdata );
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;