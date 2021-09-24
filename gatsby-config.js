module.exports = {
  siteMetadata: {
    siteUrl: "http://www.nulligma.com",
    title: "Nulligma",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
