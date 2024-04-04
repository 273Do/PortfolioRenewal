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
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    id: 1,
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    id: 3,
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: 4,
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    id: 5,
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    id: 6,
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: 7,
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const DataTable = () => {
  return (
    <>
      <Card className="h-[320px] overflow-scroll">
        <CardContent>
          <Table>
            <TableCaption> {invoices.length} data</TableCaption>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
                {Object.keys(invoices[0]).map((head: string) => (
                  <>
                    <TableHead>{head}</TableHead>
                  </>
                ))}
                <TableHead>Edit</TableHead>
                {/* <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))} */}
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  {Object.values(invoice).map((value: string | number) => (
                    <TableCell key={value}>{value}</TableCell>
                  ))}
                  <div className="flex items-center gap-3 p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => console.log("click edit")}
                    >
                      <Pencil className="size-[1.2rem] cursor-pointer" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => console.log("click delete")}
                    >
                      <Trash2 className="size-[1.2rem] cursor-pointer" />
                    </Button>
                  </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default DataTable;
