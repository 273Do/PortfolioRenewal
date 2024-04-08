"use client";
import React, { useEffect, useState } from "react";
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

const DataRow = ({ data, categoryData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { categoryName, form, updateFunc, deleteFunc } = categoryData;
  const [date, setDate] = useState(data.event_date);

  return (
    <>
      {isEdit ? (
        // <div className="flex items-center">
        <>
          {categoryName === "notice" && (
            <>
              <TableCell>{data.id}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[215px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 size-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      defaultValue={data.event_date}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>
                <Input placeholder="お知らせ内容" defaultValue={data.content} />
              </TableCell>
            </>
          )}
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
              onClick={() => console.log(`click delete: ${data.id}`)}
            >
              <Forward className="size-[1.2rem] cursor-pointer" />
            </Button>
          </TableCell>
        </>
      ) : (
        // </div>
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => console.log(`click delete: ${data.id}`)}
            >
              <Trash2 className="size-[1.2rem] cursor-pointer" />
            </Button>
          </TableCell>
        </>
      )}
    </>
  );
};

export default DataRow;
