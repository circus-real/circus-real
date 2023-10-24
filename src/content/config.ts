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
      frame: z
        .object({
          skip: z.boolean().optional(),
          height: z.number().optional(),
        })
        .optional(),
    }),
  }),
};
