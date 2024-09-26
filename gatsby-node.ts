import { graphql, type GatsbyNode } from "gatsby";
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

type GraphQLResult = {
  data?: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
            date: string;
          };
          fields: {
            slug: string;
          }
        };
        next: {
          id: string;
        };
        previous: {
          id: string;
        };
      }[];
    };
  };
  errors?: any;
};

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `contents` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions;

  const results: GraphQLResult = await graphql(`
    {
      allMarkdownRemark(sort: {frontmatter:{ date:DESC }}, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const postTemplate = path.resolve('./src/templates/Template.tsx');
  results.data?.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        slug: node.fields.slug,
        nextSlug: next?.id || null,
        prevSlug: previous?.id || null,
      },
    });
  });
};
