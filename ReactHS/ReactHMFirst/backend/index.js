const express = require('express');
const app = express();
const cors = require('cors');

app.use(express());
app.use(cors({
  origin: "http://localhost:5173"
}))

const todos = [
  {
    id: 1,
    title: 'have to go gym.',
    description: 'have to gym by 19.'
  },
  {
    id: 2,
    title: 'have to make food',
    description: 'have to make food for me and my mother',
  },
  {
    id: 3,
    title: 'read a book',
    description: 'spend at least 30 minutes reading a book.',
  },
  {
    id: 4,
    title: 'learn a new programming language',
    description: 'dedicate some time to learn a new programming language.',
  },
  {
    id: 5,
    title: 'take a walk',
    description: 'enjoy a relaxing walk in the park.',
  },
  {
    id: 6,
    title: 'write a journal entry',
    description: 'reflect on your day and write a journal entry.',
  },
  {
    id: 7,
    title: 'practice mindfulness',
    description: 'spend 10 minutes practicing mindfulness meditation.',
  },
  {
    id: 10,
    title: 'call a friend',
    description: 'reach out to a friend for a catch-up call.',
  },
  {
    id: 9,
    title: 'organize your workspace',
    description: 'tidy up and organize your workspace for increased productivity.',
  },
  {
    id: 10,
    title: 'try a new recipe',
    description: 'experiment with cooking and try preparing a new recipe.',
  }
]

app.get('/', (req, res) => {
   const randomTodoIndex = Math.floor(Math.random() * todos.length);
   const randomTodos = todos[randomTodoIndex];

   res.json({
    todos: randomTodos
  })
})

app.get('/todos', (req, res) => {
   const { id } = req.query;
  
   const findTodo = todos.filter(todo => todo.id == id);
  
   res.json({
      todo: findTodo
  })
})

app.listen(3000, () => {
  console.log("port is runnign on port 30000")
})
