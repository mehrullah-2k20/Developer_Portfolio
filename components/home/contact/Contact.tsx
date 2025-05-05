import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "@/components/helper/scetionHeading";
import Contactform from "./Contactform";
import Contactinfo from "./Contactinfo";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="contact" className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading data-aos="fade-down">Contact</SectionHeading>

      {/* Contact Grid */}
      <div
        className="grid grid-cols-1 w-[90%] xl:grid-cols-2 sm:w-[80%] mx-auto items-center gap-10 mt-10"
        data-aos="fade-up"
      >
        {/* Contact Form */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Contactform />
        </div>

        {/* Contact Info */}
        <div className="xl:mx-auto" data-aos="fade-left" data-aos-delay="400">
          <Contactinfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
