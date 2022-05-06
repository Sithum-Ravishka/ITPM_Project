const mongoose = require("mongoose");

const CustomerUserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    dateOfBirth: { type: String },
    streetAddress: { type: String },
    streetAddress2: { type: String },
    city: { type: String },
    state: { type: String },
    postId: { type: String },
    contactNumber: { type: String },
    gender: { type: String },
    customerPhoto: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustomerUser", CustomerUserSchema);
