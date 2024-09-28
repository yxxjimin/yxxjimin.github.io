import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import PostTitle from "../components/PostTitle";

type DataProps = {
  data: {
    node: {
      id: string;
      html: string;
      frontmatter: {
        title: string;
        date: string;
        categories: string;
      };
      fields: {
        slug: string;
      };
    };
  };
};

const Template = ({ data }: DataProps) => {
  return (
    <Layout backgroundColor="bg-white" postContent={true}>
      <PostTitle 
        title={data.node.frontmatter.title} 
        date={data.node.frontmatter.date}
        categories={data.node.frontmatter.categories}
      />
      <div 
        className="markdown-html"
        dangerouslySetInnerHTML={{ __html: data.node.html }} 
      />
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query($slug: String) {
    node: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        categories
      }
      fields {
        slug
      }
    }
  }
`;
