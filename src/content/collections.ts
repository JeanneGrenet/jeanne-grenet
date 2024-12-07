import { defineCollection } from "typed-mdx";
import { z } from "zod";

const zTechnosType = () => z.enum(["svelte.js", "react", "html", "css"]);

const collections = {
  project: defineCollection({
    folder: "project",
    schema: z.object({
      name: z.string(),
      description: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      technos: z.array(zTechnosType()).optional(),
    }),
  }),
} as const;

export default collections;
export type ProjectType = z.infer<typeof collections.project.schema>;
