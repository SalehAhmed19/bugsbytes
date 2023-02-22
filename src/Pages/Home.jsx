import React from "react";
import Banner from "../Components/Banner";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Services from "./Services";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div id="#">
      <Banner />
      <About />
      <Services />
      <FAQ />
      <Subscribe />
      <Contact />
    </div>
  );
};

export default Home;
