const express = require("express");
const router = require("./routes");
const app = express();
const {handleValidationError} = require("./error/validationError")
app.use(handleValidationError)
app.use(express.json());
app.use("/api", router);

module.exports = app;
