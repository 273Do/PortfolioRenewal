import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import NFImg from "@/public/GitHub NotFound.png";

const notFound = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="size-full p-0">
              <div className="flex h-full flex-col items-center justify-center">
                <Image
                  src={NFImg}
                  width={900}
                  height={900}
                  alt="myImg"
                  className="pointer-events-none rounded-full"
                />
                <p className="mt-10 text-muted-foreground">
                  illustration by
                  <Link
                    href="https://twitter.com/sawaratsuki1004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-primary "
                  >
                    @sawaratsuki1004
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default notFound;
