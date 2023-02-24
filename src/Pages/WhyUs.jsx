import React from "react";
import whyus from "../Assets/Img/whyus.png";
import { BiSupport } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";
import Pulse from "react-reveal/Pulse";
import "../Styles/WhyUs.css";
import { Fade } from "react-reveal";

const WhyUs = () => {
  return (
    <div className="flex bg-wu flex-col lg:flex-row my-10 lg:p-20 p-5 bg-[#02201A] text-[#6BF176] justify-center items-center">
      <div className="lg:w-1/2">
        <Fade left>
          <Pulse forever={true}>
            <img className="p-10" src={whyus} alt="" />
          </Pulse>
        </Fade>
      </div>
      <div className="lg:w-1/2">
        <Fade right>
          <h4 className="underline font-bold">WHY CHOOSE US</h4>
          <h1 className="lg:text-6xl text-3xl font-bold text-[#fff] my-5">
            Why choose our IT service?
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="my-5 lg:mx-5">
              <BiSupport className="text-6xl text-[#6BF176]" />
              <h4 className="font-bold my-5">Full Time Support</h4>
              <p className="text-[#fff]">
                The Full Time Support Officer Program consists of Reserve
                officers on active duty responsible
              </p>
            </div>
            <div className="my-5 lg:mx-5">
              <GiTechnoHeart className="text-6xl" />
              <h4 className="font-bold my-5">Faster, Quality & Trusted</h4>
              <p className="text-[#fff]">
                The Full Time Support Officer Program consists of Reserve
                officers on active duty responsible
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default WhyUs;
