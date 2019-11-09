import React from 'react';
import LayoutEn from '../../components/en/LayoutEn';
import '../../css/projects.css';
import {graphql} from 'gatsby';
import SEOen from '../../components/en/SEOen';

const projectsEn = ({data}) => {
    const projectsEn = data.projects.edges;
    return (
        <LayoutEn>
            <SEOen title="Research projects" />
            <main className="projects">
                <header className="projects__header header">
                    <h1 className="projects__title title">
                    Research projects</h1>
                </header>

                <ul className="projects-list">
                    {projectsEn.map(({node}) => {
                        return (
                            <li className="project-item" key={node.title}>
                                <h2 className="subsection__title project-item__title">{node.title}</h2>
                                <p className="project-item__description">{node.description.description}</p>
                                <p className="project-item__subtitle">Methodology</p>
                                <p className="project-item__methodology">{node.methodology.methodology}</p>
                                <p className="project-item__subtitle">Researchers</p>
                                <p className="project-item__researchers">{node.researchers}</p>
                            </li>
                        )
                        })}            
                </ul>

            </main>
        </LayoutEn>
    )
}

export const getProjectsEn = graphql`
query{
    projects:allContentfulProjects(sort:{fields:date, order:DESC}){
      edges{
        node{
          title
          description{
            description
          }
          methodology{
            methodology
          }
          researchers
        }
      }
    }
  }
`

export default projectsEn
