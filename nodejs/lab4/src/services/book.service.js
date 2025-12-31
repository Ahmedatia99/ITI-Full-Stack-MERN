const Book = require("../models/book.model");

class BookService {
  async getBooks() {
    return await Book.find();
  }

  async getBookById(id) {
    await Book.findById(id);
  }
}

exports.module = new BookService();