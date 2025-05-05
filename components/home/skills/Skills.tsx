import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScetionHeading from "@/components/helper/scetionHeading";
import { skillsData } from "@/data/data";
import Skillcard from "./Skillcard";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      {/* Section Heading */}
      <ScetionHeading data-aos="fade-down">Skills</ScetionHeading>

      {/* Skills Grid */}
      <div
        className="mt-20 w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center"
        data-aos="fade-up"
      >
        {skillsData.map((skill, index) => (
          <div
            key={skill.id}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Incremental delay for each card
          >
            <Skillcard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
