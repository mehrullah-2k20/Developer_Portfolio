"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { NavLinks } from "@/constants/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

// Define props type
type props = {
  openNave: () => void;
};

const Nave = ({ openNave }: props) => {
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handleScroll = (url: string) => {
    const target = document.querySelector(url);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar container with z-index */}
      <div
        className={`fixed ${
          navBg ? "bg-[#240b39]" : "fixed "
        } h-[12vh] w-full z-50 flex items-center px-4 transition-all duration-200`}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        <div className="flex items-center space-x-10 ml-auto">
          <div className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((NavLink) => {
              if (!NavLink.url) return null;

              return (
                <button
                  key={NavLink.id}
                  onClick={() => handleScroll(NavLink.url)}
                  className="nav__link text-white hover:text-blue-500 transition-colors duration-200"
                >
                  {NavLink.label}
                </button>
              );
            })}
          </div>
          <div>
            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button className="md:px-10 md:py-3 px-8 py-3 text-blue-600 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                Hire me
              </button>
              {/* Burger menu */}
              <HiBars3BottomRight
                onClick={openNave}
                className="w-8 h-8 cursor-pointer lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nave;
