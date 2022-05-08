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


router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
      try {
        const customerusers = await CustomerUser.find();
        res.status(200).json(customerusers.reverse());
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
      await CustomerUser.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});
//GET

router.get("/find/:id", verify, async (req, res) => {
  try {
    const customeruser = await CustomerUser.findById(req.params.id);
    res.status(200).json(customeruser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update

router.put("/:id", async (req, res) => {
  const customeruser = await CustomerUser.findById(req.params.id);
  customeruser.firstName = req.body.firstName;
  customeruser.lastName = req.body.lastName;
  customeruser.userName = req.body.userName;
  customeruser.dateOfBirth = req.body.dateOfBirth;
  customeruser.streetAddress = req.body.streetAddress;
  customeruser.streetAddress2 = req.body.streetAddress2;
  customeruser.city = req.body.city;
  customeruser.state = req.body.state;
  customeruser.postId = req.body.postId;
  customeruser.contactNumber = req.body.contactNumber;
  customeruser.gender = req.body.gender;
  customeruser.customerPhoto = req.body.customerPhoto;
  customeruser.email = req.body.email;
  customeruser.password = req.body.password;
  customeruser.confirmPassword = req.body.confirmPassword;
  try {
    await customeruser.save();
    res.status(200).json(customeruser);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;

