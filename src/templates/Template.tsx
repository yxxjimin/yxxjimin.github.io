import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import PostTitle from "../components/PostTitle";

type NavNode = {
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
  };
};

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
    next: NavNode;
    prev: NavNode;
  };
};

const NavPost = ({ node, prev }: { node: NavNode, prev: boolean }) => {
  return (
    <Link to={`/post${node.fields.slug}`}>
      <div className="h-full p-6 space-y-4 rounded-xl bg-neutral-100">
        <p className="text-neutral-500">
          {prev ? "이전 글": "다음 글"}
        </p>
        <p className="text-xl font-semibold">
          {node.frontmatter.title}
        </p>
      </div>
    </Link>
  );
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
      <div className="grid mt-10 gap-4 grid-cols-2 items-stretch">
        {data.next ? (<NavPost node={data.next} prev={true} />) : (<p></p>)}
        {data.prev ? (<NavPost node={data.prev} prev={false} />) : (<p></p>)}
      </div>
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
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
    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
