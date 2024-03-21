import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Film, Move3D } from "lucide-react";
import { SiBlender } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Software = () => {
  return (
    <div className="grid size-full grid-flow-col grid-cols-2 grid-rows-1 gap-4 px-4">
      {/* <Card className="p-2">
        <CardContent className="flex flex-col items-center p-0 text-center">
          <Film
            strokeWidth={1.5}
            className="m-4 size-[2.0rem] transition-all"
          />
          <p className="text-sm">AviUtl</p>
        </CardContent>
      </Card> */}

      <Link
        href="https://spring-fragrance.mints.ne.jp/aviutl/"
        target="_blank"
        rel="noopener noreferrer"
        className="size-full p-2"
      >
        <Button className="size-full" variant="outline">
          <div className="flex flex-col items-center p-0 text-center">
            <Film
              strokeWidth={1.5}
              className="m-4 mt-1 size-[2.0rem] transition-all"
            />
            <p className="text-sm">AviUtl</p>
          </div>
        </Button>
      </Link>
      <Link
        href="https://www.blender.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="size-full p-2"
      >
        <Button className="size-full" variant="outline">
          <div className="flex flex-col items-center p-0 text-center">
            <SiBlender
              strokeWidth={1.5}
              className="m-4 mt-1 size-[2.0rem] transition-all"
            />
            <p className="text-sm">Blender</p>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default Software;
