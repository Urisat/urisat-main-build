import React from "react";
import { Button } from "./ui/button";

import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Hero = () => {
  return (
    <section className="">
      <>
        <div
          id="home"
          className="flex flex-col bg-primary h-auto w-auto  shadow-accent"
        >
          <div className="grid items-start justify-items-center">
            <div className="grid justify-items-center mt-7 mb-8 md:mt-7 md:mb-12">
              <h2 className="text-bold text-2xl lg:text-24xl md:text-5xl sm:text-xl mt-4 text-center xsm:text-3xl filter drop-shadow-lg bg-gradient-to-r from-primary-700 to-white bg-clip-text text-transparent text-wrap">
                {" "}
                The Future of Finance <br />
                Transform Transactions With Secure <br /> Blockchain Solutions
              </h2>
              <p className="text-primary-200/50 lg:text-2xl md:text-2xl sm:text-xl mt-4 text-center xsm:text-3xl filter drop-shadow-lg">
                Lorem Blockchain Solutions Blockchain Solutions Blockchain
                Solutions Lorem <br /> ipsum, dolor sit amet consectetur
                adipisicing elit. Ea assumenda at laboriosam architecto
              </p>
              <div className="flex py-4 items-center justify-center gap-10 sm:gap-3 sm:flex-col sm:w-full">
                <Button
                  variant="ghost"
                  size={"lg"}
                  className="bg-primary-300 rounded-full"
                >
                  Explore More
                </Button>
              </div>
            </div>
            <div className="min-w-full mx-auto object-contain bg-black-1/5 inset-x-16 bg-gradient-to-b from-white/15 shadow-sm to-black/1 opacity-80 rounded-tl-[100%] rounded-tr-[100%] h-[250px]">
              <div className="grid justify-items-center">
                <div className="mt-8  overflow-hidden Sm:scroll-m-4">
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="hover:bg-primary-300 rounded-full border-2 hover:border-primary-300"
                  >
                    Our Partners
                  </Button>
                </div>
                <div className="grid mt-8 shadow-sm">
                  <h2 className="text-2xl text-center">
                    Minus non dicta ducimus nulla aliquid. Doloremque numquam
                   e  Doloremque numquam
                   e
                  </h2>
                  <div className="flex mt-12 flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="bg-black-1 rounded-md text-prima-50 py-7 px-auto m-0"
                    >
                      <FaBitcoin  className="w-60 h-60"/> Bitcoin
                     </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="bg-black-1 text-prima-50 py-7 px-auto m-0"
                    >
                      <FaEthereum  className="w-60 h-60"/> Ethereum
                     </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="bg-black-1 text-prima-50 py-7 px-auto m-0"
                    >
                      <FaCoins  className="w-60 h-60"/> FaCoins
                     </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="bg-black-1 text-prima-50 py-7 px-auto m-0"
                    >
                      <FaEthereum  className="w-60 h-60"/> Ethereum
                     </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="bg-black-1 text-prima-50 py-7 px-auto m-0"
                    >
                      <FaEthereum  className="w-60 h-60"/> Ethereum
                     </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="bg-black-1 text-prima-50 py-7 px-auto shadow-[16px_16px_20px_#eeeef0] m-0"
                    >
                      <FaEthereum  className="w-60 h-60"/> Ethereum
                     </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='relative flex h-full justify-center items-center '>
            <div aria-hidden={false} className='  bg-primary-700 absolute inset-y-8  inset-x-0 w-full rounded-t-full rotate-360 bg-gradient-to-b from-black-1/10 to-primary-300 shadow-lg border-t-primary-700'></div>
      </div> */}
        </div>
      </>
    </section>
  );
};

export default Hero;
