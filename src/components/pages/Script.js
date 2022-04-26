import React from "react";
import Header from "../layout/Header"
import Contents from "../layout/Contents"
import Footer from "../layout/Footer"
import Title from "../layout/Title"
import Contact from "../layout/Contact";
import ScriptCont from "../includes/ScriptCont";
// import Loading from "../basics/Loading";
// import { gsap } from "gsap";
// import axios from "axios";


function Script(){
    return (
        <>
            <Header color="light" />
            <Contents>
                <Title title={["Script", "contents"]} color="light" />
                <ScriptCont color="light" />
                <Contact />
            </Contents>
            <Footer color="light" />
        </>
    )
}


// class Script extends React.Component {
//     state = {
//         isLoading: true,
//         lists: [],
//         searchs: []
//     }

//     mainAnimation = () => {
//         setTimeout (() => {
//             gsap.to("#header", {
//                 duration:1.0,
//                 top: 0,
//             });
//             gsap.to("#footer", {
//                 duration:0.8,
//                 bottom: 0,
//                 delay: 0.2,
//             });
//             gsap.to(".cont__title strong", {
//                 duration: 0.5,
//                 x:0,
//                 y:0,
//                 opacity:1,
//                 delay: 1.0,
//                 ease: "circ.out"
//             })
//             gsap.to(".cont__title em", {
//                 duration: 0.5,
//                 x:0,
//                 y:0,
//                 opacity:1,
//                 delay: 1.3,
//                 ease: "circ.out"
//             })
//             // gsap.to(".port__inner", {
//             //     duration: 1.0,
//             //     // x:0,
//             //     y:0,
//             //     opacity:1,
//             //     delay: 1.5,
//             //     ease: "circ.out"
//             // })
//         }, 10)
//     }

//     getYoutubes = async () => {
//         const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=aca43e677a6a006971c2caf04f4461ea&query=Jack+Reacher")

//         console.log(lists)
//         this.setState({lists, isLoading: false});
//         this.mainAnimation();
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             document.getElementById("loading").classList.remove("loading__active");
//             this.getYoutubes();
//         }, 2000);
//     }

//     render() {
//         const { isLoading, lists } = this.state;
//         return (
//             <>
//                 {isLoading ? (
//                     <Loading color="black" />
//                 ) : (
//                     <>
//                         <Header />
//                         <Contents>
//                             <Title title={["movie", "reference"]} />
//                             {/* <YoutubeCont lists={lists}/> */}
//                             <Contact />
//                         </Contents>
//                         <Footer />
//                     </>
//                 )}
//             </>
//         )
//     }
// }

export default Script;