import { graphql } from "gatsby";
import * as React from "react";

type DataProps = {
  data: {
    node: {
      id: string;
      html: string;
      fields: {
        slug: string;
      };
    };
  };
};

const Template = ({ data }: DataProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.node.html }} />
  );
};

export default Template;

export const query = graphql`
  query($slug: String) {
    node: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
    }
  }
`;
