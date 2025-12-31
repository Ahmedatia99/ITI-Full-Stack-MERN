const bookService = require("../services/book.service");

class BookController {
  async getBooks(req, res, next) {
    try {
      const books = await bookService.getBooks();
      res.json(books);
    } catch (error) {
      next(error);
    }
  }

  async getBookById(req, res, next) {
    try {
      const id = req.params.id;
      const books = await bookService.getBookById(id);
      res.json(books);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BookController();
