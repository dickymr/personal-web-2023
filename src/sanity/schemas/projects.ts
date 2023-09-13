import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'previewUrl',
      title: 'Preview URL',
      type: 'string',
    }),
    defineField({
      name: 'feGithub',
      title: 'FE Github URL',
      type: 'string',
    }),
    defineField({
      name: 'beGithub',
      title: 'BE Github URL',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }],
    }),
    defineField({
      name: 'language',
      title: 'Programming Languange',
      type: 'reference',
      to: { type: 'languages' },
    }),
    defineField({
      name: 'feTechs',
      title: 'FE Techs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'feTechs' } }],
    }),
    defineField({
      name: 'beTechs',
      title: 'BE Techs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'beTechs' } }],
    }),
    defineField({
      name: 'deployment',
      title: 'Deployment',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'deployments' } }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
});
