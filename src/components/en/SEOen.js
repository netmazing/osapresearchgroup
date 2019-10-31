import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const getData = graphql`
query {
    site {
      siteMetadata {
        siteTitleEn:titleEn
        siteDescriptionEn:descriptionEn
      }
    }
  } 
`

const SEO = ({title, description}) => {
    const {site} = useStaticQuery(getData);
    const {siteTitleEn, siteDescriptionEn} = site.siteMetadata;
    
    return (
        <Helmet title={title ? `${title} - ${siteTitleEn}` : `${siteTitleEn}`} htmlAttributes={{lang: "en"}}>
            <meta name="description"  content={description || siteDescriptionEn} />
        </Helmet>
    )
}

export default SEO
