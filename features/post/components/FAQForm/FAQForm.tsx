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

const FAQForm = () => {
  return (
    <>
      <DataTable postData={[]} />
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
          <CardDescription>質問と回答を投稿します．</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="question">Question</Label>
            <Input id="question" placeholder="質問" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="answer">Answer</Label>
            <Input id="answer" placeholder="回答" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start ">
          <Label htmlFor="password">Password</Label>
          <div className="mt-2 flex w-full flex-row gap-4">
            <Input id="password" type="password" />
            <Button>Save FAQ</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="h-4"></div>
    </>
  );
};

export default FAQForm;
