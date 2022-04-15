const router = require("express").Router();
const SPdetails = require("../models/SPdetails");

router.get("/", async (req, res) => {
  try{
    const spdetails = await SPdetails.find()
    res.status(200).json(spdetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
      const spdetails = new SPdetails({
          name : req.body.name,
          contactNum: req.body.contactNum,
          addresl1: req.body.addresl1,
          addresl2: req.body.addresl2,
          addresl3: req.body.addresl3,
          district: req.body.district,
          zipCode:  req.body.zipCode
      })
    try{
        await spdetails.save();
      res.status(200).json(spdetails);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/:id", async (req, res) => {

      const spdetails = await SPdetails.findById(req.params.id)
      spdetails.name = req.body.name;
      spdetails.contactNum = req.body.contactNum;
      spdetails.addresl1 = req.body.addresl1;
      spdetails.addresl2 = req.body.addresl2;
      spdetails.addresl3 = req.body.addresl3;
      spdetails.district = req.body.district;
      spdetails.zipCode = req.body.zipCode;
    try{
        await spdetails.save();
      res.status(200).json(spdetails);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {

    try{
        await SPdetails.deleteOne({_id:req.params.id});
      res.status(200).json("Category deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;