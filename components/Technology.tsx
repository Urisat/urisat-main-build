"use client";
// import { delay } from 'framer-motion'
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import { techlink } from "../constant/index";
import Image from "next/image";
const Technology = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <section id="techonology" className=" contents m-8 space-y-6 justify-center text-center items-center">
      <div className="justify-center items-center">
        <h1>Discover What Makes us Special</h1>
      </div>
      <div  className=" max-w-auto p-2 justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          className="static w-full max-w-xs h-auto justify-center items-center m-auto bg-gradient-to-r from-transparent to-black-1 text-clip transparent rounded-xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from(techlink).map((item, index) => (
              <CarouselItem key={index}>
                {" "}
                <div className="p-4">
                  {" "}
                  <Card className="static m-auto bg-black-1 border-none border-y shadow-md shadow-primary-300">
                    {" "}
                    {/* <div className="absolute ml-8 -mt-8 p-4 w-20 h-20 bg-black-1 border shadow-sm shadow-primary-300 border-primary-300 rounded-xl"></div>{" "} */}
                    <CarouselContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6">
                      {" "}
                      <span className="text-2xl font-semibold">
                        {item.title}
                      </span>{" "}
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt="logo"
                        className="bg-transparent"
                      />{" "}
                    </CarouselContent>{" "}
                  </Card>{" "}
                </div>{" "}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Technology;
