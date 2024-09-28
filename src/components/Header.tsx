import { Link } from "gatsby";
import * as React from "react";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className="flex justify-center w-full px-6 border-b bg-white">
      <div className="flex w-full max-w-4xl h-16 justify-between">
        <header className="flex items-center text-2xl font-semibold">
          <Link to="/">{title}</Link>
        </header>
        <nav>
          <ul className="flex space-x-4 h-full items-center font-light">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
