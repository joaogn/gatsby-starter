const path = require("path")

module.exports = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
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
]
