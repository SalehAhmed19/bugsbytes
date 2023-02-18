import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import ButtonAppBar from "./Shared/ButtonAppBar";

const App = () => {
  return (
    <div className="">
      <ButtonAppBar />
      <Home />
    </div>
  );
};

export default App;

// color code: primary - #02411C
// secondary - #079C34
// accent - #54B65B
// dark - #02201A
