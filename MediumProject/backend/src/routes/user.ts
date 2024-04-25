import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

// zod
import { signupValidationSechema, signinValidationSechema } from "@ankitt/mediumtype";


export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupValidationSechema.safeParse(body);

  if (!success) {
    c.status(411)
    return c.json({ message: "Invalid inputs!" })
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    }
  })

  const payload = {
    id: user.id
  }
  const token = await sign(payload, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  })
});

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinValidationSechema.safeParse(body);

  if (!success) {
    c.status(411)
    return c.json({ message: "Invalid inputs!" })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  })

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found!" });
  }

  const payload = {
    id: user.id
  }

  const token = await sign(payload, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  })
});

