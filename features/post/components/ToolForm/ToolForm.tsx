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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toolFormSchema } from "../../types/validation";
import type { z } from "zod";
import { getAllToolData, postToolData } from "@/app/utils/api/Tool/ToolAPI";

const ToolForm = () => {
  // const [toolData, setToolData] = useState<ToolObj[]>([]);
  const [toolData, setToolData] = useState([]);

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
  }, []);
  // 投稿フォームの設定
  const form = useForm({
    resolver: zodResolver(toolFormSchema),
    // defaultValues: {
    //   name: "",
    //   genre: "",
    //   color: "",
    //   technology: "",
    //   description: "",
    //   background: "",
    //   ingenuity: "",
    //   point: "",
    //   url: "",
    // },
  });

  async function onSubmit(value: z.infer<typeof toolFormSchema>) {
    postToolData(value);
  }

  return (
    <>
      <DataTable
        postData={toolData}
        categoryData={{
          categoryName: "tool",
          FormSchema: "toolFormSchema",
          updateFunc: "updateToolData",
          deleteFunc: "deleteToolData",
        }}
      />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Tool</CardTitle>
          <CardDescription>ツールを投稿します．</CardDescription>
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
