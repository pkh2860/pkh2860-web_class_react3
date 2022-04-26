import React, { useEffect, useState } from 'react'
import Header from "../layout/Header"
import Contents from "../layout/Contents"
import Footer from "../layout/Footer"
import Title from "../layout/Title"
import Contact from "../layout/Contact"
import Loading from "../basics/Loading";
import MovieList from '../includes/MovieList'
import MovieSearch from '../includes/MovieSearch'
import { gsap } from "gsap";


function Movie() {
    const [lists, setVideos] = useState([])

    const mainAnimation = () => {
        setTimeout(()=>{
            document.getElementById("loading").classList.remove("loading__active")

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
            });
            gsap.to(".movie__search", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay: 1.5,
                ease: "circ.out"
            });
            gsap.to(".movie__list", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay: 1.7,
                ease: "circ.out"
            });
        }, 10)
    }

    const search = (query) => {  //사용자가 검색할때
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{ //데이터가 변하면 알아서 감지해줌
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=MARVEL&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results)
                mainAnimation()
            })
            .catch(error => console.log('error', error));
},[]);

return ( 
    <>
        <Loading />
        <Header />
        <Contents>
            <Title title={["Movie", "reference"]} />
            <section id='movie__cont'>
                <div className='container'>
                    <div className='movie__inner'>
                    <MovieSearch onSearch={search} />
                    <MovieList  videos={lists} />
                    </div>
                </div>
            </section>
            <Contact />
        </Contents>
        <Footer />
    </>
)
}
export default Movie;