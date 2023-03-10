const mongoose = require("mongoose");

const GfreshSchema = mongoose.Schema(
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

const GfreshModel = new mongoose.model(
  "GfreshModel",
  GfreshSchema
);

module.exports = GfreshModel;
