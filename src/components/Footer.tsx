import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          github
        }
      }
    }
  `);

  return (
    <footer className="flex w-full h-16 mt-auto justify-center items-center">
      <p className="max-w-4xl text-center">
        © {new Date().getFullYear()}
        &nbsp;
        <a 
          className="font-medium text-blue-500"
          href={data.site.siteMetadata.github}
        >
          {data.site.siteMetadata.author}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
