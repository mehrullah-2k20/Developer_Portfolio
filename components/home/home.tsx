"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/hero";
import About from "./about/about";
import Services from "./services/services";
import Project from "./project/project";
import Contact from "./contact/Contact";
import AOS from "aos";

const Homecomponent = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  );
};

export default Homecomponent;
