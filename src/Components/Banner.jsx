import React from "react";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import AnimatedText from "react-animated-text-content";
import MainLogo from "../Assets/Img/logo-bb-2.png";
import VideoBG from "../Assets/VideoBg/video4.mp4";
import banner from "../Assets/Img/banner.png";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <div className="bg-[#020D0A] bg-banner">
      <video className="opacity-20" src={VideoBG} muted loop autoPlay />
      <div className="absolute w-full lg:h-full top-0 ">
        <div className="flex justify-between items-center lg:mt-20 mt-5 lg:px-20">
          <div className="flex flex-col justify-center items-center lg:mt-0 mt-5 w-full">
            <Fade big>
              <img className="w-10 lg:w-56 m-5" src={MainLogo} alt="" />
            </Fade>
            <HeadShake forever={true}>
              <h1 className="text-xl lg:text-6xl font-bold text-[#54B65B]">
                BugsBytes
              </h1>
            </HeadShake>
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="throw"
              interval={0.06}
              duration={0.8}
              tag="h1"
              className="animated-paragraph font-bold text-sm lg:text-xl text-[#54B65B] text-center code lg:mt-10"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Choose the best IT services from here
            </AnimatedText>
          </div>
          <div className="sm:w-full my-10 lg:block hidden">
            <Pulse forever={true}>
              <img className="w-64 lg:w-[500px] mx-auto" src={banner} alt="" />
            </Pulse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
