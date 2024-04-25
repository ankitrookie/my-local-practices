import express from "express";
import z from "zod";

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(8).optional()
}); // this is a runtime validation

type FinalUserSchema = z.infer<typeof userProfileSchema> // and this is compile time variable

app.post('/', (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const createBody: FinalUserSchema = req.body;

  if (!success) {
    res.status(411).json({
      message: "Something is missing!"
    })
  }

  res.json({
    message: "created user"
  })
})


// and it is even impontent for frontend validation, no zod is for backend only but we can make it possidlte to check it in frontend as well through type infer