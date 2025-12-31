const express = require("express");
const homeController = require("../controller/homeController");

const router = express.Router();

router.get("/", homeController.getHomePage);

module.exports = router;
