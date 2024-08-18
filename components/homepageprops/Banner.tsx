import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-full text-white text-center py-4">
        <Image src={"banner.png"} alt={"bannière personnalisée"} width={1920} height={1080} />
      
    </div>
  );
};

export default Banner;