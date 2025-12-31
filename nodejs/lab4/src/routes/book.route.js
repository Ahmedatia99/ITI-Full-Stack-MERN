const router = require("express").Router();
const BookController = require("../controllers/book.controller");

const bookService = new BookService();

router.get("/books", async (req, res) => {
  const books = await BookController.getBooks();
  res.json(books);
});

router.get("books/:id", async (req, res) => {
  const books = await BookController.getBookById(req.params.id);
  res.json(books);
});
