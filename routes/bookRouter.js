const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/book.controller");

bookRouter
  .route("/")
  .get(bookController.getBook)
  .post(bookController.createNewBook);

module.exports = bookRouter;
