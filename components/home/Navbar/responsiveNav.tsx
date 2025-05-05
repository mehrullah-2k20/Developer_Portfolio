"use client";
import React, { useState } from "react";
import SmallNav from "./SmallNav";
import Nave from "./nave";

const ResponsiveNav = () => {
  const [showNave, setshowNav] = useState(false);

  const showNavHandler = () => setshowNav(true);
  const closeNavHandler = () => setshowNav(false);
  return (
    <div>
      <Nave openNave={showNavHandler} />
      <SmallNav showNav={showNave} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
