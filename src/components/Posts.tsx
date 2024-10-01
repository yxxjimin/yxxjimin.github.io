import * as React from "react";
import PostCard from "./PostCard";
import { getImage } from "gatsby-plugin-image";

export type PostNode = {
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
}

type Props = {
  nodes: PostNode[];
  // category: string;
};

const Posts = ({ nodes }: Props) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">
      {
        nodes.map((node) => (
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
  );
};

export default Posts;
