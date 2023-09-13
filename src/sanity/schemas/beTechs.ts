import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'beTechs',
  title: 'BE Techs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
