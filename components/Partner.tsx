import Image from "next/image";
import React from "react";


const Partner = () => {
  return (
    <div className="h-full min-w-full mt-4 md:mt-3 z-10 p-24 bg-gradient-to-r to-black from-primary-600 rounded-3xl text-clip shadow-[2px 2px 4px #0000000c]">
      <div className="relative w-[200px] h-[200px] rounded-[10px] shadow-[16px_16px_20px_#00000c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[pgradient(transparent, transparent,#00a6ff)] before:animate-in">
        <Image
          src={"/assets/etherlogo.png"}
          fill
          alt="logo"
          className="bg-transparent"
        />
      </div>
    
     
    </div>
  );
};

export default Partner;
