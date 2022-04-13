const router = require("express").Router();
const Category = require("../models/Category");
const Deliver = require("../models/Deliver");
const verify = require("../verifyToken");

router.get("/", async (req, res) => {
  try{
    const categories = await Category.find()
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
      const category = new Category({
          name : req.body.name,
          description: req.body.description
      })
    try{
        await category.save();
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/:id", async (req, res) => {

      const category = await Category.findById(req.params.id)
      category.name = req.body.name;
      category.description = req.body.description;
    try{
        await category.save();
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {

    try{
        await Category.deleteOne({_id:req.params.id});
      res.status(200).json("Category deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;