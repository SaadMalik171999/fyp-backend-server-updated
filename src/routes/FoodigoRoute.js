const express = require("express");
const router = new express.Router();
const FoodigoModel = require("../models/FoodigoModel");
const mongoose = require("mongoose");

router.post("/foodigolist", async (request, response) => {
  try {
    if (request.body.productName !== undefined) {
      const foodigoModelData = new FoodigoModel(request.body);
      const createFoodigoModelData = await foodigoModelData.save();
      response.status(201).json(createFoodigoModelData);
    } else {
      response.status(201).json("Object is Empty");
    }
  } catch (error) {
    response.status(400).json(error);
  }
});

router.get("/foodigolist", async (request, response) => {
  try {
    const foodigoModelData = await FoodigoModel.find();
    response.status(200).json(foodigoModelData);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.get("/foodigolist/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const foodigoModelData = await FoodigoModel.findById(_id);
    if (foodigoModelData !== null) {
      response.json(foodigoModelData);
    } else {
      response.status(400).json("Not Find");
    }
  } catch (error) {
    response.status(400).json(error);
  }
});

router.put("/foodigolist/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const foodigoModelData = await FoodigoModel.findByIdAndUpdate(
      _id,
      request.body.Data,
      {
        new: true,
      }
    );
    response.json(foodigoModelData);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.delete("/foodigolist/:id", async (request, response) => {
  const _id = request.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return response.status(400).json("Product not existed");
  } else {
    const res = await FoodigoModel.findByIdAndDelete(_id);
    if (res) {
      response.status(200).json("Product has been deleted");
    } else {
      response.status(200).json("Product not found");
    }
  }
});

router.delete("/deleteallfoodigolist", async (request, response) => {
  const result = await FoodigoModel.deleteMany();
  if (result) {
    return response.status(200).json("Product Item Deleted");
  }
});

module.exports = router;
