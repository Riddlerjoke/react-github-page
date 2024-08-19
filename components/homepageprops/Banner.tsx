import React from 'react';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
        <div className="w-7/12 h-40">
            <Image src={"banner.png"} alt={"bannière personnalisée"} className={''} />
        </div>
    </div>
  );
};

export default Banner;