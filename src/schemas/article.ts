import { z, type SchemaContext } from "astro:content";
import { zMediaImage } from "./utils";

export const zArticle = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    image: zMediaImage({ image }).optional(),
    publishedDate: z.date(),
    tags: z.array(z.string()).optional(),
    externalUrl: z.string().url().optional(),
  });

export type Article = z.infer<ReturnType<typeof zArticle>>;
