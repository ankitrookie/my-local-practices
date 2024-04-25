const { Router } = require('express');
const router = Router();
const { todo } = require('../db');
// zod validation
const { createtodo, updatetodo } = require('../types.js')

router.put('/', async (req, res) => {
  const uploadPayload = req.body;
  console.log(uploadPayload.id)
  const parsedPayload = updatetodo.safeParse(uploadPayload);
  if(!parsedPayload.success){
     res.status(411).json({
       msg: "Yu sent a worng input."
     })
    return;
   }

  await todo.updateOne({ 
     _id: uploadPayload.id 
  }, {
    completed: true
  });

  res.json({
    msg: "task completed!"
  });
})

module.exports = router;
