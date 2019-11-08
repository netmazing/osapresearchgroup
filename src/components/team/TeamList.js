import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';

const getTeam = graphql`
    query{
        zespol:allContentfulZespol(sort:{fields:kolejnosc, order:ASC}){
        edges{
            node{
            osoba
            opis{
                opis
            }
            zdjecie{
                fluid{
                    ...GatsbyContentfulFluid
                    }
                }
            }
         }
        }
    }
`

const TeamList = () => {
    const {zespol} = useStaticQuery(getTeam);
    return (
        <ul className="team-list">
            {zespol.edges.map(({node}) => {
                return (
                    <li key={node.osoba} className="team-item">
                        <h2 className="team-item__name">{node.osoba}</h2>
                        <div className="team-item__img-wrapper">
                            <Image className="team-item__img" fluid={node.zdjecie.fluid} alt={node.osoba} />
                        </div>
                        <p className="team-item__info">{node.opis.opis}</p>

                    </li>
                )
            })}
        </ul>
    )
}

export default TeamList
