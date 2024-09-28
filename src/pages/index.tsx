import * as React from "react"
import { graphql, Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { getImage } from "gatsby-plugin-image";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      id: string;
      frontmatter: {
        date: string;
        title: string;
        categories: string;
        thumbnail: any;
      };
      fields: {
        slug: string;
      };
    }[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout backgroundColor="bg-neutral-100">
      <h1 className="text-4xl font-bold my-4">
        Posts
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {
          data.allMarkdownRemark.nodes.map((node) => (
            <PostCard 
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              categories={node.frontmatter.categories}
              slug={node.fields.slug}
              thumbnail={getImage(node.frontmatter.thumbnail)}
            />
          ))
        }
      </div>
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
