import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `yxxjimin.github.io`,
    siteUrl: `https://yxxjimin.github.io/`,
    author: `Jimin Yoo`,
    github: `https://github.com/yxxjimin`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          }
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
  ],
};

export default config;
