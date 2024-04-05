"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataTable = ({ postData }) => {
  return (
    <>
      <Card className="h-[320px] overflow-scroll">
        {postData.length === 0 ? (
          <CardContent className="flex size-full items-center justify-center">
            <p>loading...</p>
          </CardContent>
        ) : (
          <CardContent>
            <Table>
              <TableCaption> {postData.length} data</TableCaption>
              <TableHeader>
                <TableRow>
                  {Object.keys(postData[0]).map(
                    (head) =>
                      head !== "createdAt" &&
                      head !== "updatedAt" && (
                        <TableHead key={head}>{head}</TableHead>
                      )
                  )}

                  <TableHead>Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {postData.map((data) => (
                <TableRow key={data.id}>
                  {Object.values(data).map((value) => (
                    <TableCell key={value}>{value}</TableCell>
                  ))} */}
                {postData.map((data) => (
                  <TableRow key={data.id}>
                    {Object.entries(data).map(
                      ([key, value]) =>
                        key !== "createdAt" &&
                        key !== "updatedAt" && (
                          <TableCell key={key}>{value}</TableCell>
                        )
                    )}

                    {/* ))} */}
                    <span className="flex items-center gap-3 p-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => console.log(`click edit: ${data.id}`)}
                      >
                        <Pencil className="size-[1.2rem] cursor-pointer" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => console.log(`click delete: ${data.id}`)}
                      >
                        <Trash2 className="size-[1.2rem] cursor-pointer" />
                      </Button>
                    </span>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>
    </>
  );
};

export default DataTable;
