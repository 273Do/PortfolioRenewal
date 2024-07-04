"use client";

import type { ChangeEvent } from "react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import type { z } from "zod";

import { useValidatePassword } from "@/app/hooks/post/useValidatePassword";
import {
  deleteGalleryData,
  getGalleryData,
  postGalleryData,
  updateGalleryData,
} from "@/app/utils/api/Gallery/GalleryApi";
import { supabase } from "@/app/utils/supabase/supabase";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { GalleryObj } from "@/features/gallery/types";
import { cn } from "@/lib/utils";

import { galleryFormSchema } from "../../types/validation";
import DataTable from "../DataTable/DataTable";

const GalleryForm = () => {
  const [galleryData, setGalleryData] = useState<GalleryObj[]>([]);
  const [fileData, setFileData] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string>("");

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const gallery_data = await getGalleryData();
        setGalleryData(gallery_data);
      } catch (error) {
        toast("Galleryの取得に失敗しました．");
        console.error(error);
      }
    };

    fetchGalleryData();
  }, []);

  // 投稿フォームの設定
  const form = useForm({
    resolver: zodResolver(galleryFormSchema),
    defaultValues: {
      title: "",
      description: "",
      event_date: new Date(),
      url: "",
    },
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
    // console.log(file);
    // console.log(filePath);
  };

  // パスワードが正しいか確認するhooks
  const { validatePassword, isValid } = useValidatePassword();

  async function onSubmit(
    value: z.infer<typeof galleryFormSchema> & { url: string }
  ) {
    if (isValid) {
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
          toast("画像の保存に失敗しました．");
          console.error(error);
        } else {
          // TODO 画像へのurlを使いたい場合
          const url = supabase.storage.from("gallery").getPublicUrl(filePath);

          // なぜか曜日が1日ズレるので修正
          const modifiedDate = new Date(value.event_date);
          modifiedDate.setDate(modifiedDate.getDate() + 1);
          value.event_date = modifiedDate;
          // (value as z.infer<typeof galleryFormSchema> & { url: string }).url =
          //   url.data.publicUrl;

          value.url = url.data.publicUrl;

          await postGalleryData(value);
          window.location.reload();
        }
      } catch (error) {
        toast("ギャラリー投稿の作成に失敗しました．");
        console.error(error);
      }
    } else {
      toast("パスワードが違います．");
    }
  }

  return (
    <>
      <DataTable
        postData={galleryData}
        categoryData={{
          categoryName: "gallery",
          FormSchema: galleryFormSchema,
          updateFunc: updateGalleryData,
          deleteFunc: deleteGalleryData,
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
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start ">
              <Label htmlFor="password">Password</Label>
              <div className="mt-2 flex w-full flex-row gap-4">
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => validatePassword(e.target.value)}
                />
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
