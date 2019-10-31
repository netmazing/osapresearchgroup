import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import '../css/index.css';
import '../css/about.css';
import '../css/actions.css';
import SEO from '../components/SEO';

const index = ({data}) => {
  return (
    <div className="homepage">
    <Layout>
      <SEO />
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title site-title">{data.site.siteMetadata.title}</h1>
          <p className="hero__description">Zespół badawczy</p>
          <div className="hero__links">
            <a href="http://usz.edu.pl/" className="hero__link">Uniwersytet Szczeciński</a>
            <a href="http://wh.usz.edu.pl/" className="hero__link">Wydział Nauk Społecznych</a>
          </div>
        </div>
      </header>
      <main>
        <article id="about" className="about">
          <div className="about__inner">
          <h2 className="about__title">Organizacja jako obszar badań</h2>

          <section className="subsection">
            <h3 className="subsection__title">Organizacja i zarządzanie</h3>
            <p className="subsection__info">W 2007 roku zostałam poproszona o przygotowanie rozdziału do księgi jubileuszowej prof. Stanisława Kosińskiego. Był to dla mnie zaszczyt. Napisałam tekst pod tytułem „Hierarchia relacji mistrz-uczeń a heterarchia sieci badawczych - uwagi o współczesnych uczonych”. Nadchodziło nowe. I choć w roku 2015 utworzyłam Zakład Socjologii Organizacji i Zarządzania wiedziałam, że nie będzie to sztywna struktura.</p>
            <a href="https://www.researchgate.net/publication/317826011_Hierarchia_relacji_mistrz-uczen_a_heterarchia_sieci_badawczych_-_uwagi_o_wspolczesnych_uczonych" className="btn about__btn">Czytaj artykuł</a>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Działalność</h3>
            <p className="subsection__info">W ciągu niespełna pięciu lat wraz z zespołem zorganizowaliśmy osiem ogólnopolskich konferencji, wydaliśmy kilka ważnych – jak nam się wydaje – publikacji. Również w roku 2015 rozpoczęłam studia psychologiczne i nawiązałam kontakty naukowe z przedstawicielami tej dyscypliny. Dziś tworzymy zespół Socjologii i Psychologii Organizacji – grupę badawczą w nowej strukturze Uniwersytetu.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Ciągłość i zmiana</h3>
            <p className="subsection__info">„Ciągłość i zmiana” – jak podkreślał prof. Stefan Nowak, a za nim prof. Kazimierz Doktór. Innowacja i tradycja – bo nie da się eksplorować nowych krain bez kompasu. Aby prowadzić nowoczesne badania konieczna jest swoboda, elastyczność, szybka wymiana w sieci komunikacji, ale aby prowadzić badania znaczące, ważne, potrzebne jest zakorzenienie w wartościach, odpowiedzialność, wrażliwość – tego uczymy się od mistrzów i oby ten międzypokoleniowy proces w akademii trwał nadal!</p>
            <span className="about__author">dr. hab Agnieszka Kołodziej-Durnaś prof. US.</span>
          </section>

        </div>
        </article>

        <section className="actions">
          <h2 className="actions__title">Nasza działalność</h2>
          <ul className="actions__list">
            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>

            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>

            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>

            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>
          </ul>

          <div className="actions__links">
            <AniLink className="actions__btn btn" fade to="/publikacje">Poczytaj nasze artykuły</AniLink>
            <AniLink className="actions__btn btn" fade to="/wydarzenia">Zobacz, co organizujemy</AniLink>
          </div>
        </section>

      </main>
    </Layout>
    </div>

  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default index

