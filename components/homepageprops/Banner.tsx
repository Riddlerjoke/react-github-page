import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full relative h-48 sm:h-64 md:h-72 overflow-hidden bg-gray-900 shadow-inner">
      <Image
        src="/banner.png"
        alt="Bannière Jay Wayne Fairey"
        fill
        priority
        className="object-cover object-center opacity-80"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
    </div>
  );
};

export default Banner;
