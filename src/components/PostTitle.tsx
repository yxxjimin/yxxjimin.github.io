import { Link } from "gatsby";
import * as React from "react";

type Props = {
  title: string;
  date: string;
  categories: string;
};

const PostTitle = ({ title, date, categories }: Props) => {
  return (
    <div className="mt-4 mb-10">
      <div className="flex space-x-2">
        {categories.split(" ").map((cat, idx) => (
          <Link to={`/${cat}`}>
            <p
              key={idx} 
              className="text-xs font-md text-white bg-blue-500 rounded-full px-2 py-1">
              {cat}
            </p>
          </Link>
        ))}
      </div>
      <h1 className="text-4xl font-bold my-4">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-400">
        {date}
      </p>
    </div>
  );
};

export default PostTitle;
