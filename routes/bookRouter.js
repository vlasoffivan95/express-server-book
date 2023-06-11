const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/book.controller");
const {validateBookMW} = require("../middlewares/bookMW")

bookRouter
  .route("/")
  .get(bookController.getBooks)
  .post(validateBookMW, bookController.createNewBook);

bookRouter
  .route("/:bookId")
  .get(bookController.getBook)
  .delete(bookController.deleteBook)
  .put(validateBookMW, bookController.updateDataBook);

module.exports = bookRouter;
