"use client";
import React from "react";
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
import DataRow from "../DataRow/DataRow";

const DataTable = ({ postData, categoryData }) => {
  return (
    <>
      <Card className="h-[320px] w-full overflow-scroll">
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
                  <TableHead>edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {postData.map((data) => (
                  <TableRow key={data.id}>
                    <DataRow data={data} categoryData={categoryData} />
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
