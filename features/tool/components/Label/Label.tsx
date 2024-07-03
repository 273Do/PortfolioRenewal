import React from "react";

import { Badge } from "@/components/ui/badge";

const Label = ({ label }: { label: string }) => {
  const labels = label.split(" ");
  return (
    <ul className="flex gap-2">
      {labels.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </ul>
  );
};

export default Label;
