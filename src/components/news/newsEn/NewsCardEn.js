import React from 'react';
import Image from 'gatsby-image';
import '../../../css/news.css'

const NewsCardEn = ({newsEn}) => {
    const {title, date, picture} = newsEn;
    return (
        <li className="news__card">
            <h2 className="card__title">{title}</h2>
            <div className="card__image-wrapper">
                <Image className="card__image" fluid={picture.fluid} alt={title} />
                <p className="card__info">{date}</p>
            </div>
        </li>
    )
}

export default NewsCardEn