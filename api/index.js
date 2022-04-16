const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const deliverRoute = require("./routes/delivers");
const categoryRoute = require("./routes/category"); 
const deliverassignRoute = require("./routes/deliverassigns");
const shoppingdataRoute = require("./routes/shoppingdatas");
const deliveryuserRoute = require("./routes/deliveryuser");
const carddataRoute = require("./routes/carddatas");
const deliveryuserRoute = require("./routes/deliveryusers");
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
app.use("/api/deliverassigns", deliverassignRoute);
app.use("/api/shoppingdatas", shoppingdataRoute);
<<<<<<< HEAD
app.use("/api/deliveryuser", deliveryuserRoute);
app.use("/api/carddatas", carddataRoute);
=======
app.use("/api/deliveryusers", deliveryuserRoute);
>>>>>>> 1fdad108585ed01e8459afd3dc2fcd1c54e5aeea


app.listen(8800, () => {
  console.log("Backend server is running!");
});
