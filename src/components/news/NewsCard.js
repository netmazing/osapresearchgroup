import React from 'react';
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import '../../css/news.css'

const NewsCard = ({news}) => {
    const {nazwa, data, slug, plakat} = news;
    return (
        <li className="news__card">
            <h2 className="card__title">{nazwa}</h2>
            <div className="card__image-wrapper">
                <Image className="card__image" fluid={plakat.fluid} alt={nazwa} />
                <p className="card__info">{data}</p>
            </div>
            <Link className="card__btn btn" to={`/wydarzenia/${slug}`}>Czytaj więcej</Link>
        </li>
    )
}

export default NewsCard
