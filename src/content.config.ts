import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { zProject } from "@/schemas/project";
import { zOpensourceContribution } from "./schemas/opensource-contribution";

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: zProject,
  }),
  opensourceContributions: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/opensource-contributions",
    }),
    schema: zOpensourceContribution,
  }),
};
