import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Contents from '../includes/Contents';
import ContTitle from '../includes/ContTitle';
import ContContact from '../includes/ContContact';
import AboutCont from '../includes/AboutCont';
function Portfolio(){
    return (
        <>
            <Header />
            <Contents>     
                <ContTitle />
                <AboutCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}
export default Portfolio;