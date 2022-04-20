// import React from "react";
// import Header from "../layout/Header";
// import Contents from "../layout/Contents";
// import Title from "../layout/Title";
// import ReferCont from "../includes/ReferCont";
// import Footer from "../layout/Footer";

// function Reference(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <Title title={["HTML", "REFERENCE"]} />
//                 <ReferCont />
//                 <ContContact />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

// export default Reference;

import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Footer from "../layout/Footer";
import ContContact from '../layout/Contact';
function Reference(){
    return (
        <>
            <Header color="light"/>
            <Contents>
                <Title title={[ "REFERENCE", "book"]} color="light" />
                <ReferCont color="light" />
                <ContContact />
            </Contents>

            <Footer  color="light"/>
        </>
    )
}
export default Reference;