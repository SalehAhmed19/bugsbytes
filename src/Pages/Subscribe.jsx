import React from "react";
import img from "../Assets/Img/img-newsletter.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Pulse from "react-reveal/Pulse";

const Subscribe = () => {
  return (
    <div className="lg:w-3/4 bg-[#023A20] py-14 lg:px-10 px-3 mx-4 lg:mx-auto mb-36 mt-10 flex flex-col lg:flex-row justify-between items-center">
      <div>
        <h4 className="text-[#6BF176] text-sm lg:text-base">NEWSLETTER</h4>
        <h2 className="text-xl lg:text-5xl font-bold text-[#fff] mt-3">
          Subscribe our <br className="hidden lg:block" />
          newsletter
        </h2>
        <p className="text-[#6BF176] my-3">
          By clicking the button, you are agreeing with our Term and Conditions
        </p>
        <div className="flex justify-between bg-[#00983f] rounded-full">
          <input
            type="text"
            className="py-4 px-5 w-full bg-transparent rounded-full placeholder-red-600 focus:outline-none text-xl"
          />{" "}
          <button className="mx-2">
            <ArrowCircleRightIcon className="text-[#6BF176]" fontSize="large" />
          </button>
        </div>
      </div>
      <div>
        <Pulse forever={true}>
          <img
            className="w-72 rounded-lg mb-[-150px] mt-7 mx-auto"
            src={img}
            alt=""
          />
        </Pulse>
      </div>
    </div>
  );
};

export default Subscribe;
