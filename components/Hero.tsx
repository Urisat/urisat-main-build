/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button } from "./ui/button";

import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Hero = () => {
  return (
    <section className="h-auto relative justify-center items-center">
      <>
        <div
          id="home"
          className="flex flex-col  h-auto w-auto  shadow-accent"
        >
          <div className="grid justify-center items-center">
            <div className="grid justify-center items-center mt-7 mb-8 md:mt-7 md:mb-12">
              <h2 className="text-bold text-4xl lg:text-24xl md:text-5xl sm:text-xl mt-4 text-center xsm:text-3xl filter drop-shadow-lg bg-gradient-to-r from-primary-700 to-white bg-clip-text text-transparent text-wrap">
                {" "}
                The Future of Finance <br />
                Transform Transactions With Secure <br /> Blockchain Solutions
              </h2>
              <p className="text-primary-200/50 lg:text-2xl md:text-2xl sm:text-xl mt-4 text-center xsm:text-3xl filter drop-shadow-lg">
                Lorem Blockchain Solutions Blockchain Solutions Blockchain
                Solutions Lorem <br /> ipsum, dolor sit amet consectetur
                adipisicing elit. Ea assumenda at laboriosam architecto
              </p>
              <div className="flex items-center py-4 justify-center md:flex-row gap-2 w-full md:gap-4 flex-col">
                <Button
                  variant="ghost"
                  size={"lg"}
                  className="bg-primary-300 rounded-full"
                >
                  <h2 className="font-semibold"> Explore More</h2>
                </Button>
                <Button
                  variant="ghost"
                  size={"lg"}
                  className="bg-inherit hover:bg-primary-300/20 border border-primary-700 rounded-full"
                >
                  <h2 className="font-semibold"> Explore More</h2>
                </Button>
              </div>
            </div>
            <div className="min-w-full  object-contain bg-black-1/5 inset-x-16 bg-gradient-to-b from-white/15 shadow-sm to-black/1 opacity-80 rounded-tl-[100%] rounded-tr-[100%] h-full">
              <div className="grid grid-cols-1 justify-items-center">
                <div className="mt-4  overflow-hidden flex flex-col mb-auto Sm:scroll-m-4">
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="hover:bg-primary-300 rounded-full border-2 hover:border-primary-300"
                  >
                    <h2 className="font-semibold"> Our Partners</h2>
                  </Button>
    
                </div>
                <div className="grid mt-8 shadow-sm mb-4">
                  <h2 className="text-xl text-center justify-center text-primary-50">
                  Leading the way in trusted cryptography with Urisat and its partners
                  </h2>

                  <div className="flex mt-2 flex-col  md:flex-row lg:flex-row justify-center items-center gap-4 mb-16">
                    <Card className="border-none">
                      <CardContent className="hidden md:flex flex-nowrap mx-4 gap-4">
                        <Image
                          src="/assets/bit.png"
                          className="justify-center"
                          width={100}
                          height={100}
                          alt="logoPartener"
                        />
                         <Image
                          src="/assets/crypto.png"
                          className="justify-center"
                          width={100}
                          height={100}
                          alt="logoPartener"
                        />
                        <Image
                          src="/assets/TetherLogo.png"
                          className="justify-center"
                          width={100}
                          height={100}
                          alt="logoPartener"
                        />
                           <Image
                          src="/assets/wazi.webp"
                          className="justify-center"
                          width={100}
                          height={100}
                          alt="logoPartener"
                        />
                        <Image
                          src="/assets/sol.png"
                          className="justify-center"
                          width={100}
                          height={100}
                          alt="logoPartener"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
        
              </div>
              
            </div>
          </div>
          <div className=" flex h-full w-full justify-between items-center bg-transparent ">
            <div className="static flex w-auto bg-transparent">
              <div className="bg-black-1 bg-gradient-to-r from-primary-300 to-black-1 opacity-10 mb-1 w-[60px] h-[60px]"></div>
              <div className="bg-black-1 bg-gradient-to-r from-primary-300 to-black-1 opacity-10 mb-1 -mt-14 w-[60px] h-[60px]"></div>
              <div className="bg-black-1 bg-gradient-to-r from-primary-300 to-black-1 opacity-10 mb-1  w-[60px] h-[60px]"></div>
            </div>
            

            <div className="static flex w-auto bg-transparent">
              <div className="bg-black-1 bg-gradient-to-r from-primary-300 to-black-1 opacity-10 mb-0 w-[60px] h-[60px]"></div>
              <div className="bg-black-1 bg-gradient-to-r from-primary-300 to-black-1 opacity-10 mb-auto -mt-14 w-[60px] h-[60px]"></div>
              <div className="bg-black-1 bg-gradient-to-r from-primary-300 to-black-1 opacity-10 mb-0  w-[60px] h-[60px]"></div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Hero;
