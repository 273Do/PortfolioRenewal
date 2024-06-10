"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Tool from "@/features/tool/components/index";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

import type { Metadata } from "next";
import { toast } from "sonner";
import { getAllToolData } from "../utils/api/Tool/ToolAPI";
import type { ToolObj } from "@/features/tool/types";
import type { TechnologyObj } from "@/features/main/types";
import { getNextId } from "../utils/function";

// export const metadata: Metadata = {
//   title: "273* Portfolio | Tool",
// };

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toolData, setToolData] = useState<ToolObj[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nowData, setNowData] = useState<ToolObj>({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState({
    targetIndex: -1,
    previousId: -1,
    nextId: -1,
  });

  console.log(searchParams.id);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchToolData = async () => {
      try {
        const AllToolData = await getAllToolData();
        setToolData(AllToolData);
        setNowData(
          AllToolData.find(
            (item: ToolObj) => item.id === Number(searchParams.id)
          )
        );
        const nav_state = getNextId(AllToolData, Number(searchParams.id));
        setState(nav_state);
      } catch (error) {
        // エラーハンドリング
        toast("toolの取得に失敗しました．");
        console.error(error);
      }
    };

    fetchToolData();
  }, [searchParams]);
  console.log(toolData);

  return (
    <main className="h-screen">
      <title>273* Portfolio | Tool</title>
      <meta name="description" content="273* Portfolio | Tool" />
      {/* {toolData.length === 0 ? (
        <></>
      ) : (
        <Tool.Three three_text={nowData.name} three_color={nowData.color} />
        // <Tool.Three three_text={nowData.name} three_color="#bfcde8" />
      )} */}
      {JSON.stringify(nowData) === undefined ? (
        <></>
      ) : nowData.name == undefined ? (
        <></>
      ) : (
        // <Tool.Three
        //   tool_id={nowData.id}
        //   three_text={nowData.name}
        //   three_color={nowData.color}
        // />
        <></>
      )}
      <div className="pointer-events-none fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center bg-transparent">
          <Card className="flex size-full flex-col bg-transparent">
            <CardHeader>
              <CardTitle>
                {JSON.stringify(nowData) === undefined
                  ? "no data"
                  : nowData.name == undefined
                  ? "loading.."
                  : nowData.name}
              </CardTitle>
              <CardDescription>
                {JSON.stringify(nowData) === undefined
                  ? "no data"
                  : nowData.description == undefined
                  ? "loading.."
                  : nowData.description}
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="size-full p-6">
              <div className="grid size-full grid-flow-col grid-cols-5 gap-4">
                <div className="... col-span-5 col-start-1 row-start-3 flex items-center justify-between">
                  <Link
                    href={`/tool?id=${
                      JSON.stringify(nowData) === undefined
                        ? ""
                        : nowData.technology == undefined
                        ? ""
                        : `${state.previousId}`
                    }`}
                  >
                    <Button
                      variant="outline"
                      className={`pointer-events-auto bg-transparent p-7 ${
                        JSON.stringify(nowData) === undefined
                          ? ""
                          : nowData.technology == undefined
                          ? ""
                          : `${
                              state.previousId === -1
                                ? "pointer-events-none text-muted-foreground"
                                : ""
                            }`
                      }
                      }`}
                    >
                      {"<"}
                    </Button>
                  </Link>
                  <Link
                    href={`/tool?id=${
                      JSON.stringify(nowData) === undefined
                        ? ""
                        : nowData.technology == undefined
                        ? ""
                        : `${state.nextId}`
                    }`}
                  >
                    <Button
                      variant="outline"
                      className={`pointer-events-auto bg-transparent p-7 ${
                        JSON.stringify(nowData) === undefined
                          ? ""
                          : nowData.technology == undefined
                          ? ""
                          : `${
                              state.nextId === -1
                                ? "pointer-events-none text-muted-foreground"
                                : ""
                            }`
                      }
                      }`}
                    >
                      {">"}
                    </Button>
                  </Link>
                </div>
                <div className="... col-span-2 col-start-4 row-span-1 row-start-1 flex items-start justify-end">
                  <Card className="bg-transparent">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle>Genre</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-end p-3">
                      {/* <Tool.Label label={now}/> */}
                      {JSON.stringify(nowData) === undefined ? (
                        "no data"
                      ) : nowData.genre == undefined ? (
                        "loading.."
                      ) : (
                        <Tool.Label label={nowData.genre.name} />
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-1 row-start-5 flex h-full w-[522px] items-end">
                  <Card className="flex h-[166px] w-full items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                    <CardContent className="p-0">
                      {/* {toolData.length === 0 ? (
                        <></>
                      ) : (
                        <MarqueeWidget technologyData={[nowData.technology]} />
                      )} */}
                      {JSON.stringify(nowData) === undefined ? (
                        "no data"
                      ) : nowData.technology == undefined ? (
                        "loading.."
                      ) : (
                        <MarqueeWidget technologyData={[nowData.technology]} />
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-4 row-start-5 flex flex-col items-end justify-end gap-4">
                  <Card className="bg-transparent p-4">
                    <CardContent className="p-0">
                      <p>
                        {JSON.stringify(nowData) === undefined
                          ? "no data"
                          : nowData.technology == undefined
                          ? "loading..."
                          : `${state.targetIndex + 1}/${toolData.length}`}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-transparent p-4">
                    <CardContent className="p-0">
                      <Tool.Annotation />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
