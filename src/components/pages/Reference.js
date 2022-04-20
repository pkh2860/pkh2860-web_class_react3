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
import Loading from "../basics/Loading"
import { gsap } from "gsap";
// function Reference(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents>
//                 <Title title={[ "REFERENCE", "book"]} color="light" />
//                 <ReferCont color="light" />
//                 <ContContact />
//             </Contents>

//             <Footer  color="light"/>
//         </>
//     )
// }

class Reference extends React.Component {
    state = {
        isLoading: true,
    }

    ReferAnimation = () => {
        setTimeout(()=>{
            gsap.to("#header", {
                duration:1.0,
                top: 0,
            });
            gsap.to("#footer", {
                duration:0.8,
                bottom: 0,
                // delay: 0.2,
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay: 1.0,
                ease: "circ.out"
            })
            gsap.to(".cont__title em", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay: 1.3,
                ease: "circ.out"
            })
            gsap.to(".refer__inner", {
                duration: 1.0,
                // x:0,
                y:0,
                opacity:1,
                delay: 1.5,
                ease: "circ.out"
            })
        }, 1000)
    }


    componentDidMount(){    //3초뒤에 로딩이 끝난 후 메인 화면이 나옴
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            this.setState({isLoading:false})    //true 실행 3초 후 false로 변경
            this.ReferAnimation()
        }, 3000)
    }

    render(){
        const {isLoading} = this.state  //this.state = true

    return (
        <>          
             {isLoading ? ( //true = Loading 실행 false = header~ 실행
            <Loading color="light" />
            ) : (
                <>
                    <Header color="light"/>
                    <Contents>
                        <Title title={[ "REFERENCE", "book"]} color="light" />
                        <ReferCont color="light" />
                        <ContContact />
                    </Contents>
                    <Footer  color="light"/>
                </>
            )}
        </>  
    )
}
}

export default Reference;