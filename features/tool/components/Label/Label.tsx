import React from "react";
import { Badge } from "@/components/ui/badge";

const Label = ({ label }: { label: string }) => {
  return (
    <ul className="flex gap-2">
      <Badge>{label}</Badge>
      {/* 空白で区切る */}
      {/* <Badge>Frontend</Badge>
      <Badge>CL</Badge>
      <Badge>Backend</Badge> */}
    </ul>
  );
};

export default Label;
