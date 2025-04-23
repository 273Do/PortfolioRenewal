import React from "react";

import { MyCard } from "@/features/card/components";

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
