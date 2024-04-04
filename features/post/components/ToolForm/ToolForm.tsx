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
import { Textarea } from "@/components/ui/textarea";
import DataTable from "../DataTable/DataTable";

const ToolForm = () => {
  return (
    <>
      <DataTable />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Tool</CardTitle>
          <CardDescription>ツールを投稿します．</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="tool_name">Tool Name</Label>
            <Input id="tool_name" placeholder="ツール名" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="genre">Genre</Label>
            <Input id="genre" placeholder="ジャンル" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="color">Color</Label>
            <Input id="color" placeholder="色を指定" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="説明" id="description" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="detail">Detail</Label>
            <Textarea placeholder="背景" id="detail" />
            <Textarea placeholder="工夫" id="detail" />
            <Textarea placeholder="課題" id="detail" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="link">URL</Label>
            <Input placeholder="リンク" id="link" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start ">
          <Label htmlFor="password">Password</Label>
          <div className="mt-2 flex w-full flex-row gap-4">
            <Input id="password" type="password" />
            <Button>Save Tool</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default ToolForm;
