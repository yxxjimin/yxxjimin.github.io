import { Link } from "gatsby";
import * as React from "react";

type Props = {
  title: string;
  selected: boolean;
};

const Tab = ({ title, selected }: Props) => {
  return (
    <Link to={`/${title.toLowerCase()}`}>
      <div className={`my-2 px-4 py-2 rounded-xl ${selected ? "bg-blue-500" : ""}`}>
        <p className={`font-normal text-${selected ? "white" : "neutral-500"} ${selected ? "" : "hover:text-neutral-700"}`}>
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Tab;
