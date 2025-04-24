import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQObj } from "@/features/faq/types";
import { fetchFAQ } from "@/lib/contentful";

// const chat_tool_icon = [
//   {
//     icon: <SiDiscord className="size-8" />,
//     label: "discord",
//   },
//   {
//     icon: <SiLine className="size-8" />,
//     label: "line",
//   },
//   {
//     icon: <SiSlack className="size-8" />,
//     label: "slack",
//   },
// ];

// const browser_tool_icon = [
//   {
//     icon: <SiArc className="size-8" />,
//     label: "arc",
//   },
//   {
//     icon: <SiGooglechrome className="size-8" />,
//     label: "googlechrome",
//   },
// ];

// const task_tool_icon = [
//   {
//     icon: <SiObsidian className="size-8" />,
//     label: "obsidian",
//   },
//   {
//     icon: <SiNotion className="size-8" />,
//     label: "notion",
//   },
//   {
//     icon: <SiTodoist className="size-8" />,
//     label: "todoist",
//   },
// ];

// const editor_tool_icon = [
//   {
//     icon: <SiVisualstudiocode className="size-8" />,
//     label: "visualstudiocode",
//   },
//   {
//     icon: <SiGithub className="size-8" />,
//     label: "github",
//   },
//   {
//     icon: <SiGithubcopilot className="size-8" />,
//     label: "githubcopilot",
//   },
// ];

// const design_tool_icon = [
//   {
//     icon: <SiFigma className="size-8" />,
//     label: "figma",
//   },
//   {
//     icon: <SiAdobexd className="size-8" />,
//     label: "adobexd",
//   },
// ];

// const knowledge_tool_icon = [
//   {
//     icon: <SiQiita className="size-8" />,
//     label: "qiita",
//   },
//   {
//     icon: <SiZenn className="size-8" />,
//     label: "zenn",
//   },
// ];
// const toolCategories = [
//   { title: "チャットツール", icons: chat_tool_icon },
//   { title: "ブラウザ", icons: browser_tool_icon },
//   { title: "タスク管理", icons: task_tool_icon },
//   { title: "開発", icons: editor_tool_icon },
//   { title: "デザイン", icons: design_tool_icon },
//   { title: "ナレッジ", icons: knowledge_tool_icon },
// ];

const FAQList = async () => {
  const faq = await fetchFAQ();
  console.log(faq.items);

  return (
    <div className="flex w-full flex-row items-start justify-center">
      <div className="m-3 w-full max-w-[700px] sm:m-6">
        <Accordion type="single" collapsible className="w-full">
          {faq.items.map((data: FAQObj) => (
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
                {/* {toolCategories.map((category, index) => (
                  <div key={category.title} className="mb-2 flex">
                    <div>
                      <p className="text-center text-muted-foreground">
                        {category.title}
                      </p>
                      <div className="mt-1 flex gap-2">
                        {category.icons.map((icon) => (
                          <div key={icon.label}>{icon.icon}</div>
                        ))}
                      </div>
                    </div>
                    {index < toolCategories.length - 1 && (
                      <Separator orientation="vertical" className="m-3" />
                    )}
                  </div>
                ))} */}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQList;
