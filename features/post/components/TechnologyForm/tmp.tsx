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
import { technologyFormSchema } from "../../types/validation";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import type { TechnologyObj, TechnologyOnlyObj } from "@/features/main/types";
import { getAvailableTechnologyData } from "@/app/utils/api/Technology/TechnologyApi";
import type { z } from "zod";

const TechnologyForm = () => {
  const [technologyData, setTechnologyData] = useState<TechnologyObj[]>([]);
  const [defaultFormValues, setDefaultFormValues] =
    useState<TechnologyOnlyObj>();
  // const iconsArray = Array(10)
  //   .fill()
  //   .map((_, index) => technologyData[0][`tech${index}`])
  //   .filter((icon) => icon !== null);

  // const defaultValues: TechnologyObj={};

  useEffect(() => {
    const fetchTechnologyData = async () => {
      try {
        const technology_data = await getAvailableTechnologyData();
        setTechnologyData(technology_data);

        console.log("default", technology_data[0]);
        setDefaultFormValues(technology_data[0]);
        // setDefaultFormValues({
        //   tech0: technology_data[0].tech0,
        //   tech1: technology_data[0].tech1,
        // });

        // const techKeys = Object.keys(technology_data).filter((key) =>
        //   key.startsWith("tech")
        // ) as string[];

        // const techValues = techKeys.map((key) => technology_data[key]);
        // setDefaultValues(techValues);
        // console.log(defaultFormValues);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTechnologyData();
  }, []);

  // useEffect(() => {
  //   console.log(defaultValues);
  // }, [defaultValues]);
  // フォームの設定
  const form = useForm({
    resolver: zodResolver(technologyFormSchema),
    defaultValues: {
      // tech0,
      // tech1,
      // tech2,
      // tech3,
      // tech4,
      // tech5,
      // tech6,
      // tech7,
      // tech8,
      // tech9,
    },
  });

  async function onSubmit(value: z.infer<typeof technologyFormSchema>) {
    console.log(value);
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col items-center space-y-2">
              <Card className="... flex w-[522px] items-center justify-center overflow-hidden p-0 py-8">
                <CardContent className="p-0">
                  <MarqueeWidget technologyData={technologyData} />
                </CardContent>
              </Card>
              {/* {defaultValues.length !== 0 && } */}
              <div>
                <FormLabel>Technology</FormLabel>
                <div className="flex w-full flex-row gap-4 pb-2">
                  <FormField
                    control={form.control}
                    name="tech0"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormControl>
                          <Input
                            placeholder="技術1"
                            {...field}
                            // defaultValue={defaultValues.tech0}
                          />
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
                          <Input
                            placeholder="技術2"
                            {...field}
                            // defaultValue={defaultValues.tech1}
                          />
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
                          <Input
                            placeholder="技術3"
                            {...field}
                            // defaultValue={defaultValues.tech2}
                          />
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
                          <Input
                            placeholder="技術4"
                            {...field}
                            // defaultValue={defaultValues.tech3}
                          />
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
                          <Input
                            placeholder="技術5"
                            {...field}
                            // defaultValue={defaultValues.tech4}
                          />
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
                          <Input
                            placeholder="技術6"
                            {...field}
                            // defaultValue={defaultValues.tech5}
                          />
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
                          <Input
                            placeholder="技術7"
                            {...field}
                            // defaultValue={defaultValues.tech6}
                          />
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
                          <Input
                            placeholder="技術8"
                            {...field}
                            // defaultValue={defaultValues.tech7}
                          />
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
                          <Input
                            placeholder="技術9"
                            {...field}
                            // defaultValue={defaultValues.tech8}
                          />
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
                          <Input
                            placeholder="技術10"
                            {...field}
                            // defaultValue={defaultValues.tech9}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
