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
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import DataTable from "../DataTable/DataTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { movieFormSchema } from "../../types/validation";
import type { MovieObj } from "@/features/movie/types";
import {
  deleteMovieData,
  getMovieData,
  postMovieData,
  updateMovieData,
} from "@/app/utils/api/Movie/MovieApi";
import type { z } from "zod";
import { useValidatePassword } from "@/app/hooks/useValidatePassword";

const MovieForm = () => {
  const [movieData, setMovieData] = useState<MovieObj[]>([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movie_data = await getMovieData();
        setMovieData(movie_data);
      } catch (error) {
        toast("映像投稿の取得に失敗しました．");
        console.error(error);
      }
    };

    fetchMovieData();
  }, []);

  // 投稿フォームの設定
  const form = useForm({
    resolver: zodResolver(movieFormSchema),
    defaultValues: { title: "", description: "", url: "" },
  });

  // パスワードが正しいか確認するhooks
  const { validatePassword, isValid } = useValidatePassword();

  async function onSubmit(value: z.infer<typeof movieFormSchema>) {
    if (isValid) {
      try {
        await postMovieData(value);
        window.location.reload();
      } catch (error) {
        toast("映像投稿の作成に失敗しました．");
        console.error(error);
      }
    } else {
      toast("パスワードが違います．");
    }
  }

  return (
    <>
      <DataTable
        postData={movieData}
        categoryData={{
          categoryName: "movie",
          FormSchema: movieFormSchema,
          updateFunc: updateMovieData,
          deleteFunc: deleteMovieData,
        }}
      />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Movie</CardTitle>
          <CardDescription>制作した映像を投稿します．</CardDescription>
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
                      <Input placeholder="映像の説明" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                      <Input placeholder="動画URL" type="url" {...field} />
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
                <Button>Save Movie</Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default MovieForm;
