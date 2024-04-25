const { Router } = require('express');
const router = Router();
const { todo } = require('../db');

// zod validation
const { createtodo, updatetodo } = require('../types.js')

router.get('/', async (req, res) => {
   const todos = await todo.find();
    
   res.json({
    todos: todos
   })
})

module.exports = router;
