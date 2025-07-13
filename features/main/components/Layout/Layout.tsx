import React from "react";

import { Card } from "@/components/ui/card";

const Layout = () => {
  return (
    <div className="pointer-events-none fixed left-1/2 top-1/2 z-[150] size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[52px]">
      <div className="flex h-full items-center justify-center">
        <Card className="flex size-full flex-col bg-transparent" />
      </div>
    </div>
  );
};

export default Layout;
