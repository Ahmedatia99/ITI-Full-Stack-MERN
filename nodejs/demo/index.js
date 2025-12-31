require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/home");
const booksRouter = require("./routes/bookRoute");
const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Method: ${req.method}`);
//   console.log(`URL: ${req.url}`);
//   console.log(`body: ${JSON.stringify(req.body)}`);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.use("/", indexRouter);
app.use("/books", booksRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use((err, req, res, next) => {
  console.log("Error middleware:", err.message);
  res.status(500).send({
    status: 500,
    message: "Internal Server Error",
    details: "Unexpected error happened.",
    timestamp: new Date().toISOString(),
  });
});
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
