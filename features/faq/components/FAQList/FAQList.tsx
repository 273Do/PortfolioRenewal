import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQObj } from "../../types";

const FAQList = ({ FAQData }: { FAQData: FAQObj[] }) => {
  return (
    <div className="flex size-full flex-row items-center justify-center">
      <div className="m-4 w-full max-w-[700px]">
        <Accordion type="single" collapsible className="w-full">
          {FAQData.map((data: FAQObj) => (
            <AccordionItem value={`item-${data.id}`} key={data.id}>
              <AccordionTrigger className="text-lg">
                {data.question}
              </AccordionTrigger>
              <AccordionContent>{data.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQList;
