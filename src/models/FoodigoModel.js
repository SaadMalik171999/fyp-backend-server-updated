const mongoose = require("mongoose");

const FoodigoSchema = mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productCategory: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyPrice: {
      type: Number,
    },
    companyProductStock: {
      type: Number,
    },
  },
  { timestamps: true }
);

const FoodigoModel = new mongoose.model(
  "FoodigoModel",
  FoodigoSchema
);

module.exports = FoodigoModel;
