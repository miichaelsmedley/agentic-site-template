import { defineConfig } from 'tinacms';
import testimonialCollection from './collections/testimonial';
import postCollection from './collections/post';
import pageCollection from './collections/page';
import homeCollection from './collections/home';
import navigationCollection from './collections/navigation';
import caseStudyCollection from './collections/caseStudy';
import siteSettingsCollection from './collections/siteSettings';
import { fontPreviewFieldPlugin } from './fields/fontPreviewSelect';

export default defineConfig({
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main',
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  admin: {
    auth: {
      useLocalAuth: process.env.TINA_PUBLIC_IS_LOCAL === 'true',
    },
  },

  cmsCallback: (cms) => {
    cms.fields.add(fontPreviewFieldPlugin);
    return cms;
  },

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
    host: '127.0.0.1',
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || '',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  schema: {
    collections: [
      homeCollection,
      pageCollection,
      caseStudyCollection,
      postCollection,
      testimonialCollection,
      navigationCollection,
      siteSettingsCollection,
    ],
  },
});
