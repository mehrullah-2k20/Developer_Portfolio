import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-12 pb-8 bg-[#0f0715] text-center">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-white font-semibold mt-6">
        <div className="hover:text-[#ff007c] transition-colors duration-200 cursor-pointer">
          Home
        </div>
        <div className="hover:text-[#ff007c] transition-colors duration-200 cursor-pointer">
          Services
        </div>
        <div className="hover:text-[#ff007c] transition-colors duration-200 cursor-pointer">
          Projects
        </div>
        <div className="hover:text-[#ff007c] transition-colors duration-200 cursor-pointer">
          Contact
        </div>
      </div>
      <p className="text-gray-400 mt-6 text-sm">
        © 2025 All rights reserved. Designed and developed by{" "}
        <span className="text-[#ff007c] font-bold"></span>
      </p>
    </div>
  );
};

export default Footer;
