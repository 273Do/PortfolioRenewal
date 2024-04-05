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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import DataTable from "../DataTable/DataTable";

const NoticeForm = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <DataTable />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Notice</CardTitle>
          <CardDescription>お知らせや実績を投稿します．</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex w-full flex-row gap-4">
            <div className="w-44 space-y-1">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {date ? format(date, "PPP") : <span>日を選択</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="w-full space-y-1">
              <Label htmlFor="name">Notice</Label>
              <Input id="name" placeholder="お知らせ内容" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Label htmlFor="password">Password</Label>
          <div className="mt-2 flex w-full flex-row gap-4">
            <Input id="password" type="password" />
            <Button>Save Notice</Button>
          </div>
          <Label htmlFor="technology" className="mt-4">
            Technology
          </Label>
          <div className="mt-2 flex w-full flex-row gap-4">
            <Input id="technology" placeholder="技術：最大10個まで" />
            <Button>Save Technology</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default NoticeForm;
