import React from "react";

// function MainInfo(props){
//     return (
//         <>
//             <div>{props.text1}</div>
//             <div>{props.text2}</div>
//             <div>{props.text3}</div>
//             <div>{props.text4}</div>
//         </>
//     )
// }
// function MainInfo(text1, text2, text3, text4){   //props 생략
//     return (
//         <>
//             <div>{text1}</div>
//             <div>{text2}</div>
//             <div>{text3}</div>
//             <div>{text4}</div>
//         </>
//     )
// }

// const mainText = {
//     text1 : "We provide",
//     text2 : "Visual coding",
//     text3 : "Solutions",
//     text4 : "For you webs",
// }
// = 
// text1 = {mainText.text1}
// text2 = {mainText.text2}
// text3 = {mainText.text3}
// text4 = {mainText.text4}

//함수형 컨퍼넌트 * 클래스 컨퍼넌트 --> 리액트 훅

function MainInfo({text}){
    return <div>{text}</div>
}

const mainText = [
    {text : "We provide"},
    {text : "Visual coding"},
    {text : "Solutions"},
    {text : "For you webs"},
]

function MainCont(){
    return (
        <section className="main__cont">
            <div className="main__inner">
                {mainText.map(txt => (
                    <MainInfo text={txt.text} key={txt.text} />
                ))}
            </div>
        </section>
    )
}

export default MainCont;




