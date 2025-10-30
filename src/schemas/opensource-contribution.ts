import { z, type SchemaContext } from "astro:content";
import { zMediaImage } from "./utils";

export const zOpensourceContribution = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    description: z.string(),
    image: zMediaImage({ image }).optional(),
    link: z.string().url().nullish(),
  });

export type OpensourceContribution = z.infer<
  ReturnType<typeof zOpensourceContribution>
>;
