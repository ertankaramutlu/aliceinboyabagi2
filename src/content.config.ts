import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const etkinlikler = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/etkinlikler" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    placeholder: z.boolean().optional(),
  }),
});

export const collections = { etkinlikler };
