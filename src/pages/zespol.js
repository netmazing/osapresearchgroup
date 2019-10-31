import React from 'react';
import Layout from '../components/Layout';
import "../css/team.css";
import SEO from '../components/SEO';

const team = () => {
    return (
        <Layout>
            <SEO title="Zespół" description="Członkowie Zespołu Badawczego Socjologii i Psychologii Organizacji" />
            <main className="team">
                <header className="team__header header">
                    <h1 className="team__title title">Nasz zespół</h1>
                </header>
            </main>
        </Layout>
    )
}

export default team
