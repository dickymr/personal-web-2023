import { type SchemaTypeDefinition } from 'sanity';

import profile from './schemas/profile';
import articles from './schemas/articles';
import blockContent from './schemas/blockContent';
import post from './schemas/post';
import author from './schemas/author';
import category from './schemas/category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, articles, blockContent, post, author, category],
};
