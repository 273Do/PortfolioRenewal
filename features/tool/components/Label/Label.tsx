import React from "react";
import { Badge } from "@/components/ui/badge";

const Label = () => {
  return (
    <ul className="flex gap-2">
      <Badge>Web</Badge>
      <Badge>Frontend</Badge>
      <Badge>CL</Badge>
      <Badge>Backend</Badge>
    </ul>
  );
};

export default Label;
