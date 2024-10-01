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
            categories: string;
          };
          fields: {
            slug: string;
          }
        };
        next: {
          fields: {
            slug: string;
          }
        };
        previous: {
          fields: {
            slug: string;
          }
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
              categories
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const edges = results.data?.allMarkdownRemark.edges;

  // Create category pages
  const categoryTemplate = path.resolve('./src/templates/Category.tsx');
  const categorySet = new Set<string>(['All']);
  
  edges?.forEach(({ node }) => {
    node.frontmatter.categories.split(' ').forEach((category) => {
      categorySet.add(category);
    });
  });

  const categories = [...categorySet];
  categories.forEach((category) => {
    createPage({
      path: `/${category.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        category: category,
        categoryRegex: `/${category === 'All' ? "" : category}/i`,
        categories: categories,
        // edges: edges?.filter(({ node }) => node.frontmatter.categories.includes(category)),
      },
    });
  });

  // Create blog posts
  const postTemplate = path.resolve('./src/templates/Template.tsx');
  edges?.forEach(({ node, next, previous }) => {
    createPage({
      path: path.join('post', node.fields.slug),
      component: postTemplate,
      context: {
        slug: node.fields.slug,
        nextSlug: next?.fields.slug ?? '',
        prevSlug: previous?.fields.slug ?? '',
      },
    });
  });
};
