// const db = require("../models");
// const Customer = db.customers;
const Book = require("../models/Book");
const mongoose = require("mongoose");

async function create(req, res) {
  try {
    const { title, author } = req.body;
    if (!title && !author) {
      res.status(400).send({
        message: "Book needs a title and author.",
      });
    }

    const book = new Book({
      title,
      author,
    });

    await book.save();
    res.send(book);

    // const customer = {
    //   name: req.body.name,
    //   address: req.body.address,
    // };

    // Customer.create(customer)
    //   .then((data) => res.send(data))
    //   .catch((err) =>
    //     res.status(500).send({
    //       message: err.message || "Some error occurred.",
    //     })
    //   );
  } catch (error) {
    console.log(error);
  }
}

async function getAll(req, res) {
  const books = await Book.find();
  res.json(books);
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const selectedBook = await Book.findById(mongoose.Types.ObjectId(id));
    res.json(selectedBook);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { create, getAll, getById };
