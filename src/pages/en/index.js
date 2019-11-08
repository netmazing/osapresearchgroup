import React from 'react';
import LayoutEn from '../../components/en/LayoutEn';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import '../../css/index.css';
import '../../css/team.css';
import SEOen from '../../components/en/SEOen';
import TeamEnList from '../../components/team/TeamEnList'

const indexEn = () => {
  return (
    <div className="homepage">
    <LayoutEn>
      <SEOen />
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title site-title">Organizational Sociology and Psychology</h1>
          <p className="hero__description">Research group</p>
          <div className="hero__links">
            <a href="http://usz.edu.pl/" className="hero__link">University of Szczecin</a>
            <a href="http://wh.usz.edu.pl/" className="hero__link">
            Faculty of Social Sciences</a>
          </div>
        </div>
      </header>

      <main>
        <article id="about" className="about">
          <div className="about__inner">
          <h2 className="about__title">Organization as a Research Area</h2>
          <p className="about__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat, qui nam illo fugit exercitationem repudiandae maiores iure ullam obcaecati!</p>

          <section className="subsection">
            <h3 className="subsection__title">Processes and Transformations</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Structure</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Interpersonal Relations</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Peter Piper picked a peck of pickled peppers</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>

            <div className="actions__links">
            <AniLink className="about__link btn" fade to="/en/publications">Read our articles</AniLink>
            <AniLink className="about__link btn" fade to="/en/news">Check what we organize</AniLink>
          </div>
          </section>
          
        </div>
        </article>

        <section className="team">
            <header className="team__header header">
                <h2 className="team__title title">Nasz zespół</h2>
            </header>
            <TeamEnList />
          </section>

      </main>

    </LayoutEn>
    </div>
  )
}

export default indexEn

