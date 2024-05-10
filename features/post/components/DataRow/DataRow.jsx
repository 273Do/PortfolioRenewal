"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, X, Forward, CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const DataRow = ({ data, categoryData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const Ref = useRef();
  const Ref_second = useRef();
  const Ref_third = useRef();

  const { categoryName, ...editData } = categoryData;
  // categoryDataからcategoryNameとそれ以外をeditDataとして取得

  const [date, setDate_] = useState(
    categoryName === "notice" &&
      new Date(data.event_date).toISOString().replace(/T.*/, "T00:00:00.000Z")
  );

  const editForm = useForm({
    resolver: zodResolver(editData.FormSchema),
    defaultValues:
      categoryName === "notice"
        ? { event_date: data.event_date, content: data.content }
        : categoryName === "movie"
        ? { title: data.title, description: data.description, url: data.url }
        : categoryName === "gallery"
        ? {
            event_date: data.event_date,
            title: data.title,
            description: data.description,
            url: data.url,
          }
        : categoryName === "faq"
        ? { question: data.question, answer: data.answer }
        : "aaa",
  });

  // 投稿の更新
  const onSubmit = async () => {
    // 手動でバリデーションチェック
    const value =
      categoryName === "notice"
        ? { event_date: "", content: "" }
        : categoryName === "movie"
        ? { title: "", description: "", url: "" }
        : categoryName === "gallery"
        ? { event_date: "", title: "", description: "", url: "" }
        : categoryName === "faq"
        ? { question: "", answer: "" }
        : "";

    if (categoryName === "notice") {
      value.content = Ref.current.value;
      const modifiedDate = new Date(date);
      modifiedDate.setDate(modifiedDate.getDate() + 1);
      value.event_date = modifiedDate;
    } else if (categoryName === "movie") {
      value.title = Ref.current.value;
      value.description = Ref_second.current.value;
      value.url = Ref_third.current.value;
    } else if (categoryName === "gallery") {
      value.title = Ref.current.value;
      const modifiedDate = new Date(date);
      modifiedDate.setDate(modifiedDate.getDate() + 1);
      value.event_date = modifiedDate;
      value.description = Ref_second.current.value;
      value.url = Ref_third.current.value;
    } else if (categoryName === "faq") {
      value.question = Ref.current.value;
      value.answer = Ref_second.current.value;
    }

    try {
      await editData.updateFunc(data.id, value);
      window.location.reload();
    } catch (error) {
      toast("更新に失敗しました．");
      console.error(error);
    }
  };

  // 投稿の削除
  const onDelete = async () => {
    try {
      // if (categoryName === "notice")
      await editData.deleteFunc(data.id);
      // else if (categoryName === "faq") await editData.deleteFAQData(data.id);
      window.location.reload();
    } catch (error) {
      toast("削除に失敗しました．");
      console.error(error);
    }
  };

  if (categoryName === "notice") {
    return (
      <>
        {isEdit ? (
          <>
            <TableCell>{data.id}</TableCell>
            <Form {...editForm}>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="event_date"
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            {date ? format(date, "PPP") : <span>日を選択</span>}
                            <CalendarIcon className="ml-auto size-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(date)}
                          onSelect={setDate_}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input
                          placeholder="お知らせ内容"
                          {...field}
                          ref={Ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="flex items-center gap-3 p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <X className="size-[1.2rem] cursor-pointer" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="submit"
                  onClick={() => onSubmit()}
                >
                  <Forward className="size-[1.2rem] cursor-pointer" />
                </Button>
              </TableCell>
              {/* </form> */}
            </Form>
          </>
        ) : (
          <>
            {Object.entries(data).map(
              ([key, value]) =>
                key !== "createdAt" &&
                key !== "updatedAt" && <TableCell key={key}>{value}</TableCell>
            )}
            <TableCell className="flex items-center gap-3 p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEdit(!isEdit)}
              >
                <Pencil className="size-[1.2rem] cursor-pointer" />
              </Button>
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="size-[1.2rem] cursor-pointer" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>このお知らせを削除しますか?</DialogTitle>
                    <DialogDescription>
                      この操作は取り消せません．
                    </DialogDescription>
                    <Button
                      variant="destructive"
                      className="mt-3"
                      onClick={() => onDelete()}
                    >
                      Delete
                    </Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
          </>
        )}
      </>
    );
  } else if (categoryName === "movie") {
    return (
      <>
        {isEdit ? (
          <>
            <TableCell>{data.id}</TableCell>
            <Form {...editForm}>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input placeholder="タイトル" {...field} ref={Ref} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input
                          placeholder="映像の説明"
                          {...field}
                          ref={Ref_second}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input
                          placeholder="動画URL"
                          type="url"
                          {...field}
                          ref={Ref_third}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="flex items-center gap-3 p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <X className="size-[1.2rem] cursor-pointer" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="submit"
                  onClick={() => onSubmit()}
                >
                  <Forward className="size-[1.2rem] cursor-pointer" />
                </Button>
              </TableCell>
              {/* </form> */}
            </Form>
          </>
        ) : (
          <>
            {/* {Object.entries(data).map(
              ([key, value]) =>
                key !== "createdAt" &&
                key !== "updatedAt" && <TableCell key={key}>{value}</TableCell>
              key === "url" && <p>aaa</p>
            )} */}
            {Object.entries(data).map(([key, value]) => {
              if (key === "createdAt" || key === "updatedAt") {
                return null;
              } else if (key === "url") {
                return (
                  <TableCell key={key}>
                    <iframe
                      className="movie-iframe-rounded"
                      width="100"
                      height="56"
                      src={`${value}&controls=0&disablekb=1&loop=1&mute=1`}
                      title={value}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </TableCell>
                );
              } else {
                return <TableCell key={key}>{value}</TableCell>;
              }
            })}

            <TableCell className="flex items-center gap-3 p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEdit(!isEdit)}
              >
                <Pencil className="size-[1.2rem] cursor-pointer" />
              </Button>
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="size-[1.2rem] cursor-pointer" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>この映像投稿を削除しますか?</DialogTitle>
                    <DialogDescription>
                      この操作は取り消せません．
                    </DialogDescription>
                    <Button
                      variant="destructive"
                      className="mt-3"
                      onClick={() => onDelete()}
                    >
                      Delete
                    </Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
          </>
        )}
      </>
    );
  } else if (categoryName === "gallery") {
    return (
      <>
        {isEdit ? (
          <>
            <TableCell>{data.id}</TableCell>
            <Form {...editForm}>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input placeholder="質問内容" {...field} ref={Ref} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="answer"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input placeholder="回答" {...field} ref={Ref_second} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="flex items-center gap-3 p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <X className="size-[1.2rem] cursor-pointer" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="submit"
                  onClick={() => onSubmit()}
                >
                  <Forward className="size-[1.2rem] cursor-pointer" />
                </Button>
              </TableCell>
              {/* </form> */}
            </Form>
          </>
        ) : (
          <>
            {/* {Object.entries(data).map(
              ([key, value]) =>
                key !== "createdAt" &&
                key !== "updatedAt" && <TableCell key={key}>{value}</TableCell>
            )} */}
            {Object.entries(data).map(([key, value]) => {
              if (key === "createdAt" || key === "updatedAt") {
                return null;
              } else if (key === "url") {
                return (
                  <TableCell key={key}>
                    <Image src={`${value}`} width={100} height={45} alt="" />
                  </TableCell>
                );
              } else {
                return <TableCell key={key}>{value}</TableCell>;
              }
            })}
            <TableCell className="flex items-center gap-3 p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEdit(!isEdit)}
              >
                <Pencil className="size-[1.2rem] cursor-pointer" />
              </Button>
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="size-[1.2rem] cursor-pointer" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>この写真を削除しますか?</DialogTitle>
                    <DialogDescription>
                      この操作は取り消せません．
                    </DialogDescription>
                    <Button
                      variant="destructive"
                      className="mt-3"
                      onClick={() => onDelete()}
                    >
                      Delete
                    </Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
          </>
        )}
      </>
    );
  } else if (categoryName === "faq") {
    return (
      <>
        {isEdit ? (
          <>
            <TableCell>{data.id}</TableCell>
            <Form {...editForm}>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input placeholder="質問内容" {...field} ref={Ref} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={editForm.control}
                  name="answer"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormControl>
                        <Input placeholder="回答" {...field} ref={Ref_second} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="flex items-center gap-3 p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <X className="size-[1.2rem] cursor-pointer" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="submit"
                  onClick={() => onSubmit()}
                >
                  <Forward className="size-[1.2rem] cursor-pointer" />
                </Button>
              </TableCell>
              {/* </form> */}
            </Form>
          </>
        ) : (
          <>
            {Object.entries(data).map(
              ([key, value]) =>
                key !== "createdAt" &&
                key !== "updatedAt" && <TableCell key={key}>{value}</TableCell>
            )}
            <TableCell className="flex items-center gap-3 p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEdit(!isEdit)}
              >
                <Pencil className="size-[1.2rem] cursor-pointer" />
              </Button>
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="size-[1.2rem] cursor-pointer" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>このFAQを削除しますか?</DialogTitle>
                    <DialogDescription>
                      この操作は取り消せません．
                    </DialogDescription>
                    <Button
                      variant="destructive"
                      className="mt-3"
                      onClick={() => onDelete()}
                    >
                      Delete
                    </Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
          </>
        )}
      </>
    );
  }
};

export default DataRow;
