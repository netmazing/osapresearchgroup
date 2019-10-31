import React from 'react';
import LayoutEn from '../../components/en/LayoutEn';
import {graphql} from 'gatsby';
import '../../css/publications.css';
import SEOen from '../../components/en/SEOen';

const publicationsPageEn = ({data}) => {
  const publications = data.publicationsEn.edges;
  return (
    <LayoutEn>
      <SEOen title="Publications" />
      <main className="publications">
        <header className="publications__header header">
          <h1 className="publications__title title">Publications</h1>
        </header>
          <ul className="publications__list">
            {publications.map(({node}) => {
              return (
                <li className="subsection publication" key={node.contentful_id}>
                  <h2 className="subsection__title publication__title">{node.title}</h2>
                  <p className="subsection__info publication__author">{node.author}</p>
                  <p className="subsection__info publication__description">{node.description.description}</p>
                  <a href={node.link} className="btn publication__link">Read more</a>
                </li>
              )
            })}
          </ul>
        </main>
    </LayoutEn>
  )
}

export const getPublicationsEn = graphql`
  query {
    publicationsEn: allContentfulPublications{
      edges{
        node{
          title
          author
          description{
            description
          }
          link
          contentful_id
        }
      }
    }
  }
`

export default publicationsPageEn
