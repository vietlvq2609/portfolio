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
  'react-native',
  'angular',
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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(TAGS).default([]),
      repoUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
      status: z.enum(['ongoing', 'completed']).default('completed'),
      draft: z.boolean().default(false),
      // controls showcase card size on the homepage bento grid
      size: z.enum(['lg', 'md', 'sm']).default('sm'),
      coverImage: image().optional(),
      highlights: z.array(z.string()).optional()
    })
});

export const collections = { blog, projects };
