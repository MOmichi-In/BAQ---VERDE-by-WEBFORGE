import { z, defineCollection } from "astro:content";

const icau = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { icau };
