const mongoose = require("mongoose");

const GroceteriaSchema = mongoose.Schema(
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

const GroceteriaModel = new mongoose.model(
  "GroceteriaModel",
  GroceteriaSchema
);

module.exports = GroceteriaModel;
