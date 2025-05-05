import React, { useEffect } from "react";
import ScetionHeading from "@/components/helper/scetionHeading";
import { aboutInfo } from "@/data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section id="about" className="pt-12 pb-12 bg-[#050709]">
        {/* Section Heading */}
        <ScetionHeading data-aos="fade-down">About Me</ScetionHeading>
        <div
          className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12"
          data-aos="fade-up"
        >
          <div>
            {/* Text Content */}
            <h1
              className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight"
              data-aos="fade-right"
            >
              {aboutInfo.title}
            </h1>
            <p
              className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {aboutInfo.description}
            </p>
            <div className="mt-6 space-y-6">
              <div
                className="flex items-center space-x-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="w-7 h-7 bg-blue-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Frontend Development
                </p>
              </div>
              <div
                className="flex items-center space-x-4"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="w-7 h-7 bg-orange-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Backend Development
                </p>
              </div>
              <div
                className="flex items-center space-x-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="w-7 h-7 bg-green-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Full Stack Development
                </p>
              </div>
            </div>
          </div>
          {/* Image and Text Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div
              className="flex flex-col items-center"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <Image
                src="/icons8-administrator-male.svg"
                alt="Satisfied Customers"
                width={60}
                height={60}
              />
              <p className="mt-2 font-bold text-white text-center text-sm sm:text-base">
                {aboutInfo.client}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Satisfied Customers
              </p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="flip-right"
              data-aos-delay="400"
            >
              <Image
                src="icons8-experience (1).svg"
                alt="Years of Experience"
                width={60}
                height={60}
              />
              <p className="mt-2 font-bold text-white text-center text-sm sm:text-base">
                {aboutInfo.experience}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Years of Experience
              </p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="flip-up"
              data-aos-delay="500"
            >
              <Image
                src="/icons8-task-completed.svg"
                alt="Completed Projects"
                width={60}
                height={60}
              />
              <p className="mt-2 font-bold text-white text-center text-sm sm:text-base">
                {aboutInfo.project}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Completed Projects
              </p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="flip-down"
              data-aos-delay="600"
            >
              <Image
                src="/icons8-website (2).svg"
                alt="Websites"
                width={60}
                height={60}
              />
              <p className="mt-2 font-bold text-white text-center text-sm sm:text-base">
                {aboutInfo.website}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Websites Launched
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
