"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { z } from "zod";

import { useValidatePassword } from "@/app/hooks/useValidatePassword";
import {
  deleteFAQData,
  getFAQData,
  postFAQData,
  updateFAQData,
} from "@/app/utils/api/FAQ/FAQApi";
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
import { Textarea } from "@/components/ui/textarea";
import type { FAQObj } from "@/features/faq/types";

import { FAQFormSchema } from "../../types/validation";
import DataTable from "../DataTable/DataTable";

const FAQForm = () => {
  const [faqData, setFaqData] = useState<FAQObj[]>([]);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const faq_data = await getFAQData();
        setFaqData(faq_data);
      } catch (error) {
        toast("FAQの取得に失敗しました．");
        console.error(error);
      }
    };

    fetchFAQData();
  }, []);

  // 投稿フォームの設定
  const form = useForm({
    resolver: zodResolver(FAQFormSchema),
    defaultValues: { question: "", answer: "" },
  });

  // パスワードが正しいか確認するhooks
  const { validatePassword, isValid } = useValidatePassword();

  async function onSubmit(value: z.infer<typeof FAQFormSchema>) {
    if (isValid) {
      try {
        await postFAQData(value);
        window.location.reload();
      } catch (error) {
        toast("FAQの作成に失敗しました．");
        console.error(error);
      }
    } else {
      toast("パスワードが違います．");
    }
  }

  return (
    <>
      <DataTable
        postData={faqData}
        categoryData={{
          categoryName: "faq",
          FormSchema: FAQFormSchema,
          updateFunc: updateFAQData,
          deleteFunc: deleteFAQData,
        }}
      />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
          <CardDescription>質問と回答を投稿します．</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input placeholder="質問内容" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>Answer</FormLabel>
                    <FormControl>
                      <Textarea placeholder="回答" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start ">
              <Label htmlFor="password">Password</Label>
              <div className="mt-2 flex w-full flex-row gap-4">
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => validatePassword(e.target.value)}
                />
                <Button>Save FAQ</Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <div className="h-4"></div>
    </>
  );
};

export default FAQForm;
