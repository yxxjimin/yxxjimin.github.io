import * as React from "react";
import Tab from "./Tab";

type Props = {
  selectedCategory?: string | null;
  categories: string[];
}

const Tabs = ({ selectedCategory = null, categories }: Props) => {
  return (
    <div className="flex flex-wrap w-full justify-center space-x-2 mb-4">
      {categories.map((cat) => (
        <Tab title={cat} selected={cat === selectedCategory} />
      ))}
    </div>
  );
};

export default Tabs;
