import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import type { FAQObj } from "@/features/faq/types";
import { fetchFAQ, fetchTools } from "@/lib/contentful";

const FAQList = async () => {
  const { items: faqs } = await fetchFAQ();
  const tools = await fetchTools();

  return (
    <div className="flex w-full flex-row items-start justify-center">
      <div className="m-3 w-full max-w-[700px] sm:m-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((data: FAQObj) => (
            <AccordionItem value={`item-${data.sys.id}`} key={data.sys.id}>
              <AccordionTrigger className="text-start text-lg">
                {data.title}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-wrap">
                <div className="md">
                  <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value="test">
            <AccordionTrigger className="text-lg">使用ツール</AccordionTrigger>
            <AccordionContent>
              <div className="mb-2 flex w-full flex-wrap justify-center">
                <MarqueeWidget technologyData={tools.items[0].toolObj} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQList;
