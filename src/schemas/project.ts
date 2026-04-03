import { z, type SchemaContext } from "astro:content";
import { zMediaImage } from "./utils";

export const projectStatus = ["done", "in-progress"] as const;
export type ProjectStatus = (typeof projectStatus)[number];

export const zProject = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    description: z.string(),
    image: zMediaImage({ image }).optional(),
    technos: z.array(z.string()).optional(),
    hasDetailsPage: z.boolean().nullish(),
    link: z.string().url().nullish(),
    status: z.enum(projectStatus).default("done"),
  });

export type Project = z.infer<ReturnType<typeof zProject>>;
