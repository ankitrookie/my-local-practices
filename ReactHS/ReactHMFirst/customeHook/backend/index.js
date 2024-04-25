const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

const todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Go to the store and buy fruits, vegetables, and bread.",
    isCompleted: false
  },
  {
    id: 2,
    title: "Finish homework",
    description: "Complete the math and science assignments before tomorrow's deadline.",
    isCompleted: true
  },
  {
    id: 3,
    title: "Call mom",
    description: "Call mom to wish her a happy birthday and catch up on family news.",
    isCompleted: false
  },
  {
    id: 4,
    title: "Exercise",
    description: "Go for a run in the park or do some yoga at home to stay fit.",
    isCompleted: false
  },
  {
    id: 5,
    title: "Read a book",
    description: "Find a quiet spot and immerse yourself in a good book for an hour.",
    isCompleted: false
  },
  {
    id: 6,
    title: "Cook dinner",
    description: "Try out a new recipe and cook a delicious dinner for yourself or your loved ones.",
    isCompleted: false
  },
  {
    id: 7,
    title: "Write a blog post",
    description: "Share your thoughts or expertise with others by writing a blog post on a topic of interest.",
    isCompleted: false
  },
  {
    id: 8,
    title: "Plan a weekend getaway",
    description: "Research destinations and activities, and plan a memorable weekend trip with friends or family.",
    isCompleted: false
  },
  {
    id: 9,
    title: "Learn a new skill",
    description: "Pick up a new hobby or skill that interests you, such as painting, coding, or playing an instrument.",
    isCompleted: false
  },
  {
    id: 10,
    title: "Volunteer",
    description: "Find a local organization or cause that you're passionate about and volunteer your time to make a difference in your community.",
    isCompleted: false
  }
];


app.get('/todos', (req, res) => {
   const indexTodos = Math.floor(Math.random() * todos.length);
   
   const todosData = todos[indexTodos];

   res.json({
    data: todosData
  })
})

app.listen(3000)
