import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
        <Image src={"banner.png"} alt={"bannière personnalisée"} className={'w-full'} height={25} />
      
    </div>
  );
};

export default Banner;