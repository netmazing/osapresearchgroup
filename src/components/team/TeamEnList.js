import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';

const getTeamEn = graphql`
    query{
        team:allContentfulTeam(sort:{fields:order, order:ASC}){
        edges{
            node{
            person
            description{
                description
            }
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

const TeamEnList = () => {
    const {team} = useStaticQuery(getTeamEn);
    return (
        <ul className="team-list">
            {team.edges.map(({node}) => {
                return (
                    <li key={node.person} className="team-item">
                        <h2 className="team-item__name">{node.person}</h2>
                        <div className="team-item__img-wrapper">
                            <Image className="team-item__img" fluid={node.picture.fluid} alt={node.person} />
                        </div>
                        <p className="team-item__info">{node.description.description}</p>

                    </li>
                )
            })}
        </ul>
    )
}

export default TeamEnList