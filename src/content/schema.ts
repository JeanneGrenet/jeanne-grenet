import { defineCollection } from "typed-mdx";
import { z } from "zod";

export const projectCollection = defineCollection({
  folder: "project",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    technos: z.array(z.string()).optional(),
    hasDetailsPage: z.boolean().nullish(),
    link: z.string().url().nullish(),
  }),
});

export const articleCollection = defineCollection({
  folder: "article",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    categories: z.array(z.string()).optional(),
    languages: z.array(z.string()),
  }),
});
