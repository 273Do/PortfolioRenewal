"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import DataTable from "../DataTable/DataTable";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toolFormSchema } from "../../types/validation";
import type { z } from "zod";
import {
  getAllToolData,
  postToolData,
  updateToolData,
} from "@/app/utils/api/Tool/ToolAPI";
import type { ToolObj } from "@/features/tool/types";
import { toast } from "sonner";

const ToolForm = () => {
  // const [toolData, setToolData] = useState<ToolObj[]>([]);
  const [toolData, setToolData] = useState<ToolObj[]>([]);
  // const [select, setSelect] = useState<number>(0);
  const [nowData, setNowData] = useState<ToolObj | null | undefined>(null);

  useEffect(() => {
    // getAllToolData();
    const fetchToolData = async () => {
      try {
        const tool_data = await getAllToolData();
        setToolData(tool_data);
        // console.log(tool_data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToolData();
  }, [nowData]);

  // フォーム初期値
  const defaultValues = {
    name: "",
    genre: "",
    color: "",
    description: "",
    background: "",
    ingenuity: "",
    point: "",
    url: "",
    period: "",
    tech0: "",
    tech1: "",
    tech2: "",
    tech3: "",
    tech4: "",
    tech5: "",
    tech6: "",
    tech7: "",
    tech8: "",
    tech9: "",
  };
  const form = useForm({
    resolver: zodResolver(toolFormSchema),
    defaultValues,
  });

  const { reset } = form;

  useEffect(() => {
    if (nowData != null) {
      reset({
        name: nowData.name,
        genre: nowData.genre.name,
        color: nowData.color,
        description: nowData.description,
        background: nowData.background,
        ingenuity: nowData.ingenuity,
        point: nowData.point,
        url: nowData.url,
        period: nowData.period,
        tech0: nowData.technology.tech0,
        tech1: nowData.technology.tech1,
        tech2: nowData.technology.tech2,
        tech3: nowData.technology.tech3 || "",
        tech4: nowData.technology.tech4 || "",
        tech5: nowData.technology.tech5 || "",
        tech6: nowData.technology.tech6 || "",
        tech7: nowData.technology.tech7 || "",
        tech8: nowData.technology.tech8 || "",
        tech9: nowData.technology.tech9 || "",
      });
    } else {
      reset(defaultValues);
    }
  }, [nowData, reset]);

  // セレクターで選択したときの処理
  async function handleSelect(e: string) {
    // setSelect(Number(e));
    // console.log(e);
    // if (select != 0)

    if (Number(e) != 0) {
      const selectData = toolData.find(
        (item: ToolObj) => item.id === Number(e)
      );
      setNowData(selectData);
    } else setNowData(null);
  }

  async function onSubmit(value: z.infer<typeof toolFormSchema>) {
    if (nowData) {
      try {
        console.log(value);
        console.log("更新ボタン");
        await updateToolData(String(nowData.id), value);
        window.location.reload();
      } catch (error) {
        toast("更新に失敗しました．");
        console.error(error);
      }
    } else {
      try {
        await postToolData(value);
        window.location.reload();
      } catch (error) {
        toast("投稿に失敗しました．");
        console.error(error);
      }
    }
  }

  return (
    <>
      {/* <DataTable
        postData={toolData}
        categoryData={{
          categoryName: "tool",
          FormSchema: "toolFormSchema",
          updateFunc: "updateToolData",
          deleteFunc: "deleteToolData",
        }}
      /> */}
      <Card className="mt-3">
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>Tool</CardTitle>
            <CardDescription>
              ツールを{nowData ? "修正" : "投稿"}します．
            </CardDescription>
          </div>
          <Select
            onValueChange={(e: string) => handleSelect(e)}
            defaultValue="0"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a post" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Post</SelectLabel> */}
                <SelectItem value="0">Post Tool</SelectItem>
                {toolData.map((item: ToolObj) => (
                  <SelectItem value={String(item.id)} key={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="ツール名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full flex-row gap-4">
                <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel>Genre</FormLabel>
                      <FormControl>
                        <Input placeholder="ジャンル" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="period"
                  render={({ field }) => (
                    <FormItem className="w-48 space-y-1">
                      <FormLabel>Period</FormLabel>
                      <FormControl>
                        <Input placeholder="開発期間" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem className="w-48 space-y-1">
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input placeholder="カラーコード" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <div className="space-y-1">
                <Label htmlFor="technology">Technology</Label>
                <Input id="technology" placeholder="技術：最大10個まで" />
              </div> */}
              <div>
                <FormLabel>Technology</FormLabel>
                <div className="flex w-full flex-row gap-4 pb-2">
                  <FormField
                    control={form.control}
                    name="tech0"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech1"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech2"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech3"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech4"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-full flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="tech5"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech6"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術7" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech7"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術8" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech8"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術9" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tech9"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input placeholder="技術10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="説明" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="gap-4 space-y-1">
                <Label htmlFor="detail">Detail</Label>
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1 pb-2">
                      {/* <FormLabel>Description</FormLabel> */}
                      <FormControl>
                        <Textarea placeholder="背景" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ingenuity"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1 pb-2">
                      {/* <FormLabel>Description</FormLabel> */}
                      <FormControl>
                        <Textarea placeholder="工夫" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="point"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1 pb-2">
                      {/* <FormLabel>Description</FormLabel> */}
                      <FormControl>
                        <Textarea placeholder="課題" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input placeholder="URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start ">
              <Label htmlFor="password">Password</Label>
              <div className="mt-2 flex w-full flex-row gap-4">
                <Input id="password" type="password" />
                <Button>Save Tool</Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default ToolForm;
