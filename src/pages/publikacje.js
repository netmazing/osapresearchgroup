import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import '../css/publications.css';
import SEO from '../components/SEO';

const publicationsPage = ({data}) => {
  const publications = data.publications.edges;
  return (
    <Layout>
        <SEO title="Publikacje" description="Arytukły naukowe, rozprawy, wyniki badań nad procesami, przemianami i relacjami w organizacjach" />
        <main className="publications">
          <header className="publications__header header">
            <h1 className="publications__title title">Publikacje</h1>
          </header>
          <ul className="publications__list">
            {publications.map(({node}) => {
              return (
                <li className="subsection publication" key={node.contentful_id}>
                  <h2 className="subsection__title publication__title">{node.tytul}</h2>
                  <p className="subsection__info publication__author">{node.autor}</p>
                  <p className="subsection__info publication__description">{node.opis.opis}</p>
                  <a href={node.link} className="btn publication__link">Czytaj więcej</a>
                </li>
              )
            })}
          </ul>
        </main>
    </Layout>
  )
}

export const getPublications = graphql`
  query {
    publications: allContentfulPublikacje {
      edges {
        node {
          tytul
          autor
          opis {
            opis
          }
          link
          contentful_id
        }
      }
    }
  }
`

export default publicationsPage
