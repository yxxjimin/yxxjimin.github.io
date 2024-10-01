import * as React from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { getImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";

type DataProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          date: string;
          title: string;
          categories: string;
          thumbnail: any;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

type PageContext = {
  category: string;
  categoryRegex: string;
  categories: string;
}

const Category = ({ data, pageContext }: PageProps<DataProps, PageContext>) => {
  const { category, categories } = pageContext;

  return (
    <Layout backgroundColor="bg-neutral-100">
      <h1 className="text-4xl font-bold my-4">
        {category}
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {
          data.allMarkdownRemark.edges.map((edge) => (
            <PostCard 
              title={edge.node.frontmatter.title}
              date={edge.node.frontmatter.date}
              categories={edge.node.frontmatter.categories}
              slug={edge.node.fields.slug}
              thumbnail={getImage(edge.node.frontmatter.thumbnail)}
            />
          ))
        }
      </div>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query($categoryRegex: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { regex: $categoryRegex } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
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
      }
    }
  }
`;