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
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noticeFormSchema } from "../../types/validation";

const DataRow = ({ data, categoryData }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { categoryName, updateNoticeData, deleteNoticeData } = categoryData;
  const [date, setDate_] = useState(
    new Date(data.event_date).toISOString().replace(/T.*/, "T00:00:00.000Z")
  );

  const Ref = useRef();

  // const formValues = { content: "", event_date: "" };
  // if (categoryName === "notice")
  //   formValues = { content: data.content, event_date: data.event_date };

  // useEffect(() => {
  //   formValues = { content: data.content, event_date: data.event_date };
  // }, [categoryName]);

  // const editForm = useForm({
  //   resolver: zodResolver(noticeFormSchema),
  //   defaultValues: { content: "", event_date: "" },
  // });

  // useEffect(() => {
  //   if (categoryName === "notice")
  //     setFormValues(
  //       (formValues.content = data.content),
  //       (formValues.event_date = data.event_date)
  //     );
  // }, []);

  const editForm = useForm({
    resolver: zodResolver(categoryName === "notice" ? noticeFormSchema : {}),
    defaultValues:
      categoryName === "notice"
        ? { content: data.content, event_date: data.event_date }
        : {},
  });

  // async function onSubmit(value) {
  //   try {
  //     // なぜか曜日が1日ズレるので修正
  //     const modifiedDate = new Date(date);
  //     modifiedDate.setDate(modifiedDate.getDate() + 1);
  //     value.event_date = modifiedDate;
  //     console.log(value);
  //     // await updateNoticeData(data.id, value);
  //     setIsEdit(!isEdit);
  //     // window.location.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // お知らせの更新
  const onSubmit = async () => {
    // 手動でバリデーションチェック
    const value = { event_date: "", content: "" };
    value.content = Ref.current.value;
    const modifiedDate = new Date(date);
    modifiedDate.setDate(modifiedDate.getDate() + 1);
    value.event_date = modifiedDate;

    try {
      await updateNoticeData(data.id, value);
      // setIsEdit(!isEdit);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    try {
      await deleteNoticeData(data.id);
      window.location.reload();
    } catch (error) {
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
              {/* <form onSubmit={editForm.handleSubmit(onSubmit)}> */}
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
              {/* <Button variant="ghost" size="icon" onClick={() => onDelete()}>
                <Trash2 className="size-[1.2rem] cursor-pointer" />
              </Button> */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="size-[1.2rem] cursor-pointer" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>この投稿を削除しますか?</DialogTitle>
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
                  {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter> */}
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
