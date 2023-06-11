const { BOOK_CREATE_SCHEMA } = require("../utils/booksvalidationsSchemas");

module.exports.validateBookMW = async (req, res, next) => {
  try {
    await BOOK_CREATE_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
