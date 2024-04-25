import { z } from "zod";

const validationSchemaAuth = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const validationSchemaBlog = z.object({
  title: z.string(),
  content: z.string(),
});

export { validationSchemaBlog, validationSchemaAuth };
