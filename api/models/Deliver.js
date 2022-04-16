const mongoose = require("mongoose");

const DeliverSchema = new mongoose.Schema(
  {
    customerName: { type: String },
    address: { type: String },
    zipCode: { type: String },
    mobile: { type: String },
    productName: { type: String },
    productImg: { type: String },
    paymentMethod: { type: String },
    pricePerUnit: { type: String },
    Quantity: { type: String },
    totalPrice: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deliver", DeliverSchema);
