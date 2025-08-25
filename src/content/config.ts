import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)), // ensures valid dates
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};