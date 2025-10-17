import React from "react";

import { MyCard } from "@/features/about/components";

const page = async () => {
  return (
    <div>
      <div className="flex h-svh items-center justify-center">
        <MyCard />
      </div>
    </div>
  );
};

export default page;
