"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

// Define the type of props
type Props = {
  Service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ Service }: Props) => {
  return (
    <Tilt
      className="shedw-2xl p-6 rounded-lg bg-[#814ced]"
      data-aos="zoom-in" // AOS animation
      data-aos-delay={`${Service.id * 100}`} // Incremental delay based on service ID
    >
      <Image src={Service.icon} alt={Service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{Service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {Service.description}
      </p>
    </Tilt>
  );
};

export default ServiceCard;
