// Project.js
import React, { useEffect } from "react";
import SectionHeading from "@/components/helper/scetionHeading";
import { projectData } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* Add id="projects" to enable smooth scrolling */}
      <div id="projects" className="pt-16 pb-16 bg-[#050709]">
        <SectionHeading data-aos="fade-down">My Projects</SectionHeading>
      </div>

      <div
        className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        data-aos="fade-up"
      >
        {projectData.map((project, index) => (
          <div
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            key={project.id}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Incremental delay for each project
          >
            <Link href={project.url} target="_blank">
              <Image
                src={project.image}
                alt="project" // Fallback alt text
                width={300}
                height={200}
                className="w-full rounded-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
