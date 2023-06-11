const { ValidationError } = require("yup");

async function handleValidationError(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(500).send("Validation Error!");
  }
  next(err);
}

module.exports.handleValidationError = handleValidationError;
