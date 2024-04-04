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

const GalleryForm = () => {
  return (
    <>
      <DataTable />
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
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <Input id="date" defaultValue="date" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" className="cursor-pointer" />
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
