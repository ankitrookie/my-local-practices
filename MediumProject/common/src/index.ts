import { z } from "zod";

// below are for backends

export const signupValidationSechema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5)
});

export const signinValidationSechema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
});

export const blogValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
});

// below is for frontend

export type signupInput = z.infer<typeof signupValidationSechema>;
export type signinInput = z.infer<typeof signinValidationSechema>;
export type blogInput = z.infer<typeof blogValidationSchema>;


