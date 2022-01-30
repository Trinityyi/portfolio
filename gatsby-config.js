module.exports = {
  siteMetadata: {
    title: `Isabelle Viktoria Maciohsek - Portfolio`,
    author: {
      name: `Isabelle Viktoria Maciohsek`,
      summary: `who lives and works in Athens building useful things.`,
      location: `Athens, Greece`,
      social: {
        email: `mailto:ivmaciohsek@gmail.com`,
        github: `https://github.com/Trinityyi`,
        linkedin: `https://www.linkedin.com/in/isabelle-viktoria-maciohsek-aa6bb1129/`
      }
    },
    description: `My personal portfolio and resume.`,
    siteUrl: `https://maciv.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js')
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
