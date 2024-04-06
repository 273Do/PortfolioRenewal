import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as PostForm from "@/features/post/types/index";

const PostTabs = () => {
  return (
    <div className="flex size-full justify-center overflow-y-scroll">
      <Tabs defaultValue="notice" className="w-[800px]">
        <TabsList className="mt-4 grid w-full grid-cols-5">
          <TabsTrigger value="notice">Notice</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="tool">Tool</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="notice">
          <PostForm.NoticeForm />
        </TabsContent>
        <TabsContent value="technology">
          <PostForm.TechnologyForm />
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
