import * as React from "react"
import { graphql, Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      id: string;
      frontmatter: {
        date: string;
        title: string;
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
      <ul>
      {
        data.allMarkdownRemark.nodes.map((node) => (
          <article key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </ul>
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
        }
        fields {
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home</title>;
