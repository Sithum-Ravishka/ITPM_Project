const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const deliverRoute = require("./routes/delivers");


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

app.use(express.json());

app.use("/api/delivers", deliverRoute);


app.listen(8800, () => {
  console.log("Backend server is running!");
});