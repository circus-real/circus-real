import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url(),
      github: z.string(),
      techStack: z.array(z.string()),
      featured: z.boolean().default(false),
      frame: z
        .object({
          width: z.number().default(600),
          height: z.number().default(800),
        })
        .or(z.null())
        .default(null),
    }),
  }),
};
