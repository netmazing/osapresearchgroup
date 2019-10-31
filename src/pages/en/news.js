import React from 'react';
import LayoutEn from '../../components/en/LayoutEn';
import '../../css/news.css';
import NewsListEn from '../../components/news/newsEn/NewsListEn';
import SEOen from '../../components/en/SEOen';

const newsEn = () => {
    return (
        <LayoutEn>
            <SEOen title="News" />
            <main className="news">
                <header className="news__header header">
                    <h1 className="news__title title">Conferences and Meetings</h1>
                </header>
                <div className="news__wrapper">
                    <NewsListEn />
                </div>
            </main>
        </LayoutEn>
    )
}

export default newsEn
