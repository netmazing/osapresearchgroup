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

          <section className="subsection">
            <h3 className="subsection__title">Organization and Management</h3>
            <p className="subsection__info">In 2007 I was asked to prepare a chapter for the jubilee book of prof. Stanisław Kosiński. It was an honor for me. I wrote a text titled "Hierarchy of master-student relations and heterarchy of research networks - remarks on contemporary scholars". New ones were coming. And although in 2015 I created the Department of Sociology of Organization and Management, I knew that it would not be a rigid structure.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Activity</h3>
            <p className="subsection__info">Within less than five years, together with the team, we organized eight nationwide conferences, and published several important - as we think - publications. Also in 2015, I started studying psychology and established scientific contacts with representatives of this discipline. Today we are a team of Sociology and Psychology of Organizations - a research group in the new structure of the University.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Continuity and Change</h3>
            <p className="subsection__info">"Continuity and change" - as emphasized by prof. Stefan Nowak, followed by prof. Kazimierz Doktór. Innovation and tradition - because you can't explore new lands without a compass. In order to conduct modern research, freedom, flexibility and quick exchange in the communication network are necessary, but in order to conduct significant, important research, it is necessary to root in values, responsibility, sensitivity - this is what we learn from masters and may this intergenerational process in the academy continue!</p>
            <span className="about__author">dr. hab Agnieszka Kołodziej-Durnaś prof. US.</span>
            
            <div className="actions__links">
            <AniLink className="about__link btn" fade to="/en/publications">Articles</AniLink>
            <AniLink className="about__link btn" fade to="/en/news">News</AniLink>
          </div>
          </section>
          
        </div>
        </article>

        <section className="team">
            <header className="team__header header">
                <h2 className="team__title title">Our Team</h2>
            </header>
            <TeamEnList />
          </section>

      </main>

    </LayoutEn>
    </div>
  )
}

export default indexEn

