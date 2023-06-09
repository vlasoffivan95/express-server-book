const Books = require("../models/Books");

module.exports.createNewBook = async (req, res, next) => {
  const newBookList = await Books.createNewBook(req.body);
  res.send(newBookList);
};

module.exports.getBook = async(req, res, next) => {
    const allBook = await Books.getAll()
    res.send(allBook)
}