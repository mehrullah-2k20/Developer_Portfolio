import React from "react";
import Image from "next/image";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const Skillcard = ({
  skill = { id: 0, title: "", image: "", percent: "" },
}: Props) => {
  const { image, percent, title } = skill;
  return (
    <div
      className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900"
      data-aos="zoom-in" // AOS animation
      data-aos-delay={`${skill.id * 100}`} // Incremental delay based on skill ID
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] text-white font-[600]">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default Skillcard;
