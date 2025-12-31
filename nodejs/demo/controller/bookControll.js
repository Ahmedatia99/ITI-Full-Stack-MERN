const bookService = require("../services/bookService");

const getAllBooks = (req, res, next) => {
  try {
    const books = bookService.getAllBooks();
    res.status(200).send({
      status: 200,
      message: "Books are retrieved successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

const getBookById = (req, res, next) => {
  try {
    const { id } = req.params;
    const book = bookService.getBookById(id);

    res.status(200).send({
      status: 200,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

const createBook = (req, res, next) => {
  try {
    const book = req.body;
    bookService.createBook(book);
    res.status(201).send({
      status: 201,
      message: "Book is created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedBook = req.body;
    bookService.updateBook(id, updatedBook);
    res.status(200).send({
      status: 200,
      message: "Book is updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteBook = (req, res, next) => {
  try {
    const id = req.params.id;
    bookService.deleteBook(id);
    res.status(200).send({
      status: 200,
      message: "Book is deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
};
