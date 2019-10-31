import React from 'react';
import NewsCard from './NewsCard';
import {useStaticQuery, graphql} from 'gatsby';

const getNews = graphql`
    query{
        news:allContentfulWydarzenia(sort:{fields:data, order:DESC}){
        edges{
            node{
            nazwa
            data(formatString:"DD.MM.YYYY")
            id:contentful_id
            plakat{
                fluid{
                ...GatsbyContentfulFluid
                }
             }
            slug
             }
            }
        }
    }
`

const NewsList = () => {
    const {news} = useStaticQuery(getNews);
    return (
        <ul className="news__list">
            {news.edges.map(({node}) => {
                return <NewsCard key={node.id} news={node} />
            })}
        </ul>
    )
}

export default NewsList
