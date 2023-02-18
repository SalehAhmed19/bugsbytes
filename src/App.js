import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import ButtonAppBar from "./Shared/ButtonAppBar";
import Footer from "./Shared/Footer";

const App = () => {
  return (
    <div className="bg-[#02411C]">
      <ButtonAppBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

// color code: primary - #02411C
// secondary - #079C34
// accent - #54B65B
// dark - #02201A
