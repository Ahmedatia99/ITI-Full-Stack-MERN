const fs = require("fs");
const path = require("path");
function getAllBooks() {
  const filePath = path.join(__dirname, "../data/book.json");

  try {
    const dataRead = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(dataRead);
  } catch (err) {
    console.log("Books file not found");
    return [];
  }
}

function createBook(book) {
  const filePath = path.join(__dirname, "../data/book.json");
  const books = getAllBooks();
  books.push(book);
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2), "utf-8");
}

const getBookById = (id) => {
  const books = getAllBooks();
  const numId = Number(id);
  const book = books.find((b) => b.id === numId);

  if (!book) {
    throw new Error(`Book with id ${id} not found`);
  }

  return book;
};

function updateBook(id, updatedBook) {
  const filePath = path.join(__dirname, "../data/book.json");
  const books = getAllBooks();
  const numId = Number(id);
  const index = books.findIndex((b) => b.id === numId);

  if (index === -1) {
    throw new Error(`Book with id ${id} not found`);
  }

  books[index] = { ...books[index], ...updatedBook };
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2), "utf-8");
}

function deleteBook(id) {
  const filePath = path.join(__dirname, "../data/book.json");
  const books = getAllBooks();
  const numId = Number(id);
  const filteredBooks = books.filter((b) => b.id !== numId);
  fs.writeFileSync(filePath, JSON.stringify(filteredBooks, null, 2), "utf-8");
}
module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
};
