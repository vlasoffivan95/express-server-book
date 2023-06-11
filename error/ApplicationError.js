class ApplicationError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
    this.name = this.constructor.name;
  }
}

module.exports = ApplicationError;
