const Books = require("../models/Books");

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
    res.send("undefined");
  }
};

module.exports.deleteBook = async (req, res, next) => {
  const {
    params: { bookId },
  } = req;

  const deleteBook = await Books.delete(bookId);
  res.send(deleteBook);
};
