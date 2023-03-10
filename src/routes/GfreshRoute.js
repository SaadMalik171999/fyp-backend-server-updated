const express = require("express");
const router = new express.Router();
const GfreshModel = require("../models/GfreshModel");
const mongoose = require("mongoose");

router.post("/gfreshlist", async (request, response) => {
  try {
    if (request.body.productName !== undefined) {
      const gfreshModelData = new GfreshModel(request.body);
      const creategfreshModelData = await gfreshModelData.save();
      response.status(201).json(creategfreshModelData);
    } else {
      response.status(201).json("Object is Empty");
    }
  } catch (error) {
    response.status(400).json(error);
  }
});

router.get("/gfreshlist", async (request, response) => {
  try {
    const gfreshModelData = await GfreshModel.find();
    response.status(200).json(gfreshModelData);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.get("/gfreshlist/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const gfreshModelData = await GfreshModel.findById(_id);
    if (gfreshModelData !== null) {
      response.json(gfreshModelData);
    } else {
      response.status(400).json("Not Find");
    }
  } catch (error) {
    response.status(400).json(error);
  }
});

router.put("/gfreshlist/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const gfreshModelData = await GfreshModel.findByIdAndUpdate(
      _id,
      request.body.Data,
      {
        new: true,
      }
    );
    response.json(gfreshModelData);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.delete("/gfreshlist/:id", async (request, response) => {
  const _id = request.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return response.status(400).json("Product not existed");
  } else {
    const res = await GfreshModel.findByIdAndDelete(_id);
    if (res) {
      response.status(200).json("Product has been deleted");
    } else {
      response.status(200).json("Product not found");
    }
  }
});

router.delete("/deleteallgfreshlist", async (request, response) => {
  const result = await GfreshModel.deleteMany();
  if (result) {
    return response.status(200).json("Product Item Deleted");
  }
});

module.exports = router;
