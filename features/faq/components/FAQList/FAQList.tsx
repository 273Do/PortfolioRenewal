"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SiArc,
  SiDiscord,
  SiFigma,
  SiGithub,
  SiGithubcopilot,
  SiGooglechrome,
  SiLine,
  SiMicrosoftteams,
  SiNotion,
  SiQiita,
  SiSlack,
  SiTodoist,
  SiVisualstudiocode,
  SiWarp,
  SiZenn,
} from "@icons-pack/react-simple-icons";
import type { FAQObj } from "../../types";
import { Separator } from "@/components/ui/separator";

const chat_tool_icon = [
  {
    icon: <SiDiscord className="size-8" />,
    label: "discord",
  },
  {
    icon: <SiLine className="size-8" />,
    label: "line",
  },
  {
    icon: <SiSlack className="size-8" />,
    label: "slack",
  },
  {
    icon: <SiMicrosoftteams className="size-8" />,
    label: "microsftteams",
  },
];

const browser_tool_icon = [
  {
    icon: <SiArc className="size-8" />,
    label: "arc",
  },
  {
    icon: <SiGooglechrome className="size-8" />,
    label: "googlechrome",
  },
];

const task_tool_icon = [
  {
    icon: <SiNotion className="size-8" />,
    label: "notion",
  },
  {
    icon: <SiTodoist className="size-8" />,
    label: "todoist",
  },
];

const editor_tool_icon = [
  {
    icon: <SiVisualstudiocode className="size-8" />,
    label: "visualstudiocode",
  },
  {
    icon: <SiWarp className="size-8" />,
    label: "warp",
  },
  {
    icon: <SiGithub className="size-8" />,
    label: "github",
  },
  {
    icon: <SiGithubcopilot className="size-8" />,
    label: "githubcopilot",
  },
  {
    icon: <SiFigma className="size-8" />,
    label: "figma",
  },
];

const knowledge_tool_icon = [
  {
    icon: <SiQiita className="size-8" />,
    label: "qiita",
  },
  {
    icon: <SiZenn className="size-8" />,
    label: "zenn",
  },
];
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
          <AccordionItem value="test">
            <AccordionTrigger className="text-lg">使用ツール</AccordionTrigger>
            <AccordionContent>
              <div className="mb-2 flex justify-center">
                <div className="flex">
                  <div>
                    <p className="text-center text-muted-foreground">
                      チャットツール
                    </p>
                    <div className="mt-1 flex gap-2">
                      {chat_tool_icon.map((icon) => (
                        <div key={icon.label}>{icon.icon}</div>
                      ))}
                    </div>
                  </div>
                  <Separator orientation="vertical" className="m-3" />
                </div>
                <div className="flex">
                  <div>
                    <p className="text-center text-muted-foreground">
                      ブラウザ
                    </p>
                    <div className="mt-1 flex gap-2">
                      {browser_tool_icon.map((icon) => (
                        <div key={icon.label}>{icon.icon}</div>
                      ))}
                    </div>
                  </div>
                  <Separator orientation="vertical" className="m-3" />
                </div>
                <div className="flex">
                  <div>
                    <p className="text-center text-muted-foreground">
                      タスク管理
                    </p>
                    <div className="mt-1 flex gap-2">
                      {task_tool_icon.map((icon) => (
                        <div key={icon.label}>{icon.icon}</div>
                      ))}
                    </div>
                  </div>
                  <Separator orientation="vertical" className="m-3" />
                </div>
                <div className="flex">
                  <div>
                    <p className="text-center text-muted-foreground">開発</p>
                    <div className="mt-1 flex gap-2">
                      {editor_tool_icon.map((icon) => (
                        <div key={icon.label}>{icon.icon}</div>
                      ))}
                    </div>
                  </div>
                  <Separator orientation="vertical" className="m-3" />
                </div>
                <div className="flex">
                  <div>
                    <p className="text-center text-muted-foreground">
                      ナレッジ
                    </p>
                    <div className="mt-1 flex gap-2">
                      {knowledge_tool_icon.map((icon) => (
                        <div key={icon.label}>{icon.icon}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQList;
