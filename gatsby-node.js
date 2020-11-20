const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    return Promise.reject(result.errors);
  }
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((edge) => {
    if (!edge.node.frontmatter.path) return;
    const id = edge.node.id;
    createPage({
      path: edge.node.frontmatter.path,
      component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
      context: {
        id,
      },
    });
  });
};
