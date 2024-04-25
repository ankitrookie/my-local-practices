import express from "express";
import { userValidation } from "./types";
import { User } from "./db";
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/create', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { success } = userValidation.safeParse({ firstName, lastName, email, password });

  if (!success) {
    res.json({
      message: "Invalid Inputs."
    });
    return;
  }
  await User.create({
    email,
    password,
    firstName,
    lastName
  });
  res.json({
    message: "User created successfully"
  })
})

app.listen(PORT, () => {
  console.log(`connect to PORT http://localhost:${PORT}`)
})
