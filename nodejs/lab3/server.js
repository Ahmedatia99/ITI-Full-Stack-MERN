const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
app.use(express.json());

//connect database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const bookRoute = require("./routes/book.routes");
app.use("/api/books", bookRoute);

//server listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Running port:${port}`);
});
