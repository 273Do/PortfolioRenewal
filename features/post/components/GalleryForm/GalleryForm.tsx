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
import DataTable from "../DataTable/DataTable";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const GalleryForm = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <DataTable postData={[]} />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
          <CardDescription>趣味や活動の写真を投稿します．</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Title</Label>
            <Input id="name" placeholder="写真のタイトル" />
          </div>
          <div className="flex w-full flex-row gap-4">
            <div className="w-44 space-y-1">
              <Label htmlFor="date">Date</Label>
              {/* <Input id="date" defaultValue="date" /> */}
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
              <Label htmlFor="image">Image</Label>
              <Input id="image" type="file" className="w-full cursor-pointer" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start ">
          <Label htmlFor="password">Password</Label>
          <div className="mt-2 flex w-full flex-row gap-4">
            <Input id="password" type="password" />
            <Button>Save Gallery</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default GalleryForm;
