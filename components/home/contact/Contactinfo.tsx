import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

import { contactData } from "@/data/data";


const Contactinfo = () => {
  return (
    <div className="space-y-8">
      {/* Phone Section */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center rounded-full">
          <FaPhone className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-base sm:text-lg md:text-xl text-white font-bold">
            Phone
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-70">
            {contactData.phone}
          </p>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center rounded-full">
          <FaEnvelope className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-base sm:text-lg md:text-xl text-white font-bold">
            Email Address
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-70">
            {contactData.email}
          </p>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center rounded-full">
          <FaMap className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-base sm:text-lg md:text-xl text-white font-bold">
            Address
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-70">
            {contactData.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
