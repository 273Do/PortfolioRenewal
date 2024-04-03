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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as PostForm from "@/features/post/components/index";

const PostTabs = () => {
  return (
    <div className="mx-4 my-8 flex size-full justify-center">
      <Tabs defaultValue="achievements" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="tool">Tool</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="achievements">
          <PostForm.AchievementForm />
        </TabsContent>
        <TabsContent value="gallery">
          <PostForm.GalleryForm />
        </TabsContent>
        <TabsContent value="tool">
          <PostForm.ToolForm />
        </TabsContent>
        <TabsContent value="faq">
          <PostForm.FAQForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PostTabs;
