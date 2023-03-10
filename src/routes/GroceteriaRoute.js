const express = require("express");
const router = new express.Router();
const GroceteriaModel = require("../models/GroceteriaModel");
const mongoose = require("mongoose");

router.post("/groceterialist", async (request, response) => {
  try {
    if (request.body.productName !== undefined) {
      const groceteriaModelData = new GroceteriaModel(request.body);
      const creategroceteriaModelData = await groceteriaModelData.save();
      response.status(201).json(creategroceteriaModelData);
    } else {
      response.status(201).json("Object is Empty");
    }
  } catch (error) {
    response.status(400).json(error);
  }
});

router.get("/groceterialist", async (request, response) => {
  try {
    const groceteriaModelData = await GroceteriaModel.find();
    response.status(200).json(groceteriaModelData);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.get("/groceterialist/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const groceteriaModelData = await GroceteriaModel.findById(_id);
    if (groceteriaModelData !== null) {
      response.json(groceteriaModelData);
    } else {
      response.status(400).json("Not Find");
    }
  } catch (error) {
    response.status(400).json(error);
  }
});

router.put("/groceterialist/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const groceteriaModelData = await GroceteriaModel.findByIdAndUpdate(
      _id,
      request.body.Data,
      {
        new: true,
      }
    );
    response.json(groceteriaModelData);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.delete("/groceterialist/:id", async (request, response) => {
  const _id = request.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return response.status(400).json("Product not existed");
  } else {
    const res = await groceteriaModel.findByIdAndDelete(_id);
    if (res) {
      response.status(200).json("Product has been deleted");
    } else {
      response.status(200).json("Product not found");
    }
  }
});

router.delete("/deleteallgroceterialist", async (request, response) => {
  const result = await GroceteriaModel.deleteMany();
  if (result) {
    return response.status(200).json("Product Item Deleted");
  }
});

module.exports = router;
