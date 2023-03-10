const express = require("express");
const productListOneRouters = require("./routes/productListOneRouters")
const foodigoRoute = require("./routes/FoodigoRoute")
const gfreshRoute = require("./routes/GfreshRoute")
const groceteriaRoute = require("./routes/GroceteriaRoute")
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

require("./db/conn");
const app = express();
app.use(cors());
app.use(express.json());
app.use(productListOneRouters);
app.use(foodigoRoute);
app.use(gfreshRoute);
app.use(groceteriaRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Connection is ${port}`);
});



