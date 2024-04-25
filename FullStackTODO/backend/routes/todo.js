const { Router } = require('express');
const router = Router();
const { todo } = require('../db');

// zod validation
const { createtodo, updatetodo } = require('../types.js')

router.post('/', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createtodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Yu sent a worng input."
    })
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: "todo created!"
  })
})

module.exports = router;
