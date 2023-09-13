import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'deployments',
  title: 'Deployments',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
