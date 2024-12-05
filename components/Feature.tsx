// import { projects } from '@/constant'
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { projects } from "@/constant";
import { Button } from "./ui/button";

const Feature = () => {
  return (
    <section
      id="feature"
      className="h-auto mb-4 mt-8 rounded-xl border-none shadow-primary-300"
    >
      <div className="flex flex-col mt-4 justify-center items-center m-auto">
        <Button
          size={"lg"}
          variant={"destructive"}
          className="bg-black-1 border border-primary-700 mb-4 rounded-full"
        >
          Our Features
        </Button>
      </div>
      <h2 className="text-center text-3xl w-30">
        Explore the poweful features driving innovation <br /> and
        decentralization in web
      </h2>
      <div className="flex flex-col w-full mt-4 lg:flex-row justify-center gap-2 flex-wrap">
        {Array.from(
          projects.map((item, index) => {
            return (
              <Card
                key={index}
                className="mt-2 w-96 h-48 justify-center items-center mb-2 flex-wrap gap-10 border-yellow-400 border-y-0 shadow-l-xs shadow-primary-700 border-x"
              >
                <div className="w-10 h-10 ml-6 -mt-5 bg-black-1 rounded-xl p-2 border border-primary-700"></div>
                <CardContent className=" text-justify flex-auto mt-0 flex flex-wrap overflow-hidden">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <ul className="text-left flex flex-wrap">
                  <li>{item.description}</li>
               <li>{item.Subtitle}</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  {/* <Button
                    size={"lg"}
                    variant={"destructive"}
                    className="bg-black-1 border w-full border-primary-700 rounded-full"
                  >
                    More
                  </Button> */}
                </CardFooter>
              </Card>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Feature;
