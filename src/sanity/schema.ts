import { type SchemaTypeDefinition } from 'sanity';

import profile from './schemas/profile';
import articles from './schemas/articles';
import projects from './schemas/projects';
import tags from './schemas/tags';
import languages from './schemas/languages';
import feTechs from './schemas/feTechs';
import beTechs from './schemas/beTechs';
import deployments from './schemas/deployments';
import blockContent from './schemas/blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, articles, projects, tags, languages, feTechs, beTechs, deployments, blockContent],
};
