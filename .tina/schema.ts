import { defineSchema, Schema, type Template } from 'tinacms';
import { slugify } from '../src/utils/fns';
import { heroBlock } from './blocks';

import { pages, posts } from './collections';

export const schema = defineSchema({
  collections: [
    {
      name: 'post',
      label: 'Posts',
      path: '_content/posts',
      format: 'md',
      ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      },
      ...posts,
    },
    {
      name: 'pages',
      label: 'Pages',
      path: '_content/pages',
      format: 'md',
      ui: {
        defaultItem: {
          title: 'This is the title of your page',
          description: 'This is the description of your page',
          backgroundColor: '#FFF1E4',
          color: '#4A5568',
          slug: 'Test Page',
          path: '/',
          showCta: true,
          showReviews: true,
        },
        // global: true,
        router: ({ document }) => {
          if (document._sys.filename === 'home') {
            return `/sandbox/home`;
          }
          const crumbs = document?._sys?.breadcrumbs;
          if (document._sys.filename === 'index') {
            return `/sandbox/${crumbs.splice(0, crumbs.length - 1).join('/')}/index`;
          }
          return `/sandbox/${crumbs.join('/')}`;
        },
      },
      ...pages,
    },
  ],
});
