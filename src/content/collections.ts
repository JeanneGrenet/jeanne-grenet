import { defineCollection } from "typed-mdx";
import { z } from "zod";

const collections = {
  project: defineCollection({
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
  }),
} as const;

export default collections;
export type ProjectType = z.infer<typeof collections.project.schema>;
