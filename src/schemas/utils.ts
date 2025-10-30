import { z, type SchemaContext } from "astro:content";

export const zMediaImage = ({ image }: SchemaContext) =>
  z.object({
    media: image(),
    alt: z.string(),
    credit: z.string().optional(),
  });
