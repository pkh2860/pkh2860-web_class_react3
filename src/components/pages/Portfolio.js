import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Contents from '../includes/Contents';
import ContTitle from '../includes/ContTitle';
import ContContact from '../includes/ContContact';
import PortCont from '../includes/PortCont';
function Portfolio(){
    return (
        <>
            <Header />
            <Contents>     
                <ContTitle title={["portfolio", "Site"]} />
                <PortCont />
                <ContContact />

            </Contents>
            <Footer />
        </>
    )
}
export default Portfolio;