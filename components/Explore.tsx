import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Explore = () => {
  return (
    <div
      id="expplore"
      className="relative my-16  md:mb-7 bg-[#00000c]  rounded-xl p-4"
    >
      <div className="absolute w-[250] justify-center h-[250] rounded-full object-contain bg-gradient-to-tr ml-60 mt-5 from-black-1 to-primary-300/30 opacity-20 text-clip  bg-black-1"></div>
      <div className="flex items-center justify-between ml-auto mt-auto gap-16 xl:gap-9 lg:flex-row">
        <div className="grid items-center w-full max-w-2xl lg:text-center">
          <div className="h-48  gradient-radial-to-t from-primary-300  to-white"></div>
          <div className="flex-col -mt-40">
            <div className="flex flex-col mt-4 justify-center items-center m-auto">
              <div className="ml-0 mt-0 text-left justify-center items-center m-auto">
                <Button
                  size={"lg"}
                  variant={"destructive"}
                  className="bg-black-1 border border-primary-700 mb-4 rounded-full"
                >
                  Exploration
                </Button>
              </div>
            </div>
            <h1 className="text-2xl text-left lg:text-2xl md:text-3xl font-medium">
              {" "}
              Unlock the Future Of Innovation with Blockchain
            </h1>
            <p className="text-base text-left my-5 sm:text-sm">
              Discover The Transformative Power Of Blockchain Technology,
              Offering Tranparency, Effeciency, And Trust For Individuals And
              Businesses. Embrace innovation, Enhance Operations, And Stay Ahead
              in The Digital Age By Exploring Blockchain Solution Today{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start lg:justify-center w-full max-w-md">
          <Image
            src={"/assets/explore.png"}
            alt="location explore"
            width={1000}
            height={1000}
            className="rounded-full w-auto h-[55vh] object-fill hover:hue-rotate-180 hover:rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
