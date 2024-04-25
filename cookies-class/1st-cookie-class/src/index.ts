import express, { Express, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { signupValidationSchema, signinValidationSchema } from "./zod/types"
import { SECRET_KEY } from "./config";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3001'
}))
const PORT = 3000;

app.post('/signup', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const { success } = signupValidationSchema.safeParse({ username, email, password });

  if (!success) {
    res.status(411).json({
      message: "Invalid Inputs."
    })
    return;
  }

  const payload = {
    username,
    email,
    password
  }

  const token = jwt.sign(payload, SECRET_KEY);

  res.status(200).json({
    token: token
  })
});

app.post('/signin', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { success } = signinValidationSchema.safeParse({ email, password });

  if (!success) {
    res.status(411).json({
      message: "Invalid Inputs."
    })
    return;
  }

  const payload = {
    email,
    password
  }

  const token = jwt.sign(payload, SECRET_KEY);

  res.cookie("token", token)

  res.status(200).json({
    token: "Signin successfully."
  })
})

app.listen(PORT, () => {
  console.log(`Your PORT is running at http://localhost:${PORT}`)
})
