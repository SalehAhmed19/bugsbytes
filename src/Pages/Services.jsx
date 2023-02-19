import React from "react";
import Fade from "react-reveal/Fade";
import ServiceCard from "../Components/ServiceCard";
import "../Styles/Services.css";

const Services = () => {
  const services = [
    { _id: 1, service: "UI / UX Design" },
    { _id: 2, service: "Web Development" },
    { _id: 3, service: "Penetration Testing" },
  ];
  return (
    <div className="pt-20 bg-[#02201A] bg-service" id="services">
      <Fade down>
        <h1 className="text-3xl lg:text-6xl text-center font-bold text-[#fff]">
          Services
        </h1>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 pb-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
