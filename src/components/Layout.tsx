import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "./Header";

type Props = {
  backgroundColor?: string;
  children: React.ReactNode;
};

const Layout = ({ backgroundColor, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={`flex flex-col w-full min-h-screen items-center ${backgroundColor}`}>
      <Header title={data.site.siteMetadata.title} />
      <main className="flex flex-col w-full px-6 py-4">
        <div className="w-full max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
