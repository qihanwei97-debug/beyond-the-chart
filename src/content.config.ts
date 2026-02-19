import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    volume: z.number(),
    volumeName: z.string(),
    chapter: z.number(),
    order: z.number(),
  }),
});

const characters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    color: z.string(),
    image: z.string().optional(),
    brief: z.string(),
    order: z.number(),
  }),
});

const world = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = { chapters, characters, world };
