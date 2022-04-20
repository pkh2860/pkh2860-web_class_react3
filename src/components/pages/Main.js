import React from "react";
import Header from "../layout/Header"
import Contents from "../layout/Contents"
import MainCont from "../includes/MainCont"
import Footer from "../layout/Footer"
import Loading from "../basics/Loading"
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//               <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }


//class 함수의 집합체
class Main extends React.Component {
    state = {       //state=변수설정
        isLoading: true,
    }


    getSite = () => {
        setTimeout(()=>{
            gsap.to("#header", {
                duration:1.0,
                top: 0,
            });
            gsap.to("#footer", {
                duration:0.8,
                bottom: 0,
                delay: 0.2,
            });
            gsap.to(".main__inner > div:nth-child(1)", {
                duration:1.0,
                opacity: 1,
                y: 0,
                delay: 1.0,
                ease: "back.out(3)"
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration:1.0,
                opacity: 1,
                y: 0,
                delay: 1.3,
                ease: "back.out(3)"
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration:1.0,
                opacity: 1,
                y: 0,
                delay: 1.6,
                ease: "back.out(3)"
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration:1.0,
                opacity: 1,
                y: 0,
                delay: 1.9,
                ease: "back.out(3)"
            });
        }, 1000)
    }

    componentDidMount(){    //3초뒤에 로딩이 끝난 후 메인 화면이 나옴
        setTimeout(() => {
            this.setState({isLoading:false})    //true 실행 3초 후 false로 변경
            this.getSite()
        }, 3000)
    }

    render(){
        const {isLoading} = this.state  //this.state = true

        return (
            <>          
                 {isLoading ? ( //true = Loading 실행 false = header~ 실행
                <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>  
        )
    }
}
export default Main;