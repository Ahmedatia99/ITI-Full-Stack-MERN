const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookControll");

router.get("/", bookController.getAllBooks); //all books

router.get("/:id", bookController.getBookById); //get book by id

router.post("/", bookController.createBook); //create book

router.put("/:id", bookController.updateBook); //update book

router.delete("/:id", bookController.deleteBook); //delete book

module.exports = router;
