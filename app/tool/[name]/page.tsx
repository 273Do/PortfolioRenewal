import { Three } from "@/features/tool/components/Three/Three";
import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  console.log(params.name);
  return (
    <div className="h-screen">
      <Three three_text={params.name} three_color={["#bfcde8", "#ff7eb3"]} />
    </div>
  );
};

export default page;
