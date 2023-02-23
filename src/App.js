import React, { useEffect, useState } from "react";
import { HashLoader, BarLoader } from "react-spinners";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ScrollToTop from "react-scroll-to-top";
import Pulse from "react-reveal/Pulse";
import "./App.css";
import logo from "./Assets/Img/logo-bb-2.png";
import Home from "./Pages/Home";
import ButtonAppBar from "./Shared/ButtonAppBar";
import Footer from "./Shared/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "#020E09",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <Pulse forever={true}>
              <img className="h-40 mb-10" src={logo} alt="" />
            </Pulse>
            <BarLoader color="#02411C" size={100} />
          </div>
        </div>
      ) : (
        <div className="bg-[#02411C]">
          <MessengerCustomerChat
            pageId={process.env.REACT_APP_FB_PAGE_ID}
            appId={process.env.REACT_APP_FB_APP_ID}
            themeColor="#028131"
          />
          <ButtonAppBar />
          <Home />
          <Footer />
          <ScrollToTop
            color="#02411C"
            style={{
              boxShadow: "none",
              backgroundColor: "#54B65B",
              borderRadius: "50%",
              left: 50,
              zIndex: 20,
            }}
            component={<ArrowDropUpIcon className="text-[#02411C]" />}
            top={500}
            smooth
          />
        </div>
      )}
    </div>
  );
};

export default App;

// color code: primary - #02411C
// secondary - #079C34
// accent - #54B65B
// dark - #02201A
