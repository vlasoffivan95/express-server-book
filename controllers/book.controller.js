const Books = require("../models/Books");
const { NotFoundError } = require("../error/NotFoundError");
const createHttpError = require("http-errors")

module.exports.createNewBook = async (req, res, next) => {
  const newBookList = await Books.create(req.body);
  res.send(newBookList);
};

module.exports.getBooks = async (req, res, next) => {
  const allBook = await Books.getAll();
  res.send(allBook);
};

module.exports.getBook = async (req, res, next) => {
  const {
    params: { bookId },
  } = req;
  const foundBook = await Books.findOneBook(bookId);
  if (foundBook) {
    res.send(foundBook);
  } else {
    next(createHttpError(404, "User Not Found"))
  }
};

module.exports.deleteBook = async (req, res, next) => {
  const {
    params: { bookId },
  } = req;
  try {
    const deleteBook = await Books.delete(bookId);
    res.send(deleteBook);
  } catch(error) {
    next(new NotFoundError(error.message));
  }
};

module.exports.updateDataBook = async (req, res, next) => {
  const {
    params: { bookId },
    body,
  } = req;

  try {
    const updateBook = await Books.update(bookId, body);
    res.send(updateBook);
  } catch (error) {
    res.send("Dont find book!!!!");
  }
};
