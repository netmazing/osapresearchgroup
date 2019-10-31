import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const getData = graphql`
query {
    site {
      siteMetadata {
        siteTitle:title
        siteDescription:description
      }
    }
  } 
`

const SEO = ({title, description}) => {
    const {site} = useStaticQuery(getData);
    const {siteTitle, siteDescription} = site.siteMetadata;
    
    return (
        <Helmet title={title ? `${title} - ${siteTitle}` : `${siteTitle}`} htmlAttributes={{lang: "pl"}}>
            <meta name="description"  content={description || siteDescription} />
        </Helmet>
    )
}

export default SEO
