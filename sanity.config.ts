import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schema';

export default defineConfig({
  name: 'admin_personal_website',
  title: 'Personal Website',
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
