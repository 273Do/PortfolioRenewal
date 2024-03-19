import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Piano, Bike, Braces } from "lucide-react";

const Hobby = () => {
  return (
    <div className="grid size-full grid-flow-col grid-cols-3 grid-rows-1 gap-3 px-4">
      <Card>
        <CardContent className="flex flex-col items-center p-0 text-center">
          <Braces
            strokeWidth={1.5}
            className="m-4 size-[2.0rem] transition-all"
          />
          <p className="text-sm">Web Dev</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center p-0 text-center ">
          <Piano
            strokeWidth={1.5}
            className="m-4 size-[2.0rem] transition-all"
          />
          <p className="text-sm">Piano</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center p-0 text-center ">
          <Bike
            strokeWidth={1.5}
            className="m-4 size-[2.0rem] transition-all"
          />
          <p className="text-sm">Cycling</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hobby;
