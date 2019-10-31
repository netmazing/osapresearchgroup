import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import '../css/news-template.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO';

const NewsTemplate = ({data}) => {
    const {nazwa, miejsce, opis:{json}} = data.news;
    
    return (
        <Layout>
          <SEO title={nazwa} />
          <main className="news-page">
            <h1 className="news-page__title title">{nazwa}</h1>
            <div className="news-page__info">
              <p className="info__text">{data.news.data}</p>
              <p className="info__text">{miejsce}</p>
            </div>
            <div className="news-page__rich-text">
              {documentToReactComponents(json)}
            </div>
          </main>
        </Layout>
    )
}

export const query = graphql`
  query getNews($slug: String!) {
    news: contentfulWydarzenia(slug: { eq: $slug }) {
      nazwa
      data(formatString: "DD. MM. YYYY")
      miejsce
      opis {
        json
      }
    }
  }
`

export default NewsTemplate
