import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import '../css/contact.css';
import SEO from '../components/SEO';

const contact = () => {
    return (
        <Layout>
            <SEO title="Kontakt" desccription="Skontaktuj się z nami"/>
            <main className="contact">
                    <h1 className="contact__title title">Skontaktuj się z nami</h1>
                    <div className="contact__wrapper">
                    <address className="contact__data">
                        <p className="data__title data-field">Socjologia i psychologia organizacji<br/>Dr hab. Agnieszka Kołodziej-Durnaś prof. US</p>
                        <a href="mailto:kolodziej.durnas@gmail.com" className="data__email data-field">
                            <FaEnvelope  className="data__icon icon-envelope" />
                            <span>kolodziej.durnas@gmail.com</span></a>
                        <a className="data__address data-field" href="https://www.google.com/maps/place/Wydzia%C5%82+Humanistyczny+Uniwersytetu+Szczeci%C5%84skiego/@53.4027714,14.4909611,14.5z/data=!4m5!3m4!1s0x47aa08cca39e4089:0x7c140cf71d3a60e4!8m2!3d53.4038816!4d14.4972036">
                            <FaMapMarkerAlt className="data__icon icon-location" />
                            <span>Uniwersytet Szczeciński<br/>ul. Krakowska 71-79, 71-004 Szczecin</span>
                        </a>
                    </address>
                    <ContactForm />
                    </div>
            </main>
        </Layout>
    )
}

export default contact
