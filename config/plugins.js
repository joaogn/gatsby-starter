const path = require("path")

module.exports = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 2048,
          },
        },
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            destinationDir: "static",
          },
        },
      ],
    },
  },
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.resolve(__dirname, "..", "static", "img"),
      name: "uploads",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.resolve(__dirname, "..", "src", "pages"),
      name: "pages",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.resolve(__dirname, "..", "src", "assets"),
      name: "images",
    },
  },
  {
    resolve: "gatsby-plugin-netlify-cms",
    options: {
      modulePath: path.resolve(__dirname, "..", "src", "cms", "cms.js"),
    },
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `gray`,
      showSpinner: false,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Roboto`,
          variants: [`300`, `500`, `700`],
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `joaogn`,
      short_name: `joaogn`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `gray`,
      display: `standalone`,
      icon: `src/assets/icon.png`, //512x512
    },
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: process.env.NODE_ENV !== "production",
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: path.resolve(__dirname, "..", "src", "pages"),
      ignore: [`**/styles.js`],
    },
  },
  `gatsby-plugin-offline`,
  "gatsby-plugin-netlify",
]
