const mongoose = require("mongoose");

const DeliverAssignSchema = new mongoose.Schema(
  {
    customerName: { type: String },
    address: { type: String },
    zipCode: { type: String },
    mobile: { type: String },
    productName: {type: String},
    productImg: {type: String},
    paymentMethod: { type: String },
    pricePerUnit: { type: String },
    Quantity: { type: String },
    totalPrice: { type: String },
    deliverName: { type: String },
    deliverNIC: { type: String },
    vechicleNo: { type: String },
    deliveryDate: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliverAssign", DeliverAssignSchema);