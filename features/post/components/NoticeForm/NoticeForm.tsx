"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import type { z } from "zod";

import { useValidatePassword } from "@/app/hooks/post/useValidatePassword";
import {
  deleteNoticeData,
  getNoticeAllData,
  postNoticeData,
  updateNoticeData,
} from "@/app/utils/api/Notice/NoticeApi";
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
import type { NoticeObj } from "@/features/main/types";
import { cn } from "@/lib/utils";

import { noticeFormSchema } from "../../types/validation";
import DataTable from "../DataTable/DataTable";

const NoticeForm = () => {
  const [postData, setPostData] = useState<NoticeObj[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const post_data = await getNoticeAllData();
        setPostData(post_data);
      } catch (error) {
        // エラーハンドリング
        toast("お知らせの取得に失敗しました．");
        console.error(error);
      }
    };

    fetchPostData();
  }, []);

  // 投稿フォームの設定
  const form = useForm({
    resolver: zodResolver(noticeFormSchema),
    defaultValues: { content: "", event_date: new Date(), url: "" },
  });

  // 更新フォームの設定
  // const editForm = useForm({
  //   resolver: zodResolver(noticeFormSchema),
  //   defaultValues: { content: "", event_date: "" },
  // });

  // パスワードが正しいか確認するhooks
  const { validatePassword, isValid } = useValidatePassword();

  // お知らせの送信
  async function onSubmit(value: z.infer<typeof noticeFormSchema>) {
    if (isValid) {
      try {
        // なぜか曜日が1日ズレるので修正
        const modifiedDate = new Date(value.event_date);
        modifiedDate.setDate(modifiedDate.getDate() + 1);
        value.event_date = modifiedDate;
        await postNoticeData(value);
        window.location.reload();
      } catch (error) {
        toast("お知らせの作成に失敗しました．");
        console.error(error);
      }
    } else {
      toast("パスワードが違います．");
    }
  }

  return (
    <>
      <DataTable
        postData={postData}
        categoryData={{
          categoryName: "notice",
          FormSchema: noticeFormSchema,
          updateFunc: updateNoticeData,
          deleteFunc: deleteNoticeData,
        }}
      />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Notice</CardTitle>
          <CardDescription>お知らせや実績を投稿します．</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
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
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel>Notice</FormLabel>
                      <FormControl>
                        <Input placeholder="お知らせ内容" {...field} />
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
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                      <Input placeholder="url" type="url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl> */}
              <Label htmlFor="password">Password</Label>
              <div className="mt-2 flex w-full flex-row gap-4">
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => validatePassword(e.target.value)}
                />
                <Button type="submit">Save Notice</Button>
              </div>
              {/* </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              {/* <Label htmlFor="password">Password</Label>
              <div className="mt-2 flex w-full flex-row gap-4">
                <Input id="password" type="password" />
                <Button>Save Notice</Button>
              </div> */}
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default NoticeForm;
