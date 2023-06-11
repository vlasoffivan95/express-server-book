const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/book.controller");

bookRouter
  .route("/")
  .get(bookController.getBooks)
  .post(bookController.createNewBook);

bookRouter.route("/:bookId").get(bookController.getBook);

module.exports = bookRouter;
