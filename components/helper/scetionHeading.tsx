import React from "react";
type props = {
  children: React.ReactNode;
};

const ScetionHeading = ({ children }: props) => {
  return (
    <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl upercase -rotate-6">
      {children}
    </h1>
  );
};

export default ScetionHeading;
