export const routers = {
  pages: ({ document }) => {
    if (document._sys.filename === 'home') {
      return `/home`;
    }
    const crumbs = document?._sys?.breadcrumbs;
    return `/${crumbs.join('/')}`;
  },
  // 5886
  routes: ({ document }) => {
    // if (document._sys.filename === 'home') {
    //   return `/sandbox/home`;
    // }
    console.log('document', JSON.stringify(document, null, 2));
    const crumbs = document?._sys?.breadcrumbs;
    return `/route/${crumbs.join('/')}`;
  },
  categories: ({ document }) => {
    const crumbs = document?._sys?.breadcrumbs;
    return `/services/${crumbs.join('/')}`;
  },
};
