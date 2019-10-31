import React from 'react';
import NavbarEn from './NavbarEn';
import FooterEn from './FooterEn';
import '../../css/layout.css';

const LayoutEn = ({children}) => {
    return (
        <>
        <NavbarEn />
        {children}
        <FooterEn />
        </>
    )
}

export default LayoutEn
