const { v4: uuidv4 } = require("uuid");

class Books {
  static booksDB = [
    {
      id: 1,
      name: "Mein Kampf",
      author: "Adolf Hitler",
      pages: 500,
      year: 1924,
    },
    {
      id: 2,
      name: "Kobzar",
      author: "Taras Shevchenko",
      pages: 320,
      year: 1837,
    },
    {
      id: 3,
      name: "Eneida",
      author: "Ivan Kotliarevskiy",
      pages: 150,
      year: 1842,
    },
    {
      id: 4,
      name: "Love Ukraine",
      author: "Vasil Simonenko",
      pages: 290,
      year: 2015,
    },
  ];

  static async create(bookData) {
    const newBookList = {
      ...bookData,
      id: Date.now(),
    };
    this.booksDB.push(newBookList);
    return newBookList;
  }

  static async getAll() {
    return this.booksDB;
  }

  static async findOneBook(bookId) {
    const foundBook = this.booksDB.find((b) => b.id === Number(bookId));
    return foundBook;
  }
}

module.exports = Books;
