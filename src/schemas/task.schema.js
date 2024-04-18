import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is requiredd"
    })
    .min(3, { message: "Title must be at least 3 characters" })
    .max(20, { message: "Title must be at most 20 characters" })
    .trim(),
  description: z
    .string({
      required_error: "Description must be a string",
    })
    .min(5, { message: "Description must be at least 5 characters" })
    .trim(),
  date: z.string().datetime(),
  status: z.string().optional(),
});
