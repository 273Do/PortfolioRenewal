import React from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Tool from "@/features/tool/components/index";
import type { ToolObj } from "@/features/tool/types";

import { getAllToolData } from "../utils/api/Tool/ToolAPI";
import { getNextId, sortedToolArray } from "../utils/function";

export const metadata: Metadata = {
  title: "273* Portfolio | Tool",
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [toolData, setToolData] = useState<ToolObj[]>([]);
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [nowData, setNowData] = useState<ToolObj | null>(null);
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [state, setState] = useState({
  //   targetIndex: -1,
  //   previousId: -1,
  //   nextId: -1,
  // });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   const fetchToolData = async () => {
  //     try {
  //       const AllToolData = await getAllToolData();
  //       console.log(searchParams.id);
  //       setToolData(sortedToolArray(AllToolData));
  //       setNowData(
  //         AllToolData.find(
  //           (item: ToolObj) => item.id === Number(searchParams.id)
  //         )
  //       );
  //       const nav_state = getNextId(AllToolData, Number(searchParams.id));
  //       setState(nav_state);
  //     } catch (error) {
  //       // エラーハンドリング
  //       toast("toolの取得に失敗しました．");
  //       console.error(error);
  //     }
  //   };
  //   fetchToolData();
  // }, [searchParams]);

  const AllToolData = await getAllToolData();
  const toolData = sortedToolArray(AllToolData);
  const nowData = toolData.find(
    (item: ToolObj) => item.id === Number(searchParams.id)
  );
  const { targetIndex, previousId, nextId } = getNextId(
    toolData,
    Number(searchParams.id)
  );

  return (
    <main className="h-screen">
      <Tool.Three
        tool_id={nowData.id}
        three_text={nowData.name.replace("\\n", "\n")}
        three_color={nowData.color}
      />
      <div className="pointer-events-none fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center bg-transparent">
          <Card className="flex size-full flex-col bg-transparent">
            <CardHeader>
              <CardTitle>{nowData.name.replace("\\n", " ")}</CardTitle>
              <CardDescription>{nowData.description}</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="size-full p-6">
              <div className="grid size-full grid-flow-col grid-cols-5 gap-4">
                <div className="... col-span-5 col-start-1 row-start-3 flex items-center justify-between">
                  <Link href={`/tool?id=${previousId}`}>
                    <Button
                      variant="outline"
                      className={`pointer-events-auto bg-transparent p-7 ${
                        previousId === -1
                          ? "pointer-events-none text-muted-foreground"
                          : ""
                      }`}
                    >
                      {"<"}
                    </Button>
                  </Link>
                  <Link href={`/tool?id=${nextId}`}>
                    <Button
                      variant="outline"
                      className={`pointer-events-auto bg-transparent p-7 ${
                        nextId === -1
                          ? "pointer-events-none text-muted-foreground"
                          : ""
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
                      <Tool.Label label={nowData.genre.name} />
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-1 row-start-5 flex h-full w-[522px] items-end">
                  <Card className="flex h-[166px] w-full items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                    <CardContent className="p-0">
                      <MarqueeWidget technologyData={[nowData.technology]} />
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-4 row-start-5 flex flex-col items-end justify-end gap-4">
                  <Card className="bg-transparent p-4">
                    <CardContent className="p-0">
                      <p>
                        {targetIndex + 1}/{toolData.length}
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
