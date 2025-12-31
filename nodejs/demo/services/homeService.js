const fs = require("fs");
const path = require("path");

const getHomePage = () => {
  const filePath = path.join(__dirname, "../public/index.html");

  if (!fs.existsSync(filePath)) {
    const error = new Error("Home page file not found");
    error.statusCode = 404;
    throw error;
  }
  return filePath;
};

module.exports = {
  getHomePage,
};
