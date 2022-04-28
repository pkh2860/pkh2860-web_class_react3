import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// require('dotenv').config() npm i dotenv

function Youtube() {
  //videos=변수  가 바뀌면 setvideos에 저장
  const [videos, setVideos] = useState([]);

  const mainAnimation = () => {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");

      gsap.to("#header", {
        duration: 1.0,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.2,
      });
      gsap.to(".cont__title strong", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.0,
        ease: "circ.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.3,
        ease: "circ.out",
      });
      gsap.to(".youtube__search", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "circ.out",
      });
      gsap.to(".youtube__list", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "circ.out",
      });
    }, 10);
  };

  const search = (query) => {
    //사용자가 검색할때
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${process.env.REACT_APP_API}&type=video`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    //데이터가 변하면 알아서 감지해줌
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&key=${process.env.REACT_APP_API}&type=video`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        mainAnimation();
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <Contents>
        <Title title={["Youtube", "reference"]} />
        <section id="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeList videos={videos} />
            </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
