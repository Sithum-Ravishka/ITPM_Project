const mongoose = require("mongoose");

const CardDataSchema = new mongoose.Schema(
  {
   name: { type: String },
   cardNum: { type: Number },
   month: { type: Number },
   year: { type: Number },
   cvv: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CardData", CardDataSchema);