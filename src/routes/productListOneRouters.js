const express = require("express");
const router = new express.Router();
const ProductListOne = require("../models/productListOne");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

router.post("/productlistone", async (request, response) => {
    try {
      if(request.body.productName !== undefined){
      const ProductListOneData = new ProductListOne(request.body);
      const createProductListOneData = await ProductListOneData.save();
      response.status(201).json(createProductListOneData);
  }
  else{
      response.status(201).json("Object is Empty");
  }
    } catch (error) {
      response.status(400).json(error);
    }
  });

  router.get("/productlistone", async (request, response) => {
    try {
      const ProductListOneData = await ProductListOne.find();
      response.status(200).json(ProductListOneData);
    } catch (error) {
      response.status(400).json(error);
    }
  });

  router.get("/productlistone/:id", async (request, response) => {
    const _id = request.params.id;
    const ProductListOneDataNew = await ProductListOne.findById(_id);
    if (ProductListOneDataNew !== null) {
      response.json(ProductListOneDataNew);
    } else {
      response.status(400).json("Not Find");
    }
  });
  
  router.put("/productlistone/:id", async (request, response) => {
    try {
      const _id = request.params.id;
      const ProductListOneData = await ProductListOne.findByIdAndUpdate(_id, request.body.Data, {
        new: true,
      });
      response.json(ProductListOneData);
    } catch (error) {
      response.status(400).json(error);
    }
  });
  
  router.delete("/productlistone/:id", async (request, response) => {
      const _id = request.params.id;
      if (!mongoose.Types.ObjectId.isValid(_id)) {
        return response.status(400).json("Product not existed");
      }
      else{
          const res = await ProductListOne.findByIdAndDelete(_id);
          if(res){
            response.status(200).json("Product has been deleted");
          }
          else{
            response.status(200).json("Product not found");
          }
      }
  }
  
  );
   
  router.delete("/deletealldocument", async (request, response) => {
    const result = await ProductListOne.deleteMany();
    if (result) {
      return response.status(200).json("Product Item Deleted");
    }
}
);

  module.exports = router;

