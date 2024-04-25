import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogValidationSchema } from "@ankitt/mediumtype";

export const postRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

/*** ------------ middleware start ----------- ***/
postRouter.use('/*', async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401)
    return c.json({ error: "Unauthorized: " })
  }

  const token = jwt.split(" ");
  if (token.length !== 2 || token[0] !== "Bearer") {
    c.status(401);
    return c.json({ error: "Unauthorized: invalid format " })
  }

  const realToken = token[1];
  try {
    const payload = await verify(realToken, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.json({ error: "Unauthorized:" })
    }
    c.set("userId", payload.id);
    await next();
  } catch (err) {
    c.status(500);
    return c.json({ error: "Internal Server error" })
  }
});
/*** ------------ middleware ends ----------- ***/

postRouter.post('/blog', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = blogValidationSchema.safeParse(body);

  if (!success) {
    c.status(411)
    return c.json({ message: "Invalid input" })
  }

  const userId = c.get("userId");

  try {
    // need to do zod validation
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    })
    return c.json({ data: blog })
  } catch (e) {
    console.log(e);
    c.status(411)
    return c.json({ error: "error while creating blog" })
  }
});

// TODO: Pagination 
postRouter.get('/blog/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany();

  return c.json({ data: blogs })
});

postRouter.get('/blog/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const id = c.req.param("id")

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id
      }
    });

    return c.json({
      blogs: blog
    });
  } catch (e) {
    c.status(411)
    return c.json({ error: "error fetching blog!" })
  }
});


