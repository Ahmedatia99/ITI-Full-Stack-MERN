const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
