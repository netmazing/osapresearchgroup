import React, {useState} from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../../css/navbar.css";
import linksEn from '../../constants/linksEn';
import OsapLogoGraph from '../../images/osap-logo-text-ang-small.png';

const NavbarEn = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  }
    return (
        <nav className="navbar">
          <div className="menu">
            <div className="menu__header">
              <AniLink fade to='/en' className="menu__logo">
              <img className="logo__img" src={OsapLogoGraph} alt="osap.usz.edu.pl"/>
              </AniLink>
              <button type="button" aria-label="menu" title="menu" className={isOpen ? "menu__hamburger menu__hamburger--open" : "menu__hamburger"} onClick={toggleNav}>
                <span className="hamburger__box">
                  <span className="hamburger__inner"></span>
                </span>
              </button>
            </div>

            <ul className={isOpen ? "menu__links menu__links--open" : "menu__links"}>
              {linksEn.map((link, index) => {
                return(
                  <li className="menu__item" key={index}><AniLink className="menu__link" activeClassName="menu__link--active" fade to={link.path}>
                  {link.name}
                  </AniLink></li>
                )
              })}
            </ul>

            <ul className={isOpen ? "select-language select-language--open": "select-language"}>
                <AniLink className="language-option" fade to="/" >pl</AniLink>
                <AniLink className="language-option" fade to="/en">en</AniLink>
            </ul>

          </div> 
        </nav>
    )
}

export default NavbarEn
