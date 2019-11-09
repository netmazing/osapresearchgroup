import React from 'react';
import Layout from '../components/Layout';
import "../css/projects.css";
import {graphql} from 'gatsby';
import SEO from '../components/SEO';

const projects = ({data}) => {
    const projects = data.projekty.edges;
    return (
        <Layout>
            <SEO title="Projekty badawcze" description="Projekty badawcze, które realizuje zespół socjologii i psychologii organizacji" />
            <main className="projects">
                <header className="projects__header header">
                    <h1 className="projects__title title">Projekty badawcze</h1>
                </header>

                <ul className="projects-list">
                    {projects.map(({node}) => {
                        return (
                            <li className="project-item" key={node.nazwa}>
                                <h2 className="subsection__title project-item__title">{node.nazwa}</h2>
                                <p className="project-item__description">{node.opis.opis}</p>
                                <p className="project-item__subtitle">Metodologia</p>
                                <p className="project-item__methodology">{node.metodologia.metodologia}</p>
                                <p className="project-item__subtitle">Badacze</p>
                                <p className="project-item__researchers">{node.badacze}</p>
                            </li>
                        )
                        })}            
                </ul>

            </main>
        </Layout>
    )
}

export const getProjects = graphql`
query{
    projekty:allContentfulProjekty(sort:{fields:data, order:DESC}){
      edges{
        node{
          nazwa
          opis{
            opis
          }
          metodologia{
            metodologia
          }
          badacze
        }
      }
    }
  }
`

export default projects
