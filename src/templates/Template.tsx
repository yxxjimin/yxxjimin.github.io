import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

type DataProps = {
  data: {
    node: {
      id: string;
      html: string;
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
  };
};

const Template = ({ data }: DataProps) => {
  return (
    <Layout backgroundColor="bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-blue-500">
          Title: {data.node.frontmatter.title}
        </h1>
        <div 
          className="markdown-html"
          dangerouslySetInnerHTML={{ __html: data.node.html }} 
        />
      </div>
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
      }
      fields {
        slug
      }
    }
  }
`;
