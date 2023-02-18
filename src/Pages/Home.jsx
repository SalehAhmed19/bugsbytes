import React from "react";
import Banner from "../Components/Banner";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
