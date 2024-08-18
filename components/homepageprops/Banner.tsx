import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-full text-white text-center py-4">
        <Image src={"banner.png"} alt={"bannière personnalisée"} />
      
    </div>
  );
};

export default Banner;