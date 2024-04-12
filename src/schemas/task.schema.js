import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z
    .string({
      required_error: "Description must be a string",
    })
    .min(5, { message: "Description must be at least 5 characters" }),
  date: z.string().datetime().optional(),
  status: z.string().optional(),
});
