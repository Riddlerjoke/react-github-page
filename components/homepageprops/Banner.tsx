import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-full p-2 m-2">
        <Image src={"banner.png"} alt={"bannière personnalisée"} width={1080} height={180} />
      
    </div>
  );
};

export default Banner;