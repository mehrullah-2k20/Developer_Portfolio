import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { BaseInfo } from "@/data/data";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full pt-8 md:pt-12 h-screen bg-[#0f0715] overflow-hidden relative bg-cover"
    >
      <div className="flex flex-col justify-center items-center w-[90%] md:w-[85%] lg:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              data-aos="fade-left"
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-gray-300 font-semibold leading-tight"
            >
              I am <span className="text-orange-500">{BaseInfo.name}</span>
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-gray-100"
            >
              {BaseInfo.position}
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
            >
              {BaseInfo.description}
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="md:px-8 md:py-2.5 px-6 py-2 text-white text-sm sm:text-base md:text-lg transition-all duration-200 rounded-lg mt-6 sm:mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* Image */}
          <div
            data-aos="fade-up"
            className="mx-auto rounded-[2rem] sm:rounded-[3rem] border-[2px] sm:border-[3.5px] border-blue-950 overflow-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={400}
              height={300}
              className="rounded-[2rem] sm:rounded-[3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
