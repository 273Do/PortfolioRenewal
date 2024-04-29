"use client";

import type { ChangeEvent } from "react";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DataTable from "../DataTable/DataTable";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/app/utils/supabase/supabase";
import type { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { GalleryFormSchema } from "../../types/validation";
import { toast } from "sonner";

const GalleryForm = () => {
  const [date, setDate] = useState<Date>();
  const [fileData, setFileData] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string>("");

  // 投稿フォームの設定
  const form = useForm({
    resolver: zodResolver(GalleryFormSchema),
    defaultValues: { title: "", description: "", event_date: "", url: "" },
  });

  const handleImageChange = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!event.target.files || event.target.files.length == 0) {
      // 画像が選択されていないのでreturn
      return;
    }

    const file = event.target.files[0]; // 選択された画像を取得
    const filePath = `images/${uuidv4()}`; // 画像の保存先のpathを指定

    setFileData(file);
    setFilePath(filePath);
    console.log(file);
    console.log(filePath);
  };

  async function onSubmit(value: z.infer<typeof GalleryFormSchema>) {
    try {
      if (!fileData) {
        toast("画像が選択されていません．");
        return;
      }
      // 画像をsupabaseに保存する処理
      const { data, error } = await supabase.storage
        .from("gallery")
        .upload(filePath, fileData);

      if (error) {
        console.error(error);
      } else {
        // TODO 画像へのurlを使いたい場合
        const url = supabase.storage.from("gallery").getPublicUrl(filePath);
        console.log(url);

        //投稿処理

        // なぜか曜日が1日ズレるので修正
        const modifiedDate = new Date(value.event_date);
        modifiedDate.setDate(modifiedDate.getDate() + 1);
        value.event_date = modifiedDate;
        value.url = url.data.publicUrl;
        // await postMovieData(value);
        // window.location.reload();
      }
    } catch (error) {
      toast("ギャラリー投稿の作成に失敗しました．");
      console.error(error);
    }
  }

  return (
    <>
      <DataTable
        postData={[]}
        categoryData={{
          categoryName: "gallery",
          FormSchema: "GFormSchema",
          updateFunc: "updateGData",
          deleteFunc: "deleteGData",
        }}
      />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
          <CardDescription>趣味や活動の写真を投稿します．</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="タイトル" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="画像の説明" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full flex-row gap-4">
                <FormField
                  control={form.control}
                  name="event_date"
                  render={({ field }) => (
                    <FormItem className="w-44 space-y-1">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>日を選択</span>
                              )}
                              <CalendarIcon className="ml-auto size-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            // initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="file" //url
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel>Image</FormLabel>
                      <FormControl> */}
                <div className="w-full space-y-1">
                  <Label>Image</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="w-full cursor-pointer"
                    onChange={handleImageChange}
                  />
                </div>
                {/* </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start ">
              <Label htmlFor="password">Password</Label>
              <div className="mt-2 flex w-full flex-row gap-4">
                <Input id="password" type="password" />
                <Button type="submit">Save Gallery</Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default GalleryForm;
