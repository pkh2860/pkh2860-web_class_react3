import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Footer from "../layout/Footer";
import ContContact from '../layout/Contact';
import Loading from "../basics/Loading"
import { gsap } from "gsap";
import axios from "axios";

// function Reference(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents>
//                 <Title title={["reference","book"]} color="light" />
//                 <ReferCont color="light" />
//                 <Contact />
//             </Contents>
//             <Footer color="light" />
//         </>
//     )
// }
class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }
    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.2,
            });
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
            gsap.to(".refer__inner", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "power4.out"
            });
        }, 10)
    }
    getSite = async () => {
        const refer = await axios.get("https://pkh2860.github.io/pkh2860-web_class_react3/src/assets/json/reference.json")
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }
    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#F0EEEB";
            this.getSite();
        }, 2000);
    }
    render(){
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
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