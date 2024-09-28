import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

type Props = {
  title: string;
  date: string;
  categories: string;
  slug: string;
  thumbnail: any;
};

const PostCard = ({ title, date, categories, slug, thumbnail }: Props) => {
  

  return (
    <Link to={slug}>
      <div className="relative w-full h-full rounded-2xl bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:text-blue-500 hover:-translate-y-1">
        {thumbnail && (
          <GatsbyImage 
            image={thumbnail} 
            alt={title} 
            className="w-full h-40 rounded-t-2xl bg-neutral-50"
          />
        )}
        <article className="p-6">
          <p className="min-h-4 text-xs font-semibold mb-2 text-gray-400">
            {categories}
          </p>
          <h2 className="text-xl font-bold mb-8">
            {title}
          </h2>
        </article>
        <p className="absolute bottom-6 left-6 text-xs font-semibold text-gray-400">
          {date}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
