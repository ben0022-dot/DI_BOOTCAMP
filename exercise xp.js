const express = require('express');
const app = express();
const port = 3000;

// Step 5: Import and mount the router
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import and mount the todos router
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`To-do API running at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import and mount the books router
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Book API running at http://localhost:${port}`);
});

const express = require('express');
const router = express.Router();

// Sample in-memory database
const books = [];

// 1. Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// 2. Add a new book
router.post('/', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// 3. Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    books[index].title = req.body.title || books[index].title;
    books[index].author = req.body.author || books[index].author;
    res.json(books[index]);
  } else {
    res.status(404).send('Book not found');
  }
});

// 4. Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).send('Book not found');
  }
});

module.exports = router;