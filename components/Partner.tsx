"use client";
// import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { techlink } from "@/constant";
import Image from "next/image";

const Partner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div id="partener" className="static h-full min-w-full mt-4 md:mt-3 z-10 p-24 bg-gradient-to-r to-black from-primary-600 rounded-3xl text-clip shadow-[2px 2px 4px #0000000c] items-center justify-center">
      <div className="-mt-4 text-center">
          <h1 className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magnam fugiat esse atque placeat fugit, laboriosam eaque recusandae pariatur optio a, autem et explicabo</h1>
      </div>
      <div className="mt-auto justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
          }}
          className="w-full max-w-sm m-auto justify-center"
        >
          <CarouselContent className="">
            {Array.from(techlink).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-none w-auto">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{_.title}</span>{" "}
                      <Image
                        src={_.image}
                        width={250}
                        height={250}
                        alt="logo"
                        className="bg-transparent"
                      />{" "}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Partner;
