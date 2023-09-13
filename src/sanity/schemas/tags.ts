import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tags',
  title: 'Tags',
  type: 'document',
  hidden: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
