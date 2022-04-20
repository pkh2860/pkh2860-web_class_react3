import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import ContContact from '../layout/Contact';
import PortCont from '../includes/PortCont';
import Loading from "../basics/Loading"
import { gsap } from "gsap";
import axios from 'axios';
// function Portfolio(){
//     return (
//         <>
//             <Header />
//             <Contents>     
//                 <Title title={["portfolio", "Site"]} />
//                 <PortCont />
//                 <ContContact />

//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports: [],
    }

    mainAnimation = () => {
        setTimeout (() => {
            gsap.to("#header", {
                duration:1.0,
                top: 0,
            });
            gsap.to("#footer", {
                duration:0.8,
                bottom: 0,
                delay: 0.2,
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
            gsap.to(".port__inner", {
                duration: 1.0,
                // x:0,
                y:0,
                opacity:1,
                delay: 1.5,
                ease: "circ.out"
            })
        }, 10)
       
    }

    getPorts = async () => {
        const { data : { data: {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json")

        this.setState({ports : ports})//데이터 바뀌면 setState /ports에 ports를 저장함
        // console.log(ports)

        setTimeout(() => {     //변수변경: setState
            this.setState({isLoading: false});
            this.mainAnimation()
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            this.getPorts();
        },2000)
    }
    render(){
        const {isLoading, ports} = this.state;

        // console.log(ports)
        return (
            <>          
                {isLoading ? ( //true = Loading 실행 false = header~ 실행
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["portfolio", "Site"]} />
                            <PortCont port={ports}/>
                            <ContContact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }  
}

export default Portfolio;