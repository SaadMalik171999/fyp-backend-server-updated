const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully");
  })
  .catch(() => {
    console.log("No Connection");
  });
