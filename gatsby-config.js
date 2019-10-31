require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Socjologia i psychologia organizacji`,
    description: `Interdyscyplinarny zespół badawczy`,
    author: `Trojnacki & Draganek`,
    siteUrl: `https://sipo.netlify.com`,
    titleEn: `Organizational Socjology and Psychology`,
    descriptionEn: `Interdisciplinary Research Group`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Socjologia i Psychologia Organizacji`,
        short_name: `SIPO`,
        description: `Interdyscyplinarny zespół badawczy`,
        lang: `pl`,
        start_url: `/`,
        background_color: `rgb(1, 135, 145)`,
        theme_color: `rgb(1, 135, 145)`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Organizational Socjology and Psychology`,
            short_name: `OSAP`,
            description: `Interdisciplinary Research Group`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sipo.netlify.com',
        sitemap: 'https://sipo.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
  ],
}
