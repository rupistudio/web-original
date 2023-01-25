import { defineSchema, type Template } from 'tinacms';
import { heroBlock, pagesTemplate } from './blocks';

export const schema = defineSchema({
  collections: [
    {
      name: 'page_sections',
      label: 'Pages Sections',
      path: 'content/pages',
      format: 'json',
      ui: {
        // global: true,
        router: ({ document }) => {
          if (document._sys.filename === 'home') {
            return `/sandbox/tina`;
          }
          return undefined;
        },
      },
      fields: [
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Blocks',
          ui: {
            visualSelector: true,
          },
          templates: [pagesTemplate, heroBlock] as Template[],
        },
      ],
    },

    {
      name: 'post',
      label: 'Posts',
      path: 'content/posts',
      format: 'md',
      ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      },
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
          isTitle: true,
          required: true,
        },
        {
          type: 'rich-text',
          name: 'body',
          label: 'Body',
          isBody: true,
        },
      ],
    },
  ],
});
