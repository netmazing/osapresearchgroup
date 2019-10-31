import React from 'react';
import Layout from '../components/Layout';
import '../css/404.css';
import SEO from '../components/SEO';

const page404 = () => {
  return (
    <Layout>
      <SEO title="Błąd" />
      <div className="error-page">
        <div className="error-page__section">
          <p className="error-page__info">Nie ma takiej strony</p>
          <a href="/" className="error-page__btn">Strona główna</a>
        </div>
        
        <div className="error-page__section">
          <p className="error-page__info">There is no such page</p>
          <a href="/en" className="error-page__btn">Back to Homepage</a>
        </div>
      </div>
    </Layout>
  )
}

export default page404
