const express = require('express');
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
app.use(express.json());

app.post('/health-checkup',(req, res) => {
  const {kidneys} = req.body;
  const response = schema.safeParse(kidneys);
  res.json({
   response
  })
})

app.listen(3000, () => {
  console.log("Port is litening in port 3000!");
})
