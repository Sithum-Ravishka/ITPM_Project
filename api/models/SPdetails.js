const mongoose = require("mongoose");

const ShippingDataSchema = new mongoose.Schema(
  {
   name: { type: String },
   contactNum: { type: Number },
   addresl1: { type: String },
   addresl2: { type: String },
   addresl3: { type: String },
   district: { type: String },
   zipCode: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SPdetails", ShippingDataSchema);