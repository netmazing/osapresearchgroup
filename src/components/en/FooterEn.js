import React from 'react';
import '../../css/footer.css';
import LogoUS from '../../images/logo-us.png';
import OsapLogoText from '../../images/osap-logo-tekst-ang.png';

const FooterEn = () => {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <div className="footer__icon">
                  <img src={LogoUS} alt="University of Szczecin logo"/>
                </div>
                <div className="footer__icon">
                    <img className="logoUS" src={OsapLogoText} alt="Organizational Psychology and Socjology logo"/>
                </div>
            </div>
            <p className="footer__info">Krakowska St. 71-79, 71-004 Szczecin</p>
            <p className="footer__copyrights">&copy; {new Date().getFullYear()} Organizational Sociology and Psychology Research Group. Created by <span className="site-author">Trojnacki & Draganek</span></p>
        </footer>
    )
}

export default FooterEn
