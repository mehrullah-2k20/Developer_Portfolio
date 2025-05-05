import React from "react";
import { NavLinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const SmallNav = ({ closeNav, showNav }: Props) => {
  const navOpenClass = showNav ? `translate-x-0` : `-translate-x-full`;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-black bg-opacity-70 transition-opacity duration-500 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[#0c080f] z-[1001] transform ${navOpenClass} transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {NavLinks.map((NavLink) => {
            if (!NavLink.url) return null;

            return (
              <Link key={NavLink.id} href={NavLink.url} passHref>
                <p
                  className="text-[20px] sm:text-[28px] text-white font-semibold hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
                  onClick={closeNav} // Close nav when the link is clicked
                >
                  {NavLink.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SmallNav;
