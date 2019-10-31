const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;

    const {data} = await graphql(`
        query {
            news: allContentfulWydarzenia {
             edges {
                node {
                  slug
                }
              }
            }
         }
        `)

       data.news.edges.forEach(({node}) => {
            createPage({
                path: `/wydarzenia/${node.slug}`,
                component: path.resolve('./src/templates/news-template.js'),
                context: {
                    slug: node.slug,
                }
            })
       }) 

}