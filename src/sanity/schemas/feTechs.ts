import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'feTechs',
  title: 'FE Techs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
