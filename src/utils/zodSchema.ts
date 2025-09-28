import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title cannot be longer than 50 characters"),

  summary: z
    .string()
    .min(1, "Summary is required")
    .max(250, "Summary cannot be longer than 250 characters"),

  content: z.string().min(1, "Content is required"),

  author: z
    .string()
    .min(1, "Author name is required")
    .max(40, "Author name cannot be longer than 40 characters"),

  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});
