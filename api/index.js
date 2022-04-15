const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const deliverRoute = require("./routes/delivers");
const categoryRoute = require("./routes/category"); 
const deliverassignRoute = require("./routes/deliverassigns");
const spRoute = require("./routes/SPcategory")
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
app.use("/api/SPcategory", spRoute);


app.listen(8800, () => {
  console.log("Backend server is running!");
});
