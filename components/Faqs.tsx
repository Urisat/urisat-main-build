import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faqs = () => {
  return (
    <div className="justify-center text-primary-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-2 mb-4 bg-black-1 border-x-Textgradient">
      <div className="flex gap-1 flex-col">
        <Accordion type="single" className="shadow-md shadow-black-1 p-2 text-center rounded-[5px]" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="rounded-full border-1 border-black-1 font-semibold">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-justify">
              Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" className="shadow-md shadow-black-1 p-2 text-center rounded-[5px]" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="rounded-full border-1 border-black-1 font-semibold">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-justify">
              Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" className="shadow-md shadow-black-1 p-2 text-center rounded-[5px]" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="rounded-full border-1 border-black-1 font-semibold">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-justify">
              Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
       
      </div>
      <div className="flex-col">

      </div>
    </div>
  );
};

export default Faqs;
