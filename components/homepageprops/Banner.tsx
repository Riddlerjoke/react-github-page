import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-40">
        <Image
          src={"banner.png"}
          alt={"Bannière personnalisée"}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
