import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'languages',
  title: 'Programming Languages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
