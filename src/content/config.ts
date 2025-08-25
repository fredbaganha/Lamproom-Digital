import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // or z.date() depending on how you wrote it
  }),
});

export const collections = { blog };
