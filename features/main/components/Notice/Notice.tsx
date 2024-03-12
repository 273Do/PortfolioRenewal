import React from "react";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `実績をここに記述するv1.2.0-beta.${a.length - i}`
);

const Notice = () => {
  return (
    <div className="p-4">
      <h4 className="mb-4 text-lg font-medium leading-none">Notice</h4>
      {tags.map((tag) => (
        <>
          <p className="mb-1 text-xs text-muted-foreground">2024/03/12</p>
          <div key={tag} className="text-sm">
            {tag}
          </div>
          <Separator className="my-2" />
        </>
      ))}
    </div>
  );
};

export default Notice;
