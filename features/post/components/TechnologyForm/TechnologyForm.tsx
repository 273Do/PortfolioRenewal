"use client";
import React from "react";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { noticeFormSchema } from "../../types/validation";
import MarqueeWidget from "@/features/Marquee/components/Marquee";

const TechnologyForm = () => {
  // フォームの設定
  const form = useForm({
    resolver: zodResolver(noticeFormSchema),
    defaultValues: { technology: "" },
  });

  async function onSubmit() {}

  return (
    <>
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Technology</CardTitle>
          <CardDescription>
            使用技術可能技術の表示の設定を行います．
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col items-center space-y-2">
              <Card className="... flex w-[522px] items-center justify-center overflow-hidden p-0 py-8">
                <CardContent className="p-0">
                  <MarqueeWidget />
                </CardContent>
              </Card>
              <div className="flex w-full flex-row gap-4">
                <FormField
                  control={form.control}
                  name="technology"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel>Technology</FormLabel>
                      <FormControl>
                        <Input placeholder="技術：最大10個まで" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="flex w-full flex-row gap-4">
                        <Input id="password" type="password" {...field} />
                        <Button>Save Technology</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default TechnologyForm;
