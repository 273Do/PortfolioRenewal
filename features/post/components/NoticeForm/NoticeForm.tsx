import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DataTable from "../DataTable/DataTable";

const NoticeForm = () => {
  return (
    <>
      <DataTable />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Notice</CardTitle>
          <CardDescription>お知らせや実績を投稿します．</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Notice</Label>
            <Input id="name" placeholder="お知らせ内容" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <Input id="date" defaultValue="date" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start ">
          <Label htmlFor="password">Password</Label>
          <div className="mt-2 flex w-full flex-row gap-4">
            <Input id="password" type="password" />
            <Button>Save Notice</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default NoticeForm;
