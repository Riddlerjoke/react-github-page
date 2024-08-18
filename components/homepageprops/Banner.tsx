import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-auto">
        <Image src={"banner.png"} alt={"bannière personnalisée"} className={'w-full'} height={80} />
      
    </div>
  );
};

export default Banner;