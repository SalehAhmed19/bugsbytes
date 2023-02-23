import React from "react";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import ServiceCard from "../Components/ServiceCard";
import "../Styles/Services.css";
import { SiSpringsecurity } from "react-icons/si";
import { TbCode } from "react-icons/tb";
import { DiCodeBadge } from "react-icons/di";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      _id: 1,
      service: "UI / UX Design",
      content: "Designing user experiences that make life simpler",
      icon: <BsBoxArrowUpRight />,
    },
    {
      _id: 2,
      service: "Web Design",
      content: "We Design Your Digital Presence. Let's Get Started!",
      icon: <TbCode />,
    },
    {
      _id: 3,
      service: "Web Development",
      content: "Bringing Your Vision to Life on the Web",
      icon: <DiCodeBadge />,
    },
    {
      _id: 4,
      service: "Penetration Testing",
      content: "Uncovering the Weaknesses Before the Attackers Do",
      icon: <SiSpringsecurity />,
    },
  ];
  return (
    <div className="pt-20 bg-[#02201A] bg-service" id="services">
      <Fade down>
        <h1 className="text-3xl lg:text-6xl text-center font-bold text-[#fff]">
          Services
        </h1>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-10 pb-10 mx-5">
        {services.map((service) => (
          <Zoom>
            <ServiceCard key={service._id} service={service} />
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Services;
