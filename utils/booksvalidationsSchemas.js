const yup = require("yup");

const BOOK_CREATE_SCHEMA = yup.object({
  pages: yup.number().required().positive().integer(),
  name: yup.string().required(),
  author: yup.string().required(),
  year: yup.number().required().positive().integer().max(new Date().getFullYear()),
});

module.exports.BOOK_CREATE_SCHEMA = BOOK_CREATE_SCHEMA;
