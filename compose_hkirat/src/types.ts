import z from "zod";

const userValidation = z.object({
  email: z.string(),
  password: z.string().min(5),
  firstName: z.string(),
  lastName: z.string()
});

export { userValidation };
