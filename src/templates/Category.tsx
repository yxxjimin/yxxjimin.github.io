import * as React from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { getImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";
import Tab from "../components/Tab";
import Posts, { PostNode } from "../components/Posts";
import Tabs from "../components/Tabs";

type DataProps = {
  allMarkdownRemark: {
    nodes: PostNode[];
  };
};

type PageContext = {
  category: string;
  categoryRegex: string;
  categories: string[];
}

const Category = ({ data, pageContext }: PageProps<DataProps, PageContext>) => {
  const { category, categories } = pageContext;

  return (
    <Layout backgroundColor="bg-neutral-100">
      <Tabs
        selectedCategory={category}
        categories={categories}
      />
      <Posts 
        nodes={data.allMarkdownRemark.nodes} 
      />
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
      nodes {
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
`;