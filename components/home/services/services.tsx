// Services.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScetionHeading from "@/components/helper/scetionHeading";
import { servicesData } from "@/data/data";
import ServiceCard from "./serviceCard";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="services" className="pt-12 pb-12 bg-[#0f0715]">
      {/* Section Heading */}
      <ScetionHeading data-aos="fade-down">Services</ScetionHeading>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[90%] md:w-[85%] lg:w-[80%] mx-auto items-center mt-12"
        data-aos="fade-up"
      >
        {servicesData.map((service) => (
          <div key={service.id} data-aos="zoom-in" data-aos-delay="200">
            <ServiceCard Service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
