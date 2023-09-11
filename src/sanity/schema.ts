import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import profile from './schemas/profile';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, post, author, category, blockContent],
};
