module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "exploration",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "d24hV-WZ21qNRIMqiljBSKeE8q4n6eqFZbP6mL0-oKo",
        spaceId: "",
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-FPV6XZM1SE",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
