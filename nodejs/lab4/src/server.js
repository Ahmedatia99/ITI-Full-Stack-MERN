const express = require("express");
const connectDB = require("./config/db");

connectDB();

require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.use("/auth", require("./routes/auth.route"));


app.use((err, req, res, next) => {
  console.log("Error middleware:", err.message);
  res.status(500).send({
    status: 500,
    message: "Internal Server Error",
    details: "Unexpected error happened.",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
