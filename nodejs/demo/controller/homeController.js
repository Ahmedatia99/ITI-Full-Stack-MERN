const homeService = require("../services/homeService");

const getHomePage = (req, res, next) => {
  try {
    const filePath = homeService.getHomePage();
    res.sendFile(filePath);
  } catch (error) {
    next(error);
  }
};
module.exports = { getHomePage };
