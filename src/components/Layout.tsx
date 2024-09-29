import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  backgroundColor?: string;
  postContent?: boolean;
  children: React.ReactNode;
};

const Layout = ({ backgroundColor, postContent = false, children }: Props) => {
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
        <div className={`w-full ${postContent ? "max-w-2xl" : "max-w-4xl"} mx-auto`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
