import React from 'react';
import NewsCardEn from './NewsCardEn';
import {useStaticQuery, graphql} from 'gatsby';

const getNewsEn = graphql`
query {
    newsEn: allContentfulNews(sort:{fields:date, order:DESC}){
      edges{
        node{
          title
          date(formatString:"MMMM Do, YYYY")
          id:contentful_id
          picture{
            fluid{
                ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const NewsListEn = () => {
    const {newsEn} = useStaticQuery(getNewsEn);
    return (
        <ul className="news__list">
            {newsEn.edges.map(({node}) => {
                return <NewsCardEn key={node.id} newsEn={node} />
            })}
        </ul>
    )
}

export default NewsListEn
