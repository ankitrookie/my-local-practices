const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');

const todo = require('./routes/todo.js');
const todos = require('./routes/todos.js');
const completed = require('./routes/completed.js');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use('/todo', todo);
app.use('/todos', todos);
app.use('/completed', completed)

app.listen(PORT, () => {
  console.log(`PORT is listening at ${PORT}`)
})
