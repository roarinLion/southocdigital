// support for .env, .env.development, and .env.production
require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "Gatsby Contentful Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Contentful",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },

    //google analytics integration for seo
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-JMN9JS06P4",

        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
};
