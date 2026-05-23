import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(["development", "design"]),
      tags: z.array(z.string()),
      image: z.string(),
      link: z.string().url().optional(),
      github: z.string().url().optional(),
      featured: z.boolean().default(false),
      overview: z
        .object({
          problem: z.string(),
          solution: z.string(),
          results: z.array(z.string()),
        })
        .optional(),
      techStack: z.array(z.string()).optional(),
    }),
});

export const collections = { projects };
