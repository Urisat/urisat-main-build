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
      id="featur"
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
      <div className="flex flex-wrap md:flex-row lg:flex-row gap-3 justify-center mt-4 items-center">
        {Array.from(
          projects.map((item, index) => {
            return (
              <Card
                key={index}
                className="mt-4 h-auto justify-center items-center mb-4 flex-wrap border-yellow-400 border-y-0 shadow-l-xs shadow-primary-700 border-x"
              >
                <div className="w-10 h-10 ml-6 -mt-5 bg-black-1 rounded-xl p-2 border border-primary-700"></div>
                <CardContent className="w-60 flex-auto mt-auto">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <ul className="text-pretty">
                    <li>{item.description}</li>
                    <li>{item.link}</li>.
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    size={"lg"}
                    variant={"destructive"}
                    className="bg-black-1 border-1 w-full border-primary-700 rounded-full"
                  >
                    More
                  </Button>
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
