import React from 'react';
import LayoutEn from '../../components/en/LayoutEn';
import '../../css/team.css';
import SEOen from '../../components/en/SEOen';

const teamEn = () => {
    return (
        <LayoutEn>
            <SEOen title="Team" />
            <main className="team">
                <header className="team__header header">
                    <h1 className="team__title title">Our Team</h1>
                </header>
            </main>
        </LayoutEn>
    )
}

export default teamEn
