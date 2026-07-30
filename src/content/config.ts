import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    index: z.string(), // e.g. "01"
    summary: z.string(),
    description: z.string().optional(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['active', 'archived', 'ongoing']).default('active'),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    coordinates: z.string().optional(), // decorative technical-overlay label
  }),
});

const logs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tag: z.string().default('LOG'),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    dateRange: z.string(), 
    sortOrder: z.number(),
    stack: z.array(z.string()).default([]),
    kind: z.enum(['research', 'leadership']).default('research'),
  }),
});

export const collections = { projects, logs, experience };