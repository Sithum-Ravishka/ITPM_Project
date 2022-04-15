const mongoose = require("mongoose");

const DeliveryUserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    nicNumber: { type: String },
    email: { type: String },
    dateOfBirth: { type: String },
    address: { type: String },
    contactNumber: { type: String },
    gender: { type: String },
    deliverPhoto: { type: String },
    licensePhoto: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryUser", DeliveryUserSchema);
