import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const practicas = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

const teoria = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

const bibliografia = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

const sobreIA = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

const sobreExamen = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        order: z.number().optional(),
    })
});


const examenPracticasC3 = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        order: z.number().optional(),
    })
});


export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    practicas,
    teoria,
    bibliografia,
    sobreIA,
    sobreExamen,
    examenPracticasC3
};
