import * as React from "react"
import { graphql, Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout";
import Posts, { PostNode } from "../components/Posts";
import Tabs from "../components/Tabs";

type DataProps = {
  allMarkdownRemark: {
    nodes: PostNode[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const categorySet = new Set<string>(['All']);
  
  data.allMarkdownRemark.nodes.forEach((node) => {
    node.frontmatter.categories.split(' ').forEach((category) => {
      categorySet.add(category);
    });
  });

  return (
    <Layout backgroundColor="bg-neutral-100">
      <Tabs
        selectedCategory={"All"}
        categories={[...categorySet]}
      />
      <Posts 
        nodes={data.allMarkdownRemark.nodes} 
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
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

export const Head: HeadFC = () => <title>Home</title>;
