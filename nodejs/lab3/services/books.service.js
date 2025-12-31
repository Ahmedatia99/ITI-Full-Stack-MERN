const Book = require("../models/book");

class BookService {
  async getAllBooks() {
    return await Book.find();
  }

  async getBookById(id) {
    return await Book.findById(id);
  }

  async createBook(data) {
    return await Book.create(data);
  }

  async updateBook(id, updatedBookData) {
    return await Book.findByIdAndUpdate(id, updatedBookData, { new: true });
  }

  async deleteBook(id) {
    return await Book.findByIdAndDelete(id);
  }
}

module.exports = new BookService();
