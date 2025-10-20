// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const icau = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { icau };