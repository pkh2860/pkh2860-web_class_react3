import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import ContContact from '../layout/Contact';
import AboutCont from '../includes/AboutCont';
import Loading from "../basics/Loading"
import { gsap } from "gsap";




// function About(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents>     
//                 <Title title={["About", "me"]} color="light" />
//                 <AboutCont color="light" />
//                 <ContContact />
//             </Contents>
//             <Footer color="light" />
//         </>
//     )
// }

class About extends React.Component {
    state = {
        isLoading: true,
    }

    AboutAnimation = () => {
        setTimeout (() => {
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
            gsap.to(".about__inner", {
                duration: 1.0,
                // x:0,
                y:0,
                opacity:1,
                delay: 1.5,
                ease: "circ.out"
            })
        }, 10)
       
    }


    componentDidMount(){    //3초뒤에 로딩이 끝난 후 메인 화면이 나옴
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            this.setState({isLoading:false})    //true 실행 3초 후 false로 변경
            this.AboutAnimation();
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
                    <Header color="light" />
                    <Contents>     
                        <Title title={["About", "me"]} color="light" />
                        <AboutCont color="light" />
                        <ContContact />
                    </Contents>
                    <Footer color="light" />
                    </>
                )}
            </>  
        )
    }
}



export default About;