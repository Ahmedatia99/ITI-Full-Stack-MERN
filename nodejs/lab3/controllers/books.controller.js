const bookService = require("../services/books.service");

class BookController {
  async getAllBooks(req, res, next) {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (err) {
      next(err);
    }
  }

  async getBookById(req, res, next) {
    try {
      const book = await bookService.getBookById(req.params.id);
      if (!book) return res.status(404).json({ message: "Book not found" });
      res.json(book);
    } catch (err) {
      next(err);
    }
  }

  async createBook(req, res, next) {
    try {
      if (Array.isArray(req.body)) {
        const books = await bookService.createBook(req.body);
        return res.status(201).json(books);
      }

      const book = await bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (err) {
      next(err);
    }
  }

  async updateBook(req, res, next) {
    try {
      const book = await bookService.updateBook(req.params.id, req.body);
      if (!book) return res.status(404).json({ message: "Book not found" });
      res.json(book);
    } catch (err) {
      next(err);
    }
  }

  async deleteBook(req, res, next) {
    try {
      await bookService.deleteBook(req.params.id);
      res.json({ message: "Book deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BookController();
