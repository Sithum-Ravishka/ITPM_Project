const router = require("express").Router();
const DeliverAssign = require("../models/DeliverAssign");
const verify = require("../verifyToken");


//CREATE

router.post("/", async (req, res) => {
  const deliverAssign = new DeliverAssign({
    customerName : req.body.customerName,
    address: req.body.address,
    zipCode: req.body.zipCode,
    mobile: req.body.mobile,
    productName: req.body.productName,
    productImg: req.body.productImg,
    paymentMethod: req.body.paymentMethod,
    pricePerUnit: req.body.pricePerUnit,
    Quantity: req.body.Quantity,
    totalPrice: req.body.totalPrice,
    deliverName: req.body.deliverName,
    deliverNIC: req.body.deliverNIC,
    vechicleNo: req.body.vechicleNo,
    deliveryDate: req.body.deliveryDate,
  })
try{
    await deliverAssign.save();
  res.status(200).json(deliverAssign);
} catch (err) {
  res.status(500).json(err);
}
});


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

//GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await DeliverAssign.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL
router.get("/litile", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await DeliverAssign.find().sort({ _id: -1 }).limit(4)
        : await DeliverAssign.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
});

module.exports = router;