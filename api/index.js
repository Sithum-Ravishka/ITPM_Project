const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const deliverRoute = require("./routes/delivers");
const categoryRoute = require("./routes/category");
const productsRoute = require("./routes/products");
const deliverassignRoute = require("./routes/deliverassigns");
const shoppingdataRoute = require("./routes/shoppingdatas");
const carddataRoute = require("./routes/carddatas");
const deliveryusersRoute = require("./routes/deliveryusers");
const customerusersRoute = require("./routes/customerusers");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/delivers", deliverRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productsRoute);
app.use("/api/deliverassigns", deliverassignRoute);
app.use("/api/shoppingdatas", shoppingdataRoute);
app.use("/api/carddatas", carddataRoute);
app.use("/api/deliveryusers", deliveryusersRoute);
app.use("/api/customerusers", customerusersRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
