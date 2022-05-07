const router = require("express").Router();
const Test = require("../models/Test");
const verify = require("../verifyToken");


router.post("/", async (req, res) => {
      const test = new Test({
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
        await test.save();
      res.status(200).json(test);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;