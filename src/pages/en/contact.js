import React from 'react';
import LayoutEn from '../../components/en/LayoutEn';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactFormEn from '../../components/en/ContactFormEn';
import '../../css/contact.css';
import SEOen from '../../components/en/SEOen';

const contactEn = () => {
    return (
        <LayoutEn>
            <SEOen title="Contact" />
            <main className="contact">
                    <h1 className="contact__title title">Contact Us</h1>
                    <div className="contact__wrapper">
                    <address className="contact__data">
                        <p className="data__title data-field">Organizational Socjology and Psychology<br/>Dr hab. Agnieszka Kołodziej-Durnaś prof. US</p>
                        <a href="mailto:kolodziej.durnas@gmail.com" className="data__email data-field">
                            <FaEnvelope  className="data__icon icon-envelope" />
                            <span>kolodziej.durnas@gmail.com</span></a>
                        <a className="data__address data-field" href="https://www.google.com/maps/place/Wydzia%C5%82+Humanistyczny+Uniwersytetu+Szczeci%C5%84skiego/@53.4027714,14.4909611,14.5z/data=!4m5!3m4!1s0x47aa08cca39e4089:0x7c140cf71d3a60e4!8m2!3d53.4038816!4d14.4972036">
                            <FaMapMarkerAlt className="data__icon icon-location" />
                            <span>University of Szczecin<br/>Krakowska St. 71-79, 71-004 Szczecin</span>
                        </a>
                    </address>
                    <ContactFormEn />
                    </div>
            </main>
        </LayoutEn>
    )
}

export default contactEn
