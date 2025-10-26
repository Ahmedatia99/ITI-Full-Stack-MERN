const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Welcome to our API 👋" });
});

app.post("/api/user", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "The 'name' field is required." });
  }

  res
    .status(201)
    .json({ message: `User '${name}' has been successfully created.` });
});

module.exports = app;

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
}
