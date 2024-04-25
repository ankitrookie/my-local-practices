import z from "zod";


export const signupValidationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string()
})

export const signinValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
