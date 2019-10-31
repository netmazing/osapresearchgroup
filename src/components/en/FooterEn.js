import React from 'react';
import '../../css/footer.css'

const FooterEn = () => {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <div className="footer__icon">Logo</div>
                <div className="footer__icon">Logo</div>
                <div className="footer__icon">Logo</div>
            </div>
            <p className="footer__info">Krakowska St. 71-79, 71-004 Szczecin</p>
            <p className="footer__copyrights">&copy; {new Date().getFullYear()} Organizational Sociology and Psychology Research Group. Created by <span className="site-author">Trojnacki & Draganek</span></p>
        </footer>
    )
}

export default FooterEn
