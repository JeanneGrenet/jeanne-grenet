import { z } from "zod";
import { articleCollection, projectCollection } from "@/content/schema";

export const zMetadata = z.object({
  metadata: z.object({
    slug: z.string().optional(),
    filepath: z.string().optional(),
  }),
});

const collections = {
  project: projectCollection,
  article: articleCollection,
} as const;

export default collections;
export type ProjectType = z.infer<typeof collections.project.schema>;
export type ArticleType = z.infer<typeof collections.article.schema> &
  z.infer<typeof zMetadata>;
