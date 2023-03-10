const mongoose = require("mongoose");

const productListOneSchema = mongoose.Schema(
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

const ProductListOne = new mongoose.model(
  "productListOne",
  productListOneSchema
);

module.exports = ProductListOne;
