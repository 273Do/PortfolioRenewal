"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { z } from "zod";

import { useValidatePassword } from "@/app/hooks/useValidatePassword";
import {
  getAvailableTechnologyData,
  updateTechnologyData,
} from "@/app/utils/api/Technology/TechnologyApi";
import { Button } from "@/components/ui/button";
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
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import type { TechnologyObj } from "@/features/main/types";

import { technologyFormSchema } from "../../types/validation";

const TechnologyForm = () => {
  const [technologyData, setTechnologyData] = useState<TechnologyObj[]>([]);

  useEffect(() => {
    const fetchTechnologyData = async () => {
      try {
        const technology_data = await getAvailableTechnologyData();
        setTechnologyData(technology_data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTechnologyData();
  }, []);

  // 非同期に初期値を設定
  useEffect(() => {
    form.reset(technologyData[0]);
  }, [technologyData[0]]);

  // フォームの設定
  const form = useForm({
    resolver: zodResolver(technologyFormSchema),
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setTechnologyData((prevData) => {
      const newData = [...prevData];
      newData[0] = { ...newData[0], [name]: value };
      return newData;
    });
    // console.log(technologyData);
  };

  // パスワードが正しいか確認するhooks
  const { validatePassword, isValid } = useValidatePassword();

  // 使用技術の送信
  async function onSubmit(value: z.infer<typeof technologyFormSchema>) {
    if (isValid) {
      try {
        await updateTechnologyData(value);
        toast("使用可能技術の更新をしました．");
      } catch (error) {
        toast("使用可能技術の更新に失敗しました．");
        console.error(error);
      }
    } else {
      toast("パスワードが違います．");
    }
  }

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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onChange={(e) => handleInputChange(e)}
          >
            <CardContent className="flex flex-col items-center space-y-2">
              <Card className="... flex w-[522px] items-center justify-center overflow-hidden p-0 py-8">
                <CardContent className="p-0">
                  <MarqueeWidget technologyData={technologyData} />
                </CardContent>
              </Card>
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
                <Button type="submit">Save Technology</Button>
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

export default TechnologyForm;
