import React from "react";
import Fade from "react-reveal/Fade";
import Shape1 from "../Assets/Shapes/shape-1.png";
import Shape2 from "../Assets/Shapes/shape-2.png";

const About = () => {
  return (
    <div className="mb-10 pt-20 bg-[#02411C] relative" id="about">
      <Fade right>
        {/* <div className="bg-[#079C34] h-44 w-44 rounded-full absolute -right-20 bottom-50 hidden lg:block backdrop-filter blur-lg"></div> */}
        <img
          className="w-28 absolute top-5 -left-0 hidden lg:block backdrop-filter blur-lg"
          src={Shape1}
          alt=""
        />
      </Fade>
      <Fade left>
        <img
          className="w-24 absolute top-5 -right-0 hidden lg:block backdrop-filter blur-lg"
          src={Shape2}
          alt=""
        />
      </Fade>
      <Fade down>
        <h1 className="text-3xl lg:text-6xl text-center font-bold text-[#fff]">
          Choose The Best <br />{" "}
          <span className="text-[#6BF176]">IT Services</span> Here
        </h1>
      </Fade>
      <Fade up>
        <p className="text-[#fff] mx-5 lg:mx-28 my-5 lg:text-xl">
          BugsBytes is a web development and penetration testing service company
          that specializes in helping businesses secure their digital assets.
          Our team of experienced developers and security experts provide
          comprehensive solutions for web applications, networks, and software.
          We offer a wide range of services, including web application
          development, penetration testing, security audits, and more. Our team
          is highly knowledgeable and experienced in the latest technologies and
          trends, enabling us to provide the best possible solutions for our
          clients. We strive to keep our clients’ data secure and their systems
          up-to-date with the latest security patches and updates. Our team is
          committed to providing the highest quality of service and customer
          satisfaction.
        </p>
      </Fade>
    </div>
  );
};

export default About;
