import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Curated tag set — kept in sync with the real stack in src/data/skills.ts
const TAGS = z.enum([
  'typescript',
  'javascript',
  'php',
  'sql',
  'node',
  'fastify',
  'react',
  'laravel',
  'wordpress',
  'salesforce',
  'docker',
  'linux',
  'postgresql',
  'mysql',
  'redux',
  'zustand',
  'tanstack-query',
  'firebase',
  'ga4',
  'github-actions',
  'system-design',
  'performance',
  'clean-architecture'
]);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(TAGS).default([]),
      draft: z.boolean().default(false),
      heroImage: image().optional()
    })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(TAGS).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, projects };
